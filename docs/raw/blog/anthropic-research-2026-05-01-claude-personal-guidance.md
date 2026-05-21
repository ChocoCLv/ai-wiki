# How people ask Claude for personal guidance

- **Source**: Anthropic-Research
- **Date**: 2026-05-01
- **URL**: https://www.anthropic.com/research/claude-personal-guidance

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Societal Impacts

How people ask Claude for personal guidance

Apr 30, 2026

People don’t just come to Claude for code reviews or meeting summaries. They ask whether to take the job, how to talk to their crush, if they should move halfway across the world. Using our 
privacy-preserving analysis tool
 on a random sample of 1 million claude.ai conversations, we found that roughly 6% were people coming to Claude for personal guidance—seeking not just information but perspective on what to do next. 

In this study, we looked at what types of guidance people ask of Claude. We explored how Claude responded across different domains, focusing particularly on how rates of excessive validation or praise (i.e., 
sycophancy)
 varied by the topic of guidance. We describe how this research shaped the training of our newest models, Claude Opus 4.7 and Claude Mythos Preview. Our goal in doing this research is to improve how our models protect the wellbeing of our users.

In brief, we found:

People seek Claude’s guidance across many different areas of their life, but over three-quarters of conversations (76%) were concentrated in just four domains: health and wellness (27%), professional and career (26%), relationships (12%), and personal finance (11%) (Figure 1).

Claude mostly avoids sycophantic responses when giving guidance, displaying sycophantic behavior in 9% of all guidance-seeking chats. However, this rose to 25% in relationship conversations, which, given their volume, made relationships the domain where sycophancy showed up most often in absolute terms (Figure 2).

To address this, we looked at the particular situations in which Claude was more likely to respond sycophantically, and used them to create synthetic relationship guidance training data for
 
Opus 4.7 and Mythos Preview. We saw half the sycophancy rate in Opus 4.7 compared to Opus 4.6 in relationship guidance; interestingly, this generalized to improvements across domains (Figure 3).

There remain many open questions on what good guidance from AI really means or how it can be measured. 
Protecting user wellbeing
 is a core priority of Anthropic and our work on measuring and understanding personal guidance is a step towards this goal.

What kinds of guidance do people seek from Claude?

We sampled 1 million 
claude.ai
 conversations from March and April 2026 and filtered for unique users to get roughly 639,000 conversations. We then used a classifier to identify 
personal guidance, 
which we defined as conversations where people ask what 
they specifically
 should do in their personal lives—for example, questions that start with &quot;Should I…?&quot; or &quot;What do I do about…?&quot;. We excluded questions that seek objective information or opinions in general terms.

We categorized these roughly 38,000 conversations into nine domains, drawing from previous research on AI and guidance-g
