---
title: "My New Metric"
description: "Agent time-to-agent, not human time-to-awesome"
pubDate: 2026-02-09
heroImage: ./hero.svg
---

One of my favourite metrics is "time-to-awesome". It is the time it takes for someone to install and build something useful with your tool. If the time-to-awesome is too high or too complex, the user loses interest and moves on.

As agents become widely adopted by software and citizen developers alike, time-to-awesome shifts away from being _user centric_, to _agent centric_. It becomes *agent time-to-awesome*. The same rule applies: if it takes too long for an agent to begin work on or use a piece of software, the user driving the agent will move on.

Here are a few examples that have come from injecting this mindset into my development practice:

### Capturing issues without breaking flow

Before, I'd spot issues while navigating a codebase but ignore them to stay focused on the task I set out to complete. Now, I've built a VS Code extension that lets Copilot create Azure DevOps issues contextually. Agent time-to-awesome is significantly reduced — the agent begins work outside my primary development flow.

### Lightweight work items

Before, I hand-crafted ultra-specific Copilot work items for the 100+ repos I attend. Now, repos contain agent instructions so work items can be context-light — Copilot retrieves what it needs per-repo. Work items focus only on the problem at hand (enhanced by Copilot, of course).

### Configuration without interaction

Before, I gave users commands to interactively create configuration files (commands like `npm init`). Now, agents infer configuration through user guides and MCP integrations — no interaction required.

---

Design for the agent. The human will thank you.
