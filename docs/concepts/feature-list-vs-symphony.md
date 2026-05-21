# Feature List vs Symphony — 实现类似，问题不同

> 都基于"任务队列 + Agent 循环消费"的模式，但解决的是不同层级的问题。

## Feature List（Anthropic Harness）

**来自：** Anthropic 的 Harness Engineering（[原文](https://docs.anthropic.com/en/docs/agents-and-tools/harness-engineering)）

**是什么：** 一份 **200+ 项的清单文件**，标记每一项为 `fail` 或 `pass`，让 agent 知道自己离完成还有多远。

**解决的问题：** **Agent 过早宣布成功（one-shotting）**——模型做 5-10 个功能就觉得完成了。200 项硬约束让 agent 认清真实规模。

```
feature_list.txt
  [fail] 用户打开新聊天 → 输入查询 → 按回车 → 看到回复
  [fail] 切换暗色模式
  [fail] 搜索历史对话
  ... 200+ 项
```

**工作方式：**
1. Agent 启动时，Initializer 强制生成一份 200+ 项的 feature list
2. 循环：读 feature list → 选最高优先级未完成的 → 执行 → 标记 `[pass]` → git commit
3. 直到所有项都是 `[pass]`

**关键点：**
- 解决的是 **agent 的自我认知问题**——它不知道自己做了多少、还剩多少
- 200 项是个心理锚点，让 agent 没法"5 个功能就宣布胜利"
- 每项粒度很细（一次用户交互就算一项），而不是整个功能模块

## Symphony（OpenAI Codex）

**来自：** OpenAI Codex 团队发布的开源编排规范（[原文](https://openai.com/index/open-source-codex-orchestration-symphony)）

**是什么：** 一个**编排系统**，把 issue tracker（如 Linear）当作 agent 的**控制平面**。

**解决的问题：** **人的注意力是瓶颈**——agent 很快但人盯不过来。让 PM 和设计师也能提 task，agent 自动执行。

```
Linear 任务板 → Symphony 监听 → 每个任务映射到独立 agent 工作区
     ↑                              ↓
  任务更新 ←────── agent 持续工作直到完成 ──────
```

**工作方式：**
1. PM 或设计师提一个 Linear ticket："分析代码库，产出实现计划"
2. Symphony 监听到新 ticket，创建独立 workspace
3. Agent 执行，自动展开 DAG（如 migration to Vite → React upgrade）
4. 完成后产出 review packet（含视频演示）
5. 人类审核 → 合并

**关键点：**
- 解决的是 **团队协作瓶颈**——不是 agent 不够快，是人管不过来
- 成果：某些团队 landed PRs 数量在头三周增加 **500%**
- 核心创新：**解耦工作与 session**，ticket 可以产出多个 PR、跨仓库

## 对比

### 实现层面的相似性

| 阶段 | Feature List | Symphony |
|------|-------------|----------|
| 队列 | 200+ 项 fail/pass 清单 | Linear ticket 列表 |
| 选择 | Agent 选一项 | Orchestrator 分配 |
| 执行 | Agent 做功能 | Agent 做 ticket |
| 标记 | 标记 `[pass]` | 提交 PR，更新 ticket |
| 循环 | 直到全部 pass | 持续监听新 ticket |

循环结构一模一样：**队列 → 消费 → 标记 → 循环**。

### 问题层面的差异

```
Feature List（微观）
  问题：Agent 做5个功能就觉得"完成了"
  解法：200项硬约束，让它没法骗自己
  范围：单个 agent 会话内
  使用者：Agent 自己

Symphony（宏观）
  问题：人的注意力是瓶颈，团队没法给每个 agent 下指令
  解法：issue tracker = 控制平面，PM随手提单
  范围：整个工程团队
  使用者：PM / 设计师 / 工程师
```

### 打个比方

| | Feature List | Symphony |
|--|-------------|----------|
| 类比 | **健身记录本** | **健身房管理系统** |
| 记录 | 今天做了几组、重量多少 | 谁办了卡、今天什么课 |
| 使用者 | 健身的人自己看 | 整个健身房运营 |
| 共同点 | 都是"清单" | 都是"清单" |
| 不同点 | 防止自己偷懒 | 让整个场馆自动运转 |

### 能否互补

**可以。** 两者不冲突：

```
Symphony 监听 issue tracker
  └── 分配 ticket 给 agent workspace
        └── Agent 用 feature list 管理自己的任务进度
              └── 每完成一项标记 [pass]
                    └── 全部 pass → 提交 PR → 更新 ticket
```

Feature List 解决 agent **内部"骗自己"** 的问题，Symphony 解决团队 **"管不过来"** 的问题。

## 相关链接

- [[recursive-planner-worker]] — 相同层级的人员结构模式
- [[agent-harness-engineering]] — Harness 设计的全景对比
- [[self-driving-codebases]] — Cursor 的多 agent 架构
