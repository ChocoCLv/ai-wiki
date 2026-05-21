     1|---
     2|title: Cursor AI Coding Agent
     3|created: 2026-05-21
     4|updated: 2026-05-21
     5|type: entity
     6|tags: [model, tool, company, deployment]
     7|sources: [raw/articles/cursor-self-driving-codebases.md]
     8|---
     9|
    10|# Cursor (AI Coding Agent)
    11|
    12|Cursor 是 AI 驱动的代码编辑器，基于 VS Code 构建，深度集成 AI 编码功能。
    13|
    14|## 产品线
    15|
    16|### Cursor Tab (Composer)
    17|- AI 补全和生成，多文件编辑
    18|- Composer 2 / Composer 2.5 版本迭代
    19|
    20|### Bugbot
    21|- AI 自动修 Bug
    22|- 2026年5月有重大改进
    23|
    24|### Agent Harness
    25|- 多智能体研究框架
    26|- 支持数千个 agent 协作
    27|- 部分功能已作为预览开放
    28|
    29|## 技术特点
    30|
    31|### 模型选择
    32|- 早期使用 Anthropic Claude (Opus 4.5+)
    33|- 后来发现 GPT-5.1/5.2 指令遵循更好，转向 OpenAI
    34|- 持续评估最佳模型
    35|
    36|### 多智能体架构
    37|参见 [self-driving-codebases](../concepts/self-driving-codebases.md)
    38|
    39|### 关键基础设施
    40|- 单台大型 Linux VM
    41|- 终端界面管理
    42|- 全链路可观测性
    43|- 日志可回放分析
    44|
    45|## 商业模式
    46|- 订阅制
    47|- 个人版 / Business 版
    48|- 面向开发者市场
    49|
    50|### 社区与动态
    51|- 博客活跃，AICoding 相关文章密集发布
    52|- 2026年5月发布 Bugbot 重大更新
    53|- 多 agent 研究成果持续公开
    54|
    55|## 相关链接
    56|- [anthropic-claude-code](../entities/anthropic-claude-code.md)
    57|- [openai-codex](../entities/openai-codex.md)
    58|- [self-driving-codebases](../concepts/self-driving-codebases.md)
    59|- [multi-agent-architectures](../concepts/multi-agent-architectures.md)
    60|