     1|---
     2|title: Walking Labs vs Anthropic/OpenAI — Harness 工程对比
     3|created: 2026-05-25
     4|updated: 2026-05-25
     5|type: comparison
     6|tags: [harness, agent, comparison, architecture]
     7|sources:
     8|  - raw/articles/learn-harness-engineering.md
     9|  - raw/articles/anthropic-effective-harnesses.md
    10|  - raw/articles/anthropic-harness-design.md
    11|  - raw/articles/cursor-continually-improving-harness.md
    12|  - concepts/agent-harness-engineering.md
    13|  - concepts/harness-five-subsystems.md
    14|---
    15|
    16|# Walking Labs vs Anthropic/OpenAI — Harness 工程对比
    17|
    18|| 维度 | Walking Labs（课程） | Anthropic（博客） | OpenAI（Symphony/Codex） | Cursor |
    19||------|--------------------|-------------------|-------------------------|--------|
    20|| **核心贡献** | 五子系统模型 + 可操作模板体系 | GAN 式三 agent 架构 + 过渡架构分析 | 100 万行代码的实操经验 | 软件工厂 + data-driven 迭代 |
    21|| **框架性** | ★★★★★ 最系统的框架 | ★★★★ 实践驱动的框架 | ★★★★ 实操经验总结 | ★★★ 产品导向 |
    22|| **可操作性** | ★★★★★ 提供可直接复用的模板文件 | ★★★ 概念性强但模板少 | ★★★ 原则性强，模板少 | ★★★★ Claude Code 产品内集成 |
    23|| **理论深度** | ★★★★ ACID 类比、WIP 限制、Lost in the Middle | ★★★★ GAN 类比、上下文焦虑研究 | ★★★★ 知识可见性缺口、新会话测试 | ★★★ 以测量和数据为中心 |
    24|| **独特观点** | 入口文件是路由器不是百科全书；知识衰减率；清洁状态的五维度 | Evaluator 需要专门调校（从宽容变成挑剔） | 仓库即规范 + 分层领域架构 + 幂等清理 | 错误率降一个数量级 + Cloud Agents 自修复 harness |
    25|| **弱势** | 偏教程性质，缺少大规模实验数据 | 只有 Opus 4.5 实验，成本 20x | 偏 OpenAI Codex 生态，普适性待验证 | 偏 Cursor 产品，框架不够通用 |
    26|
    27|## 核心差距分析
    28|
    29|Walking Labs 课程的优势在于：
    30|1. **五子系统模型**统一了各家散乱的术语
    31|2. **12 讲渐进式结构**从理念到实操全覆盖
    32|3. **模板体系**开箱即用（AGENTS.md、feature_list.json、init.sh 等）
    33|4. **完整覆盖了 Anthropic/OpenAI/Cursor 三家**没有偏向
    34|
    35|## 推荐学习路径
    36|
    37|1. 先读 Walking Labs 课程掌握全貌（五子系统 + 12 讲）
    38|2. 然后读 Anthropic 两篇博客理解 GAN 式 agent 循环
    39|3. 最后读 OpenAI 的 harness engineering 文章获取百万行代码实操经验
    40|