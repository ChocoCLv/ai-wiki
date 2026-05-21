# Designing AI-resistant technical evaluations

- **Source**: Anthropic-Engineering
- **Date**: 2026-01-22
- **URL**: https://www.anthropic.com/engineering/AI-resistant-technical-evaluations

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Engineering at Anthropic

Designing AI-resistant technical evaluations

Published 
Jan 21, 2026

What we learned from three iterations of a performance engineering take-home that Claude keeps beating.

Written by Tristan Hume, a lead on Anthropic&#x27;s performance optimization team. Tristan designed—and redesigned—the take-home test that&#x27;s helped Anthropic hire dozens of performance engineers.

Evaluating technical candidates becomes harder as AI capabilities improve. A take-home that distinguishes well between human skill levels today may be trivially solved by models tomorrow—rendering it useless for evaluation.

Since early 2024, our performance engineering team has used a take-home test where candidates optimize code for a simulated accelerator. Over 1,000 candidates have completed it, and dozens now work here, including engineers who brought up our Trainium cluster and shipped every model since Claude 3 Opus.

But each new Claude model has forced us to redesign the test. When given the same time limit, Claude Opus 4 outperformed most human applicants. That still allowed us to distinguish the strongest candidates—but then Claude Opus 4.5 matched even those. Humans can still outperform models when given unlimited time, but under the constraints of the take-home test, we no longer had a way to distinguish between the output of our top candidates and our most capable model.

I&#x27;ve now iterated through three versions of our take-home in an attempt to ensure it still carries signal. Each time, I’ve learned something new about what makes evaluations robust to AI assistance and what doesn&#x27;t.

This post describes the original take-home design, how each Claude model defeated it, and the increasingly unusual approaches I&#x27;ve had to take to ensure our test stays ahead of our top model’s capabilities. While the work we do has evolved alongside our models, we still need more strong engineers—just increasingly creative ways to find them.

To that end, we&#x27;re releasing the original take-home as an open challenge, since with unlimited time the best human performance still exceeds what Claude can achieve. If you can best Opus 4.5, we’d love to hear from you—details are at the bottom of this post.

The origin of the take-home

In November 2023, we were preparing to train and launch Claude Opus 3. We’d secured new TPU and GPU clusters, our large Trainium cluster was coming, and we were spending considerably more than we had in the past on accelerators, but we didn&#x27;t have enough performance engineers for our new scale. I 
posted on Twitter
 asking people to email us, which brought in more promising candidates than we could evaluate through our standard interview pipeline, a process that consumes significant time for staff and candidates

We needed a way to evaluate candidates more efficiently. So, I took two weeks to design a take-h
