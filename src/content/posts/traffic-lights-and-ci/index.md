---
title: "Traffic lights and product health"
description: "Or why we should not use three colours to represent product health"
pubDate: 2026-07-23
heroImage: ./hero.svg
---


![checkmark, green background](green.svg)
![exclaimation mark, yellow background](yellow.svg)
![cross, red background](red.svg)

One of the most critical product health indicators are the signals we get from CI (continuous integration). Release decisions should be gated on this signal, otherwise why bother having CI at all? 

In my experience, teams can treat CI signals as _fuzzy_. After qualifying the failure, discussions change red signals to green. I have seen yellow signals used to quantify and indicate known failures. I have seen red signals changed to green forcibly using CI APIs. If you adopt any of these positions, your CI is failing you and you do not have a good grasp on your product health.

_"Woah! That's a bold statement"_ I hear you cry. When you abuse CI signals, you will fail to differentiate between _actual_ failures and _recurring_ known failures. I have experienced this CI signal fuzziness first hand and the side effect was that the team became afraid to  make changes and release product updates.

As Azure Sphere enters [sustained engineering](../ai-first-sustained-engineering) and engineers are off-boarded, there should be no ambiguity around product health. We are using CI signals as indicators of product health. My priority for the Azure Sphere team has been addressing the causes of fuzzy signals. A red pipeline should indicate an _actual_ test failure, not an infrastructure/dependency failure. There should be no way a CI run can resolve to yellow. There should be no abuse of state setting APIs to mask an infrastructure failure as healthy CI.

Yes this takes investment, but the investment pays dividends in the end.

## Before de-fuzzing

Prior to effort, the team used to have a dedicated BVT (build verify test) triage rotation. One human engineers' time spent looking at pipelines all week to differentiate between recurring and new failures. The team also did not have any confidence in release readiness and everyone was scared to make changes in case the changed caused a production issue. Uncertainty was introduced because CI signals were fuzzy. 

## During de-fuzzing

Instead of one human engineer spending their entire week looking at CI failures to determine release readiness, we stopped trying to release altogether. We needed to take stock of where we were. We transitioned to two one hour meetings per week to look at CI failures. Any failures were root caused in these meetings and through this process, we began to identify the big targets that were the cause of the fuzzy signals. We picked off targets one by one. Many targets were multi-week/month tasks, and once addressed, revealed new and previously hidden CI failures. Wheels within wheels!

## After de-fuzzing

Now we spend 5-10 minutes looking at AI generated pipeline failure summaries using [Azure DevOps agentic workflows](https://github.com/githubnext/ado-aw). There is very little to discuss. Most pipelines are green, and those that are not are usually caused by transient external factors (e.g. internal package registry is down). This is after around a year of concrete investments, paying down technical debt and even rewriting an internal CLI tool for over-the-air testing -- that's what sustained engineering is about! 

### Where do agents fit in?

As part of the investment, we spent time breaking down pipelines into discrete, easy to diagnose steps. Beefing up pipeline logging was also a priority. Given hueristics and access to logs, agents can identify and root cause errors far faster than humans. This is why we can successfully triage our CI failures with agents.

## Principles of CI as a product health indicator

* Red or green, no yellow CI indicators - a yellow traffic light does not indicate positive nor negative product health.
* No mental gymnastics - if an infrastructure failure exists, it needs to be root caused and fixed. Not explained away or "allowed".
* Discrete pipeline steps - no monolithic scripts. Discrete steps ease human or agent root cause failures.
* Data!!! Agents need logs to root cause pipeline issues. As much as is sensible.


