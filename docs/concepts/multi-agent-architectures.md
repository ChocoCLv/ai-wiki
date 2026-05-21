---
title: Multi-Agent Architectures for Software Engineering
created: 2026-05-21
updated: 2026-05-21
type: concept
tags: [architecture, research, training, deployment]
sources: [raw/articles/cursor-self-driving-codebases.md]
---

# Multi-Agent Architectures for Software Engineering

AI 编码中多智能体协作的架构模式总结。

## 已知架构

### 1. 平分权（Peer-to-peer）
- 所有 agent 平等，共享状态文件
- 问题：锁竞争、没人承担大任务
- 代表：Cursor 早期尝试（失败）

### 2. Planner-Executor-Worker-Judge
- 分层分工，有裁判角色
- 问题：最慢 worker 成瓶颈，计划太死板
- 代表：Cursor 中期尝试（改进但仍有限）

### 3. 递归 Planner + Worker + Integrator
- Root Planner → Subplanner (递归) → Workers → Integrator
- Handoff 机制保持持续运动
- 特点：递归分解、独立仓库副本、中央质量控制
- 代表：Cursor 最终方案（最成功）

### 4. 其他已知方案
- **Devin** — Cognition Labs，端到端全权 agent
- **Claude Code** — Anthropic，CLI 编码 agent
- **Codex CLI** — OpenAI，终端编码 agent
- **SWE-agent** — 学术研究，基于命令的 agent

## 设计取舍

| 维度 | 集中式 | 平分权 | 递归分层 |
|------|--------|--------|----------|
| 可扩展性 | 差 | 中 | 好 |
| 协调成本 | 低 | 高 | 中 |
| 单点故障 | 有 | 无 | 有(planner) |
| 任务完整性 | 好 | 差 | 好 |
| 动态调整 | 差 | 中 | 好 |

## 关键洞见

1. **Lock 对 agent 不友好** — agent 会拿锁不放、忘记释放、不理解锁语义
2. **没有 owner 就没有责任感** — 平分权让 agent 都做最小安全变更
3. **Handoff 比全局状态好** — agent 各自有独立工作区，通过 handoff 通信
4. **递归分解是抗过载的关键** — 单一 agent 承担太多角色会出病理行为
5. **可观测性不可或缺** — 没有全链路日志，调试 multi-agent 不可能

## 相关链接
- [[self-driving-codebases]]
- [[cursor]]
