# A postmortem of three recent issues

- **Source**: Anthropic-Engineering
- **Date**: 2025-12-14
- **URL**: https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Engineering at Anthropic

A postmortem of three recent issues

Published 
Sep 17, 2025

This is a technical report on three bugs that intermittently degraded responses from Claude. Below we explain what happened, why it took time to fix, and what we&#x27;re changing.

Between August and early September, three infrastructure bugs intermittently degraded Claude&#x27;s response quality. We&#x27;ve now resolved these issues and want to explain what happened.

In early August, a number of users began reporting degraded responses from Claude. These initial reports were difficult to distinguish from normal variation in user feedback. By late August, the increasing frequency and persistence of these reports prompted us to open an investigation that led us to uncover three separate infrastructure bugs.

To state it plainly: We never reduce model quality due to demand, time of day, or server load. The problems our users reported were due to infrastructure bugs alone.

We recognize users expect consistent quality from Claude, and we maintain an extremely high bar for ensuring infrastructure changes don&#x27;t affect model outputs. In these recent incidents, we didn&#x27;t meet that bar. The following postmortem explains what went wrong, why detection and resolution took longer than we would have wanted, and what we&#x27;re changing to prevent similar future incidents.

We don&#x27;t typically share this level of technical detail about our infrastructure, but the scope and complexity of these issues justified a more comprehensive explanation.

How we serve Claude at scale

We serve Claude to millions of users via our first-party API, Amazon Bedrock, and Google Cloud&#x27;s Vertex AI. We deploy Claude across multiple hardware platforms, namely AWS Trainium, NVIDIA GPUs, and Google TPUs. This approach provides the capacity and geographic distribution necessary to serve users worldwide.

Each hardware platform has different characteristics and requires specific optimizations. Despite these variations, we have strict equivalence standards for model implementations. Our aim is that users should get the same quality responses regardless of which platform serves their request. This complexity means that any infrastructure change requires careful validation across all platforms and configurations.

Timeline of events

Illustrative timeline of events on the 
Claude API
. Yellow: issue detected, Red: degradation worsened, Green: fix deployed.

The overlapping nature of these bugs made diagnosis particularly challenging. The first bug was introduced on August 5, affecting approximately 0.8% of requests made to Sonnet 4. Two more bugs arose from deployments on August 25 and 26.

Although initial impacts were limited, a load balancing change on August 29 started to increase affected traffic. This caused many more users to experience issues while others continued to see
