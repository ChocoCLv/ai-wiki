# Constitutional Classifiers: Defending against universal jailbreaks

- **Source**: Anthropic-Research
- **Date**: 2025-11-20
- **URL**: https://www.anthropic.com/research/constitutional-classifiers

Constitutional Classifiers: Defending against universal jailbreaks \ Anthropic

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Alignment

Constitutional Classifiers: Defending against universal jailbreaks

Feb 3, 2025

A 
new paper
 from the Anthropic Safeguards Research Team describes a method that defends AI models against universal jailbreaks. A prototype version of the method was robust to thousands of hours of human red teaming for universal jailbreaks, albeit with high overrefusal rates and compute overhead. An updated version achieved similar robustness on synthetic evaluations, and did so with a 0.38% increase in refusal rates and moderate additional compute costs.

Large language models have extensive safety training to prevent harmful outputs. For example, we train Claude to refuse to respond to user queries involving the production of biological or chemical weapons.

Nevertheless, models are still vulnerable to 
jailbreaks
: inputs designed to bypass their safety guardrails and force them to produce harmful responses. Some jailbreaks flood the model with 
very long prompts
; others modify the 
style of the input
, such as uSiNg uNuSuAl cApItALiZaTiOn. Historically, jailbreaks have proved difficult to detect and block: these kinds of attacks were 
described over 10 years ago
, yet to our knowledge there are still no fully robust deep-learning models in production.

We’re developing better jailbreak defenses so that we can safely deploy increasingly capable models in the future. Under our 
Responsible Scaling Policy
, we may deploy such models as long as we’re able to mitigate risks to acceptable levels through appropriate safeguards—but jailbreaking lets users bypass these safeguards. In particular, we’re hopeful that a system defended by Constitutional Classifiers could allow us to mitigate jailbreaking risks for models which have passed the CBRN capability threshold outlined in our Responsible Scaling Policy
1
.

In 

our new paper

, we describe a system based on 
Constitutional Classifiers
 that guards models against jailbreaks. These Constitutional Classifiers are input and output classifiers trained on synthetically generated data that filter the overwhelming majority of jailbreaks with minimal over-refusals and without incurring a large compute overhead.

Results from human red teaming

We ran two main categories of tests to assess the effectiveness of Constitutional Classifiers.

First, we developed a prototype version of the system to identify and block specific scientific knowledge related to chemical, biological, radiological, and nuclear harms. We then invited independent jailbreakers to a 
bug-bounty program
 in which they were challenged to “red team” the system (i.e., to attempt to break it under experimental conditions to test its robustness).

Specifically, they were given a list of ten “forbidden” queries, and their task was to use whichever jailbreaking techniqu
