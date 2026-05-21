# Claude Code auto mode: a safer way to skip permissions

- **Source**: Anthropic-Engineering
- **Date**: 2026-03-25
- **URL**: https://www.anthropic.com/engineering/claude-code-auto-mode

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Engineering at Anthropic

Claude Code auto mode: a safer way to skip permissions

Published 
Mar 25, 2026

Claude Code users approve 93% of permission prompts. We built classifiers to automate some decisions, increasing safety while reducing approval fatigue. Here&#x27;s what it catches, and what it misses.

By default, Claude Code asks users for approval before running commands or modifying files. This keeps users safe, but it also means a lot of clicking &quot;approve.&quot; Over time that leads to approval fatigue, where people stop paying close attention to what they&#x27;re approving.

Users have two solutions for avoiding this fatigue: a built-in sandbox where tools are isolated to prevent dangerous actions, or the 
--dangerously-skip-permissions
 flag that disables all permission prompts and lets Claude act freely, which is unsafe in most situations. Figure 1 lays out the tradeoff space. Sandboxing is safe but high-maintenance: each new capability needs configuring, and anything requiring network or host access breaks isolation. Bypassing permissions is zero-maintenance but offers no protection. Manual prompts sit in the middle, and in practice users accept 93% of them anyway.

Figure 1. The permission modes available in Claude Code, positioned by task autonomy and security
. Dot colour indicates maintenance friction. Auto mode targets high autonomy at low maintenance cost; the dashed arrow shows security improvement over time as classifier coverage and model judgment get better.

We keep an internal incident log focused on agentic misbehaviors. Past examples include deleting remote git branches from a misinterpreted instruction, uploading an engineer&#x27;s GitHub auth token to an internal compute cluster, and attempting migrations against a production database. Each of these was the result of the model being overeager, taking initiative in a way the user didn&#x27;t intend. We documented this pattern in the 
Claude Opus 4.6 system card
 (§6.2.1 and §6.2.3.3).

Auto mode is a new mode for Claude Code that delegates approvals to model-based classifiers—a middle ground between manual review and no guardrails. The goal is to catch the dangerous actions that aren&#x27;t aligned with user intent, while letting the rest run without approval prompts. Get started using auto mode by following the 
docs
.

How it works

Auto mode uses two layers of defense: one for what Claude reads, one for what Claude does.

At the input layer, a server-side prompt-injection probe scans tool outputs (file reads, web fetches, shell output, external tool responses) before they enter the agent&#x27;s context. When content looks like an attempt to hijack behavior, the probe adds a warning to the agent&#x27;s context before the result is passed along—telling the agent to treat this content as suspect and anchor on what the user actually asked for.

At the output lay
