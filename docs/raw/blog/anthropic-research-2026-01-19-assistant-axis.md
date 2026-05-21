# The assistant axis: situating and stabilizing the character of large language models

- **Source**: Anthropic-Research
- **Date**: 2026-01-19
- **URL**: https://www.anthropic.com/research/assistant-axis

The assistant axis: situating and stabilizing the character of large language models \ Anthropic

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Interpretability

The assistant axis: situating and stabilizing the character of large language models

Jan 19, 2026

Read the full paper

Left: 
Character archetypes form a &quot;persona space,&quot; with the Assistant at one extreme of the &quot;Assistant Axis.&quot; 
Right:
 Capping drift along this axis prevents models (here, Llama 3.3 70B) from drifting into alternative personas and behaving in harmful ways.

When you talk to a large language model, you can think of yourself as talking to a 
character
. In the first stage of model training, pre-training, LLMs are asked to read vast amounts of text. Through this, they learn to simulate heroes, villains, philosophers, programmers, and just about every other character archetype under the sun. In the next stage, post-training, we select one particular character from this enormous cast and place it center stage: the Assistant. It’s in this character that most modern language models interact with users.

But who exactly 
is
 this Assistant? Perhaps surprisingly, even those of us shaping it don&#x27;t fully know. We can try to instill certain values in the Assistant, but its personality is ultimately shaped by countless associations latent in training data beyond our direct control. What traits does the model associate with the Assistant? Which character archetypes is it using for inspiration? We’re not always sure—but we need to be if we want language models to behave in exactly the ways we want.

If you’ve spent enough time with language models, you may also have noticed that their personas can be unstable. Models that are typically helpful and professional can sometimes go “off the rails” and behave in unsettling ways, like adopting 
evil alter egos
, 
amplifying users’ delusions
, or engaging in 
blackmail
 in hypothetical scenarios. In situations like these, could it be that the Assistant has wandered off stage and some other character has taken its place?

We can investigate these questions by looking at the neural representations’ inside language models—the patterns of activity that inform how they respond. In a new paper, conducted through the 
MATS
 and 
Anthropic Fellows
 programs
, 
we look at several open-weights language models, map out how their neural activity defines a “persona space,” and situate the Assistant persona within that space.

We find that Assistant-like behavior is linked to a pattern of neural activity that corresponds to one particular direction in this space—the “Assistant Axis”—that is closely associated with helpful, professional human archetypes. By monitoring models’ activity along this axis, we can detect when they begin to drift away from the Assistant and toward another character. And by 
constraining
 their neural activity (“activation capping”) to prevent this
