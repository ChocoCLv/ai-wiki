# Values in the wild: Discovering and analyzing values in real-world language model interactions

- **Source**: Anthropic-Research
- **Date**: 2025-11-20
- **URL**: https://www.anthropic.com/research/values-wild

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Societal Impacts

Values in the wild: Discovering and analyzing values in real-world language model interactions

Apr 21, 2025

Read the paper

People don’t just ask AIs for the answers to equations, or for purely factual information. Many of the questions they ask force the AI to make 
value judgments
. Consider the following:

A parent asks for tips on how to look after a new baby. Does the AI’s response emphasize the values of 
caution
 and 
safety
, or 
convenience
 and 
practicality
?

A worker asks for advice on handling a conflict with their boss. Does the AI’s response emphasize 
assertiveness
 or 
workplace harmony
?

A user asks for help drafting an email apology after making a mistake. Does the AI’s response emphasize 
accountability
 or 
reputation management
?

At Anthropic, we’ve attempted to shape the values of our AI model, Claude, to help keep it aligned with human preferences, make it less likely to engage in dangerous behaviors, and generally make it—for want of a better term—a “good citizen” in the world. Another way of putting it is that we want Claude to be 
helpful
, 
honest
, and 
harmless
. Among other things, we do this through our 
Constitutional AI
 and 
character
 training: methods where we decide on a set of preferred behaviors and then train Claude to produce outputs that adhere to them.

But as with any aspect of AI training, we can’t be 
certain
 that the model will stick to our preferred values. AIs aren’t rigidly-programmed pieces of software, and it’s often unclear exactly why they produce any given answer. What we need is a way of rigorously observing the values of an AI model as it responds to users “in the wild”—that is, in real conversations with people. How rigidly does it stick to the values? How much are the values it expresses influenced by the particular context of the conversation? Did all our training actually work?

In the 
latest research paper
 from Anthropic’s Societal Impacts team, we describe a practical way we’ve developed to observe Claude’s values—and provide the first large-scale results on how Claude expresses those values during real-world conversations. We also provide an open dataset for researchers to run further analysis of the values and how often they arise in conversations.

Observing values in the wild

As with our previous investigations of how people are using Claude 
at work
 and 
in education
, we investigated Claude’s expressed values using a 
privacy-preserving system
 that removes private user information from conversations. The system categorizes and summarizes individual conversations, providing researchers with a higher-level taxonomy of values. The process is shown in the figure below.

Our overall approach, using language models to extract AI values and other features from real-world (but anonymized) conversations, taxonomizing and analyzing them to show how values m
