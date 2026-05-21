# Harness design for long-running application development

- **Source**: Anthropic-Engineering
- **Date**: 2026-03-24
- **URL**: https://www.anthropic.com/engineering/harness-design-long-running-apps

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Engineering at Anthropic

Harness design for long-running application development

Published 
Mar 24, 2026

Harness design is key to performance at the frontier of agentic coding. Here&#x27;s how we pushed Claude further in frontend design and long-running autonomous software engineering.

Written by Prithvi Rajasekaran, a member of our
 Labs
 team.

Over the past several months I’ve been working on two interconnected problems: getting Claude to produce high-quality frontend designs, and getting it to build complete applications without human intervention. This work originated with earlier efforts on our 
frontend design skill
 and 
long-running coding agent harness
, where my colleagues and I were able to improve Claude’s performance well above baseline through prompt engineering and harness design—but both eventually hit ceilings.

To break through, I sought out novel AI engineering approaches that held across two quite different domains, one defined by subjective taste, the other by verifiable correctness and usability. Taking inspiration from 
Generative Adversarial Networks
 (GANs), I designed a multi-agent structure with a 
generator
 and 
evaluator
 agent. Building an evaluator that graded outputs reliably—and with taste—meant first developing a set of criteria that could turn subjective judgments like “is this design good?” into concrete, gradable terms.

I then applied these techniques to long-running autonomous coding, carrying over two lessons from our earlier harness work: decomposing the build into tractable chunks, and using structured artifacts to hand off context between sessions. The final result was a three-agent architecture—planner, generator, and evaluator—that produced rich full-stack applications over multi-hour autonomous coding sessions.

Why naive implementations fall short

We&#x27;ve previously shown that harness design has a substantial impact on the effectiveness of long running agentic coding. In an earlier
 experiment
, we used an initializer agent to decompose a product spec into a task list, and a coding agent that implemented the tasks one feature at a time before handing off artifacts to carry context across sessions. The broader developer community has converged on similar insights, with approaches like the &quot;
Ralph Wiggum
&quot; method using hooks or scripts to keep agents in continuous iteration cycles.

But some problems remained persistent. For more complex tasks, the agent still tends to go off the rails over time. While decomposing this issue, we observed two common failure modes with agents executing these sorts of tasks.

First is that models tend to lose coherence on lengthy tasks as the context window fills (see our post on 
context engineering
). Some models also exhibit &quot;context anxiety,&quot; in which they begin wrapping up work prematurely as they approach what they believe is their co
