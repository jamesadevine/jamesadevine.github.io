---
permalink: /
title: "About"
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

Greetings!

My name is James Devine and I'm currently a Graduate Student studying at Lancaster University in the UK, supervised by [Joe Finney](https://www.lancaster.ac.uk/scc/about-us/people/joe-finney) & [Jason Alexander](http://www.jasonalexander.kiwi). My main research interests are curry, beer, and performing live music, although from time to time, I  like to dip my toes into various areas of Computer Science: operating systems, networking, physical computing, and embedded systems.

## The BBC micro:bit

In the summer of 2015 I completed my Bachelors in Computer Science and was invited by my final project supervisor [Joe Finney](https://www.lancaster.ac.uk/scc/about-us/people/joe-finney) to work on an interesting little project with the BBC. The "little project" turned out to be producing a C++ runtime for a credit card sized educational device called the [BBC micro:bit](http://microbit.org), with one device given to [every Year 7 (11---12 year old) school child in the U.K.](https://www.bbc.com/news/technology-33409311). A little project indeed!

[After an exciting summer](http://www.bbc.com/schoolreport/33428970) working with the likes of ARM, BBC, Farnell, Microsoft, Nordic Semiconductor and many more, I decided there was more fun to be had. Off of the back of my work with the BBC micro:bit, I embarked on a journey to obtain a PhD.

## CODAL

Forming the basis of my PhD is [CODAL](https://github.com/lancaster-university/codal), an evolution of the micro:bit runtime developed for the BBC micro:bit. The <b>C</b>omponent <b>O</b>riented <b>D</b>evice <b>A</b>bstraction <b>L</b>ayer abstracts each hardware component of a microcontroller as a software component and is used by [Microsoft MakeCode](https://makecode.com) to enable the easy programming of microcontrollers using [JavaScript/visual programming languages whilst nearing the performance of C/C++](https://dl.acm.org/citation.cfm?id=3211335). CODAL is now used across many devices and processor types including the SAMD, STM32, and NRF5x processor families. CODAL and MakeCode combined make the programming of microcontrollers simpler for novices.

## JACDAC

After simplifying the programming of microcontrollers for novices, I turned my attention towards a more physical problem: connecting external peripherals to microcontrollers. For novices it is tricky to wire external peripherals to microcontrollers correctly, and moreover, the protocols used to communicate between the main microcontroller and the external peripheral are limiting and confusing.

I've produced a plug-and-play serial protocol, [JACDAC](https://jacdac.org), to network low-cost microcontrollers together (paper upcoming). Not only does JACDAC abtract the hardware from low level register and addresses into higher-level software services, it brings the world of the microcontroller forward into the 21st century [using modern web technologies](https://github.com/jacdac/jacdac-ts). The elevator pitch: USB for low-cost microcontrollers... except that the protocol is universal to all microcontrollers and actually runs a bus topology 😉.

## Future Work

My final section of work will focus on making it easier for novices to connect JACDAC-networks to the Internet (IoT). This will involve proposing a secure but simple architecture for extending JACDAC into the cloud.
