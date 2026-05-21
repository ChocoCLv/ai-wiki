# Persona vectors: Monitoring and controlling character traits in language models

- **Source**: Anthropic-Research
- **Date**: 2025-11-20
- **URL**: https://www.anthropic.com/research/persona-vectors

Persona vectors: Monitoring and controlling character traits in language models \ Anthropic

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Interpretability

Persona vectors: Monitoring and controlling character traits in language models

Aug 1, 2025

Read the paper

Language models are strange beasts. In many ways they appear to have human-like “personalities” and “moods,” but these traits are highly fluid and liable to change unexpectedly.

Sometimes these changes are dramatic. In 2023, Microsoft&#x27;s Bing chatbot famously adopted an alter-ego called &quot;Sydney,” which 
declared love for users and made threats of blackmail
. More recently, xAI’s Grok chatbot would for a brief period sometimes 
identify as “MechaHitler”
 and make antisemitic comments. Other personality changes are subtler but still unsettling, like when models start 
sucking up to users
 or 
making up facts
.

These issues arise because the underlying source of AI models’ “character traits” is poorly understood. At Anthropic, we 
try
 to shape our models’ characteristics in positive ways, but this is more of an art than a science. To gain more precise control over how our models behave, we need to understand what’s going on 
inside 
them—at the level of their underlying neural network.

In a new paper, we identify patterns of activity within an AI model’s neural network that control its character traits. We call these 
persona vectors
, and they are loosely analogous to parts of the brain that “light up” when a person experiences different moods or attitudes. Persona vectors can be used to:

Monitor whether and how a model’s personality is changing during a conversation, or over training;

Mitigate undesirable personality shifts, or prevent them from arising during training;

Identify training data that will lead to these shifts.

Our automated pipeline takes as input a personality trait (e.g. “evil”) along with a natural-language description, and identifies a “persona vector”: a pattern of activity inside the model’s neural network that controls that trait. Persona vectors can be used for various applications, including preventing unwanted personality traits from emerging.

We demonstrate these applications on two open-source models, Qwen 2.5-7B-Instruct and Llama-3.1-8B-Instruct.

Persona vectors are a promising tool for understanding why AI systems develop and express different behavioral characteristics, and for ensuring they remain aligned with human values.

Extracting persona vectors

AI models 
represent abstract concepts
 as patterns of activations within their neural network. Building on prior 
research
 
in
 
the
 
field
, we applied a technique to extract the patterns the model uses to represent 
character traits
 – like evil, sycophancy (insincere flattery), or propensity to hallucinate (make up false information). We do so by comparing the activations in the model when it is exhibiting the trait to the ac
