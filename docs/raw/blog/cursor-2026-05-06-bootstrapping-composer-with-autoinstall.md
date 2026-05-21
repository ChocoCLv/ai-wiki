# Cursor

- **Source**: Cursor
- **Date**: 2026-05-06
- **URL**: https://cursor.com/blog/bootstrapping-composer-with-autoinstall

Bootstrapping Composer with autoinstall · Cursor

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

May 6, 2026

·

research

Bootstrapping Composer with autoinstall

Shomil Jain, Joshua Warner &amp; Andrew Zhai

 · 

6 min read

A notable aspect of how we develop 
Composer
 is the way we use past versions of the model to improve the training process for future ones.

One of the clearest opportunities for this kind of bootstrapping is environment setup. RL training requires runnable environments, and if the environment is broken at the start, the model wastes tokens debugging setup instead of learning to solve problems. In the worst cases, a bad environment can make a problem unsolvable entirely, which ends up burning compute for no reward signal.

To address this, we built Composer autoinstall, a system that uses earlier Composer models to automatically create working RL environments from unconfigured repository checkouts. During training of the most recent version of the model, Composer 2, we used its predecessor, Composer 1.5, to manage this process. Beyond simply following step-by-step instructions, we found that modern coding models will go to great lengths to successfully configure, mock project dependencies, and test that setup is successful.

#

Better environments mean better training signal

Like many aspects of our model development, autoinstall is inspired by production Cursor systems. In Cursor 
cloud agents
, we have a feature that automates the setup of cloud environments for users, to allow their agents to work on projects in a mock environment. Starting from a git checkout, the agent works to install packages, configure settings, and run basic checks to ensure that the code is running and stable. This allows future requests to start from the correct setup.

For RL training, the problem is even more central, but can be challenging. Starting from a repository, the goal of autoinstall is to create a runnable mock base version of the codebase in order to solve a future unseen coding problem. This base environment is critical because Composer is trained with a full set of tools, including programming language lint commands, search, and sandboxed use of shell. The failure to correctly set up the environment makes training inefficient and can waste compute for no reward signal.

#

One agent defines success, the next attempts it

Autoinstall occurs in two stages. In the first “goal setting” stage, we give the Cursor agent the codebase at a fixed checkout and ask it to propose 10 commands and a high-level description of the output that should run if the environment were correctly set up.

The agent will explore any readme or makefiles for the environment, as well as try typical lang
