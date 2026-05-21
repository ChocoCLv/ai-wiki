# Auditing language models for hidden objectives

- **Source**: Anthropic-Research
- **Date**: 2025-11-20
- **URL**: https://www.anthropic.com/research/auditing-hidden-objectives

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Alignment

Interpretability

Auditing language models for hidden objectives

Mar 13, 2025

Read the paper

A new paper from the Anthropic Alignment Science and Interpretability teams studies 
alignment audits
—systematic investigations into whether models are pursuing hidden objectives. We practice alignment audits by deliberately training a language model with a hidden misaligned objective and asking teams of blinded researchers to investigate it. This exercise built practical experience conducting alignment audits and served as a testbed for developing auditing techniques for future study.

In 
King Lear
, the titular king decides to divide his kingdom among his three daughters based on how much they love him. The problem: his daughters—who understood that they were being evaluated—had an opportunity to “game” Lear’s test. Two of the daughters told him what he wanted to hear, flattering him with exaggerated expressions of love. The third daughter honestly expressed her more measured love, enraging Lear and losing her share of his kingdom.

There are clear similarities between how Lear evaluates his daughters and how we evaluate AI systems: We specify desired behaviors and check that AIs act in accordance with them. But what might happen if—like Lear’s daughters—AI systems understand how we’re grading them and how our tests can be gamed? We risk inadvertently deploying AIs that are “right for the wrong reasons,” showing us what we want to see while knowingly violating our intent.

What else could we do? One option is 
alignment audits
. Instead of judging AIs by their apparent behaviors—as Lear did with his daughters—we could look deeper to understand whether 
hidden misaligned objectives
 underlie those behaviors.

What would an alignment audit look like? What tools would we use? How would we know they work? In a 
new joint paper
 from Anthropic’s Alignment Science and Interpretability teams, we take first steps towards answering these questions. We:

Deliberately train an AI model with a hidden misaligned objective to serve as a testbed for alignment auditing;

Run a blind auditing game, where four teams of researchers investigate the model using techniques like analysis of training data, 
interpretability with sparse autoencoders
 (SAEs), and behavioral techniques; and

Study eight auditing techniques more systematically, analyzing their use for alignment audits in practice.

Fig 1: Structure of our blind auditing game. Our game is structured as a red team/blue team exercise. A red team trains a model behind a strict information barrier. Then the red team provides the model and a representative sample of its training data to auditing teams who are unaware of how the model was trained. These teams—which are allowed varying levels of model and data access—investigate this model and produce auditing reports. The red team grades these reports a
