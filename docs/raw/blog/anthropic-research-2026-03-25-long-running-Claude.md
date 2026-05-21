# Long-running Claude for scientific computing

- **Source**: Anthropic-Research
- **Date**: 2026-03-25
- **URL**: https://www.anthropic.com/research/long-running-Claude

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Science

Long-running Claude for scientific computing

Mar 23, 2026

In this post, Siddharth Mishra-Sharma
, 
a researcher on the Discovery team, explains how to apply multi-day agentic coding workflows—test oracles, persistent memory, and orchestration patterns—to scientific computing tasks even outside of one’s domain.

The premise

Most scientists currently using AI agents work in a conversational loop, managing each step of the process on a tight leash. As models have become 
significantly better at long-horizon tasks
 over the last year or so, a new way of working emerged: rather than getting involved with every detail, we can specify the high-level objective and set a team of agents loose to work autonomously. This makes it possible to complete projects in mere hours that might otherwise take us days, weeks, or even months. Certain types of scientific tasks fit well within this model, e.g., reimplementing a numerical solver, converting legacy scientific software written in an old Fortran dialect to a modern language, and debugging a large codebase against a reference implementation. These are tasks where the work is well-scoped, the success criteria are clear, and human oversight can be occasional rather than continuous.

Anthropic’s 
C compiler project
 demonstrated a version of this, where Claude worked across roughly 2,000 sessions to build a C compiler capable of compiling the Linux kernel. This post describes how to set up a similar pattern for scientific computing tasks using Claude Code, with a typical academic lab in mind. As a concrete example, I will walk through using Claude Opus 4.6 to 
implement a differentiable version of a cosmological Boltzmann solver
. This is numerical code that predicts the statistical properties of the afterglow of the Big Bang—the Cosmic Microwave Background, or CMB. It does this by evolving coupled equations for photons, baryons, neutrinos, and dark matter through the early universe.

Boltzmann solvers like 
CLASS
 and 
CAMB
 are core pieces of scientific infrastructure in cosmology, allowing us to constrain cosmological models using data from surveys like 
Planck 
and the
 Simons Observatory.
 A differentiable version—one that can propagate gradients through the full solver—enables the use of gradient-based inference methods, dramatically speeding up parameter estimation. Writing it in JAX is a natural fit here, since it gives us automatic differentiation and compatibility with accelerators (e.g., GPUs) essentially for free. 

Notably, the task isn’t in my core scientific domain—I have a high-level familiarity with the tools and the science, but don’t have the expertise to complete it myself in any reasonable time frame. Groups who 
do
 have that expertise have built 
differentiable
 
solvers
 in JAX with a subset of the features present in CLASS. These efforts typically represent months to years of
