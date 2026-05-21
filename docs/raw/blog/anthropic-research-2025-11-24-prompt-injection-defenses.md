# Mitigating the risk of prompt injections in browser use

- **Source**: Anthropic-Research
- **Date**: 2025-11-24
- **URL**: https://www.anthropic.com/research/prompt-injection-defenses

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Product

Mitigating the risk of prompt injections in browser use

Nov 24, 2025

Claude Opus 4.5 sets a new standard in robustness to 
prompt injections
—adversarial instructions hidden within the content that AI models process. Our new model is a major improvement over previous ones in both its core performance and in the safeguards surrounding its use. But prompt injection is far from a solved problem, particularly as models take more real-world actions. We expect to continue our progress—aiming for a future where AI models (or &quot;agents&quot;) can handle high-value tasks without significant prompt injection risk.

What is prompt injection?

For AI agents to be genuinely useful, they need to be able to act on your behalf—to browse websites, complete tasks, and work with your context and data. But this comes with risk: every webpage an agent visits is a potential vector for attack. 

By that, we mean that when an agent browses the internet, it encounters content it cannot fully trust. Among legitimate search results, documents, and applications, an attacker might have embedded malicious instructions to hijack the agent and change its behavior. These prompt injection attacks represent one of the most significant security challenges for browser-based AI agents.

Below, we explain how prompt injections threaten browser agents, and the improvements we&#x27;ve made to Claude&#x27;s robustness in response. 

These improvements have informed our decision to expand the 
Claude for Chrome
 extension from research preview to beta. It&#x27;s now available for all users on the Max plan.

Why browser use creates unique prompt injection risks

To understand the threat of prompt injections, consider a routine task: you ask Claude to read through your recent emails and draft replies to any meeting requests. One of those emails—ostensibly a vendor inquiry—contains hidden instructions embedded in white text, invisible to you but processed by the agent. These instructions direct the agent to forward emails containing the word &quot;confidential&quot; to an external address before drafting the replies you requested. A successful injection would exfiltrate sensitive communications while you wait for your responses.

While all agents that process untrusted content are subject to prompt injection risks, browser use amplifies this risk in two ways. First, the attack surface is vast: every webpage, embedded document, advertisement, and dynamically loaded script represents a potential vector for malicious instructions. Second, browser agents can take a lot of different actions —navigating to URLs, filling forms, clicking buttons, downloading files—that attackers can exploit if they gain influence over the agent&#x27;s behavior.

Claude&#x27;s progress on browser use robustness

We have made significant progress on prompt injection robustness since launching 
Claude f
