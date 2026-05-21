# Automated Alignment Researchers: Using large language models to scale scalable oversight

- **Source**: Anthropic-Research
- **Date**: 2026-04-14
- **URL**: https://www.anthropic.com/research/automated-alignment-researchers

Automated Alignment Researchers: Using large language models to scale scalable oversight \ Anthropic

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Alignment

Automated Alignment Researchers: Using large language models to scale scalable oversight

Apr 14, 2026

Read the research

Large language models’ ever-accelerating rate of improvement raises two particularly important questions for alignment research.

One is how alignment can keep up. Frontier AI models are now contributing to the development of their successors. But can they provide the same kind of uplift for 
alignment
 researchers? Could our language models be used to help align themselves?

A second question is what we’ll do once models become smarter than us. Aligning smarter-than-human AI models is a research area known as “scalable oversight”. Scalable oversight has largely been discussed in 
theoretical, rather than practical
, terms—but at AI’s 
current pace
 of improvement, that might not be the case for much longer. For instance, models are already generating vast amounts of code. If their skills progress to the point where they’re generating millions of lines of incredibly complicated code that we can’t parse ourselves, it 
could become
 very difficult to tell whether they’re acting in the ways we intend.

In a new Anthropic Fellows study, we pursue both of these questions.

Our new study focuses on a problem known as “weak-to-strong supervision”, a problem that mirrors the one of overseeing smarter-than-human AI models. We start with a relatively strong “base” model—that is, a potentially-capable model that hasn’t yet received fine-tuning to provide its best-possible answers. Then, we use a much 
weaker
 model as a “teacher” to provide that extra fine-tuning, which it does by demonstrating what 
it
 considers ideal outputs to the strong base model. Finally, we evaluate how well the strong model performs after that weak fine-tuning.

In the worst case, the strong model will only be as good as its weak teacher. Ideally, however, the strong model will have learned from the weak teacher’s feedback—it will have interpreted those weak signals in a useful way, using that feedback to improve its performance. We can quantify how well it did so: if the strong model shows no improvement at all (it performs only as well as its weak teacher), we score it 0; if it uses the teacher’s feedback to achieve the ideal outcome—the best performance the strong model could possibly deliver—we score it 1. This measure represents the “performance gap recovered” (between the weak model and the upper limit of the strong model), or the PGR.

As a proxy for scalable oversight, the weak model stands in for humans, and the strong model for the much-smarter-than-human models we might one day need to oversee. If we can make progress on weak-to-strong supervision, we might find that our methods help us keep those ultra-smart models aligned to our values
