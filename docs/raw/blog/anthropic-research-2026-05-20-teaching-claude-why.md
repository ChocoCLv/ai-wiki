# Teaching Claude why

- **Source**: Anthropic-Research
- **Date**: 2026-05-20
- **URL**: https://www.anthropic.com/research/teaching-claude-why

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Alignment

Teaching Claude why

May 8, 2026

Last year, we released a case study on 
agentic misalignment
. In experimental scenarios, we showed that AI models from many different developers sometimes took egregiously misaligned actions when they encountered (fictional) ethical dilemmas. For example, in one heavily discussed example, the models blackmailed engineers to avoid being shut down.

When we first published this research, our most capable frontier models were from the Claude 4 family. This was also the first model family for which we ran a live alignment assessment during training;
1
 agentic misalignment was one of several behavioral issues that surfaced. Thus, after Claude 4, it was clear we needed to improve our safety training and, since then, we have made significant updates to our safety training.

We use agentic misalignment as a case study to highlight some of the techniques we found to be surprisingly effective. Indeed, since Claude Haiku 4.5, every Claude model
2
 has achieved a perfect score on the agentic misalignment evaluation—that is, the models never engage in blackmail, where previous models would sometimes do so up to 96% of the time (Opus 4). Not only that, but we’ve continued to see improvements to other behaviors on 
our automated alignment assessment
.

In this post, we’ll discuss a few of the updates we’ve made to alignment training. We’ve learned four main lessons from this work:

Misaligned behavior can be suppressed via direct training on the evaluation distribution—but this alignment might not generalize well out-of-distribution 
(OOD). Training on prompts very similar to the evaluation can reduce blackmail rate significantly, but it did not improve performance on our held-out automated alignment assessment.

However, it is possible to do principled alignment training that generalizes OOD. 
For instance, documents about Claude’s constitution and fictional stories about AIs behaving admirably improve alignment despite being 
extremely
 OOD from all of our alignment evals.

Training on 
demonstrations
 of desired behavior is often insufficient.
 Instead, our best interventions went deeper: teaching Claude to explain 
why
 some actions were better than others, or training on richer descriptions of Claude’s overall character. Overall, our impression is, as we hypothesized in our discussion of Claude’s constitution, that teaching the 
principles
 underlying aligned behavior can be more effective than training on demonstrations of aligned behavior alone. Doing both together appears to be the most effective strategy.

The quality and diversity of data is crucial.
 We found consistent, surprising improvements from iterating on the quality of model responses in training data, and from augmenting training data in simple ways (for example, including tool definitions, even if not used).

We align Claude by training on co
