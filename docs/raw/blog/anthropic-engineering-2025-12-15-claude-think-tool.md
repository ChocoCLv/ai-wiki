# The &quot;think&quot; tool: Enabling Claude to stop and think in complex tool use situations

- **Source**: Anthropic-Engineering
- **Date**: 2025-12-15
- **URL**: https://www.anthropic.com/engineering/claude-think-tool

The &quot;think&quot; tool: Enabling Claude to stop and think \ Anthropic

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Engineering at Anthropic

The &quot;think&quot; tool: Enabling Claude to stop and think in complex tool use situations

Published 
Mar 20, 2025

A new tool that improves Claude&#x27;s complex problem-solving performance

Extended thinking update

Dec 15, 2025

Extended thinking capabilities have improved since its initial release, such that we recommend using that feature instead of a dedicated think tool in most cases. Extended thinking provides similar benefits—giving Claude space to reason through complex problems—with better integration and performance. See our extended thinking documentation for implementation details.

As we continue to enhance Claude&#x27;s complex problem-solving abilities, we&#x27;ve discovered a particularly effective approach: a &quot;think&quot; tool that creates dedicated space for structured thinking during complex tasks.

This simple yet powerful technique—which, as we’ll explain below, is different from Claude’s new “
extended thinking
” capability (see here for 
extended thinking implementation details
)—has resulted in remarkable improvements in Claude&#x27;s agentic tool use ability. This includes following policies, making consistent decisions, and handling multi-step problems, all with minimal implementation overhead.

In this post, we&#x27;ll explore how to implement the “think” tool on different applications, sharing practical guidance for developers based on verified benchmark results.

What is the &quot;think&quot; tool?

With the &quot;think&quot; tool, we&#x27;re giving Claude the ability to include an additional thinking step—complete with its own designated space—as part of getting to its final answer.

While it sounds similar to extended thinking, it&#x27;s a different concept. Extended thinking is all about what Claude does before it starts generating a response. With extended thinking, Claude deeply considers and iterates on its plan before taking action. The &quot;think&quot; tool is for Claude, once it starts generating a response, to add a step to stop and think about whether it has all the information it needs to move forward. This is particularly helpful when performing long chains of tool calls or in long multi-step conversations with the user.

This makes the “think” tool more suitable for cases where Claude does not have all the information needed to formulate its response from the user query alone, and where it needs to process external information (e.g. information in tool call results). The reasoning Claude performs with the “think” tool is less comprehensive than what can be obtained with extended thinking, and is more focused on 
new
 information that the model discovers.

We recommend using extended thinking for simpler tool use scenarios like non-sequential tool calls or straightforward instruction following
