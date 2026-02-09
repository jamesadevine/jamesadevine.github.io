---
title: "My Revised Metric"
description: "Agent time-to-awesome, not human time-to-awesome"
pubDate: 2026-02-09
heroImage: ./hero.svg
---

One of my favourite metrics is "time-to-awesome". It is the time it takes for someone to install and build something useful with your tool. If the time-to-awesome is too high or too complex, the user loses interest and moves on.

The way people use software is changing, rapidly. Will humans need to understand the tools we build in the same way as before? I am realising that the time-to-awesome metric is shifting too--away from being _user centric_, to _agent centric_. It becomes *agent time-to-awesome*. The same rule applies: if it takes too long or is too complex for an agent to use your tool, the user driving the agent will move on.

Here are a few examples that have come from injecting this mindset into my development practice:

### Decreasing my time-to-awesome with improved agent time-to-awesome

Before, I would spot issues while navigating a codebase but ignore them to stay focused on the task I set out to complete. Now, I have built a VS Code extension that lets VS Code Copilot create Azure DevOps for Github copilot issues contextually. My time to agent time-to-awesome is significantly reduced and the agent begins work outside my primary development flow.

### Decreasing agent time-to-awesome with improved context

Before, I hand-crafted ultra-specific Copilot work items for the 100+ repos I attend. Now, repos contain agent instructions so work items can be context-light — Copilot retrieves what it needs per-repo. Work items focus only on the problem at hand (enhanced by Copilot, of course).

### Design for agentic workflows

Before, I gave users commands to interactively create configuration files (commands like `npm init`). Now, agents infer configuration through user guides and MCP integrations — no interaction required.

---

Design for the agent. The human will thank you.
