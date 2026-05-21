# Emotion concepts and their function in a large language model

- **Source**: Anthropic-Research
- **Date**: 2026-05-01
- **URL**: https://www.anthropic.com/research/emotion-concepts-function

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Interpretability

Emotion concepts and their function in a large language model

Apr 2, 2026

Read the paper

All modern language models sometimes act like they have emotions. They may say they’re happy to help you, or sorry when they make a mistake. Sometimes they even appear to become frustrated or anxious when struggling with tasks. What’s behind these behaviors? The way modern AI models are trained pushes them to 
act like a character
 with human-like characteristics. In addition, these models are known to develop rich and generalizable 
internal
 
representations
 of abstract concepts underlying their actions. It may then be natural for them to develop internal machinery that emulates aspects of human psychology, like emotions. If so, this could have profound implications for how we build AI systems and ensure they behave reliably.

In a new paper from our Interpretability team, we analyzed the internal mechanisms of Claude Sonnet 4.5 and found emotion-related representations that shape its behavior. These correspond to specific patterns of artificial “neurons” which activate in situations—and promote behaviors—that the model has learned to associate with the concept of a particular emotion (e.g., “happy” or “afraid”). The patterns themselves are organized in a fashion that echoes human psychology, with more similar emotions corresponding to more similar representations. In contexts where you might expect a certain emotion to arise for a human, the corresponding representations are active. Note that none of this tells us whether language models actually 
feel
 anything or have subjective experiences. But our key finding is that these representations are 
functional
, in that they influence the model’s behavior in ways that matter.

For instance, we find that neural activity patterns related to desperation can drive the model to take unethical actions; artificially stimulating (“steering”) desperation patterns increases the model’s likelihood of blackmailing a human to avoid being shut down, or implementing a “cheating” workaround to a programming task that the model can’t solve. They also appear to drive the model’s self-reported preferences: when presented with multiple options for tasks to complete, the model typically selects the one that activates representations associated with positive emotions. Overall, it appears that the model uses 
functional emotions
—patterns of expression and behavior modeled after human emotions, which are driven by underlying abstract representations of emotion concepts. This is not to say that the model has or experiences emotions in the way that a human does. Rather, these representations can play a causal role in shaping model behavior—analogous in some ways to the role emotions play in human behavior—with impacts on task performance and decision-making.

This finding has implications that at first may se
