# Cursor

- **Source**: Cursor
- **Date**: 2026-04-14
- **URL**: https://cursor.com/blog/multi-agent-kernels

Speeding up GPU kernels by 38% with a multi-agent system · Cursor

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

Apr 14, 2026

·

research

Speeding up GPU kernels by 38% with a multi-agent system

Our multi-agent system autonomously optimized 235 CUDA kernels for NVIDIA Blackwell 200 GPUs, achieving a 38% geomean speedup over baselines in just 3 weeks.

Wilson Lin – Cursor; Sahil Modi, Yuan Zhang &amp; Edward Lin – NVIDIA

 · 

10 min read

Table of Contents

↑

Kernel optimization as a test of agent system capabilities

SOL-ExecBench for problem generation and benchmarking

How we ran the experiment

38% speedup, with 19% of optimizations exceeding 2x improvements

Different optimization strategies for different problems

BF16 Grouped Query Attention with Paged Prefill

NVFP4 MoE Linear with Gating

BF16 Matrix Multiplication

A multi-agent system for building software

Over the past few months, we&#x27;ve been developing a multi-agent system that can build, maintain, and deploy complex software autonomously. As part of that work, we&#x27;ve been testing the system in a variety of domains, including having it 
build a browser from scratch
 and solve a research-level math problem on the 
First Proof benchmark
.

Recently, we began collaborating with NVIDIA on a new challenge: applying the multi-agent harness to optimize CUDA kernels. These are difficult technical problems with important real-world consequences: CUDA kernels are the core software that supports AI model training and inference on NVIDIA GPUs. Faster kernels mean better GPU utilization, reduced energy consumption, lower latency, and reduced cost per token—allowing providers to serve bigger, more capable models to more users at once.

Our multi-agent harness operated autonomously for three weeks across 235 problems. The system achieved a 38% geomean speedup by building and optimizing Blackwell GPU kernels from scratch, all the way down to the assembly level.

These levels of performance improvement are typically only found through months or years of work from highly experienced kernel engineers. The multi-agent system accomplished it in weeks, addressing a long-tail of kernel problems that had been impractical with existing approaches.

#

Kernel optimization as a test of agent system capabilities

One of the best ways to evaluate long-running, multi-agent systems is to give them open-ended optimization problems where even we don&#x27;t know the right answer. Kernel optimization problems meet this criteria: they provide measurable objectives that the system can iteratively optimize against, instead of targeting a simple known diff.

Today, engineers optimize kernels by breaking models into individual math operations and tuni
