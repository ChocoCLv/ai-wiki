# Building effective agents

- **Source**: Anthropic-Engineering
- **Date**: 2026-04-13
- **URL**: https://www.anthropic.com/engineering/building-effective-agents

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Engineering at Anthropic

Building effective agents

Published 
Dec 19, 2024

We&#x27;ve worked with dozens of teams building LLM agents across industries. Consistently, the most successful implementations use simple, composable patterns rather than complex frameworks. 

Over the past year, we&#x27;ve worked with dozens of teams building large language model (LLM) agents across industries. Consistently, the most successful implementations weren&#x27;t using complex frameworks or specialized libraries. Instead, they were building with simple, composable patterns.

In this post, we share what we’ve learned from working with our customers and building agents ourselves, and give practical advice for developers on building effective agents.

What are agents?

&quot;Agent&quot; can be defined in several ways. Some customers define agents as fully autonomous systems that operate independently over extended periods, using various tools to accomplish complex tasks. Others use the term to describe more prescriptive implementations that follow predefined workflows. At Anthropic, we categorize all these variations as 
agentic systems
, but draw an important architectural distinction between 
workflows 
and
 agents
:

Workflows
 are systems where LLMs and tools are orchestrated through predefined code paths.

Agents
, on the other hand, are systems where LLMs dynamically direct their own processes and tool usage, maintaining control over how they accomplish tasks.

Below, we will explore both types of agentic systems in detail. In Appendix 1 (“Agents in Practice”), we describe two domains where customers have found particular value in using these kinds of systems.

When (and when not) to use agents

When building applications with LLMs, we recommend finding the simplest solution possible, and only increasing complexity when needed. This might mean not building agentic systems at all. Agentic systems often trade latency and cost for better task performance, and you should consider when this tradeoff makes sense.

When more complexity is warranted, workflows offer predictability and consistency for well-defined tasks, whereas agents are the better option when flexibility and model-driven decision-making are needed at scale. For many applications, however, optimizing single LLM calls with retrieval and in-context examples is usually enough.

When and how to use frameworks

There are many frameworks that make agentic systems easier to implement, including:

The 
Claude Agent SDK
; 

Strands Agents SDK by AWS
;

Rivet
, a drag and drop GUI LLM workflow builder; and 

Vellum
, another GUI tool for building and testing complex workflows.

These frameworks make it easy to get started by simplifying standard low-level tasks like calling LLMs, defining and parsing tools, and chaining calls together. However, they often create extra layers of abstraction that can obsc
