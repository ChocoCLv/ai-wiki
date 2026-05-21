# Cursor

- **Source**: Cursor
- **Date**: 2026-05-13
- **URL**: https://cursor.com/blog/cloud-agent-development-environments

Development environments for your cloud agents · Cursor

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

May 13, 2026

·

product

Development environments for your cloud agents

Samantha Whitmore, David Wetterau &amp; Nick Bradford

 · 

7 min read

Table of Contents

↑

Multi-repo environments

Environment configuration as code

Improved agent-led environment setup

Environment governance and security controls

What&#x27;s next

Cloud agents are easier to parallelize than local agents, continue working when your laptop is closed, and can run autonomously in response to programmatic triggers.

But agents are only as capable as the environments they run in. An agent that can write code but can&#x27;t run tests, query services, or reach APIs cannot close the loop on its work.

To take engineering tasks from start to finish, cloud agents need a development environment similar to the setup on your laptop: cloned repositories, installed dependencies, credentials for internal toolchains, and access to build systems. Effective development environments give agents full context on your codebase and organization, so they can test and verify their work.

Today we&#x27;re shipping new tools for configuring cloud agent development environments. Cursor also can use these tools to set up and maintain your environments. Together, this release makes it easier for teams to run fleets of parallelized agents that handle tasks end-to-end, inside development environments you fully control.

#

Multi-repo environments

Most engineering work in the enterprise spans multiple codebases and repositories. Larger organizations running microservices often have many repos that need to move in tandem. An agent confined to a single repo has limited usefulness because it can&#x27;t reason across all the required context.

Cloud agents and automations now support multi-repo environments, building off our work on 
multi-root workspaces
. You can configure a single environment with all the repositories an agent needs for its work, with re-use across sessions. With multiple repos in scope, agents can reason about how a change in one part of the codebase affects others and work across repos to deliver, test, and verify changes.

Hear directly from some of our customers using multi-repo environments:

Amplitude

Decagon

Snyk

BILT

We run Cursor Automations across public Slack channels at Amplitude. Multi-repo support is what makes them actually useful. An agent can investigate a reported issue, figure out which repos it touches, and open a PR with the fix in the right places with full context.

Steven Cheng

Senior Engineering Manager, Amplitude

#

Environment configuration as code

To make it easier to change, debug, and rev
