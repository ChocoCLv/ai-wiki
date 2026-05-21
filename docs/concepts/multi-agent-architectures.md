     1|---
     2|title: Multi-Agent Architectures for Software Engineering
     3|created: 2026-05-21
     4|updated: 2026-05-21
     5|type: concept
     6|tags: [architecture, research, training, deployment]
     7|sources: [raw/articles/cursor-self-driving-codebases.md]
     8|---
     9|
    10|# Multi-Agent Architectures for Software Engineering
    11|
    12|AI 编码中多智能体协作的架构模式总结。
    13|
    14|## 已知架构
    15|
    16|### 1. 平分权（Peer-to-peer）
    17|- 所有 agent 平等，共享状态文件
    18|- 问题：锁竞争、没人承担大任务
    19|- 代表：Cursor 早期尝试（失败）
    20|
    21|### 2. Planner-Executor-Worker-Judge
    22|- 分层分工，有裁判角色
    23|- 问题：最慢 worker 成瓶颈，计划太死板
    24|- 代表：Cursor 中期尝试（改进但仍有限）
    25|
    26|### 3. 递归 Planner + Worker + Integrator
    27|- Root Planner → Subplanner (递归) → Workers → Integrator
    28|- Handoff 机制保持持续运动
    29|- 特点：递归分解、独立仓库副本、中央质量控制
    30|- 代表：Cursor 最终方案（最成功）
    31|
    32|### 4. 其他已知方案
    33|- **Devin** — Cognition Labs，端到端全权 agent
    34|- **Claude Code** — Anthropic，CLI 编码 agent
    35|- **Codex CLI** — OpenAI，终端编码 agent
    36|- **SWE-agent** — 学术研究，基于命令的 agent
    37|
    38|## 设计取舍
    39|
    40|| 维度 | 集中式 | 平分权 | 递归分层 |
    41||------|--------|--------|----------|
    42|| 可扩展性 | 差 | 中 | 好 |
    43|| 协调成本 | 低 | 高 | 中 |
    44|| 单点故障 | 有 | 无 | 有(planner) |
    45|| 任务完整性 | 好 | 差 | 好 |
    46|| 动态调整 | 差 | 中 | 好 |
    47|
    48|## 关键洞见
    49|
    50|1. **Lock 对 agent 不友好** — agent 会拿锁不放、忘记释放、不理解锁语义
    51|2. **没有 owner 就没有责任感** — 平分权让 agent 都做最小安全变更
    52|3. **Handoff 比全局状态好** — agent 各自有独立工作区，通过 handoff 通信
    53|4. **递归分解是抗过载的关键** — 单一 agent 承担太多角色会出病理行为
    54|5. **可观测性不可或缺** — 没有全链路日志，调试 multi-agent 不可能
    55|
    56|## 相关链接
    57|- [self-driving-codebases](../concepts/self-driving-codebases.md)
    58|- [cursor](../entities/cursor.md)
    59|