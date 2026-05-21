# Cursor

- **Source**: Cursor
- **Date**: 2026-04-15
- **URL**: https://cursor.com/blog/canvas

Interact with agent-created visualizations in canvases · Cursor

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

Apr 15, 2026

·

product

Interact with agent-created visualizations in canvases

Alex Vandak Maloney

 · 

6 min read

Table of Contents

↑

Components as building blocks

How we use canvases at Cursor

Incident response dashboard

PR review interface

Eval analysis

Autoresearch experiment

Increasing information bandwidth

Cursor can now respond by creating canvases to visually represent information. This allows you to explore and interact with custom interfaces instead of reading walls of texts in chats or markdown files that can be hard to digest.

With canvases, agents can create dashboards for real-world data as well as custom interfaces with logic and interactivity tailored to your request. Agents can use them to help you review PRs, learn new libraries, or even manage other agents in Cursor. In the 
Agents Window
, canvases are durable artifacts that live alongside your other tools like the terminal, browser, and source control.

#

Components as building blocks

Cursor renders canvases using a React-based UI library with first-party components like tables, boxes, diagrams, and charts. We gave agents access to existing components in Cursor like diffs and to-do lists, and we also instructed it to follow data visualization best practices.

You can create skills to teach agents how to create different kinds of canvases. For example, the 
Docs Canvas skill
 allows Cursor to generate an interactive architecture diagram of your repo.

#

How we use canvases at Cursor

We&#x27;ve found canvases particularly useful for data-intensive tasks. They allow agents to arrange information in a way that&#x27;s non-linear and easier to digest than plain text.

#

Incident response dashboard

Datadog
, 
Databricks
, and 
Sentry
 MCPs in Cursor have enabled us to dive into observability data with agents, which often find insights that we&#x27;d miss on our own. Before canvases, the agent would represent time-series data in a markdown table, which was hard to interpret and required additional steps to visualize.

Now, the agent can create visualizations in a canvas that join data from multiple sources, including local debug files, into a single chart.

#

PR review interface

We are reviewing larger diffs than ever before. Traditional tools present all changes equally, requiring us to figure out what parts of the diff are most important.

With canvases, Cursor can logically group changes together, prioritize what&#x27;s most important for you to review, and present a rich interface for you to explore the change set. It can even write pseudocode representations for tricky algorithms.

#

Eval
