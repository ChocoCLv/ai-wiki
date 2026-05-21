# Cursor

- **Source**: Cursor
- **Date**: 2026-04-21
- **URL**: https://cursor.com/blog/app-stability

Keeping the Cursor app stable · Cursor

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

Apr 21, 2026

·

research

Keeping the Cursor app stable

Andrew Chan &amp; Kevin Nguyen

 · 

8 min read

Table of Contents

↑

Detecting and measuring instability

Dual debugging strategies

Top-down

Bottom-up

Targeted mitigations

Preventing regressions, staying fast

Stability for a new generation of software

Many of our users spend their entire day using Cursor, which means even rare crashes can be extremely disruptive. At the same time, the challenge of keeping the app stable has grown as we&#x27;ve added users and shipped increasingly ambitious features like 
subagents
, 
instant grep
, 
browser use
, and more.

Most of these crashes are caused by the app running out of memory (OOM). Over the past few months, we&#x27;ve implemented systems to give us observability on crashes and memory pressure, high-confidence fixes and optimizations for hot paths, and guardrails to catch regressions before they ship.

Our OOM-per-session rate aggregated across all versions of the Cursor app has fallen 80% since its late-February peak, while OOM-per-request has fallen 73% since March 1. This post details the systems we built to get there.

#

Detecting and measuring instability

Our desktop app is built on the open-source foundations of Visual Studio Code and Electron, which gives it a multi-process architecture. This means crashes can occur in either the renderer processes which power the editor and the new agents window, or the utility processes which power extensions, storage, and agent functionality.

Renderer crashes are the most severe because they completely prevent the user from using the editor. We&#x27;ve found these are mostly caused by hitting V8 memory limits and are the focus of our most recent efforts. Extension crashes can also disrupt important functionality like language services, but typically recover without disrupting the user as much.

Every fatal crash is reported by our telemetry along with context such as the affected process, type of crash, device and application metadata, and minidumps and stack traces where available.

From these crash events, we&#x27;ve built metrics which we&#x27;re able to break down by app version, calculating rates on a per-session or per-request basis, with the former roughly capturing how many sessions experience crashes, and the latter how severe the crash problem is for affected sessions. These dashboards update within minutes of crash events, so we&#x27;re able to track releases of new versions closely and detect potential regressions quickly.

#

Dual debugging strategies

We take a two-pronged strategy to debugging app crashes and out-of-memory issues.

