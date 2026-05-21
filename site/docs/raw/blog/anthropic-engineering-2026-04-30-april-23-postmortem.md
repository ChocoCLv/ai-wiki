# An update on recent Claude Code quality reports

- **Source**: Anthropic-Engineering
- **Date**: 2026-04-30
- **URL**: https://www.anthropic.com/engineering/april-23-postmortem

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Engineering at Anthropic

An update on recent Claude Code quality reports

Published 
Apr 23, 2026

We traced recent reports of Claude Code quality issues to three separate changes. Here&#x27;s what happened and what we&#x27;re changing.

Over the past month, we’ve been looking into reports that Claude’s responses have worsened for some users. We’ve traced these reports to three separate changes that affected Claude Code, the Claude Agent SDK, and Claude Cowork. The API was not impacted.

All three issues have now been resolved as of April 20 (v2.1.116).

In this post, we explain what we found, what we fixed, and what we’ll do differently to ensure similar issues are much less likely to happen again.

We take reports about degradation very seriously. We never intentionally degrade our models, and we were able to immediately confirm that our API and inference layer were unaffected.

After investigation, we identified three different issues:

On March 4, we changed Claude Code&#x27;s default reasoning effort from 
high
 to 
medium
 to reduce the very long latency—enough to make the UI appear frozen—some users were seeing in 
high
 mode. This was the wrong tradeoff. We reverted this change on April 7 after users told us they&#x27;d prefer to default to higher intelligence and opt into lower effort for simple tasks. This impacted Sonnet 4.6 and Opus 4.6.

On March 26, we shipped a change to clear Claude&#x27;s older thinking from sessions that had been idle for over an hour, to reduce latency when users resumed those sessions. A bug caused this to keep happening every turn for the rest of the session instead of just once, which made Claude seem forgetful and repetitive. We fixed it on April 10. This affected Sonnet 4.6 and Opus 4.6.

On April 16, we added a system prompt instruction to reduce verbosity. In combination with other prompt changes, it hurt coding quality and was reverted on April 20. This impacted Sonnet 4.6, Opus 4.6, and Opus 4.7.

Because each change affected a different slice of traffic on a different schedule, the aggregate effect looked like broad, inconsistent degradation. While we began investigating reports in early March, they were challenging to distinguish from normal variation in user feedback at first, and neither our internal usage nor evals initially reproduced the issues identified.

This isn’t the experience users should expect from Claude Code. As of April 23, we’re resetting usage limits for all subscribers.

A change to Claude Code&#x27;s default reasoning effort

When we released Opus 4.6 in Claude Code in February, we set the default reasoning effort to 
high
.

Soon after, we received user feedback that Claude Opus 4.6 in high effort mode would occasionally think for too long, causing the UI to appear frozen and leading to disproportionate latency and token usage for those users.

In general, the longer the mode
