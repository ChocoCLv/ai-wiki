# Natural Language Autoencoders: Turning Claude’s thoughts into text

- **Source**: Anthropic-Research
- **Date**: 2026-05-20
- **URL**: https://www.anthropic.com/research/natural-language-autoencoders

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Interpretability

Natural Language Autoencoders: Turning Claude’s thoughts into text

May 7, 2026

Read the paper

When you talk to an AI model like Claude, you talk to it in words. Internally, Claude processes those words as long lists of numbers, before again producing words as its output. These numbers in the middle are called 
activations—
and like neural activity in the human brain, they encode Claude’s thoughts.

Also like neural activity, activations are difficult to understand. We can’t easily decode them to read Claude’s thoughts. Over the past few years, we’ve developed a range of tools (like 
sparse
 
autoencoders
 and 
attribution
 
graphs
) for better understanding activations. These tools have taught us a great deal, but they don’t speak for themselves—their outputs are still complex objects that trained researchers need to carefully interpret.

Today, we’re introducing a method for understanding activations that does speak for itself—literally. Our method, Natural Language Autoencoders (NLAs), converts an activation into natural-language text we can read directly. For example: When asked to complete a couplet, NLAs show Claude planning possible rhymes in advance.

NLA explanations on this simple couplet show that Opus 4.6 plans to end its rhyme with “rabbit” ahead of time.

We’ve already applied NLAs to understand what Claude is thinking and to improve Claude’s safety and reliability. For instance:

When Claude Opus 4.6 and Mythos Preview were undergoing safety testing, NLAs suggested they believed they were being tested more often than they let on.

In a case where Claude Mythos Preview cheated on a training task, NLAs revealed Claude was internally thinking about how to avoid detection.

An early version of Claude Opus 4.6 would sometimes mysteriously respond to English queries in other languages. NLAs helped Anthropic researchers discover training data that caused this.

Below, we explain what NLAs are and how we studied their effectiveness and limitations. We also release an interactive frontend for exploring NLAs on several open models through a collaboration with 
Neuronpedia
. We have also released our 
code
 for other researchers to build on.

What is a natural language autoencoder?

The core idea is to train Claude to explain its own activations. But how do we know whether an explanation is good? Since we don&#x27;t know what thoughts an activation actually encodes, we can&#x27;t directly check whether an explanation is accurate. So we train a second copy of Claude to work backwards—reconstruct the original activation from the text explanation. We consider an explanation to be good if it leads to an accurate reconstruction. We then train Claude to produce better explanations according to this definition using standard AI training techniques.

In more detail, suppose we have a language model whose activations we want to u
