# Cursor

- **Source**: Cursor
- **Date**: 2026-04-30
- **URL**: https://cursor.com/blog/continually-improving-agent-harness

Continually improving our agent harness · Cursor

Skip to content

Cursor

Product

↓

Agents

Code Review

Cloud

Tab

CLI

Marketplace
 ↗

Enterprise

Pricing

Resources

↓

Changelog

Blog

Docs

Community

Help
 ↗

Workshops

Forum
 ↗

Careers

Product
 →

Enterprise

Pricing

Resources
 →

Sign in

Contact

Contact sales

Download

Blog
 
/
 
research

Apr 30, 2026

·

research

Continually improving our agent harness

Stefan Heule &amp; Jediah Katz

 · 

11 min read

Table of Contents

↑

Evolving the context window

Two ways of assessing harness changes

Tracking and repairing degradations

Customizing the harness for different models

Facilitating mid-chat model switching

The harness and the future of software development

We approach building the Cursor agent harness the way we&#x27;d approach any ambitious software product. Much of the work is vision-driven, where we start with an opinion about what the ideal agent experience should look like.

From there, we form hypotheses about how to get closer to that vision, run experiments to test them, and iterate using quantitative and qualitative signals from evals and real usage. That process depends on having the right online and offline instrumentation, so we can tell when a change actually makes the harness better.

When we get early access to new models, all of these approaches converge. We spend weeks customizing our harness to a model&#x27;s strengths and quirks until the same model inside our specially tuned harness is noticeably faster, smarter, and more efficient.

Occasionally we discover step-change improvements. More often, though, improving the harness is a matter of obsessively stacking small optimizations that together make agents better at building software.

#

Evolving the context window

At the heart of interacting with large language models is the 
context window
. When asking the agent to build something, the context window starts with the system prompt and tool descriptions, followed by the current state of the conversation, and finally the user&#x27;s request.

The way we populate and manage that window has evolved significantly over the history of Cursor.

When we first developed our 
coding agent
 in late 2024, models were much worse at choosing their own context and we invested lots of context engineering work into creating guardrails—for example, surfacing lint and type errors to the agent after every edit, rewriting its file reads when it requested too few lines, and even limiting the maximum number of tools it could call in one turn.

We also provided substantial amounts of static context that was always available to the agent at the start of each session. At various points, that included the folder layout of the codebase, code snippets that semantically matched the query, and compressed versions of files that the user manually attached.

That is mostly long gone.

We still include some useful static context (e.g., operating system, git status, current and recent
