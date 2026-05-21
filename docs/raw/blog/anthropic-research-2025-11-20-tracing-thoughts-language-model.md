# Tracing the thoughts of a large language model

- **Source**: Anthropic-Research
- **Date**: 2025-11-20
- **URL**: https://www.anthropic.com/research/tracing-thoughts-language-model

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Interpretability

Tracing the thoughts of a large language model

Mar 27, 2025

Read the paper

Language models like Claude aren&#x27;t programmed directly by humans—instead, they‘re trained
 
on large amounts of data. During that training process, they learn their own strategies to solve problems. These strategies are encoded in the billions of computations a model performs for every word it writes. They arrive inscrutable to us, the model’s developers. This means that we don’t understand how models do most of the things they do.

Knowing how models like Claude 
think
 would allow us to have a better understanding of their abilities, as well as help us ensure that they’re doing what we intend them to. For example:

Claude can speak dozens of languages. What language, if any, is it using &quot;in its head&quot;?

Claude writes text one word at a time. Is it only focusing on predicting the next word or does it ever plan ahead?

Claude can write out its reasoning step-by-step. Does this explanation represent the actual steps it took to get to an answer, or is it sometimes fabricating a plausible argument for a foregone conclusion?

We take inspiration from the field of neuroscience, which has long studied the messy insides of thinking organisms, and try to build a kind of AI microscope that will let us identify patterns of activity and flows of information. There are limits to what you can learn just by talking to an AI model—after all, humans (even neuroscientists) don&#x27;t know all the details of how our own brains work. So we look inside.

Today, we&#x27;re sharing two new papers that represent progress on the development of the &quot;microscope&quot;, and the application of it to see new &quot;AI biology&quot;. In 
the first paper
, we extend 
our prior work
 locating interpretable concepts (&quot;features&quot;) inside a model to link those concepts together into computational &quot;circuits&quot;, revealing parts of the pathway that transforms the words that go into Claude into the words that come out. In 
the second
, we look inside Claude 3.5 Haiku, performing deep studies of simple tasks representative of ten crucial model behaviors, including the three described above. Our method sheds light on a part of what happens when Claude responds to these prompts, which is enough to see solid evidence that:

Claude sometimes thinks in a conceptual space that is shared between languages, suggesting it has a kind of universal “language of thought.” We show this by translating simple sentences into multiple languages and tracing the overlap in how Claude processes them.

Claude will plan what it will say many words ahead, and write to get to that destination. We show this in the realm of poetry, where it thinks of possible rhyming words in advance and writes the next line to get there. This is powerful evidence that even though models are trained
