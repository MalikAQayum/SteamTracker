# SteamTracker

SteamTracker Userscript, adds features to the steam profile / community app hub / steam store page;<br />
(it honors all privacy settings)

Default Settings:
- adds a https://Steam-Tracker.com profile link + settings button next to it.
- adds a http://timekillerz.eu/ profile link.
- adds a https://c7k.jfietkau.me/ profile link.

Optional Settings:
- StoreTracker = adds a Steam-Tracker button on the store page that directs to the app page on Steam-Tracker. 
- HubTracker = adds a Steam-Tracker button on the app hub page that directs to the app page on Steam-Tracker. 
- Showcase Default  = adds the default showcase. <br />
(if all privacy settings are public, it adds a table with all your removed stats / changelog / recent activity.)
- Showcase Recent Activity = adds a Recent Activity Showcase.<br />
(if user is a registret user on Steam-Tracker and has NOT set their recent activity private, then it only showcases the recent activity.)
- Showcase Rarest Owned Appids  = adds the Rarest Owned Appids showcase. 

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


## personal note: Script is more or less split into multiple files to better get a grasp of what is going on:
### Steam-Tracker.user.js
The Userscript, should only really be touched if there is some new showcase to be added.

### api.js
our 3 options for the api are here (both sites api are needed/steam-tracker.com api only needed/timekillerz.eu api only) which should only be touched if new apis from other sources should be added example (dynamicstore) or new apis from these st or tk.

### settings.js
for user setting page, where users can chose which showcases they want present on their profiles + extra stuff.

### GMDelete.js
deletes all the gm values not even sure this is needed anymore but i did have issues with some values not being updated, when going to another profile and requiring a double refresh on that steam profile.

### default_private.js
showcases the default showcase but honoring the users privacy settings on the sites the apis come from.

### default_public.js
showcases the default showcase if there are non privacy settings set.

### Showcases.js
here we add all the showcases, except for the default showcase private/public.
