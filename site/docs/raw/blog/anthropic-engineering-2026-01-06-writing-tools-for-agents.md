# Writing effective tools for agents — with agents

- **Source**: Anthropic-Engineering
- **Date**: 2026-01-06
- **URL**: https://www.anthropic.com/engineering/writing-tools-for-agents

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Engineering at Anthropic

Writing effective tools for agents — with agents

Published 
Sep 11, 2025

Agents are only as effective as the tools we give them. We share how to write high-quality tools and evaluations, and how you can boost performance by using Claude to optimize its tools for itself.

The 
Model Context Protocol (MCP)
 can empower LLM agents with potentially hundreds of tools to solve real-world tasks. But how do we make those tools maximally effective?

In this post, we describe our most effective techniques for improving performance in a variety of agentic AI systems
1
.

We begin by covering how you can:

Build and test prototypes of your tools

Create and run comprehensive evaluations of your tools with agents

Collaborate with agents like Claude Code to automatically increase the performance of your tools

We conclude with key principles for writing high-quality tools we’ve identified along the way:

Choosing the right tools to implement (and not to implement)

Namespacing tools to define clear boundaries in functionality

Returning meaningful context from tools back to agents

Optimizing tool responses for token efficiency

Prompt-engineering tool descriptions and specs

Building an evaluation allows you to systematically measure the performance of your tools. You can use Claude Code to automatically optimize your tools against this evaluation.

What is a tool?

In computing, deterministic systems produce the same output every time given identical inputs, while 
non-deterministic
 systems—like agents—can generate varied responses even with the same starting conditions.

When we traditionally write software, we’re establishing a contract between deterministic systems. For instance, a function call like 
getWeather(“NYC”)
 will always fetch the weather in New York City in the exact same manner every time it is called.

Tools are a new kind of software which reflects a contract between deterministic systems and non-deterministic agents. When a user asks &quot;Should I bring an umbrella today?,” an agent might call the weather tool, answer from general knowledge, or even ask a clarifying question about location first. Occasionally, an agent might hallucinate or even fail to grasp how to use a tool.

This means fundamentally rethinking our approach when writing software for agents: instead of writing tools and 
MCP servers
 the way we’d write functions and APIs for other developers or systems, we need to design them for agents.

Our goal is to increase the surface area over which agents can be effective in solving a wide range of tasks by using tools to pursue a variety of successful strategies. Fortunately, in our experience, the tools that are most “ergonomic” for agents also end up being surprisingly intuitive to grasp as humans.

How to write tools

In this section, we describe how you can collaborate with agents both to writ
