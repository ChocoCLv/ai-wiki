# Cursor

- **Source**: Cursor
- **Date**: 2026-02-26
- **URL**: https://cursor.com/blog/third-era

The third era of AI software development · Cursor

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
 
ideas

Feb 26, 2026

·

ideas

The third era of AI software development

Michael Truell

 · 

4 min read

Table of Contents

↑

From Tab to agents

Cloud agents and artifacts

The shift is underway inside Cursor

When we started building Cursor a few years ago, most code was written one keystroke at a time. Tab autocomplete changed that and opened the first era of AI-assisted coding.

Then agents arrived, and developers shifted to directing agents through synchronous prompt-and-response loops. That was the second era. Now a third era is arriving. It is defined by agents that can tackle larger tasks independently, over longer timescales, with less human direction.

As a result, Cursor is no longer primarily about writing code. It is about helping developers build the factory that creates their software. This factory is made up of fleets of agents that they interact with as teammates: providing initial direction, equipping them with the tools to work independently, and reviewing their work.

Many of us at Cursor are already working this way. More than one-third of the PRs we merge are now created by agents that run on their own computers in the cloud. A year from now, we think the vast majority of development work will be done by these kinds of agents.

#

From Tab to agents

Tab excelled at identifying where low-entropy, repetitive work could be automated. For nearly two years, it produced significant leverage.

Then the models improved. Agents could hold more context, use more tools, and execute longer sequences of actions. Developer habits began to shift, slowly through the summer, then rapidly over the last few months with the releases of Opus 4.6, Codex 5.3, and Composer 1.5.

The transformation has been so complete that today, most Cursor users never touch the tab key. In March 2025, we had roughly 2.5x as many Tab users as agent users. Now, that is flipped: we now have 2x as many agent users as Tab users.

Agent usage in Cursor has grown over 15x in the last year.

But already this shift is giving way to something bigger. The Tab era lasted nearly two years. The second era, in which most work is done with synchronous agents, may not last one.

#

Cloud agents and artifacts

Compared to Tab, synchronous agents work further up the stack. They handle tasks that require context and judgment, but still keep the developer in the loop at every step. But this form of real-time interaction, combined with the fact that synchronous agents compete for resources on the local machine, means it is only practical to work with a few at a time.

Cloud agents remove both constraints. Each runs on its own virtual mac
