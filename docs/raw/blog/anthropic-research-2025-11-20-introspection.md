# Signs of introspection in large language models

- **Source**: Anthropic-Research
- **Date**: 2025-11-20
- **URL**: https://www.anthropic.com/research/introspection

Emergent introspective awareness in large language models \ Anthropic

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Interpretability

Signs of introspection in large language models

Oct 29, 2025

Read the paper

Have you ever asked an AI model what’s on its mind? Or to explain how it came up with its responses? Models will sometimes answer questions like these, but it’s hard to know what to make of their answers. Can AI systems really introspect—that is, can they consider their own thoughts? Or do they just make up plausible-sounding answers when they’re asked to do so?

Understanding whether AI systems can truly introspect has important implications for their transparency and reliability. If models can accurately report on their own internal mechanisms, this could help us understand their reasoning and debug behavioral issues. Beyond these immediate practical considerations, probing for high-level cognitive capabilities like introspection can shape our understanding of what these systems are and how they work. Using interpretability techniques, we’ve started to investigate this question scientifically, and found some surprising results.

Our 
new research
 provides evidence for some degree of introspective awareness in our current Claude models, as well as a degree of control over their own internal states. We stress that this introspective capability is still highly unreliable and limited in scope: we do not have evidence that current models can introspect in the same way, or to the same extent, that humans do. Nevertheless, these findings challenge some common intuitions about what language models are capable of—and since we found that the most capable models we tested (Claude Opus 4 and 4.1) performed the best on our tests of introspection, we think it’s likely that AI models’ introspective capabilities will continue to grow more sophisticated in the future.

What does it mean for an AI to introspect?

Before explaining our results, we should take a moment to consider what it means for an AI model to introspect. What could they even be introspecting 
on
? Language models like Claude process text (and image) inputs and produce text outputs. Along the way, they perform complex internal computations in order to decide what to say. These internal processes remain largely mysterious, but we know that models use their internal neural activity to 
represent abstract concepts
. For instance, prior research has shown that language models use specific neural patterns to distinguish 
known vs. unknown people
, evaluate the 
truthfulness of statements
, encode 
spatiotemporal coordinates
, store 
planned future outputs
, and 
represent their own personality traits
. Models use these internal representations to 
perform computations and make decisions about what to say
.

You might wonder, then, whether AI models 
know
 about these internal representations, in a way that’s analogous to a human, s
