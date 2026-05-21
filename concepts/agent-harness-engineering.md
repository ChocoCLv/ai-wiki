     1|---
     2|title: Agent Harness Engineering — 综合对比
     3|created: 2026-05-21
     4|updated: 2026-05-21
     5|type: concept
     6|tags: [architecture, research, deployment, training, comparison]
     7|sources:
     8|  - raw/articles/cursor-continually-improving-harness.md
     9|  - raw/articles/anthropic-effective-harnesses.md
    10|  - raw/articles/anthropic-harness-design.md
    11|  - raw/articles/cursor-self-driving-codebases.md
    12|---
    13|
    14|# Agent Harness Engineering (智能体框架工程)
    15|
    16|AI Coding Agent 的 harness（框架/基础设施）设计全貌。
    17|
    18|## 是什么
    19|
    20|Harness 是 agent 运行的底层框架——包括 context 管理、工具调用、模型路由、日志、测试、重试等所有支撑 agent 运行的基础设施。
    21|
    22|> harness 和模型共同决定了 agent 有多强
    23|
    24|## 三大流派对比
    25|
    26|| 维度 | Cursor | Anthropic (Claude Code) | Anthropic (Harness Design) | OpenAI (Symphony) |
    27||------|--------|------------------------|---------------------------|-------------------|
    28|| **核心思路** | 软件工厂 + data-driven 迭代 | 两阶段：Initializer + 增量 Coding | GAN 启发：Generator-Evaluator 循环 | Issue tracker = 控制平面，永远在线的 orchestrator |
    29|| **Context 管理** | 动态 context，定制 prompt 每个模型 | plan.sh + claude-progress.txt | 自动 compaction | Per-issue 独立 workspace |
    30|| **模型定制** | 不同 provider 不同 tool 形状 | Opus 4.5 为主 | Opus 4.5 | Codex / GPT-5.5 |
    31|| **多 agent** | Cloud Agents 自修复 harness | 单 agent + 多 session | 三 agent：PO + Generator + Evaluator | Per-ticket agent，orchestrator 管理并发 |
    32|| **质量保证** | SWE-bench + Online test + Telemetry | E2E browser testing (Puppeteer) | Evaluator agent 评分 (GAN 模式) | Review packet + CI shepherding |
    33|| **Bug 处理** | 分类：unknown=harness bug, expected=模型问题 | E2E 测试发现 | Evaluator 评分发现 | 失败 → 加护栏 + 技能 → 下次更好 |
    34|| **关键数字** | 错误率降一个数量级 | 前端设计质量随迭代递增 | 质量 20x 但成本 20x | PR 产量 +500% |
    35|| **触发方式** | 用户交互驱动 | 手动启动 session | 手动启动 | Push-based: 提 ticket 自动触发 |
    36|| **面向用户** | 开发者 | 研究者/开发者 | 研究者 | PM/设计师/工程师都能用 |
    37|
    38|## 核心设计模式
    39|
    40|### 1. Context 管理
    41|- **Cursor** — 动态 context，模型切换时注入 custom instructions
    42|- **Anthropic** — plan.sh + progress.txt 持久化状态
    43|- **共同点** — context window 是核心瓶颈
    44|
    45|### 2. 增量 vs 全量
    46|- **初始器模式** — 先搭环境再增量迭代（Anthropic）
    47|- **全权模式** — 从零到一全权负责（Cursor solo）
    48|- **递归分解** — 大任务拆小（Cursor multi-agent）
    49|
    50|### 3. 质量闭环
    51|- **Cursor** — 数据驱动：benchmark + online + telemetry → 自动修复
    52|- **Anthropic** — 评判驱动：Evaluator agent 打分 → 重新生成
    53|- **共同点** — 都需要外部验证机制，不能靠模型自评
    54|
    55|### 4. 耐用性
    56|- 长时间运行的核心挑战：上下文膨胀、模型漂移、过早宣布完成
    57|- 解决方案：progress file、feature list（标记 fail/pass）、git commit
    58|- Agent 倾向于跳过测试 → 必须强制定量验证
    59|
    60|## 趋势
    61|1. **从单 agent 到多 agent** — 没有单一 agent 能承担所有角色
    62|2. **Harness 自身也需要自动化维护** — Cursor 用 Cloud Agents 修复 harness bug
    63|3. **模型特化** — 不同模型需要定制 tool shape 和 prompt
    64|4. **可观测性** — 没有 telemetry 无法优化 harness
    65|5. **成本 vs 质量权衡** — 复杂 harness 可提升 20x 质量，但成本也高 20x
    66|6. **Issue tracker 作为控制平面** — Symphony 模式让 PM 和设计师也能参与
    67|
    68|## 相关链接
    69|- [self-driving-codebases](../concepts/self-driving-codebases.md)
    70|- [multi-agent-architectures](../concepts/multi-agent-architectures.md)
    71|- [cursor-agent-harness](../entities/cursor.md)
    72|- [claude-agent-harness](../entities/anthropic-claude-code.md)
    73|