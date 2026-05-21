# Collective Constitutional AI: Aligning a Language Model with Public Input

- **Source**: Anthropic-Research
- **Date**: 2025-11-20
- **URL**: https://www.anthropic.com/research/collective-constitutional-ai-aligning-a-language-model-with-public-input

Collective Constitutional AI: Aligning a Language Model with Public Input \ Anthropic

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Policy

Societal Impacts

Collective Constitutional AI: Aligning a Language Model with Public Input

Oct 17, 2023

Anthropic and the 
Collective Intelligence Project
 recently ran a public input process involving ~1,000 Americans to draft a constitution for an AI system. We did this to explore how democratic processes can influence AI development. In our experiment, we discovered areas where people both agreed with our in-house 
constitution
, and areas where they had different preferences. In this post, we share the resulting publicly sourced constitution, as well as what happened when we trained a new AI system against it using Constitutional AI.

Constitutional AI
 (CAI) is an Anthropic-developed method for aligning general purpose language models to abide by high-level normative principles written into a constitution. Anthropic’s language model 
Claude
 currently relies on a constitution curated by Anthropic employees. This constitution takes inspiration from outside sources like the United Nations Universal Declaration of Human Rights, as well as our own firsthand experience interacting with language models to make them more helpful and harmless.

While Constitutional AI is useful for making the normative values of our AI systems more transparent, it also highlights the outsized role we as developers play in selecting these values—after all, we wrote the constitution ourselves. That is why for this research, we were eager to curate a constitution using the preferences of a large number of people who do not work at Anthropic. We believe that our work may be one of the first instances in which members of the public have collectively directed the behavior of a language model via an online deliberation process. We hope that sharing our very preliminary efforts and findings will help others learn from our successes and failures, and help build upon this work.

Designing a Public Input Process to Collectively Draft a Constitution

Anthropic partnered with the Collective Intelligence Project to run a public input process using the 
Polis
 platform. Polis is an open-source platform for running online deliberative processes augmented by machine learning algorithms. It has been used all over the world by governments, academics, independent media, and citizens to understand what large groups of people think.

We asked approximately 1,000 members of the American public to “Help us pick rules for our AI Chatbot!” (Figure 1). We sought a representative sample of U.S. adults across age, gender, income, and geography (anonymized participant demographics can be found 
here
). Participants could either vote on existing rules (normative principles), or add their own. In total, participants contributed 1,127 statements to the Polis, and cast 38,252 votes (an average of 34 v
