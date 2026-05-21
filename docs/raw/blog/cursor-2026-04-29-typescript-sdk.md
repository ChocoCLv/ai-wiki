# Cursor

- **Source**: Cursor
- **Date**: 2026-04-29
- **URL**: https://cursor.com/blog/typescript-sdk

Build programmatic agents with the Cursor SDK · Cursor

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
 
product

Apr 29, 2026

·

product

Build programmatic agents with the Cursor SDK

Roshan Sadanani

 · 

6 min read

Table of Contents

↑

Deploy agents to production quickly

What developers are building

Start from a sample project

What&#x27;s next

We&#x27;re introducing the Cursor SDK so you can build agents with the same runtime, harness, and models that power Cursor.

The agents that run in the Cursor desktop app, CLI, and web app are now accessible with a few lines of TypeScript. Run it on your machine or on Cursor&#x27;s cloud against a dedicated VM, with any frontier model.

Coding agents are evolving from interactive tools for individual developers to programmatic infrastructure for organizations. The Cursor SDK lets you deploy agents without the overhead of building and maintaining the entire agent stack. Many teams are invoking agents directly from CI/CD pipelines, creating automations for end-to-end workflows, and embedding agents into their core products.

The Cursor SDK is now available in public beta for all users. Run 
npm install @cursor/sdk
 to get started, then use Cursor&#x27;s native 
/sdk
 skill for guidance as you build.

import

 { Agent } 

from

 &quot;@cursor/sdk&quot;

;

const

 agent

 =

 await

 Agent.

create

({

  apiKey: process.env.

CURSOR_API_KEY

!

,

  model: { id: 

&quot;composer-2&quot;

 },

  local: { cwd: process.

cwd

() },

});

const

 run

 =

 await

 agent.

send

(

&quot;Summarize what this repository does&quot;

);

for

 await

 (

const

 event

 of

 run.

stream

()) {

  console.

log

(event);

}

#

Deploy agents to production quickly

Building fast, reliable, and capable coding agents that run safely against your data requires meaningful engineering effort: secure sandboxing, durable state and session management, environment setup, and context management. And when a new model ships, teams often have to rework their agent loops to take advantage.

The Cursor SDK eliminates this complexity so you can focus on building useful agents.

Use production-ready cloud infrastructure

Cloud sessions initiated from the SDK run on the same optimized runtime we use for 
Cloud Agents
. Each agent gets its own dedicated VM with strong sandboxing, a clone of the repo, and a fully configured development environment.

Agents keep going when your laptop sleeps or network drops. You can stream the conversation and reconnect later. When the agent finishes, it can open a PR, push a branch, or attach demos and screenshots.

// Initiate cloud agent to start a task...:

const

 agent

 =

 await

 Agent.

create

({

  apiKey: process.env.

CURSOR_API_KEY


