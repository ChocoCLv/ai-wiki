# Best practices for Claude Code

- **Source**: Anthropic-Engineering
- **Date**: 2026-01-26
- **URL**: https://www.anthropic.com/engineering/claude-code-best-practices

Best practices for Claude Code - Claude Code Docs

Skip to main content

Claude Code Docs
 home page

English

Search...

⌘
K

Ask AI

Claude Developer Platform

Claude Code on the Web

Claude Code on the Web

Search...

Navigation

Use Claude Code

Best practices for Claude Code

Getting started

Build with Claude Code

Administration

Configuration

Reference

Agent SDK

What&#x27;s New

Resources

Getting started

Overview

Quickstart

Changelog

Core concepts

How Claude Code works

Extend Claude Code

Explore the .claude directory

Explore the context window

Prompt caching

Use Claude Code

Store instructions and memories

Permission modes

Manage sessions

Common workflows

Prompt library

Best practices

Platforms and integrations

Overview

Remote Control

Claude Code on the web

Claude Code on desktop

Chrome extension (beta)

Computer use (preview)

Visual Studio Code

JetBrains IDEs

Code review &amp; CI/CD

Claude Code in Slack

On this page

Give Claude a way to verify its work

Explore first, then plan, then code

Provide specific context in your prompts

Provide rich content

Configure your environment

Write an effective CLAUDE.md

Configure permissions

Use CLI tools

Connect MCP servers

Set up hooks

Create skills

Create custom subagents

Install plugins

Communicate effectively

Ask codebase questions

Let Claude interview you

Manage your session

Course-correct early and often

Manage context aggressively

Use subagents for investigation

Rewind with checkpoints

Resume conversations

Automate and scale

Run non-interactive mode

Run multiple Claude sessions

Fan out across files

Run autonomously with auto mode

Avoid common failure patterns

Develop your intuition

Related resources

Use Claude Code

Best practices for Claude Code

Copy page

Tips and patterns for getting the most out of Claude Code, from configuring your environment to scaling across parallel sessions.

Copy page

Documentation Index

Fetch the complete documentation index at: 
https://code.claude.com/docs/llms.txt

Use this file to discover all available pages before exploring further.

Claude Code is an agentic coding environment. Unlike a chatbot that answers questions and waits, Claude Code can read your files, run commands, make changes, and autonomously work through problems while you watch, redirect, or step away entirely.

This changes how you work. Instead of writing code yourself and asking Claude to review it, you describe what you want and Claude figures out how to build it. Claude explores, plans, and implements.

But this autonomy still comes with a learning curve. Claude works within certain constraints you need to understand.

This guide covers patterns that have proven effective across Anthropic’s internal teams and for engineers using Claude Code across various codebases, languages, and environments. For how the agentic loop works under the hood, see 
How Claude Code works
.

Most best practices are based on one constraint: Claude’s co
