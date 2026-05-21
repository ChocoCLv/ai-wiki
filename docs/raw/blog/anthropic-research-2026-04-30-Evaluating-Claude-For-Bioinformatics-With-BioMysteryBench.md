# Evaluating Claude’s bioinformatics research capabilities with BioMysteryBench

- **Source**: Anthropic-Research
- **Date**: 2026-04-30
- **URL**: https://www.anthropic.com/research/Evaluating-Claude-For-Bioinformatics-With-BioMysteryBench

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Science

Evaluating Claude’s bioinformatics research capabilities with BioMysteryBench

Apr 29, 2026

In this post, Brianna
, 
a researcher on the discovery team, shares results from a recent bioinformatics benchmarking effort.

Almost as soon as large language models could hold a conversation, people started asking how they’d stack up against human experts. Could models pass the bar exam? Could they answer medical licensing questions, or solve Olympiad math problems? Such 
benchmarks
—self-contained sets of human-vetted problems designed to evaluate a capability of a model—have now become a source of competition across AI developers, reported in model release system cards and tracked on 
many
 
online
 
leaderboards
. 

Competition aside, benchmarks help us tackle an important question: whether models are capable and reliable enough to support, or even produce, professional-level work. Scientists 
are using models
 to write code for analysis pipelines, propose hypotheses, and draw conclusions from data with the long-term aim of 
accelerating innovation and discovery
. But exactly how proficient is AI in science right now, and how quickly are Claude and other models improving? 

To answer this, the research community has built several benchmarks. 
MMLU-Pro
 tests expert-level knowledge and reasoning questions. 
GPQA
 poses graduate-level, &quot;Google-proof&quot; questions in biology, physics, and chemistry. 
LAB-Bench
 tests biology-specific knowledge work—reading the literature, interpreting figures, reasoning about protocols. Although these benchmarks were developed in the “chatbot” era, they’ve persisted into the agent and tool-use era, joined by even more difficult scientific reasoning evals like 
FrontierScience
 and 
Humanity&#x27;s Last Exam
, because knowledge and reasoning remain a vital measure of scientific capability.

Still, many real-world scientific tasks demand more than that. They require reading papers, querying databases, running experiments, coding and analysis. Now that models can do many of these things, benchmarks have evolved to reflect these workflows. 
BLADE
 tasks a model with a dataset and an open-ended task, and checks if the model takes similar analysis steps to a human scientist. 
BixBench
 uses biological datasets, and grades models on whether their conclusions line up with scientists’. In 
SciGym
, the model is dropped into a simulated biology lab, where it has to design and run its own experiments to uncover a hidden mechanism.

These benchmarks move us closer to measuring scientific capability, but they don&#x27;t quite test whether a model can devise creative solutions to the messy, open-ended problems that define research. This is why we developed BioMysteryBench, a bioinformatics benchmark that tasks Claude with the analysis of real-world datasets, while tackling some of the challenges inherent in evaluati
