# SteamTracker

SteamTracker Userscript, adds features to the steam profile / community app hub / steam store page;
(it honors all privacy settings)

Default Settings:
- adds a https://Steam-Tracker.com profile link + settings button next to it.
- adds a http://timekillerz.eu/ profile link.
- adds a https://c7k.jfietkau.me/ profile link.

There are 4 Settings:
- enable StoreTracker = adds a Steam-Tracker button on the store page that directs to the app page on Steam-Tracker. 
- enable HubTracker = adds a Steam-Tracker button on the app hub page that directs to the app page on Steam-Tracker. 
- Showcase1 = adds the default showcase.
(if all privacy settings are public, it adds a table with all your removed stats / changelog / recent activity.)
- Showcase2 = adds a Recent Activity Showcase.
(if user is a registret user on Steam-Tracker and has NOT set their recent activity private, then it only showcases the recent activity.)

(all the data comes from https://steam-tracker.com/ and http://timekillerz.eu/removed/ via their API which made to serve the purpose of this userscript, 
if you want to create something yourself using the apis perhaps ask for permission)

SteamTracker will ask for permission 3 times:
1- https://Steam-Tracker.com api
2- http://timekillerz.eu/ api
3- https://store.steampowered.com/ owned appids  (Currently not doing it but should expect it might ask for permission in the future.)

## Installation

1. Make sure you have Tampermonkey installed:

	* Chrome - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=chrome)

2. Install SteamTracker Below:

	| Userscript                | Direct Install     |
	|---------------------------|:------------------:|
	| SteamTracker              | [install][st-raw]  |


[st-raw]: https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/Steam-Tracker.user.js

## Updating

If you have Installed the SteamTracker from the install link above, you are set up to automatically update whenever an update presents itself. 
