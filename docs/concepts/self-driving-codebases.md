---
title: Self-driving Codebases (multi-agent research)
created: 2026-05-21
updated: 2026-05-21
type: summary
tags: [model, architecture, research, deployment, tool]
sources: [raw/articles/cursor-self-driving-codebases.md]
---

# Self-driving Codebases — Cursor 的多智能体研究

> 来源：Cursor Blog, 2026-02-05
> 链接：https://www.cursor.com/blog/self-driving-codebases

## 概述

Cursor 公开了其多智能体研究框架的一部分。核心目标是让大量 AI 智能体协作完成大型软件工程任务，最终实现"自动驾驶的代码库"。

## 核心发现

### Research → Product 的转化

- 研究始于探索当前模型的极限
- 创建了一个可以协调数千个 agent 的 harness
- 系统稳定到可以连续运行一周
- 数千个 agent 协作产出的代码几乎完全可运行，无需人工干预
- 部分研究成果已作为预览功能开放给用户

### 选型历程

| 阶段 | 模型 | 结果 |
|------|------|------|
| 最初 | Opus 4.5 | 写单块代码好，但大任务容易迷失 |
| 改进 | 手动拆子任务 | 提升吞吐，但仍有瓶颈 |
| 最新 | GPT-5.1 / GPT-5.2 | 指令遵循能力更强，适合长运行 agent |

### 架构演进

1. **平分权（失败）** — 所有 agent 平等，用共享状态文件协调
   - 问题：锁竞争严重，没人愿意承担大任务，agent 各做各的
   
2. **Planer-Executor-Worker（有改进）**
   - Planner 规划 → Executor 主导执行 → Workers 干活 → Judge 裁判
   - 问题：最慢的 worker 成为瓶颈，计划太死板无法动态调整

3. **连续执行 + 新鲜度机制（接近成功）**
   - Executor 可以动态规划、拆任务、管理 workers
   - 引入"新鲜度机制"防止 agent 漂移
   - 问题：单一 executor 负担过重——要规划、探索、研究、拆任务、检查 worker、审查代码、合并输出、判断完成

4. **递归 Planner + Worker 模型（最成功）**
   - **Root Planner** — 理解全貌，产出具体任务（不写代码）
   - **Subplanner** — 递归拆解，完全拥有子范围
   - **Workers** — 各自在独立仓库副本上干活，写 handoff
   - **Integrator** — 全局质量控制和合并
   - 关键设计：handoff 包含 notes、concerns、findings、thoughts，保持系统持续运动

### 基础设施

- 单台大型 Linux VM（不用分布式系统）
- SSH 进入后用终端界面控制
- 重视可观测性：记录所有 agent 消息、系统动作、命令输出带时间戳
- 用 Cursor 自己分析日志来优化 prompt

### 关键技术洞见

1. **锁定机制复杂且容易出错** — agent 不擅长处理锁
2. **没有全局规划 → agent 倾向于做小安全变更**
3. **单一角色拥有完整责任比平分权更有效**
4. **递归分解防止单个 agent 过载和视野变窄**
5. **handoff 机制是保持系统持续运动的关键**

## 相关链接
- [[cursor-agent-harness]]
- [[multi-agent-architectures]]
