// ==UserScript==
// @name         Steam-Tracker
// @namespace    https://github.com/MalikAQayum/SteamTracker
// @description  add stats/showcases to the steam profile page from http://removed.timekillerz.eu/ and https://steam-tracker.com/user/*/ + adds a button to steam-tracker <appid> to the app hub page and store page.
// @author       MalikQayum
// @connect      removed.timekillerz.eu
// @connect      steam-tracker.com
// @connect      store.steampowered.com
// @include      /^https?://steamcommunity\.com/(id|profiles)/edit/settings/steamtracker/
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
// @require     https://code.jquery.com/jquery-2.1.4.min.js
// @require     https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.1.1/Chart.min.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/api/api.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/settings.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/showcases/Showcases.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/showcases/default_private.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/showcases/default_public.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/showcases/default_st_public.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/showcases/default_st_private.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/GMDelete.js
// @downloadURL https://github.com/MalikAQayum/SteamTracker/raw/master/Steam-Tracker.user.js
// @updateURL   https://github.com/MalikAQayum/SteamTracker/raw/master/Steam-Tracker.user.js
// @version      4.1.1.5
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_addStyle
// ==/UserScript==

var st_Version = GM_info.script.version, st_Name = GM_info.script.name, st_Author = GM_info.script.author, st_Namespace = GM_info.script.namespace;
console.log ('%c '+st_Name + ': v'+st_Version + ' by '+st_Author, 'background: grey; color: white; display: block;', st_Namespace);

GM_addStyle(`
#Available {-webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */ filter: grayscale(0%);}
#Opensub {-webkit-filter: grayscale(0.5) sepia(0.75); /* Safari 6.0 - 9.0 */ filter: grayscale(0.5) sepia(0.75);}
#Purchasedisabled {-webkit-filter: grayscale(0.75); /* Safari 6.0 - 9.0 */ filter: grayscale(0.75);}
#Delistedsoftware {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}
#Delistedvideo {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}
#Delisted {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}
#Freesoftware {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}
#F2P\\(unavailable\\) {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}
#Software {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}
#Video {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}
#Limited {-webkit-filter: sepia(0.75); /* Safari 6.0 - 9.0 */ filter: sepia(0.75);}
#Unreleasedsoftware {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}
#deleted {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}
`);

//settings page stuff
var re_settings_page = new RegExp(/settings\/steamtracker/);
if(document.URL.match(re_settings_page))
{
    Settings();
}

//store app stuff
var re_appstore = new RegExp(/^https?:\/\/store\.steampowered\.com\/app\/*/);
if(document.URL.match(re_appstore))
{
    if ((GM_getValue("StoreTracker_Value") === 0) || (GM_getValue("StoreTracker_Value") === "undefined") || (GM_getValue("StoreTracker_Value") === null) ) {
        console.log("StoreTracker is set to : " + GM_getValue("StoreTracker_Value") + " and will not add a Steam-Tracker Button to the Steam Store Page.");
    }
    else if ((GM_getValue("StoreTracker_Value") == 1)) {
        console.log("StoreTracker is set to : " + GM_getValue("StoreTracker_Value") + " and will add a Steam-Tracker Button to the Steam Store Page.");
        var appid = document.URL;
        appid = appid.split("app/").pop().replace(/\D+$/g, '').substring(0, appid.indexOf('/')+1);
        var steamtracker = document.getElementsByClassName("apphub_OtherSiteInfo")[0];
        var steamtracker_button = document.createElement('a');
        steamtracker_button.className = "btnv6_blue_hoverfade  btn_medium";
        steamtracker_button.href = href="https://steam-tracker.com/app/" + appid + "/";
        steamtracker.appendChild(steamtracker_button);
        steamtracker_button.innerHTML ="<span>SteamTracker</span>";
    }
    else {
        //donothing
    }
}

//community app hub stuff (should respect the exclude rules)
var re_apphub = new RegExp(/^https?:\/\/steamcommunity\.com\/app\/*/);
if(document.URL.match(re_apphub))
{
    if ((GM_getValue("HubTracker_Value") === 0) || (GM_getValue("HubTracker_Value") === "undefined") || (GM_getValue("HubTracker_Value") === null) ) {
        console.log("HubTracker is set to : " + GM_getValue("HubTracker_Value") + " and will not add a Steam-Tracker Button to the Hub.");
    }
    else if ((GM_getValue("HubTracker_Value") == 1)) {
        console.log("HubTracker is set to : " + GM_getValue("HubTracker_Value") + " and will add a Steam-Tracker Button to the Hub.");
        var appid = document.URL;
        appid = appid.split("app/").pop().replace(/\D+$/g, '');
        var steamtracker = document.getElementsByClassName("apphub_OtherSiteInfo responsive_hidden")[0];
        var steamtracker_button = document.createElement('a');
        steamtracker_button.className = "btnv6_blue_hoverfade btn_medium";
        steamtracker_button.href = href="https://steam-tracker.com/app/" + appid + "/";
        steamtracker.appendChild(steamtracker_button);
        steamtracker_button.innerHTML ="<span>SteamTracker</span>";
    }
    else{
        //donothing
    }
}


