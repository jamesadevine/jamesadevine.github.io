---
title: "AI-First Sustained Engineering"
description: "How do you stand still in a fast-moving world?"
pubDate: 2026-07-15
heroImage: ./hero.svg
---

Azure Sphere [will be retired in 2031](https://learn.microsoft.com/en-us/azure-sphere/product-overview/retirement?view=azure-sphere-integrated). You heard that right. The product _I am currently responsible for_ is retiring, but not for 5 years _AND_ everything needs to keep running until 2031.

You may think the easiest thing to do is _nothing_. However it is hard to be still in a continuously and rapidly changing landscape. I mean you could stay still, but that same landscape will swallow you up eventually.

## Sustained engineering

I often equate sustained engineering to life support: keeping the critical systems running to keep the whole alive. Sustained engineering is actually more than that -- it is proactively identifying and addressing technical debt before it takes down a critical system. This includes removing components, rewriting components, updating dependencies, simplification. Refining the components down to their core, and making sure they are in the best state possible.

In any end of life product there is a significant amount of technical debt. With each passing day, that debt accrues interest, and the debt becomes harder to pay down the more time that passes.

### Why is sustained engineering necessary?

Human engineers are valuable. It is in your company's interests to have human engineers working on engineering tasks that accrue to profit.

## Incorrect models for sustained engineering

The best model for sustained engineering is one that is predictable and leads to the lowest steady-state effort. What follows are four examples of how _not_ to enter sustained engineering.

### Constant
![Time x axis. Effort y axis. Horizontal line across the graph that never changes](constant.png)
You decide that we need to retain the current staffing on the product until retirement. The engineering effort is predictable, but the work never ends. Leadership do not like so much resource attributed in this way, and may decide to reallocate engineers at any point.

### Late
![Time x axis. Effort y axis. Bell curve, ballooning in the middle.](late.png)
Engineers have moved onto another project, but acccrued technical debt is causing production issues. Now the cost to pay it down is significant. The effort requires pulling engineers from their new work back to the retiring product. This is very disruptive and delays the timeline of the new project.

### Reactive
![Time x axis. Effort y axis. Looks like a roller coast of effort.](reactive.png)
The team is building something shiny and new. You have this bothersome product to look after, but you really like the new shiny thing. A fire starts on the retiring product and your team is pulled back. This repeats over and over until retirement. Customers are unhappy with all the disruption. Worse still, the ship dates of the new shiny thing are forever slipping.

### Deferred 
![Time x axis. Effort y axis. Delayed exponential curve.](deferred.png)
Again, the team is off building something shiny and new. The first signs of smoke appear on the retiring product, but customers are not yet complaining. You keep focusing on the new product. Finally, the smoke turns into a fire, then an inferno. Leadership are not happy. The new shiny thing is canned and the team are returned to the retiring product with immediate effect. Everyone is unhappy.


## The only way to execute sustained engineering
![Time x axis. Effort y axis. Effort high at the start, tails off at the end.](front-loaded.png)

In my opinion, it is best to pay off technical debt while the staffing levels are that of a continuing product. The earlier the debt is paid off, the faster people can be off boarded onto new efforts. Technical debt stops accruing interest, and the product remains in a healthy state for longer.

It is not possible to stand still in a fast moving world. The best strategy to keep a product alive is sustained engineering. To enter the lowest state of sustained engineering, pay off the technical debt early. The remaining work can easily be absorbed through agentic workflows - scheduled agent tasks that take place each day.