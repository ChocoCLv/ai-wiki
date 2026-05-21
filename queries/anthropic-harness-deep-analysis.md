     1|---
     2|title: Anthropic Harness Engineering — 深度分析
     3|created: 2026-05-21
     4|updated: 2026-05-21
     5|type: query
     6|tags: [architecture, research, deployment, training, comparison, opinion]
     7|sources:
     8|  - raw/articles/anthropic-effective-harnesses.md
     9|  - raw/articles/anthropic-harness-design.md
    10|---
    11|
    12|# Anthropic Harness Engineering — 深度分析
    13|
    14|> 基于两篇博客的深入拆解：
    15|> - [Effective Harnesses for Long-Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) (2026-05-14)
    16|> - [Harness Design for Long-Running Apps](https://www.anthropic.com/engineering/harness-design-long-running-apps) (2026-05-21)
    17|
    18|---
    19|
    20|## 一、两篇文章的关系
    21|
    22|这两篇是**姊妹篇**，同一个人（同一作者）的连续工作：
    23|
    24|| 篇 | 日期 | 核心问题 | 方法 |
    25||---|------|---------|------|
    26|| 第一篇 | 05-14 | Agent 跨 session 保持进度 | Initializer + 增量 Coding |
    27|| 第二篇 | 05-21 | 前端设计质量 + 复杂应用完整性 | GAN 启发：Generator-Evaluator 循环 |
    28|
    29|**演进关系**：第一篇建立基础 harness（初始器+增量模式）→ 第二篇在此基础上加入三 agent 系统和 GAN 式质量闭环。
    30|
    31|---
    32|
    33|## 二、第一篇深度拆解：Effective Harnesses
    34|
    35|### 2.1 核心问题
    36|
    37|> Agent 在多 context window 间持续工作数小时甚至数天时，如何保持一致的进度？
    38|
    39|这是一个 **state persistence** 问题。注意不是多 agent 协作，而是**同一个任务跨越多个 session**——每个 session 独立的 context window，没有长期记忆。
    40|
    41|### 2.2 两阶段架构详解
    42|
    43|#### Phase 1: Initializer Agent（初始器）
    44|
    45|这不是一个普通的 prompt——它是一个**环境搭建器**。产出四样东西：
    46|
    47|| 工件 | 用途 | 关键设计 |
    48||------|------|----------|
    49|| **plan.sh** | 执行计划脚本 | 可重复执行的构建流程 |
    50|| **claude-progress.txt** | 进度日志 | 跨 session 的状态持久化 |
    51|| **git commit** | 基线 | 后续每个增量都是一个新 commit |
    52|| **feature list** | 范围定义 | 200+ 项，全部标记为 "failing" |
    53|
    54|**关键设计决策：200+ feature list**
    55|
    56|这是解决「agent 一次做完然后宣布成功」的核心手段。普通 prompt → agent 做 5-10 个功能就觉得完成了。200 项硬约束让 agent 认清任务的真实规模。
    57|
    58|> 在 claude.ai 克隆的例子中，feature 像这样：
    59|> - "用户打开新聊天，输入查询，按回车，看到 AI 回复"
    60|> - "对话历史加载"
    61|> - "流式输出"
    62|> - ...
    63|
    64|每个都极度细化，不留模糊空间。
    65|
    66|#### Phase 2: Coding Agent（编码 agent）
    67|
    68|每个 session 的流程：
    69|
    70|```
    71|1. ls 查看目录 → 了解当前工作区
    72|2. git log + claude-progress.txt → 了解状态
    73|3. 读 feature list → 选最高优先级未完成的
    74|4. 实施一个 feature
    75|5. 启动 dev server → 跑 E2E 测试
    76|6. git commit + 更新 progress
    77|```
    78|
    79|核心原则：**每次只做一个 feature**。这个"增量原则"被证明是防止 agent 做太多的关键。
    80|
    81|### 2.3 三个失败模式及其解决方案
    82|
    83|| 失败模式 | 表现 | 根因 | 解决方案 |
    84||----------|------|------|----------|
    85|| **One-shotting** | Agent 一次做完一个粗糙版本然后宣布成功 | context window 内模型对"完成"的定义太宽松 | 200+ feature list + 每次只做一个 |
    86|| **False completion** | Agent 看到已有进展就宣布工作完成 | 新 session 缺少上下文，误判进度 | progress.txt + git log 作为客观状态 |
    87|| **Untested code** | Agent 标记 feature 为完成但没有充分测试 | 模型不主动验证自己的输出 | Puppeteer MCP + 强制 E2E 测试 |
    88|
    89|### 2.4 关键洞见：测试的强制化
    90|
    91|原文明确说到：
    92|
    93|> Claude mostly did well at verifying features end-to-end **once explicitly prompted** to use browser automation tools
    94|
    95|这意味着模型**不会主动测试**——需要 harness 层强制要求。而且测试必须是端到端的用户视角，不是单元测试。
    96|
    97|### 2.5 遗留问题（仍然没有解决）
    98|
    99|- **Vision 局限** — Claude 的视觉能力不足以识别所有 UI bug
   100|- **Browser automation 局限** — Puppeteer 看不到 browser-native alert modals
   101|- **End-of-session 状态** — agent 可能在未记录进度的状态下结束
   102|
   103|这些是**模型能力和工具能力的限制**，不是 harness 设计能解决的。
   104|
   105|---
   106|
   107|## 三、第二篇深度拆解：Harness Design for Long-Running Apps
   108|
   109|### 3.1 核心问题
   110|
   111|两个交织的问题：
   112|1. **主观审美** — 让 Claude 产出高质量前端设计（不是"能用"，而是"好看"）
   113|2. **客观正确性** — 让 Claude 完整构建复杂应用（所有功能都 work）
   114|
   115|这两个问题看起来不同，但作者发现**解法是同一个**。
   116|
   117|### 3.2 GAN 启发式设计
   118|
   119|这是全文最有创意的部分。作者从 GAN（生成对抗网络）获得灵感：
   120|
   121|**GAN 的原始版本**：
   122|- Generator → 生成假数据
   123|- Discriminator → 判别真假
   124|- 两者对抗训练 → 生成质量越来越好
   125|
   126|**作者的映射**：
   127|- Generator → 写代码的 agent
   128|- Evaluator → 评审质量的 agent
   129|- 迭代对抗 → 每次 evaluator 发现不足，generator 改进
   130|
   131|### 3.3 Evaluator 的四维评分体系
   132|
   133|这是枯燥但极其重要的工作——把"好不好看"这种主观判断转化为可评分的标准：
   134|
   135|| 维度 | 问什么 | 典型失败 |
   136||------|--------|----------|
   137|| **设计感** | 是否像一个连贯的整体 | 颜色、排版、布局各自为政 |
   138|| **原创性** | 是定制还是模板 | "紫色渐变 + 白色卡片" 这种 AI 味 |
   139|| **技术执行** | 排版层次、间距、色彩和谐、对比度 | 基础崩溃 |
   140|| **可用性** | 用户能理解并完成任务吗 | 找不到操作入口 |
   141|
   142|**校准方法**：
   143|- 用 few-shot 例子 + 详细分数分解
   144|- 确保 evaluator 的评判与人类设计偏好一致
   145|- 减少跨迭代的分数漂移
   146|
   147|### 3.4 三 Agent 架构
   148|
   149|```
   150|                    ┌─────────────────┐
   151|                    │  Product Owner  │
   152|                    │     Agent       │
   153|                    └────────┬────────┘
   154|                             │ 详细 spec (含 visual design language)
   155|                             ▼
   156|                    ┌─────────────────┐
   157|                    │    Generator    │◄──── Sprint Contract
   158|                    │     Agent       │      (实现细节 + 可测试行为)
   159|                    └────────┬────────┘
   160|                             │ 输出代码
   161|                             ▼
   162|                    ┌─────────────────┐
   163|                    │    Evaluator    │
   164|                    │     Agent       │
   165|                    └────────┬────────┘
   166|                             │ 评分 + 反馈
   167|                             ▼
   168|                      回到 Generator
   169|                      (GAN 循环)
   170|```
   171|
   172|### 3.5 实验对比：Solo vs 三 Agent
   173|
   174|**任务**: 构建一个 retro video game maker（2D 复古游戏制作器）
   175|
   176|| 维度 | Solo Agent (~$10) | 三 Agent Harness (~$203) |
   177||------|-------------------|--------------------------|
   178|| 成本 | 基准 | 20x 成本 |
   179|| 编辑器 | 简陋的功能面板 | 丰富的工具面板、颜色选择器、缩放控制 |
   180|| 设计语言 | 无，默认样式 | visual design language 由 PO agent 定义 |
   181|| Sprite Editor | 基础形状绘制 | 完整调色板、图层管理 |
   182|| 测试机制 | 无 | 每个 sprint 有 contract + 可测试行为定义 |
   183|| 整体感受 | "能运行的最小版本" | "接近交付质量的完整应用" |
   184|
   185|**关键差距来源**：
   186|1. PO agent 生成了 **visual design language** → Generator 读后作为 spec 的一部分
   187|2. **Sprint contract** 定义了实现细节 + 可验证的行为 → 避免了模糊交付
   188|3. **Evaluator 循环** 强迫迭代改进 → 不是一次通过
   189|
   190|### 3.6 迭代模式观察
   191|
   192|> 一些生成逐步优化，另一些在迭代间产生急剧的美学转向
   193|
   194|这说明 GAN 式迭代并不是均匀改善——有时候 Agent 会"换思路"而不是"改进现有方案"。这是 GAN 训练中常见的 mode collapse 现象的对等物。
   195|
   196|### 3.7 与第一篇的关系：架构演进
   197|
   198|```
   199|第一篇：         Initializer → Coding Agent (增量)
   200|                   │
   201|                   ▼
   202|第二篇：   PO Agent → Generator → Evaluator (循环)
   203|            (spec)      (code)     (评分)
   204|                   │
   205|                   ▼
   206|        等价于 Initializer 升级为 PO Agent
   207|                Coding Agent 升级为 Generator + Evaluator
   208|```
   209|
   210|---
   211|
   212|## 四、综合评估
   213|
   214|### 4.1 设计的精妙之处
   215|
   216|1. **增量原则** — 一次只做一个 feature，防止 agent 过度覆盖
   217|2. **外部验证** — 不信任模型自评，强制 E2E 测试或 evaluator 评分
   218|3. **状态持久化** — progress.txt + git log 作为客观状态，消除 model hallucination 对进度的误判
   219|4. **GAN 循环** — 把质量提升从"一次通过"变成"迭代逼近"
   220|
   221|### 4.2 明显局限
   222|
   223|| 局限 | 影响 | 是否能解决 |
   224||------|------|-----------|
   225|| **20x 成本** | 三 agent 模式成本极高，只适合高价值任务 | 模型效率提升后可能降低 |
   226|| **Vision 限制** | Claude 看不到某些 UI 元素 | 模型能力问题 |
   227|| **工具限制** | Puppeteer 不完美 | MCP 生态完善后可改善 |
   228|| **只有 Opus 4.5** | 实验仅用了 Opus 4.5 | 新模型可能表现不同 |
   229|| **前端设计为主** | 实验场景偏前端 | 后端/系统编程可能不同 |
   230|
   231|### 4.3 与 Cursor 的对比
   232|
   233|| 维度 | Anthropic | Cursor |
   234||------|-----------|--------|
   235|| **核心哲学** | 多 agent 分工 + 迭代改进 | Software Factory + data-driven |
   236|| **质量保证** | Evaluator agent 主观评分 | SWE-bench + Online test + Telemetry |
   237|| **多 session** | Initializer + 增量 Coding | 递归 Planner + Worker |
   238|| **成本态度** | 接受 20x 成本换质量 | 强调效率，错误率降 10x |
   239|| **模型策略** | 只用 Claude，深度定制 | 多模型切换，按需选最优 |
   240|| **发布模式** | 论文式博客 | 产品渐进式（部分功能已开放） |
   241|
   242|### 4.4 对 Harness 工程的启示
   243|
   244|1. **Harness 设计的核心矛盾是信任 vs 成本**
   245|   - 不信任模型 → 多 agent 验证 → 成本高
   246|   - 信任模型 → 效率高 → 容易出质量问题
   247|   - 平衡点取决于任务类型
   248|
   249|2. **状态管理是关键瓶颈**
   250|   - Agent 天然无状态
   251|   - Git + progress file 是最简单的持久化方案
   252|   - Anthropic 和 Cursor 最终都选择了类似的方案
   253|
   254|3. **测试必须外置**
   255|   - 模型不能自己做 QA
   256|   - E2E 测试 > 单元测试
   257|   - Screenshot/截图验证是新的测试维度
   258|
   259|4. **迭代优于一次通过**
   260|   - GAN 式循环比 one-shot 更可靠
   261|   - 代价是时间和成本
   262|   - 对于高质量要求的任务，这是必要的
   263|
   264|---
   265|
   266|## 相关链接
   267|- [agent-harness-engineering](../concepts/agent-harness-engineering.md)
   268|- [self-driving-codebases](../concepts/self-driving-codebases.md)
   269|- [cursor-agent-harness](../entities/cursor.md)
   270|- [multi-agent-architectures](../concepts/multi-agent-architectures.md)
   271|