---
title: "Sustained Engineering"
description: "What sustained engineering is, why technical debt behaves like compound interest, and how AI can help teams stay ahead of it."
pubDate: 2026-05-27
---

Sustained engineering is the work that keeps a product healthy after the exciting part is over.

It is what happens after launch, after the announcement post, after the first customers arrive, and after the team has moved on to the next big thing. Bugs still appear. Dependencies age. Requirements shift. Tooling drifts. Documentation goes stale. The product keeps living, so the engineering effort has to keep living too.

That is sustained engineering: the continuous care required to keep software secure, operable, maintainable, and useful over time.

## What is it?

Sustained engineering is often mistaken for "just maintenance". I think that undersells it.

Maintenance sounds passive. Sustained engineering is active. It is the deliberate practice of preserving momentum in a system that is constantly being pulled towards disorder.

That work usually includes:

* fixing bugs and regressions
* updating dependencies and build systems
* improving observability and operability
* keeping tests relevant and trustworthy
* paying down technical debt
* refreshing documentation and automation
* adapting the product to new platforms, standards, and expectations

The goal is not merely to keep the lights on. The goal is to keep the product *changeable*. A product that still runs but cannot be safely modified is already in trouble.

## Technical debt can be tackled up front

The cheapest technical debt is the debt you never take on.

Some debt is avoidable with a little discipline at the point of change:

* write the test while the behaviour is still fresh in your mind
* automate the repetitive step when it first becomes annoying
* leave the code slightly clearer than you found it
* document the decision while the context still exists
* choose the simpler design before the complicated one becomes entrenched

This is not an argument for perfectionism. Shipping matters. Learning matters. Sometimes taking on debt is exactly the right trade-off.

But when a team repeatedly says "we'll clean that up later", it is usually not making a one-time decision. It is setting a cultural default. Over time, that default becomes the architecture.

## Technical debt can also be tackled later

Not every shortcut is a mistake. Sometimes delay is rational.

If you are still discovering product-market fit, or if a requirement is likely to change next week, it can make sense to defer cleanup. The wrong abstraction implemented beautifully is still the wrong abstraction.

Delayed debt repayment works when it is conscious:

* the shortcut is visible
* the cost is understood
* the ownership is clear
* there is an actual path back to health

The problem is that "later" is not a plan. It is a queue. And queues grow.

Once a debt item leaves the active context of the engineer who created it, it becomes harder to revisit. The rationale is lost. The code has changed around it. The tests are less trustworthy. The blast radius is larger. What looked like a one-hour cleanup becomes a week of archaeology.

## Debt accrues interest

Technical debt behaves a lot like financial debt: the longer you leave it, the more interest you pay.

That interest shows up in many ways:

* every feature takes longer to implement
* bugs become harder to diagnose
* onboarding slows down
* releases become riskier
* teams become afraid to touch critical paths
* simple changes require expert intervention

At first, the interest payments are easy to ignore. A few extra minutes here. A workaround there. A deployment note in someone's head instead of in the repository.

Then one day the team realises it is spending all of its time servicing old decisions and very little time creating new value.

That is the real cost of neglected sustained engineering. The product does not usually fail all at once. It gradually becomes expensive to care about.

## Addressing sustained engineering with AI

AI does not eliminate sustained engineering, but it can make it much easier to practice consistently.

The hard part of sustained engineering is rarely knowing that work exists. Usually, everyone already knows. The hard part is noticing issues early, gathering enough context, and turning vague friction into actionable change before it grows teeth.

This is where AI can help:

* spotting stale documentation, dead code, or inconsistent patterns
* summarising build and test failures across many repositories
* drafting dependency updates and small refactorings
* creating first-pass pull requests for routine cleanup
* surfacing likely ownership and relevant context from existing code
* converting repeated operational pain into automations and work items

Used well, AI becomes a force multiplier for the boring-but-important work that sustained engineering depends on. It helps teams react sooner, while the debt is still small and the context still exists.

There is an important caveat though: AI is best at the first 80% of the routine work. It can identify patterns, prepare changes, and reduce the activation energy to act. But judgment still matters. Teams still need to decide what is worth fixing now, what can wait, and what trade-offs they are willing to own.

In other words, AI can help pay down the interest. It should not be the excuse to borrow more recklessly.

## The real opportunity

The biggest opportunity is not "AI writes the fix". It is "AI helps sustained engineering happen before the problem becomes urgent".

If an agent can notice the stale dependency, draft the update, run the build, and open the pull request while the issue is still small, the team gets to review a clean, bounded change instead of scheduling a painful migration quarter later.

That changes the economics of technical debt.

Sustained engineering has always been valuable. AI just makes it easier to do the work while it is still cheap.

And that may be the most important part: sustained engineering is not what happens when innovation is over. It is what allows innovation to continue.
