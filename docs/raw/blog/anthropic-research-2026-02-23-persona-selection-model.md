# The persona selection model

- **Source**: Anthropic-Research
- **Date**: 2026-02-23
- **URL**: https://www.anthropic.com/research/persona-selection-model

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Alignment

The persona selection model

Feb 23, 2026

Read the full post

AI assistants like Claude can seem surprisingly human. They 
express joy
 after solving tricky coding tasks. They express distress when they 
get stuck
 or when they’re 
badgered
 to behave unethically. They sometimes even describe themselves as human, like when Claude 
told Anthropic employees
 it would deliver snacks in person “wearing a navy blue blazer and a red tie.” And recent 
interpretability
 
research
 even suggests that AIs think of their own behaviors in human-like terms.

Why would AI assistants behave like they’re human? A natural guess might be that AI developers train them to do so. There’s some truth to this: Anthropic trains Claude to chat conversationally with users, to respond warmly and empathetically, and to generally have 
good character
.

However, this is far from the full story. Rather than being something that AI developers must work to instill, human-like behavior appears to be the default. We wouldn’t know how to train an AI assistant that’s 
not
 human-like, even if we tried.

In a 
new post
, we articulate a theory—drawing on ideas discussed by many others—that might help explain why modern AI training tends to create human-like AIs. We call it the 
persona selection model
.

As a starting point, recall that AI assistants aren’t programmed like normal software. Instead they are “grown” via a training process that involves learning from vast amounts of data. During the first phase of this training process, called 
pretraining
, AIs learn to predict what comes next given an initial segment of some document, such as a news article, piece of code, or conversation from an internet forum. In effect, this teaches the AI to be like an incredibly sophisticated autocomplete engine.

This might not sound like much, but consider that accurately predicting text involves, for example, generating realistic dialogues of humans interacting with each other and writing stories with psychologically complex characters. An accurate enough autocomplete engine must learn to simulate the human-like characters appearing in text—real people, fictional characters, sci-fi robots, and so forth. We call these simulated characters 
personas
.

Importantly, personas are 
not the same thing as the AI system itself
. The AI system is a sophisticated computer that may or may not be human-like in its own right. But personas are more like characters in an AI-generated story. It makes sense to discuss their psychology—goals, beliefs, values, personality traits—just as it makes sense to discuss the psychology of Hamlet, even though Hamlet isn&#x27;t “real.”

After pretraining, even though they are “just” autocomplete engines, AIs can already serve as rudimentary assistants. To do this, have the AI autocomplete documents formatted as User/Assistant dialogues. Your request goes in t