var re_steam_profile = new RegExp(/^https?:\/\/steamcommunity\.com\/(id|profiles)\/*/);
if(document.URL.match(re_steam_profile))
{

    var html_str = document.documentElement.innerHTML;
    var start_pos_id = html_str.indexOf(',"steamid":"') + 12;
    var end_pos_id = html_str.indexOf('",',start_pos_id);
    var steam_id = html_str.substring(start_pos_id,end_pos_id);
    GM_setValue("G_steam_id", steam_id);

    var c7k = "<a href=\"https://c7k.jfietkau.me/\">C7K</a>";
    var tk ="<a href=" + "http://removed.timekillerz.eu/tools.php?steamprofile="+steam_id + ">TimeKillerz</a>";
    var st ="<a href=" + "https://steam-tracker.com/user/"+steam_id+"/" + ">Steam-Tracker</a>";
    var st2 ="<a href=" + " https://steamcommunity.com/profiles/"+steam_id+ "/edit/settings/steamtracker" + "> Settings v" +st_Version +"</a>";

    var private_profile = document.getElementsByClassName('profile_private_info');
    if (private_profile.length > 0) {

        var div_pil_p = document.getElementsByClassName("profile_rightcol")[0];
        var pil_Div_p = document.createElement('div');
        pil_Div_p.id = 'profile_item_links_st_tk_c7k';
        pil_Div_p.className = "count_link_label";
        div_pil_p.prepend(pil_Div_p);
        pil_Div_p.innerHTML ="<p><span id=\"st\" class=\"count_link_label\">"+st+"</span>" + " " +"<span id=\"st\" class=\"btn_profile_action btn_medium\">"+st2+"</span></p>"+"<p><span id=\"tk\" class=\"count_link_label\">"+tk+"</span></p>"+"<p><span id=\"c7k\" class=\"count_link_label\">"+c7k+"</span></p>";
    }
    else
    {
        document.getElementsByClassName("profile_item_links")[0].setAttribute("id", "MalikQayum_profile_item_links");
        var div_pil = document.getElementById("MalikQayum_profile_item_links");
        var pil_Div = document.createElement('div');
        pil_Div.id = 'profile_item_links_st_tk_c7k';
        pil_Div.className = "count_link_label";
        div_pil.prepend(pil_Div);
        pil_Div.innerHTML ="<p><span id=\"st\" class=\"count_link_label\">"+st+"</span>" + " " + "<span id=\"st\" class=\"btn_profile_action btn_medium\">"+st2+"</span></p>"+"<p><span id=\"tk\" class=\"count_link_label\">"+tk+"</span></p>"+"<p><span id=\"c7k\" class=\"count_link_label\">"+c7k+"</span></p>";

        if ((GM_getValue("Showcase_Default_Value") == 1) || (GM_getValue("Showcase_ROA_Value") == 1))  {
            timekillerz_data_both();
            wait_api();
        }
        else if ((GM_getValue("RemGCTracker_Value") == 1) || (GM_getValue("C7KTracker_Value") == 1))  {
            timekillerz_data_only();
            wait_api();
        }
        else if ((GM_getValue("Showcase_RA_Value") == 1) || (GM_getValue("Showcase_ST_Default_Value") == 1) || (GM_getValue("Showcase_ST_ROA_Value") == 1))  {
            steam_tracker_data_only();
            wait_api();
        }
        else {
            console.log("no settings have been set.");
        }
    }
}
else
{
    //donothing
}

function wait_api() {
    if(GM_getValue("G_API") === "1")
    {
        GM_setValue("G_API", "0");
        if (/private/i.test(GM_getValue("G_steamtracker_privacy")))
        {
            console.log("Recent Activity Setting: is set to private and is being honored. #2");
            //showcase
            default_private();
            default_st_private();
            RemGC_Showcase();
            C7K_Showcase();
            Rarest_Owned_Appids();
			ST_ROA();
		if(GM_getValue("SLChart_Value") === "1"){
		SLData();
		wait_sldata();
		}
        }
        else
        {
            //showcase
            default_public();
            default_st_public();
            Recent_Activity_Showcase();
            RemGC_Showcase();
            C7K_Showcase();
            Rarest_Owned_Appids();
			ST_ROA();
		if(GM_getValue("SLChart_Value") === "1"){
		SLData();
		wait_sldata();
		}
        }
        GMDelete();
    }
    else
    {
        var date = new Date();
        console.log(date);
        setTimeout(function(){ wait_api(); }, 750);
    }
}
