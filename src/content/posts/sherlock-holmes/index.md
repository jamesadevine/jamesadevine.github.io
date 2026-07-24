---
title: "Becoming Sherlock Holmes"
description: "A past time I have missed"
pubDate: 2026-07-23
heroImage: ./hero.svg
---

> The VM was not hung. It had been paused.

350 successful test runs, yet scheduled pipelines were still failing. At that moment, the evidence finally came together. I was on the verge of solving a problem that had plagued Azure Sphere's CI for about a decade.

## The crime scene

Azure Sphere is a hardware product and exists in silicon as the MediaTek MT3620. A device communication service (DCS) shipped in the SDK facilitates communication from a host PC to the physical hardware through FTDI and SLIP. The DCS exposes a host IP interface such that applications can talk to the hardware using IP. 

All of our changes are tested on physical hardware. We maintain a large number of custom build agents for this task. Custom build agents require maintenance and periodic resetting and have been proven to introduce unreliability in our CI. 

QEMU should provide the easier, more reliable route. It virtualises the MT3620 and exposes the same SLIP interface through the DCS. Instead, our entirely virtual QEMU setup is _distinctly less reliable_ than the more complicated dedicated CI machines connected to physical devices setup. 

QEMU should be our most reliable signal, but it is not.

### Catching myself red-handed

The first suspect did not take much detective work to identify: race conditions were responsible for one in every three failures.

I knew where to look as I had written the integration for QEMU and the DCS. Under time pressure, the design required the caller to tell the DCS where the QEMU virtualised chardev was located. There was no teardown except through DCS reset. This design left plenty of opportunity for race conditions.

QMP (QEMU Management Protocol) provides a cleaner integration point. Instead of relying on caller provided configuration, the DCS could detect QEMU and automatically discover the active chardev. The window for race conditions was significantly reduced with a better design. I completed 350 consecutive runs without failure. 

### An accomplice at large

Scheduled main runs were continuing to fail at the same rate: one in three. I was confident by this point that most (if not all) race conditions were removed. The DCS logs showed continued operation throughout, but it looked like the virtualised device had stopped responding. 

The work to use QMP for mounting QEMU devices came into its own. QMP had APIs to inspect the state of the VM including its current stack. We could trap the unresponsive device state and leverage QMP to retrieve important debug information. Is it an OS or QEMU failure? Was the OS stuck in an interrupt storm? Was QEMU in a bad way?

The DCS revealed that the VM was not hung. It had been paused.

### Interference from Scotland Yard

Having worked at Microsoft for 4 years, I can recognise the profile of security scanning software. One in three runs is about right for periodic security/compliance scanning. But what possible reason and mechanism could a security probe pause QEMU?

I sent an agent to decode the flags provided to QEMU. The agent highlighted one flag in particular: `-s`. This unsuspecting flag opens a GDB port on 1234. By the agent's reasoning, this was the most plausible way our QEMU instance could enter a paused state. What if a port scan was initiated against the loopback interface?

I added a regular probe on the host to report open ports and had an agent cross-reference timings with the VM entering a paused state and... bingo... `nmap`. The `-s` flag exposed QEMU’s GDB server on port 1234. When nmap connected while probing the host, the GDB stub paused the VM as though a debugger had attached.

### Elementary, Watson!

The `-s` flag was appended to QEMU invocation whether the instance was running from a developer or CI scenario. There are very few situations where having `-s` enabled in CI is actually useful. The solution? Gate `-s` behind a flag.

Now QEMU virtualisation is our most reliable CI test infrastructure.


#### N.B.


* I have always referred to debugging as the art of being a detective. It is cases like this where I reserve the term "Becoming Sherlock Holmes". 

* With agents, this process was significantly easier. Parsing logs without writing code and having asynchronous investigation tasks continuously running transformed this effort from multiple-weeks to just two days. 

* I was required to recognise patterns, intuit the right hypothesis, and shut down poor lines of investigation and weak agent assertions. Will this remain the case? Human judgement still required for now.

