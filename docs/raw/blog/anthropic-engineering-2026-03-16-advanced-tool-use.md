# Introducing advanced tool use on the Claude Developer Platform

- **Source**: Anthropic-Engineering
- **Date**: 2026-03-16
- **URL**: https://www.anthropic.com/engineering/advanced-tool-use

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Engineering at Anthropic

Introducing advanced tool use on the Claude Developer Platform

Published 
Nov 24, 2025

We’ve added three new beta features that let Claude discover, learn, and execute tools dynamically. Here’s how they work.

The future of AI agents is one where models work seamlessly across hundreds or thousands of tools. An IDE assistant that integrates git operations, file manipulation, package managers, testing frameworks, and deployment pipelines. An operations coordinator that connects Slack, GitHub, Google Drive, Jira, company databases, and dozens of MCP servers simultaneously.

To 
build effective agents
, they need to work with unlimited tool libraries without stuffing every definition into context upfront. Our blog article on using 
code execution with MCP
 discussed how tool results and definitions can sometimes consume 50,000+ tokens before an agent reads a request. Agents should discover and load tools on-demand, keeping only what&#x27;s relevant for the current task.

Agents also need the ability to call tools from code. When using natural language tool calling, each invocation requires a full inference pass, and intermediate results pile up in context whether they&#x27;re useful or not. Code is a natural fit for orchestration logic, such as loops, conditionals, and data transformations. Agents need the flexibility to choose between code execution and inference based on the task at hand.

Agents also need to learn correct tool usage from examples, not just schema definitions. JSON schemas define what&#x27;s structurally valid, but can&#x27;t express usage patterns: when to include optional parameters, which combinations make sense, or what conventions your API expects.

Today, we&#x27;re releasing three features that make this possible:

Tool Search Tool, 
which allows Claude to use search tools to access thousands of tools without consuming its context window

Programmatic Tool Calling
, which allows Claude to invoke tools in a code execution environment reducing the impact on the model’s context window

Tool Use Examples
, which provides a universal standard for demonstrating how to effectively use a given tool

In internal testing, we’ve found these features have helped us build things that wouldn’t have been possible with conventional tool use patterns. For example,
 
Claude for Excel
 
uses Programmatic Tool Calling to read and modify spreadsheets with thousands of rows without overloading the model’s context window.

Based on our experience, we believe these features open up new possibilities for what you can build with Claude.

Tool Search Tool

The challenge

MCP tool definitions provide important context, but as more servers connect, those tokens can add up. Consider a five-server setup:

GitHub: 35 tools (~26K tokens)

Slack: 11 tools (~21K tokens)

Sentry: 5 tools (~3K tokens)

Grafana: 5 tools (~3K tokens)
