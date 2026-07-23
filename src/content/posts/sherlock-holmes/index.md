---
title: "Becoming Sherlock Holmes"
description: "A past time I have missed"
pubDate: 2026-07-23
---

In the world of agents conducting work on my behalf, reaching a state of "flow" is tricky. With writing code largely removed from my domain by agents, the one that remains is debugging. I am not talking about python exceptions, I am talking about debugging complex "distributed" systems debugging.

## Azure Sphere

Azure Sphere is a hardware product. Development kits are available for people to build prototypes with. We ship an SDK with core specific compilers and linux sysroots for the on-board OS. Customers build applications using the SDK and transfer built applications to the board.

## FTDI

Before my time, it was decided 4 channel FTDI was to be the USB interface to communicate from host PC to device. FTDI chips provide USB<->UART conversion and this chip is hooked up to Azure Sphere (MT3620) on the dev kit. Given my background with MakeCode and the micro:bit which use DAPLink and UF2, I was of course offended at this decision that happened before my time. Nevertheless, that was the decision that was made.

One of the FTDI ports is used to talk to the OS via SLIP (Serial Line Internet Protocol) over Serial (Universal Asynchronous Receiver Transmitter) via FTDI USB. SLIP is a network transport that ships delimited IP packets. This means you need appropriate software on the host to decode SLIP frames received over the serial connection. Since the link ships IP frames, you also need to offer an IP endpoint on the host PC that applications can access and interface to the device.

I do want to take the time to point out with an ethernet USB network chip, none of this would be required.

## Enter the device communication service (DCS)

To facilitate `application <-> host IP <-> SLIP <-> OS` communication we use a Service (Windows) and daemon (systemd) on Linux. Both versions detect Azure Sphere devices and host a routable local IP interface to discovered devices. 

On Linux, this can be achieved using just the kernel SLIP driver, but this model does not support multiple devices (not a Linux limitation, but an Azure Sphere OS one). Some "genius" (me) decided to write the Linux version in Rust and diverge from the Windows dotnet version. There were lots of good reasons for doing this, mainly the strong history of incompatibility between these two worlds.

## Virtual devices

In addition to physical hardware, we have the ability to virtualise the MT3620. This is fantastic for CI testing as it is one of our most reliable tests... _or should be_... There's no hardware - it's all virtual - simple, right?

Wrong! The first support I added for QEMU in the Linux DCS was poor and frought with race conditions. The DCS required configuration to expose QEMU to host applications, tear down was completely broken and required explicit restart. Testing this all was a real pain too as it required changes across 3-4 repositories.

The sum? The most unreliable entirely virtual CI tests possible.

## Hardening QEMU support

I added the ability for a QEMU QMP (QEMU Management Protocol) socket to act as the mounting arbiter. The DCS is set up to talk to QEMU via QMP, query its chardev and mount it as a device. This also allows natural soft teardown via QMP monitoring! Neat.

After hardening QEMU support, the QEMU CI was still flakey. I added the best possible debugging and leveraged agents to cross reference logs between pipeline and DCS. My test runs (350) indicated 100% QEMU stability with the DCS changes. However, regularly scheduled pipelines continued to flake. What the heck?

## Elementary Watson

I had a brain wave. If the DCS is stable, then surely we must be hitting an interrupt storm or race condition in the OS? There is an easy way to determine this in QEMU: use QMP to inspect the VM state, including its current register values. The DCS had all the right pieces to instrument this.

I ran it, and the findings were not what I expected: `VM State: Paused`.

In sum:
* DCS is stable and regularly trying to ping the device.
* The VM is not hung or in an interrupt storm.
* The VM is paused.

The key was unlocked through the observation: _regularly scheduled pipelines continued to flake_. So what runs only on scheduled builds? _SECURITY TOOLS_.

I had a theory, perhaps 



