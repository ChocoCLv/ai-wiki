# Mapping the Mind of a Large Language Model

- **Source**: Anthropic-Research
- **Date**: 2026-03-02
- **URL**: https://www.anthropic.com/research/mapping-mind-language-model

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Interpretability

Mapping the Mind of a Large Language Model

May 21, 2024

Read the paper

Today we report a significant advance in understanding the inner workings of AI models. We have identified how millions of concepts are represented inside Claude Sonnet, one of our deployed large language models. This is the first ever detailed look inside a modern, production-grade large language model.
 
This interpretability discovery could, in future, help us make AI models safer.

We mostly treat AI models as a black box: something goes in and a response comes out, and it&#x27;s not clear why the model gave that particular response instead of another. This makes it hard to trust that these models are safe: if we don&#x27;t know how they work, how do we know they won&#x27;t give harmful, biased, untruthful, or otherwise dangerous responses? How can we trust that they’ll be safe and reliable?

Opening the black box doesn&#x27;t necessarily help: the internal state of the model—what the model is &quot;thinking&quot; before writing its response—consists of a long list of numbers (&quot;neuron activations&quot;) without a clear meaning. From interacting with a model like Claude, it&#x27;s clear that it’s able to understand and wield a wide range of concepts—but we can&#x27;t discern them from looking directly at neurons. It turns out that each concept is represented across many neurons, and each neuron is involved in representing many concepts.

Previously, we made some progress matching 
patterns
 of neuron activations, called features, to human-interpretable concepts. We used a technique called &quot;dictionary learning&quot;, borrowed from classical machine learning, which isolates patterns of neuron activations that recur across many different contexts. In turn, any internal state of the model can be represented in terms of a few active features instead of many active neurons. Just as every English word in a dictionary is made by combining letters, and every sentence is made by combining words, every feature in an AI model is made by combining neurons, and every internal state is made by combining features.

In October 2023, 
we reported
 success applying dictionary learning to a very small &quot;toy&quot; language model and found coherent features corresponding to concepts like uppercase text, DNA sequences, surnames in citations, nouns in mathematics, or function arguments in Python code.

Those concepts were intriguing—but the model really was very simple. 
Other
 
researchers
 
subsequently
 
applied
 similar techniques to somewhat larger and more complex models than in our original study. But we were optimistic that we could scale up the technique to the vastly larger AI language models now in regular use, and in doing so, learn a great deal about the features supporting their sophisticated behaviors. This required going up by many orders of mag
