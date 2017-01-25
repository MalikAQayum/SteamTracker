// ==UserScript==
// @name         Steam-Tracker
// @namespace    https://githubsss.com/MalikAQayum/SteamTracker
// @description  add stats to the steam profile page from http://removed.timekillerz.eu/ and https://steam-tracker.com/user/*/ + adds a button to steam-tracker <appid> to the app hub page and store page.
// @author       MalikQayum
// @connect      removed.timekillerz.eu
// @connect      steam-tracker.com
// @include      /^https?://steamcommunity\.com/(id|profiles)/*/edit/settings/steamtracker/
// @include      /^https?://steamcommunity\.com/(id|profiles)/*/
// @include      /^https?://steamcommunity\.com/app/*/
// @include      /^https?://store.steampowered.com/app/*/
// @exclude      *://steamcommunity.com/*/*/badge*
// @exclude      *://steamcommunity.com/*/*/games*
// @exclude      *://steamcommunity.com/*/*/wishlist*
// @exclude      *://steamcommunity.com/*/*/inventory*
// @exclude      *://steamcommunity.com/*/*/myworkshopfiles*
// @exclude      *://steamcommunity.com/*/*/recommended*
// @exclude      *://steamcommunity.com/*/*/videos*
// @exclude      *://steamcommunity.com/*/*/screenshots*
// @exclude      *://steamcommunity.com/*/*/friends*
// @exclude      *://steamcommunity.com/*/*/groups*
// @exclude      *://steamcommunity.com/*/*/home*
// @exclude      *://steamcommunity.com/*/*/tradeoffers*
// @exclude      *://steamcommunity.com/*/*/edit
// @exclude      *://steamcommunity.com/*/*/edit/settings
// @exclude      *://steamcommunity.com/*/*/commentnotifications*
// @exclude      *://steamcommunity.com/*/*/posthistory*
// @exclude      *://steamcommunity.com/*/*/commenthistory*
// @exclude      *://steamcommunity.com/*/*/blotteredit*
// @exclude      *://steamcommunity.com/*/*/myactivity*
// @exclude      *://steamcommunity.com/*/*/inventoryhistory
// @exclude      *://steamcommunity.com/app/*/discussions*
// @exclude      *://steamcommunity.com/app/*/screenshots*
// @exclude      *://steamcommunity.com/app/*/images*
// @exclude      *://steamcommunity.com/app/*/broadcasts*
// @exclude      *://steamcommunity.com/app/*/videos*
// @exclude      *://steamcommunity.com/app/*/allnews*
// @exclude      *://steamcommunity.com/app/*/guides*
// @exclude      *://steamcommunity.com/app/*/reviews*
// @downloadURL https://github.com/MalikAQayum/SteamTracker/raw/master/Steam-Tracker.user.js
// @updateURL   https://github.com/MalikAQayum/SteamTracker/raw/master/Steam-Tracker.meta.js
// @version      1.5
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// ==/UserScript==