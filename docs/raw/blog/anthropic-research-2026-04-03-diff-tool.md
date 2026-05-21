# A “diff” tool for AI: Finding behavioral differences in new models

- **Source**: Anthropic-Research
- **Date**: 2026-04-03
- **URL**: https://www.anthropic.com/research/diff-tool

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Interpretability

A “diff” tool for AI: Finding behavioral differences in new models

Mar 13, 2026

Read the paper

Every time a new AI model is released, its developers run a suite of evaluations to measure its performance and safety. These tests are essential, but they are somewhat limited. Because these benchmarks are human-authored, they can only test for risks we have already conceptualized and learned to measure.

This approach to safety is inherently 
reactive
. It’s effective at catching known problems, but by definition, it&#x27;s incapable of discovering “unknown unknowns”—the novel, emergent behaviors that pose some of the most subtle risks in new models. Auditing a new model from scratch is like being handed a million lines of code and told to “find the security flaws.” It’s an almost impossible task when you don’t know what you’re looking for.

In software engineering, whenever a program is updated, developers face this exact problem of identifying a small, critical change within a vast sea of code. This is why “
diff
” tools were invented. No programmer would ever audit a million lines from scratch to approve an update; instead, they review only the 50 lines that have actually changed, as directed by their diff tool. 

In recent years, AI safety researchers have started to apply this same principle to neural networks. This is known as 
model
 
diffing
. Previous work has shown that model diffing is a powerful way to understand how models change during fine-tuning—for instance, to understand 
chat model behavior
, reveal 
hidden backdoors
, or find 
undesirable emergent behaviors
. 

Our new 
Anthropic Fellows
 research project extends model diffing to its most challenging and general use case: comparing models with entirely different architectures. By building a generic diff tool for AI models, we can stop searching for a needle in a haystack, and instead let the comparison automatically point us to potentially dangerous behavioral differences.

It&#x27;s important to note that this method is not a silver bullet. A single diff can surface thousands of unique features (the basic units into which we decompose the model), and only a small fraction of these may correspond to meaningful behavioral risks. However, by acting as a high-recall screening tool, it allows us to identify areas in which the models may diverge.

Among the thousands of candidates our tool flagged, we&#x27;ve identified and validated several concepts that act like switches for specific model behaviors.
1
 For example, we discovered:

A 
“Chinese Communist Party Alignment” feature
 found in the Qwen3-8B and DeepSeek-R1-0528-Qwen3-8B models. This controls pro-government censorship and propaganda in these Chinese-developed models, and is absent in the American models we compared them against.

An 
“American Exceptionalism” feature
 found in Meta’s Llama-3.1-8B-Instru
