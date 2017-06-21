# SteamTracker v5.0.0.0+
## From here on after, SteamTracker, will solely rely on Steam-Tracker api and Steam web api.

SteamTracker Userscript, adds features to the steam profile / community app hub / steam store page;<br />
(it honors all privacy settings)

## Installation / Updating. 

1. If you have Installed the SteamTracker from the install link Below, you are set up to automatically update whenever an update presents itself, Install SteamTracker and Tampermonkey Below:

	| Userscript                | Chrome                    |
	|---------------------------|---------------------------|
	| [SteamTracker][st-raw]    | [Tampermonkey][tm-raw]    |
	
[st-raw]: https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/Steam-Tracker.user.js
[tm-raw]: https://tampermonkey.net/?ext=dhdg&browser=chrome

## Default Settings:
- adds a https://Steam-Tracker.com profile link + settings button next to it.
- adds a http://timekillerz.eu/ profile link.
- adds a https://c7k.jfietkau.me/ profile link.

![default profile content](https://user-images.githubusercontent.com/25183649/27390300-3ba0a3cc-56a1-11e7-9424-107b592fa74c.png)

- replaces for now the Games tab on profiles with a new Games tab - "?tab=removedappids". (eventually this will be optional.)

![games tab redirect](https://user-images.githubusercontent.com/25183649/27390305-3ba956fc-56a1-11e7-8832-a19682928cff.png)


## Optional Settings:
- Showcase Default  = adds the default showcase.
(if all privacy settings are public, it adds a table with all your removed stats / changelog / recent activity.)

![default showcase](https://user-images.githubusercontent.com/25183649/27390306-3bbaad76-56a1-11e7-91c3-32c8c90e4e00.png)

- Showcase Recent Activity = adds a Recent Activity Showcase.<br />
(if user is a registret user on Steam-Tracker and has NOT set their recent activity private, then it only showcases the recent activity.)

![recent activity](https://user-images.githubusercontent.com/25183649/27390307-3bbcbe68-56a1-11e7-99fa-e64da8a0a9bc.png)

- Showcase Rarest Owned Appids  = adds the Rarest Owned Appids showcase. 

![rarest owned appids](https://user-images.githubusercontent.com/25183649/27390310-3bd02b24-56a1-11e7-84c5-db98df34c11f.png)

- Steam Licenses Chart (v1, v2 and v3) = adds activation license charts as a showcase. 

![chart 1](https://user-images.githubusercontent.com/25183649/27390309-3bca645a-56a1-11e7-9891-5402fa56a733.png)

![chart 2](https://user-images.githubusercontent.com/25183649/27390308-3bca21a2-56a1-11e7-9fbd-b9754d7c2f4a.png)

![chart 3](https://user-images.githubusercontent.com/25183649/27390301-3ba37b24-56a1-11e7-9f64-3d129ab72591.png)

- StoreTracker = adds a Steam-Tracker button on the store page that directs to the app page on Steam-Tracker. 

![storepage](https://user-images.githubusercontent.com/25183649/27391416-36ebc85e-56a4-11e7-8ddf-293ab24ad8ce.png)

- HubTracker = adds a Steam-Tracker button on the app hub page that directs to the app page on Steam-Tracker. 

![apphub](https://user-images.githubusercontent.com/25183649/27391415-36e934f4-56a4-11e7-90fe-2a06df6db4ff.png)


## Preview of how it looks with all Settings On the Steam Profile and the ?tab=removedappids tab.

![steamtracker](https://user-images.githubusercontent.com/25183649/27390304-3ba5b70e-56a1-11e7-95f8-7e2e14e98571.png)
![removedappids](https://user-images.githubusercontent.com/25183649/27390303-3ba5377a-56a1-11e7-9907-045805978f16.png)







