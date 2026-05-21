# Measuring AI agent autonomy in practice

- **Source**: Anthropic-Research
- **Date**: 2026-02-19
- **URL**: https://www.anthropic.com/research/measuring-agent-autonomy

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Societal Impacts

Measuring AI agent autonomy in practice

Feb 18, 2026

AI agents are here, and already they’re being deployed across contexts that vary widely in consequence, from email triage to 
cyber espionage
. Understanding this spectrum is critical for deploying AI safely, yet we know surprisingly little about how people actually use agents in the real world.

We analyzed millions of human-agent interactions across both Claude Code and our public API using our 
privacy-preserving tool
, to ask: How much autonomy do people grant agents? How does that change as people gain experience? Which domains are agents operating in? And are the actions taken by agents risky?

We found that:

Claude Code is working autonomously for longer.

 Among the longest-running sessions, the length of time Claude Code works before stopping has nearly doubled in three months, from under 25 minutes to over 45 minutes. This increase is smooth across model releases, which suggests it isn’t purely a result of increased capabilities, and that existing models are capable of more autonomy than they exercise in practice.

Experienced users in Claude Code auto-approve more frequently, but interrupt more often.

 As users gain experience with Claude Code, they tend to stop reviewing each action and instead let Claude run autonomously, intervening only when needed. Among new users, roughly 20% of sessions use full auto-approve, which increases to over 40% as users gain experience.

Claude Code pauses for clarification more often than humans interrupt it.

 In addition to human-initiated stops, 
agent
-initiated stops are also an important form of oversight in deployed systems. On the most complex tasks, Claude Code stops to ask for clarification more than twice as often as humans interrupt it.

Agents are used in risky domains, but not yet at scale.
 
Most agent actions on our public API are low-risk and reversible. Software engineering accounted for nearly 50% of agentic activity, but we saw emerging usage in healthcare, finance, and cybersecurity.

Below, we present our methodology and findings in more detail, and end with recommendations for model developers, product developers, and policymakers. Our central conclusion is that effective oversight of agents will require new forms of post-deployment monitoring infrastructure 
and
 new human-AI interaction paradigms that help both the human and the AI manage autonomy and risk together.

We view our research as a small but important first step towards empirically understanding how people deploy and use agents. We will continue to iterate on our methods and communicate our findings as agents are adopted more widely.

Studying agents in the wild

Agents are difficult to study empirically. First, there is no agreed-upon definition of what an agent 
is. 
Second, agents are evolving quickly. Last year, many of the most sophisti
