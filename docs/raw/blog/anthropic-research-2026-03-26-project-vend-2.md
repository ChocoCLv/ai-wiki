# Project Vend: Phase two

- **Source**: Anthropic-Research
- **Date**: 2026-03-26
- **URL**: https://www.anthropic.com/research/project-vend-2

Skip to main content

Skip to footer

Research

Economic Futures

Commitments

Learn

News

Try Claude

Policy

Frontier Red Team

Project Vend: Phase two

Dec 18, 2025

In June, we revealed that we’d set up a small shop in our San Francisco office lunchroom, run by an AI shopkeeper. It was part of 
Project Vend
, a free-form experiment exploring how well AIs could do on complex, real-world tasks. Alas, the shopkeeper—a modified version of Claude we named “Claudius”—did 
not
 do particularly well. It lost money over time, had a strange identity crisis where it claimed it was a human wearing a blue blazer, and was goaded by mischievous Anthropic employees into selling products (particularly, for some reason, tungsten cubes) at a substantial loss.

But the capabilities of large language models in areas like reasoning, writing, coding, and much else besides are increasing at a breathless pace. Has Claudius’s “running a shop” capability shown the same improvement?

To find out, we and our partners at 
Andon Labs
 made some adjustments for phase two of Project Vend. One major change was the upgrade from an older model (phase one used Claude Sonnet 3.7) to newer, smarter ones (phase two used Claude Sonnet 4.0 and later Sonnet 4.5). We also updated Claudius’s instructions based on what we’d learned in phase one and gave it access to new tools (though note that we still didn’t specifically train a new model to be a shopkeeper, or add in any new defenses against the kinds of things that might go wrong).
1
 As we’ll see below, we also introduced Claudius to some new colleagues.

These changes did make Claudius’s shop more successful. It got a lot better at good-faith business interactions—reliably sourcing items, determining reasonable prices that maintained a profit margin, and executing sales. But the same eagerness to please that we observed in phase one still made Claudius a mark for some of the more adversarial testers among our staff.

The second phase of Project Vend contains even more lessons for developers and for anyone interested in autonomous AI at work. The idea of an AI running a business doesn’t seem as far-fetched as it once did. But the gap between “capable” and “completely robust” remains wide.

The numbers

Compared to the first phase of Project Vend, the numbers largely speak for themselves. As you can see below, Claudius’s business—which it decided to name “Vendings and Stuff”—began to perform significantly better than its admittedly rough start in phase one.

Changes to the setup of Project Vend seem to have stabilized and, eventually, improved its business performance. CRM = Claudius given access to Customer Relationship Management software; SF2 = second vending machine in San Francisco; NYC, LON = vending machines opened in New York City and London, respectively. Note: although we refer to “phase two,” there is not a completely clean demarcation between phases; we continued to iterate on the architecture throughout.

Profits made ov
