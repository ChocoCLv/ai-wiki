     1|---
     2|title: Cursor Agent Harness — 深度分析
     3|created: 2026-05-21
     4|updated: 2026-05-21
     5|type: query
     6|tags: [architecture, research, deployment, tool, comparison, opinion]
     7|sources:
     8|  - raw/articles/cursor-continually-improving-harness.md
     9|  - raw/articles/cursor-self-driving-codebases.md
    10|---
    11|
    12|# Cursor Agent Harness — 深度分析
    13|
    14|> 原文：[Continually Improving Our Agent Harness](https://www.cursor.com/blog/continually-improving-agent-harness) (2026-04-30)
    15|
    16|---
    17|
    18|## 一、核心哲学
    19|
    20|> "We approach building the Cursor agent harness the way we'd approach any ambitious software product."
    21|
    22|Cursor 把 harness 当成**产品来打造**，而不是"工程基础设施"。这句话是整个文章的灵魂。
    23|
    24|### vision-driven + data-driven 双轮驱动
    25|
    26|```
    27|Vision → 假设 → 实验 → 测量 → 迭代
    28|   ↑                        │
    29|   └────── 数据反馈 ────────┘
    30|```
    31|
    32|**关键**：这个循环依赖**正确的在线和离线仪表化**。如果测不准，就连"这个改动到底是变好还是变坏"都不知道。
    33|
    34|### 渐进式改进 > 突破性创新
    35|
    36|> "Occasionally we discover step-change improvements. More often, though, improving the harness is a matter of obsessively stacking small optimizations."
    37|
    38|这是一条非常重要的工程哲学——不是每个改动都是 breakthrough，大多数时候是**堆叠几十个小优化**，每个贡献一点点。
    39|
    40|---
    41|
    42|## 二、Context 管理的进化史
    43|
    44|### 2024 年底：栅栏式管理
    45|
    46|当时模型能力弱，Cursor 的做法是**建护栏**：
    47|
    48|| 防护措施 | 目的 |
    49||----------|------|
    50|| 每次编辑后暴露 lint 和类型错误 | 让 agent 看到编译错误 |
    51|| 重写文件读取（当 agent 请求行数太少时） | 确保 agent 有足够上下文 |
    52|| 限制每次工具调用的最大数量 | 防止 agent 跑偏 |
    53|| 注入大量静态 context | 保证 agent 有足够信息 |
    54|
    55|### 现在：动态获取
    56|
    57|模型变强了，Cursor 的策略也变了：
    58|
    59|- **拆除护栏**（"knocking down guardrails"）
    60|- 从"我喂给你"变为**"你自己去拿"**
    61|- Agent 在工作过程中**按需动态拉取 context**
    62|
    63|这一转变很有意思：**模型能力提升后，harness 的角色从"监护者"变成了"赋能者"**。
    64|
    65|---
    66|
    67|## 三、测量体系：三层质量感知
    68|
    69|Cursor 构建了一套**分层测量体系**，每一层解决不同的问题：
    70|
    71|### 第一层：离线基准测试 (SWE-bench)
    72|
    73|```
    74|功能：快速、标准化的质量读数
    75|用途：跨时间对比
    76|局限：只能近似真实使用场景
    77|```
    78|
    79|Cursor 明确说：**"Even the best benchmarks only approximate real usage."** 所以不能只靠它。
    80|
    81|### 第二层：在线 A/B 测试
    82|
    83|把两个或多个 harness 变体部署到真实用户中，A/B 对比。测量指标包括：
    84|
    85|| 直接指标 | 模糊指标 |
    86||----------|----------|
    87|| 延迟 | **Keep Rate**（代码留存率） |
    88|| Token 效率 | **用户满意度**（用 LLM 分析用户回复） |
    89|| 工具调用次数 | |
    90|| 缓存命中率 | |
    91|
    92|#### 两个最有创意的指标
    93|
    94|**1. Keep Rate（代码留存率）**
    95|
    96|> Agent 生成的代码中，多少在固定时间后仍然保留在用户的代码库中？
    97|
    98|这是真正衡量 agent 质量的信号——用户如果手动修改了 agent 的代码，说明输出的质量不够高。
    99|
   100|**2. 用户满意度（LLM 分析用户回复）**
   101|
   102|> 用一个语言模型读取用户对 agent 初次输出的回复，语义判断用户是否满意。
   103|
   104|具体的信号：
   105|- **用户继续做下一个 feature** → 满意的强信号
   106|- **用户贴了一个 stack trace** → 不满意的可靠信号
   107|
   108|### 第三层：Telemetry（遥测）
   109|
   110|工具调用频率、错误率等**代理指标**。这些不直接衡量 agent "做得好不好"，但能发现大规模问题。
   111|
   112|> "它们像指示器，可以指向一个更广泛的问题。"
   113|
   114|### 📊 三层体系的定位
   115|
   116|```
   117|SWE-bench:    我能比较不同的 harness 版本吗？  →  标准化，低噪声
   118|Online test:  用户真的觉得好用吗？            →  贴近真实，高价值
   119|Telemetry:    大规模下有没有问题在冒头？      →  覆盖面广，可报警
   120|```
   121|
   122|---
   123|
   124|## 四、Bug 分类与治理工程体系
   125|
   126|### 4.1 错误分类
   127|
   128|Cursor 把所有错误分成两类：
   129|
   130|| 类别 | 定义 | 例子 | 处理方式 |
   131||------|------|------|----------|
   132|| **Unknown errors** | harness 本身的 bug | 工具实现有缺陷、参数处理错误 | 立即修复，视为 bug |
   133|| **Expected errors** | 模型的正常行为 | 模型提议了错误编辑、读不存在的文件 | 按原因分类，设基线报警 |
   134|
   135|### 4.2 分层报警
   136|
   137|```
   138|Unknown errors → 超过 fixed threshold → 立即报警（一定是 bug）
   139|Expected errors → 显著超过 baseline → 异常检测报警
   140|                   （按 tool × model 分别计算 baseline）
   141|```
   142|
   143|这里的关键设计是 **per-tool, per-model 基线**。不同工具、不同模型的预期错误率不同——一个 grep 搜索超时在小型代码库是 bug，在 monorepo 中可能是预期行为。
   144|
   145|### 4.3 告警阈值示例
   146|
   147|> 一个 grep 搜索超时：可能是工具的性能问题，也可能是代码库太大、模型生成了低效的查询。
   148|
   149|这正是"expected error 也可能是 harness bug"的边界情况。
   150|
   151|### 4.4 自我修复：Agent 来修 Harness
   152|
   153|这是整篇文章最惊艳的部分：
   154|
   155|> "Equipped with a skill that teaches the model how to search through our logs, surface issues that are new or recently spiked, and create or update tickets in a backlog with an investigation. We lean heavily on Cloud Agents to kick off fixes for many issues at once."
   156|
   157|**Cursor 训练了一个 agent，专门用来修 harness 本身的 bug。** 这个 agent 会：
   158|1. 搜索日志
   159|2. 发现新问题或激增的问题
   160|3. 创建/更新工单（附带调查）
   161|4. 用 Cloud Agents 自动触发修复
   162|
   163|### 4.5 成果
   164|
   165|> "Over the course of a focused sprint earlier this year, we drove unexpected tool call errors down by an order of magnitude."
   166|
   167|**错误率降低了一个数量级。** 这验证了整个软件工厂理念的有效性。
   168|
   169|---
   170|
   171|## 五、模型特化：Harness 的深度定制
   172|
   173|### 5.1 模型间差异
   174|
   175|| 模型族 | 行为特征 | Harness 策略 |
   176||--------|----------|-------------|
   177|| **OpenAI** | 更字面、精确遵循指令 | 更直接的 prompt，精确的工具描述 |
   178|| **Claude** | 更直觉、灵活，对不精确指令容忍度更高 | 更宽松的 prompt，更多自主判断空间 |
   179|
   180|### 5.2 跨模型切换（最棘手的问题）
   181|
   182|当用户在对话中途切换模型时：
   183|
   184|```
   185|问题：不同模型有不同行为、prompt、tool 形状
   186|     新模型要应用于由旧模型产生的对话历史
   187|     对话历史对它是"out of distribution"的
   188|```
   189|
   190|Cursor 的解法：
   191|1. Cursor 自动切换到对应的 harness（不同模型有不同 prompt/tool 集）
   192|2. 添加 **custom instructions** 告诉模型："你正在接替另一个模型的工作"
   193|3. 引导模型**忽略**历史中不属于自己 tool set 的工具调用
   194|
   195|### 5.3 新模型的接入流程
   196|
   197|```
   198|拿到新模型 → 从最接近的现有模型开始
   199|     ↓
   200|跑离线 eval → 发现模型困惑的地方
   201|     ↓
   202|团队成员手动使用 → 暴露问题
   203|     ↓
   204|调整 harness
   205|     ↓
   206|循环直到 model-harness 组合令人满意
   207|```
   208|
   209|强调：**weeks of customization**——不是几天，是数周的定制。
   210|
   211|---
   212|
   213|## 六、"软件工厂"理念全貌
   214|
   215|把前面的所有元素整合起来：
   216|
   217|```
   218|┌────────────────────────────────────────────────┐
   219|│               SOFTWARE FACTORY                  │
   220|│                                                  │
   221|│  离线 evals ← → 在线 A/B 测试 ← → Telemetry    │
   222|│        ↓              ↓              ↓          │
   223|│   质量信号层      用户信号层     异常检测层      │
   224|│        ↓              ↓              ↓          │
   225|│   ┌──────────────────────────────────────┐      │
   226|│   │        Agent 自动修复 Harness        │      │
   227|│   │    (搜索日志 → 发现 → 工单 → 修复)   │      │
   228|│   └──────────────────────────────────────┘      │
   229|│        ↑              ↑              ↑          │
   230|│   Unknown errors  Expected errors  Anomalies    │
   231|│                                                  │
   232|│           错误率 ↓ 一个数量级                     │
   233|└──────────────────────────────────────────────────┘
   234|```
   235|
   236|---
   237|
   238|## 七、与 Anthropic 的深度对比
   239|
   240|### 7.1 哲学差异
   241|
   242|| 维度 | Cursor | Anthropic |
   243||------|--------|-----------|
   244|| **本质** | 把 harness 当产品做 | 把 harness 当研究做 |
   245|| **改进方式** | data-driven, 堆叠小优化 | architecture-driven, 设计新架构 |
   246|| **质量测量** | 多层信号（keep rate, 满意度） | 人工设计评分体系（四维 + evaluator agent） |
   247|| **成本态度** | 追求效率（错误率 10x ↓, 成本可控） | 接受 20x 成本换质量 |
   248|| **模型策略** | 多模型切换，按需选最优 | 只用 Claude，深度定制 |
   249|| **代码风格** | "它决定了 harness 好坏，我就用量化信号" | "它好不好看，我写 4 个维度打分" |
   250|
   251|### 7.2 最根本的区别
   252|
   253|**Cursor 的核心问题**："怎么知道我这个改动让 harness 变好了还是变坏了？"
   254|→ 解决方案：**测量层**
   255|
   256|**Anthropic 的核心问题**："怎么设计一个更好的架构让 agent 产出更好？"
   257|→ 解决方案：**多 agent 架构**
   258|
   259|Cursor 相信**如果你能测量它，你就能改进它**。
   260|Anthropic 相信**如果你能设计它，你就能构建它**。
   261|
   262|### 7.3 互补关系
   263|
   264|```
   265|Cursor 的测量体系      +    Anthropic 的架构创新
   266|    （知道好不好）              （知道怎么更好）
   267|```
   268|
   269|两者结合才是最强大的——用 Anthropic 的 GAN 式架构生成代码，用 Cursor 的 Keep Rate + 满意度信号来衡量效果。
   270|
   271|---
   272|
   273|## 八、Cursor vs Cursor 自身：两篇博客的演进关系
   274|
   275|| 博客 | 日期 | 焦点 |
   276||------|------|------|
   277|| Self-Driving Codebases | 02-05 | **多 agent 架构研究**（递归 Planner）|
   278|| Continually Improving Harness | 04-30 | **Harness 工程体系**（测量 + 修复）|
   279|
   280|两篇的关系：
   281|- 第一篇是**研究结果**——展示了多 agent 架构可以做到什么
   282|- 第二篇是**工程方法**——如何系统化地让 harness 越来越好
   283|
   284|没有第一套测量体系，第一篇的发现就不可重复。没有第一篇的架构探索，第二篇就没有改进目标。
   285|
   286|---
   287|
   288|## 九、关键启示
   289|
   290|1. **Harness 首先是产品** — 不是基础设施，而是直接影响用户体验的产品
   291|2. **测量先于优化** — 没有好的测量，你连自己在变好还是变坏都不知道
   292|3. **Agent 可以修自己** — 用 agent 来修 harness 本身是一个递归的 meta-pattern
   293|4. **不同模型需要不同的 harness** — 没有 one-size-fits-all 的 prompt 和 tool 设计
   294|5. **Context 管理在持续演进** — 从"我喂给你"到"你自己去拿"，反映模型能力的提升
   295|6. **错误分类是启动自动化修复的前提** — 必须先知道哪些是 harness 的 bug、哪些是模型的正常行为
   296|7. **跨模型切换是前沿难题** — 对话历史的 out-of-distribution 问题还没有根本解决
   297|
   298|---
   299|
   300|## 相关链接
   301|- [self-driving-codebases](../concepts/self-driving-codebases.md)
   302|- [agent-harness-engineering](../concepts/agent-harness-engineering.md)
   303|- [anthropic-harness-deep-analysis](../queries/anthropic-harness-deep-analysis.md)
   304|- [multi-agent-architectures](../concepts/multi-agent-architectures.md)
   305|