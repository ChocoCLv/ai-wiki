# Trustworthy agents in practice

- **Source**: Anthropic-Research
- **Date**: 2026-04-09
- **URL**: https://www.anthropic.com/research/trustworthy-agents

Trustworthy agents in practice \ Anthropic

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Policy

Trustworthy agents in practice

Apr 9, 2026

AI “agents” represent the latest major shift in how people and organizations are using AI. A couple of years ago, AI models were only broadly available as chatbots—simple question-and-answer machines. Now, through products like 
Claude Code
 and 
Claude Cowork
, AI models can do much more: they can write and execute code, manage files, and complete tasks that span multiple applications. This represents a new frontier for governance.

Agents are already making real productivity gains 
for
 
our
 
customers
 and 
inside Anthropic
. But the autonomy that makes agents useful also introduces a range of new risks. Agents act with less human oversight, so there is more room for them to misread users’ intent and take actions with unintended consequences. Agents are also targets for “prompt injection” cyberattacks, which try to trick models into taking costly actions that they otherwise wouldn’t. As agents become more capable and as businesses trust them with more consequential actions, we expect both of these risks to intensify.

Last August, we published our 
framework for building trustworthy agents
, which guides how we navigate this tension. It’s built on five core principles: keeping humans in control, aligning with human values, securing agents’ interactions, maintaining transparency, and protecting privacy. In this post, we explain how agents work, describe how those principles play out in specific product decisions, and point to where industry, standards bodies, and governments can build the shared infrastructure the field needs.

How agents work

We 
define an agent
 as an AI model that directs its own processes and tool use when accomplishing a task—that is, deciding for itself how to achieve what users want, rather than following a fixed script. The practical difference between this and a chatbot is that an agent operates in a self-directed loop: it plans, acts, observes the result, adjusts, and repeats until the task is done or it needs to check in for human input.

Here’s an example of what we mean. If you were to ask Claude in 
Claude Cowork
 to submit receipts from a business trip, it would plan the steps one-by-one (transcribe each photo, pull the amount and vendor, categorize the expense, submit it through your company&#x27;s system), then work through them in sequence. If a hotel charge got flagged for exceeding the nightly cap, Claude might notice not just that the submission failed but that it doesn&#x27;t know what the cap is, or what other rules might apply. So it might pause to ask whether it should pull the expense policy from your company&#x27;s shared drive before trying again. With your go-ahead, it would fold what it learns into the plan and carry on, continuing until the task is done or it hits something else that needs your inp
