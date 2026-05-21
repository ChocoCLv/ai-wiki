---
title: Cursor AI Coding Agent
created: 2026-05-21
updated: 2026-05-21
type: entity
tags: [model, tool, company, deployment]
sources: [raw/articles/cursor-self-driving-codebases.md]
---

# Cursor (AI Coding Agent)

Cursor 是 AI 驱动的代码编辑器，基于 VS Code 构建，深度集成 AI 编码功能。

## 产品线

### Cursor Tab (Composer)
- AI 补全和生成，多文件编辑
- Composer 2 / Composer 2.5 版本迭代

### Bugbot
- AI 自动修 Bug
- 2026年5月有重大改进

### Agent Harness
- 多智能体研究框架
- 支持数千个 agent 协作
- 部分功能已作为预览开放

## 技术特点

### 模型选择
- 早期使用 Anthropic Claude (Opus 4.5+)
- 后来发现 GPT-5.1/5.2 指令遵循更好，转向 OpenAI
- 持续评估最佳模型

### 多智能体架构
参见 [[self-driving-codebases]]

### 关键基础设施
- 单台大型 Linux VM
- 终端界面管理
- 全链路可观测性
- 日志可回放分析

## 商业模式
- 订阅制
- 个人版 / Business 版
- 面向开发者市场

### 社区与动态
- 博客活跃，AICoding 相关文章密集发布
- 2026年5月发布 Bugbot 重大更新
- 多 agent 研究成果持续公开

## 相关链接
- [[anthropic-claude-code]]
- [[openai-codex]]
- [[self-driving-codebases]]
- [[multi-agent-architectures]]
