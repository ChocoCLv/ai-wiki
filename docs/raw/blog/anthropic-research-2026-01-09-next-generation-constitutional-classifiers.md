# Next-generation Constitutional Classifiers: More efficient protection against universal jailbreaks

- **Source**: Anthropic-Research
- **Date**: 2026-01-09
- **URL**: https://www.anthropic.com/research/next-generation-constitutional-classifiers

Next-generation Constitutional Classifiers: More efficient protection against universal jailbreaks \ Anthropic

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Alignment

Next-generation Constitutional Classifiers: More efficient protection against universal jailbreaks

Jan 9, 2026

Read the paper 

Large language models remain vulnerable to jailbreaks—techniques that can circumvent safety guardrails and elicit harmful information. Over time, we’ve implemented a variety of protections that have made our models much less likely to assist with dangerous user queries—in particular relating to the production of chemical, biological, radiological, or nuclear weapons (CBRN). Nevertheless, no AI systems currently on the market have perfectly robust defenses.

Last year, we described a new approach to defend against jailbreaks which we called “
Constitutional Classifiers
:” safeguards that monitor model inputs and outputs to detect and block potentially harmful content. The novel aspect of the approach was that the classifiers were trained on synthetic data generated from a &quot;constitution,” which included natural language rules specifying what’s allowed and what isn’t. For example, Claude should help with college chemistry homework, but not assist in the synthesis of Schedule 1 chemicals.

Constitutional Classifiers worked quite well. Compared to an unguarded model, the first generation of the classifiers reduced the jailbreak success rate from 86% to 4.4%—that is, they blocked 95% of attacks that might otherwise bypass Claude’s built-in safety training. We were particularly interested in whether the classifiers could prevent universal jailbreaks—consistent attack strategies that work across many queries—since these pose the greatest risk of enabling real-world harm. They came close: we ran a bug bounty program challenging people to break the system, in which one universal jailbreak was found.

While effective, those classifiers came with tradeoffs: they increased compute costs by 23.7%, making the models more expensive to use, and also led to a 0.38% increase in refusal rates on harmless queries (that is, it made Claude somewhat more likely to refuse to answer perfectly benign questions, increasing frustration for the user).

We’ve now developed the next generation, Constitutional Classifiers++, and described them in a 
new paper
. They improve on the previous approach, yielding a system that is even more robust, has a much lower refusal rate, and—at just ~1% additional compute cost—is dramatically cheaper to run.

We iterated on many different approaches, ultimately landing on an ensemble system. The core innovation is a two-stage architecture: a probe that looks at Claude’s internal activations (and which is very cheap to run) screens all traffic. If it identifies a suspicious exchange, it escalates it to a more powerful classifier, which, unlike our previous system, screens both sides of a c
