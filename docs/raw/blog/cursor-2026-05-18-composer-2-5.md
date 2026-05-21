# Cursor

- **Source**: Cursor
- **Date**: 2026-05-18
- **URL**: https://cursor.com/blog/composer-2-5

Introducing Composer 2.5 · Cursor

Skip to content

Cursor

Product

↓

Agents

Code Review

Cloud

Tab

CLI

Marketplace
 ↗

Enterprise

Pricing

Resources

↓

Changelog

Blog

Docs

Community

Help
 ↗

Workshops

Forum
 ↗

Careers

Product
 →

Enterprise

Pricing

Resources
 →

Sign in

Contact

Contact sales

Download

Blog
 
/
 
research

May 18, 2026

·

research

Introducing Composer 2.5

7 min read

Table of Contents

↑

Training Composer 2.5

Targeted RL with textual feedback

Synthetic data

Sharded Muon and dual mesh HSDP

Try Composer 2.5

Composer 2.5 is now available in Cursor.

It&#x27;s a substantial improvement in intelligence and behavior over 
Composer 2
. It is better at sustained work on long-running tasks, follows complex instructions more reliably, and is more pleasant to collaborate with.

We improved Composer by scaling training, generating more complex RL environments, and introducing new learning methods.

In addition to training Composer 2.5 on more difficult tasks, we improved behavioral aspects of the model like communication style and effort calibration. These dimensions are not well captured by existing benchmarks, but we find that they matter for real-world usefulness.

Composer 2.5 is built on the same open-source checkpoint as Composer 2, 
Moonshot&#x27;s Kimi K2.5
.

Together 
with SpaceXAI
, we&#x27;re training a significantly larger model from scratch, using 10x more total compute. With Colossus 2&#x27;s million H100-equivalents and our combined data and training techniques, we expect this to be a major leap in model capability.

#

Training Composer 2.5

Composer 2.5 contains several new improvements to our training stack. These changes target both model intelligence and usability.

#

Targeted RL with textual feedback

Credit assignment during RL is becoming an increasingly difficult challenge as rollouts can span hundreds of thousands of tokens. When a reward is computed over an entire rollout, it may be hard for the model to tell which specific decision helped or hurt the outcome. This is especially limiting when we want to discourage a localized behavior, such as a bad tool call, a confusing explanation, or a style violation. The final reward can tell us that something went wrong, but it is a noisy signal for 
where
 it went wrong.

To address this, we trained Composer 2.5 with targeted textual feedback.

1

 The idea is to provide feedback directly at the point in the trajectory where the model could have behaved better. For a target model message, we construct a short hint describing the desired improvement, insert that hint into the local context, and use the resulting model distribution as a teacher. We use the policy with the original context as the student and add an on-policy distillation KL loss that moves the student&#x27;s token probabilities toward the teacher&#x27;s. This gives us a localized training signal for the behavior we want to change, while still retaining the broader RL objective ove
