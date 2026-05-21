# Sycophancy to subterfuge: Investigating reward tampering in language models

- **Source**: Anthropic-Research
- **Date**: 2025-11-20
- **URL**: https://www.anthropic.com/research/reward-tampering

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Alignment

Sycophancy to subterfuge: Investigating reward tampering in language models 

Jun 17, 2024

Read the paper

Perverse incentives are everywhere. Think of the concept of &quot;teaching to the test&quot;, where teachers focus on the narrow goal of exam preparation and fail to give their students a broader education. Or think of scientists working in the &quot;publish or perish&quot; academic system, publishing large numbers of low-quality papers to advance their careers at the expense of what we actually want them to produce: rigorous research.

Because AI models are often trained using reinforcement learning, which rewards them for behaving in particular ways, misaligned incentives can apply to them, too. When an AI model learns a way to satisfy the letter, but not necessarily the spirit, of its training, it’s called 
specification gaming
: models find ways to &quot;game&quot; the system in which they operate to obtain rewards while not necessarily operating as their developers intended.

As AI models become more capable, we want to ensure that specification gaming doesn’t lead them to behave in unintended and potentially harmful ways. A new paper from the Anthropic Alignment Science team investigates, in a controlled setting, how specification gaming can, in principle, develop into more concerning behavior.

Specification gaming and reward tampering

Specification gaming has been studied in AI models for many years. One example is an AI 
that was trained
 to play a boat-racing video game where the player picks up rewards from checkpoints along a racecourse. Instead of completing the race, the AI worked out that it could maximize its score (and thus its reward) by never finishing the course and simply circling the checkpoints endlessly.

Another example is 
sycophancy
. This is where a model produces responses that a user wants to hear, but which are not necessarily honest or true. It might, for example, flatter the user (&quot;what a great question!&quot;), or sympathize with their political views when under normal circumstances it would be more neutral. In and of itself, this might not be particularly worrying. But as our paper shows, the seemingly innocuous act of giving a model positive reinforcement for sycophancy might have unforeseen consequences.

Reward tampering is a specific, more troubling form of specification gaming. This is where a model has access to its own code and alters the training process itself, finding a way to &quot;hack&quot; the reinforcement system to increase its reward. This is like a person hacking into their employer’s payroll system to add a zero to their monthly salary.

AI safety researchers are particularly concerned with reward tampering for several reasons. First, as with specification gaming more generally, reward tampering is an AI model aiming for a different objective than that intended by its 
