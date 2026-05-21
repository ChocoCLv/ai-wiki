# Scaling Managed Agents: Decoupling the brain from the hands

- **Source**: Anthropic-Engineering
- **Date**: 2026-04-24
- **URL**: https://www.anthropic.com/engineering/managed-agents

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Engineering at Anthropic

Scaling Managed Agents: Decoupling the brain from the hands

Published 
Apr 08, 2026

Harnesses encode assumptions that go stale as models improve. Managed Agents—our hosted service for long-horizon agent work—is built around interfaces that stay stable as harnesses change.

Get started with Claude Managed Agents by following our 
docs
.

A running topic on the Engineering Blog is how to 
build effective agents
 and 
design harnesses
 for 
long-running work
. A common thread across this work is that harnesses encode assumptions about what Claude can’t do on its own. However, those assumptions need to be frequently questioned because they can 
go stale
 as models improve.

As just one example, in prior work 
we found
 that Claude Sonnet 4.5 would wrap up tasks prematurely as it sensed its context limit approaching—a behavior sometimes called “context anxiety.” We addressed this by adding context resets to the harness. But when we used the same harness on Claude Opus 4.5, we found that the behavior was gone. The resets had become dead weight.

We expect harnesses to continue evolving. So we built Managed Agents: a hosted service in the Claude Platform that runs long-horizon agents on your behalf through a small set of interfaces meant to outlast any particular implementation—including the ones we run today.

Building Managed Agents meant solving an old problem in computing: how to design a system for “
programs as yet unthought of
.” Decades ago, operating systems solved this problem by virtualizing hardware into abstractions—
process, file
—general enough for programs that didn&#x27;t exist yet. The abstractions outlasted the hardware. The 
read()
 command is agnostic as to whether it’s accessing a disk pack from the 1970s or a modern SSD. The abstractions on top stayed stable while the implementations underneath changed freely.

Managed Agents follow the same pattern. We virtualized the components of an agent: a session (the append-only log of everything that happened), a harness (the loop that calls Claude and routes Claude’s tool calls to the relevant infrastructure), and a sandbox (an execution environment where Claude can run code and edit files). This allows the implementation of each to be swapped without disturbing the others. We&#x27;re opinionated about the shape of these interfaces, not about what runs behind them.

Don’t adopt a pet

We started by placing all agent components into a single container, which meant the session, agent harness, and sandbox all shared an environment. There were benefits to this approach, including that file edits are direct syscalls, and there were no service boundaries to design.

But by coupling everything into one container, we ran into an old infrastructure problem: we’d adopted a 

pet

. In the pets-vs-cattle analogy, a pet is a named, hand-tended individual you can’t afford
