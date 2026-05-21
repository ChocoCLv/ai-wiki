# Equipping agents for the real world with Agent Skills

- **Source**: Anthropic-Engineering
- **Date**: 2026-04-15
- **URL**: https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Engineering at Anthropic

Equipping agents for the real world with Agent Skills

Published 
Oct 16, 2025

Claude is powerful, but real work requires procedural knowledge and organizational context. Introducing Agent Skills, a new way to build specialized agents using files and folders.

Update: We&#x27;ve published
 

Agent Skills

 
as an open standard for cross-platform portability. (December 18, 2025)

As model capabilities improve, we can now build general-purpose agents that interact with full-fledged computing environments. 
Claude Code
, for example, can accomplish complex tasks across domains using local code execution and filesystems. But as these agents become more powerful, we need more composable, scalable, and portable ways to equip them with domain-specific expertise.

This led us to create 

Agent Skills

: organized folders of instructions, scripts, and resources that agents can discover and load dynamically to perform better at specific tasks.
 
Skills extend Claude’s capabilities by packaging your expertise into composable resources for Claude, transforming general-purpose agents into specialized agents that fit your needs.

Building a skill for an agent is like putting together an onboarding guide for a new hire. Instead of building fragmented, custom-designed agents for each use case, anyone can now specialize their agents with composable capabilities by capturing and sharing their procedural knowledge. In this article, we explain what Skills are, show how they work, and share best practices for building your own.

A skill is a directory containing a SKILL.md file that contains organized folders of instructions, scripts, and resources that give agents additional capabilities. 

The anatomy of a skill

To see Skills in action, let’s walk through a real example: one of the skills that powers 
Claude’s recently launched document editing abilities
. Claude already knows a lot about understanding PDFs, but is limited in its ability to manipulate them directly (e.g. to fill out a form). This 
PDF skill
 lets us give Claude these new abilities.

At its simplest, a skill is a directory that contains a 
SKILL.md file
. This file must start with YAML frontmatter that contains some required metadata: 
name
 and 
description
. At startup, the agent pre-loads the 
name
 and 
description
 of every installed skill into its system prompt.

This metadata is the 
first level
 of 
progressive disclosure
: it provides just enough information for Claude to know when each skill should be used without loading all of it into context. The actual body of this file is the 
second level
 of detail. If Claude thinks the skill is relevant to the current task, it will load the skill by reading its full 
SKILL.md
 into context.

A SKILL.md file must begin with YAML Frontmatter that contains a file name and description, which is loaded into its system promp
