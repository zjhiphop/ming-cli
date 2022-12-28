# TV Guide

For TV development, currently the main platform needs to support include: Android TV, Apple TV.
The TV platform's interaction is very different from mobile screen. It needs to use `Remote Control` or `touchable device` send commands via wireless network.

So our strategy is to build cross platform `Remote xx Control` lib and the rest is similar with mobile app.

Currently the recommended solution is to use `flutter` to build the shared lib and UI for the best economic benefit.
