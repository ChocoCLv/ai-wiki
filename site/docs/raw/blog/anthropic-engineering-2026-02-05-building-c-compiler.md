# Building a C compiler with a team of parallel Claudes

- **Source**: Anthropic-Engineering
- **Date**: 2026-02-05
- **URL**: https://www.anthropic.com/engineering/building-c-compiler

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Engineering at Anthropic

Building a C compiler with a team of parallel Claudes

Published 
Feb 05, 2026

We tasked Opus 4.6 using agent teams to build a C Compiler, and then (mostly) walked away. Here&#x27;s what it taught us about the future of autonomous software development.

Written by Nicholas Carlini, a researcher on our Safeguards team. 

I&#x27;ve been experimenting with a new approach to supervising language models that we’re calling &quot;agent teams.&quot; 

With agent teams, multiple Claude instances work in parallel on a shared codebase without active human intervention. This approach dramatically expands the scope of what&#x27;s achievable with LLM agents. 

To stress test it, I tasked 16 agents with writing a Rust-based C compiler, from scratch, capable of compiling the Linux kernel. Over nearly 2,000 Claude Code sessions and $20,000 in API costs, the agent team produced a 100,000-line compiler that can build Linux 6.9 on x86, ARM, and RISC-V.

The compiler is an interesting artifact
 on its own, but I focus here on what I learned about designing harnesses for long-running autonomous agent teams: how to write tests that keep agents on track without human oversight, how to structure work so multiple agents can make progress in parallel, and where this approach hits its ceiling.

Enabling long-running Claudes

Existing agent scaffolds like Claude Code require an operator to be online and available to work jointly. If you ask for a solution to a long and complex problem, the model may solve part of it, but eventually it will stop and wait for continued input—a question, a status update, or a request for clarification.

To elicit sustained, autonomous progress, I built a harness that sticks Claude in a simple loop (if you’ve seen Ralph-loop, this should look familiar). When it finishes one task, it immediately picks up the next. 
(Run this in a container, not your actual machine).

#!/bin/bash

while true; do
    COMMIT=$(git rev-parse --short=6 HEAD)
    LOGFILE=&quot;agent_logs/agent_${COMMIT}.log&quot;

    claude --dangerously-skip-permissions \
           -p &quot;$(cat AGENT_PROMPT.md)&quot; \
           --model claude-opus-X-Y &amp;&gt; &quot;$LOGFILE&quot;
done

Copy

In the agent prompt, I tell Claude what problem to solve and ask it to approach the problem by breaking it into small pieces, tracking what it’s working on, figuring out what to work on next, and to effectively keep going until it’s perfect. (On this last point, Claude has no choice. The loop runs forever—although in one instance, I did see Claude 
pkill -9 bash
 on accident, thus killing itself and ending the loop. Whoops!).

Running Claude in parallel

Running multiple instances in parallel can address two weaknesses of a single-agent harness:

One Claude Code session can only do one thing at a time. Especially as the scope of a project expands, debugging mul
