# 递归 Planner-Worker 模型

> 多智能体架构模式：一个 Planner 拆任务、派 Worker、递归深化，逐级汇总。

## 是什么

递归 Planner-Worker 是一种**分层多智能体架构**，核心结构只有两层，但通过递归实现任意深度：

```
Planner（规划者）
  ├── Worker → 执行子任务 → 返回结果
  ├── Worker → 执行子任务 → 返回结果
  └── Worker → 执行子任务 → 返回结果
       ↓
  Planner 汇总 → 决定继续 / 调整 / 结束
```

### 角色分工

| 角色 | 职责 |
|------|------|
| **Planner** | 拆解大任务 → 分派子任务 → 汇总结果 → 迭代决策 |
| **Worker** | 执行具体子任务（写代码、查资料、调 API） → 汇报结果 |

### "递归" 的含义

Worker 执行中发现子任务过复杂 → **Worker 升格为子 Planner** → 继续向下拆，形成递归树：

```
Level 1: Planner A → "实现电商网站"
  ├── Worker 前端 → 太复杂 → 升格为 Planner A'
  │     ├── Worker 商品列表页
  │     ├── Worker 购物车
  │     └── Worker 登录 → 太复杂 → 升格为 Planner A"
  │           ├── Worker 登录 UI
  │           ├── Worker JWT 验证
  │           └── Worker 密码重置
  │
  ├── Worker 后端 API
  └── Worker 数据库
```

## 和普通多 Agent 的区别

| | 递归 Planner-Worker | 普通多 Agent |
|--|-------------------|-------------|
| 关系 | 父子层级 | 对等协作 |
| 控制流 | 树状（父指令 → 子汇报） | 网状（自由通信） |
| 层级 | 可无限递归 | 通常一层 |
| Worker 数量 | 按需增长 | 固定 |
| 实例化 | 父创建子 | 预定义 |

## 什么时候触发递归拆分

### 1. Token 预算判定

```
如果 Worker 任务描述 + 期望输出 > 上下文窗口 70%
→ 拆！
```

### 2. 步骤数判定

```
如果完成任务所需步骤 ≥ N（如 5 步）
→ 拆成子 Plan
```

### 3. 动态判定（最常用）

Worker 执行途中发现：
- 还需要其他模块的信息
- 任务比预期大得多
- 依赖链过长

### 4. 阈值触发

| 指标 | 拆分阈值 |
|------|---------|
| 代码行数 | > 200 |
| 函数数量 | > 3 |
| 文件数量 | > 2 |
| 依赖模块 | > 3 |
| 预估 Token | > 上下文 60% |

### 5. LLM 自行判断

直接问 Worker："这个任务一次搞定还是需要拆？"——最灵活也最贵。

## 竞态条件与解法

递归 Planner-Worker 天然面临竞态问题：

### 共享资源争用

```
Worker A 写 login.ts
Worker B 同时写 login.ts → 覆盖
```

解法：
- **文件锁** — Worker 锁定正在修改的文件
- **Planner 分配唯一路径** — 避免路径冲突
- **Worker 只生成 diff** — Planner 统一合并（Cursor 的做法）

### 依赖死锁

```
Worker A 需要 B 的结果
Worker B 需要 A 的结果
→ 互相等待
```

解法：
- **依赖图拓扑排序** — Planner 预排顺序
- **超时回退** — 等不到就报错
- **默认值** — 先跑起来再补

### 状态不一致

```
Worker A 读 config.json → 旧值
Worker B 写 config.json → 新值
Worker A 用旧值继续 → 错误
```

解法：
- **Planner 每轮同步状态** — 广播最新版本
- **版本号检测** — 发现过期就重读
- **写时复制（COW）** — Worker 在副本上操作

### 资源枯竭

```
递归 10 层、500 个 Worker → 上下文爆炸 / API 限流
```

解法：
- **Worker 数量上限**（如最多 50 个并行）
- **递归深度限制**（如最深 3 层）
- **优先级队列** — 高价值任务先执行

## 实现方式

### 不同 Session（推荐）

```
主 Planner 会话
  ├── delegate_task → Session A（Worker 1）
  ├── delegate_task → Session B（Worker 2）
  └── delegate_task → Session C（Worker 3）
       ↓ 异步返回结果
  主 Planner 汇总 → 下一轮决策
```

| 维度 | 不同 Session | 同上下文 |
|------|------------|---------|
| 隔离性 | ✅ 天然隔离 | ❌ 共享上下文 |
| 竞态 | ✅ 结果异步返回，Planner 统一合并 | ❌ 并发读写冲突 |
| 上下文 | ✅ 独立窗口 | ❌ 共享窗口，易超限 |
| 通信 | ⚠️ 通过返回值间接 | ✅ 直接读写 |

### 同上下文并发

AutoGen、CrewAI 等方式——Worker 在同一上下文内并行工作，适合高度耦合的任务，但需要额外的同步和锁定机制。

## 实际案例

### Cursor Self-Driving Codebases

Cursor 的多智能体研究，用递归 Planner-Worker 协调**数千个 agent** 协作编码：

- 研究始于探索模型的极限
- 创建了能协调数千个 agent 的 harness
- 系统稳定运行一周
- 数千 agent 协作产出的代码几乎完美运行
- Worker **不直接写文件**，只生成 diff，Planner 统一合并

### 其他应用

| 场景 | Planner 角色 | Worker 角色 |
|------|-------------|------------|
| 写网页 | 拆成 HTML/CSS/JS 子任务 | 各写各的代码 |
| 调试 Bug | 分析错误，定位可疑模块 | Worker 分别读代码排查 |
| 研究问题 | 拆解问题维度 | Worker 分别查资料 |

---

> 本文讨论了多智能体架构中递归 Planner-Worker 模式的原理、触发条件、竞态问题及其解法。
