# Quantifying infrastructure noise in agentic coding evals

- **Source**: Anthropic-Engineering
- **Date**: 2026-04-24
- **URL**: https://www.anthropic.com/engineering/infrastructure-noise

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Engineering at Anthropic

Quantifying infrastructure noise in agentic coding evals

Published 
Feb 05, 2026

Infrastructure configuration can swing agentic coding benchmarks by several percentage points—sometimes more than the leaderboard gap between top models.

Agentic coding benchmarks like SWE-bench and Terminal-Bench are commonly used to compare the software engineering capabilities of frontier models—with top spots on leaderboards often separated by just a few percentage points. These scores are often treated as precise measurements of relative model capability and increasingly inform decisions about which models to deploy. However, we’ve found that infrastructure configuration alone can produce differences that exceed those margins. In internal experiments, the gap between the most- and least-resourced setups on Terminal-Bench 2.0 was 6 percentage points (p &lt; 0.01).

Static benchmarks score a model&#x27;s output directly—the runtime environment doesn’t factor into the result. Agentic coding evals are different: models are given a full environment where they write programs, run tests, install dependencies, and iterate over multiple turns. The runtime is no longer a passive container, but an integral component of the problem-solving process. Two agents with different resource budgets and time limits aren&#x27;t taking the same test.

Eval developers have begun accounting for this. Terminal-Bench 2.0, for instance, specifies recommended CPU and RAM on a per-task basis in their latest 2.0 release. However, specifying resources isn&#x27;t the same as enforcing them consistently. Moreover, we discovered that enforcement methodology can change what the benchmark ends up actually measuring.

How we got here

We run Terminal-Bench 2.0 on a Google Kubernetes Engine cluster. While calibrating the setup, we noticed our scores didn&#x27;t match the benchmark’s official leaderboard, and infra error rates were surprisingly high: as many as 6% of tasks were failing because of pod errors, most of which were unrelated to the model’s ability to solve the tasks.

The discrepancy in scores came down to enforcement. Our Kubernetes implementation treated the per-task resource specs as both a floor and a hard ceiling: each container was guaranteed the specified resources but killed the moment it exceeded them. Container runtimes enforce resources via two separate parameters: a guaranteed allocation—the resources reserved up front—and a hard limit at which the container is killed. When these are set to the same value, there&#x27;s zero headroom for transient spikes: a momentary memory fluctuation can OOM-kill a container that would otherwise have succeeded. To account for this, Terminal-Bench’s leaderboard uses a different sandboxing provider, whose implementation is more lenient, allowing temporary overallocation without terminating the container in order to
