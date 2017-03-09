// ==UserScript==
// @name         Steam-Tracker
// @namespace    https://github.com/MalikAQayum/SteamTracker
// @description  add stats/showcases to the steam profile page from http://removed.timekillerz.eu/ and https://steam-tracker.com/user/*/ + adds a button to steam-tracker <appid> to the app hub page and store page.
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
// @updateURL   https://github.com/MalikAQayum/SteamTracker/raw/master/Steam-Tracker.user.js
// @version      3.0.0.1
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_addStyle
// ==/UserScript==


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
#deleted {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}
`);

//settings page stuff--------------------------------------------------------------------------------------------------------------------------------------------------------------------

var re_settings_page = new RegExp(/settings\/steamtracker/);
if(document.URL.match(re_settings_page))
{
    Settings();
}
//settings page stuff--------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
    var st2 ="<a href=" + " https://steamcommunity.com/profiles/"+steam_id+ "/edit/settings/steamtracker" + "> Settings</a>";

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

        //----------------------------------------------------

        if ((GM_getValue("Showcase_Default_Value") == 1) || (GM_getValue("Showcase_ROA_Value") == 1))  {
            timekillerz_data_both();
            check();
        }
        else if ((GM_getValue("RemGCTracker_Value") == 1) || (GM_getValue("C7KTracker_Value") == 1))  {
            timekillerz_data_only();
            check();
        }
        else if ((GM_getValue("Showcase_RA_Value") == 1))  {
            steam_tracker_data_only();
            check();
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

function check() {
	if(GM_getValue("G_API") === "1")
	{
		GM_setValue("G_API", "0");
		steam_tracker_show();
	}
	else
	{
		var date = new Date();
		console.log(date);
		setTimeout(function(){ check(); }, 1500);
	}
}


//--API
//--------------TK + ST
function timekillerz_data_both(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "http://removed.timekillerz.eu/content/steamext.php?steamid=" + GM_getValue("G_steam_id"),
        onload: function(response_timekillerz) {
            var jsontimekillerz_str = response_timekillerz.responseText;
            var json_tk = JSON.parse(jsontimekillerz_str);
            GM_setValue("G_timekillerz_rcount", json_tk.response.removed_count);
            GM_setValue("G_timekillerz_trcount", json_tk.response.total_removed_count);
            GM_setValue("G_c7k_rcount", json_tk.response.removed_count_3m);
            GM_setValue("G_c7k_trcount", json_tk.response.total_removed_count_3m);
            console.log("1");
            tk_ownedapps_both();
        }
    });
}

function tk_ownedapps_both(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "http://removed.timekillerz.eu/content/generatejson.php?steamid="+ GM_getValue("G_steam_id"),
        onload: function(response_tk) {
            var tk_str = response_tk.responseText;
            var json_tk_data = JSON.parse(tk_str);
            var tk_keys=[];
            for(var i = 0; i < json_tk_data.response.games.length; i++) {
                tk_keys += json_tk_data.response.games[i].appid + ",";
            }
            GM_setValue("G_tk_keys", tk_keys.substring(0, tk_keys.length - 1));
            console.log("2");
            steam_tracker_data_both();
        }
    });
}

function steam_tracker_data_both(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://steam-tracker.com/api?action=GetUserInfo&steamid=" + GM_getValue("G_steam_id"),
        onload: function(response_st) {
            var json_st = response_st.responseText;
            var json_st_data = JSON.parse(json_st);
            if (/false/i.test(json_st_data.success))
            {
                console.log("User does not exist in the steam-tracker db: " +json_st_data.success);
                var c7k = "<a href=\"https://c7k.jfietkau.me/\">C7K : " + GM_getValue("G_c7k_rcount")+ " / " +GM_getValue("G_c7k_trcount")+ "</a>";
                var tk ="<a href=" + "http://removed.timekillerz.eu/tools.php?steamprofile="+GM_getValue("G_steam_id") + ">TimeKillerz : " + GM_getValue("G_timekillerz_rcount")+ " / " +GM_getValue("G_timekillerz_trcount")+ "</a>";
                document.getElementById("tk").innerHTML ="<p><span id=\"tk\" class=\"count_link_label\">"+tk+"</span></p>";
                document.getElementById("c7k").innerHTML ="<p><span id=\"c7k\" class=\"count_link_label\">"+c7k+"</span></p>";
            }
            else
            {
                GM_setValue("G_steamtracker_delisted_1",json_st_data.stats[0].category_total);
                GM_setValue("G_steamtracker_delisted_2",json_st_data.stats[0].count);
                GM_setValue("G_steamtracker_disabled_1",json_st_data.stats[1].category_total);
                GM_setValue("G_steamtracker_disabled_2",json_st_data.stats[1].count);
                GM_setValue("G_steamtracker_F2P_1",json_st_data.stats[2].category_total);
                GM_setValue("G_steamtracker_F2P_2",json_st_data.stats[2].count);
                GM_setValue("G_steamtracker_retailonly_1",json_st_data.stats[3].category_total);
                GM_setValue("G_steamtracker_retailonly_2",json_st_data.stats[3].count);
                GM_setValue("G_steamtracker_testapp_1",json_st_data.stats[4].category_total);
                GM_setValue("G_steamtracker_testapp_2",json_st_data.stats[4].count);
                GM_setValue("G_steamtracker_preorder_1",json_st_data.stats[5].category_total);
                GM_setValue("G_steamtracker_preorder_2",json_st_data.stats[5].count);
                GM_setValue("G_steamtracker_unreleased_1",json_st_data.stats[6].category_total);
                GM_setValue("G_steamtracker_unreleased_2",json_st_data.stats[6].count);
                GM_setValue("G_steamtracker_software_1",json_st_data.stats[7].category_total);
                GM_setValue("G_steamtracker_software_2",json_st_data.stats[7].count);
                GM_setValue("G_steamtracker_freesoftware_1",json_st_data.stats[8].category_total);
                GM_setValue("G_steamtracker_freesoftware_2",json_st_data.stats[8].count);
                GM_setValue("G_steamtracker_video_1",json_st_data.stats[9].category_total);
                GM_setValue("G_steamtracker_video_2",json_st_data.stats[9].count);
                var total1 =parseInt(GM_getValue("G_steamtracker_delisted_1"))+ parseInt(GM_getValue("G_steamtracker_disabled_1"))+ parseInt(GM_getValue("G_steamtracker_F2P_1"))+ parseInt(GM_getValue("G_steamtracker_retailonly_1"))+ parseInt(GM_getValue("G_steamtracker_testapp_1"))+ parseInt(GM_getValue("G_steamtracker_preorder_1"))+ parseInt(GM_getValue("G_steamtracker_unreleased_1"))+ parseInt(GM_getValue("G_steamtracker_software_1"))+ parseInt(GM_getValue("G_steamtracker_freesoftware_1"))+ parseInt(GM_getValue("G_steamtracker_video_1"));
                var total2 =parseInt(GM_getValue("G_steamtracker_delisted_2"))+ parseInt(GM_getValue("G_steamtracker_disabled_2"))+ parseInt(GM_getValue("G_steamtracker_F2P_2"))+ parseInt(GM_getValue("G_steamtracker_retailonly_2"))+ parseInt(GM_getValue("G_steamtracker_testapp_2"))+ parseInt(GM_getValue("G_steamtracker_preorder_2"))+ parseInt(GM_getValue("G_steamtracker_unreleased_2"))+ parseInt(GM_getValue("G_steamtracker_software_2"))+ parseInt(GM_getValue("G_steamtracker_freesoftware_2"))+ parseInt(GM_getValue("G_steamtracker_video_2"));
                var totalgames1 =parseInt(GM_getValue("G_steamtracker_delisted_1"))+ parseInt(GM_getValue("G_steamtracker_disabled_1"))+ parseInt(GM_getValue("G_steamtracker_F2P_1"))+ parseInt(GM_getValue("G_steamtracker_retailonly_1"))+ parseInt(GM_getValue("G_steamtracker_testapp_1"))+ parseInt(GM_getValue("G_steamtracker_preorder_1"))+ parseInt(GM_getValue("G_steamtracker_unreleased_1"));
                var totalgames2 =parseInt(GM_getValue("G_steamtracker_delisted_2"))+ parseInt(GM_getValue("G_steamtracker_disabled_2"))+ parseInt(GM_getValue("G_steamtracker_F2P_2"))+ parseInt(GM_getValue("G_steamtracker_retailonly_2"))+ parseInt(GM_getValue("G_steamtracker_testapp_2"))+ parseInt(GM_getValue("G_steamtracker_preorder_2"))+ parseInt(GM_getValue("G_steamtracker_unreleased_2"));
                GM_setValue("G_steamtracker_total_1",total1);
                GM_setValue("G_steamtracker_total_2",total2);
                GM_setValue("G_steamtracker_totalgames_1",totalgames1);
                GM_setValue("G_steamtracker_totalgames_2",totalgames2);

                GM_setValue("G_steamtracker_privacy",json_st_data.recent_activity.error); 
                if (/private/i.test(json_st_data.recent_activity.error))
                {
                    console.log("Recent Activity Setting is set to " +json_st_data.recent_activity.error + " and is honored. #1");
                }
                else
                {
                    //Recent Activity
                    GM_setValue("G_steamtracker_recentactivity_appid_0", json_st_data.recent_activity[0].appid);
                    GM_setValue("G_steamtracker_recentactivity_title_0", json_st_data.recent_activity[0].name);
                    GM_setValue("G_steamtracker_recentactivity_status_0", json_st_data.recent_activity[0].status);
                    GM_setValue("G_steamtracker_recentactivity_appid_1", json_st_data.recent_activity[1].appid);
                    GM_setValue("G_steamtracker_recentactivity_title_1", json_st_data.recent_activity[1].name);
                    GM_setValue("G_steamtracker_recentactivity_status_1", json_st_data.recent_activity[1].status);
                    GM_setValue("G_steamtracker_recentactivity_appid_2", json_st_data.recent_activity[2].appid);
                    GM_setValue("G_steamtracker_recentactivity_title_2", json_st_data.recent_activity[2].name);
                    GM_setValue("G_steamtracker_recentactivity_status_2", json_st_data.recent_activity[2].status);
                    GM_setValue("G_steamtracker_recentactivity_appid_3", json_st_data.recent_activity[3].appid);
                    GM_setValue("G_steamtracker_recentactivity_title_3", json_st_data.recent_activity[3].name);
                    GM_setValue("G_steamtracker_recentactivity_status_3", json_st_data.recent_activity[3].status);

                }
                st_GetAppList_both();
            }
        }
    });
}

function st_GetAppList_both(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://steam-tracker.com/api?action=GetAppList",
        onload: function(response_GetAppList) {
            var GetAppList_str = response_GetAppList.responseText;
            var json_ownedappids_data = JSON.parse(GetAppList_str);
            var st_keys=[];
            for(var i = 0; i < json_ownedappids_data.removed_apps.length; i++) {
                st_keys += json_ownedappids_data.removed_apps[i].appid + ",";
            }
            GM_setValue("G_st_keys", st_keys.substring(0, st_keys.length - 1));
            steamtracker_changelog_data();
        }
    });
}

function steamtracker_changelog_data(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://steam-tracker.com/api?action=GetChangelog",
        onload: function(response_st_changelog) {
            var st_changelog_str = response_st_changelog.responseText;
            var json_stc = JSON.parse(st_changelog_str);           
            GM_setValue("G_steamtracker_changelog_appid_0", json_stc.changelog[0].appid);
            GM_setValue("G_steamtracker_changelog_title_0", json_stc.changelog[0].Name);
            GM_setValue("G_steamtracker_changelog_change_0", json_stc.changelog[0].new_category);
            GM_setValue("G_steamtracker_changelog_appid_1", json_stc.changelog[1].appid);
            GM_setValue("G_steamtracker_changelog_title_1", json_stc.changelog[1].Name);
            GM_setValue("G_steamtracker_changelog_change_1", json_stc.changelog[1].new_category);
            GM_setValue("G_steamtracker_changelog_appid_2", json_stc.changelog[2].appid);
            GM_setValue("G_steamtracker_changelog_title_2", json_stc.changelog[2].Name);
            GM_setValue("G_steamtracker_changelog_change_2", json_stc.changelog[2].new_category);
            GM_setValue("G_steamtracker_changelog_appid_3", json_stc.changelog[3].appid);
            GM_setValue("G_steamtracker_changelog_title_3", json_stc.changelog[3].Name);
            GM_setValue("G_steamtracker_changelog_change_3", json_stc.changelog[3].new_category);
            GM_setValue("G_steamtracker_changelog_appid_4", json_stc.changelog[4].appid);
            GM_setValue("G_steamtracker_changelog_title_4", json_stc.changelog[4].Name);
            GM_setValue("G_steamtracker_changelog_change_4", json_stc.changelog[4].new_category);
            console.log("api shit done.");
            GM_setValue("G_API", "1");
        }
    });
}
//--------------TK
function timekillerz_data_only(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "http://removed.timekillerz.eu/content/steamext.php?steamid=" + GM_getValue("G_steam_id"),
        onload: function(response_timekillerz) {
            var jsontimekillerz_str = response_timekillerz.responseText;
            var json_tk = JSON.parse(jsontimekillerz_str);
            GM_setValue("G_timekillerz_rcount", json_tk.response.removed_count);
            GM_setValue("G_timekillerz_trcount", json_tk.response.total_removed_count);
            GM_setValue("G_c7k_rcount", json_tk.response.removed_count_3m);
            GM_setValue("G_c7k_trcount", json_tk.response.total_removed_count_3m);
            console.log("1");
            tk_ownedapps_only();
        }
    });
}
function tk_ownedapps_only(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "http://removed.timekillerz.eu/content/generatejson.php?steamid="+ GM_getValue("G_steam_id"),
        onload: function(response_tk) {
            var tk_str = response_tk.responseText;
            var json_tk_data = JSON.parse(tk_str);
            var tk_keys=[];
            for(var i = 0; i < json_tk_data.response.games.length; i++) {
                tk_keys += json_tk_data.response.games[i].appid + ",";
            }
            GM_setValue("G_tk_keys", tk_keys.substring(0, tk_keys.length - 1));
            console.log("tk api done");
            GM_setValue("G_API", "1");
        }
    });
}
//--------------ST
function steam_tracker_data_only(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://steam-tracker.com/api?action=GetUserInfo&steamid=" + GM_getValue("G_steam_id"),
        onload: function(response_st) {
            var json_st = response_st.responseText;
            var json_st_data = JSON.parse(json_st);
            if (/false/i.test(json_st_data.success))
            {
                console.log("User does not exist in the steam-tracker db: " +json_st_data.success);
                var c7k = "<a href=\"https://c7k.jfietkau.me/\">C7K : " + GM_getValue("G_c7k_rcount")+ " / " +GM_getValue("G_c7k_trcount")+ "</a>";
                var tk ="<a href=" + "http://removed.timekillerz.eu/tools.php?steamprofile="+GM_getValue("G_steam_id") + ">TimeKillerz : " + GM_getValue("G_timekillerz_rcount")+ " / " +GM_getValue("G_timekillerz_trcount")+ "</a>";
                document.getElementById("tk").innerHTML ="<p><span id=\"tk\" class=\"count_link_label\">"+tk+"</span></p>";
                document.getElementById("c7k").innerHTML ="<p><span id=\"c7k\" class=\"count_link_label\">"+c7k+"</span></p>";
            }
            else
            {
                GM_setValue("G_steamtracker_delisted_1",json_st_data.stats[0].category_total);
                GM_setValue("G_steamtracker_delisted_2",json_st_data.stats[0].count);
                GM_setValue("G_steamtracker_disabled_1",json_st_data.stats[1].category_total);
                GM_setValue("G_steamtracker_disabled_2",json_st_data.stats[1].count);
                GM_setValue("G_steamtracker_F2P_1",json_st_data.stats[2].category_total);
                GM_setValue("G_steamtracker_F2P_2",json_st_data.stats[2].count);
                GM_setValue("G_steamtracker_retailonly_1",json_st_data.stats[3].category_total);
                GM_setValue("G_steamtracker_retailonly_2",json_st_data.stats[3].count);
                GM_setValue("G_steamtracker_testapp_1",json_st_data.stats[4].category_total);
                GM_setValue("G_steamtracker_testapp_2",json_st_data.stats[4].count);
                GM_setValue("G_steamtracker_preorder_1",json_st_data.stats[5].category_total);
                GM_setValue("G_steamtracker_preorder_2",json_st_data.stats[5].count);
                GM_setValue("G_steamtracker_unreleased_1",json_st_data.stats[6].category_total);
                GM_setValue("G_steamtracker_unreleased_2",json_st_data.stats[6].count);
                GM_setValue("G_steamtracker_software_1",json_st_data.stats[7].category_total);
                GM_setValue("G_steamtracker_software_2",json_st_data.stats[7].count);
                GM_setValue("G_steamtracker_freesoftware_1",json_st_data.stats[8].category_total);
                GM_setValue("G_steamtracker_freesoftware_2",json_st_data.stats[8].count);
                GM_setValue("G_steamtracker_video_1",json_st_data.stats[9].category_total);
                GM_setValue("G_steamtracker_video_2",json_st_data.stats[9].count);
                var total1 =parseInt(GM_getValue("G_steamtracker_delisted_1"))+ parseInt(GM_getValue("G_steamtracker_disabled_1"))+ parseInt(GM_getValue("G_steamtracker_F2P_1"))+ parseInt(GM_getValue("G_steamtracker_retailonly_1"))+ parseInt(GM_getValue("G_steamtracker_testapp_1"))+ parseInt(GM_getValue("G_steamtracker_preorder_1"))+ parseInt(GM_getValue("G_steamtracker_unreleased_1"))+ parseInt(GM_getValue("G_steamtracker_software_1"))+ parseInt(GM_getValue("G_steamtracker_freesoftware_1"))+ parseInt(GM_getValue("G_steamtracker_video_1"));
                var total2 =parseInt(GM_getValue("G_steamtracker_delisted_2"))+ parseInt(GM_getValue("G_steamtracker_disabled_2"))+ parseInt(GM_getValue("G_steamtracker_F2P_2"))+ parseInt(GM_getValue("G_steamtracker_retailonly_2"))+ parseInt(GM_getValue("G_steamtracker_testapp_2"))+ parseInt(GM_getValue("G_steamtracker_preorder_2"))+ parseInt(GM_getValue("G_steamtracker_unreleased_2"))+ parseInt(GM_getValue("G_steamtracker_software_2"))+ parseInt(GM_getValue("G_steamtracker_freesoftware_2"))+ parseInt(GM_getValue("G_steamtracker_video_2"));
                var totalgames1 =parseInt(GM_getValue("G_steamtracker_delisted_1"))+ parseInt(GM_getValue("G_steamtracker_disabled_1"))+ parseInt(GM_getValue("G_steamtracker_F2P_1"))+ parseInt(GM_getValue("G_steamtracker_retailonly_1"))+ parseInt(GM_getValue("G_steamtracker_testapp_1"))+ parseInt(GM_getValue("G_steamtracker_preorder_1"))+ parseInt(GM_getValue("G_steamtracker_unreleased_1"));
                var totalgames2 =parseInt(GM_getValue("G_steamtracker_delisted_2"))+ parseInt(GM_getValue("G_steamtracker_disabled_2"))+ parseInt(GM_getValue("G_steamtracker_F2P_2"))+ parseInt(GM_getValue("G_steamtracker_retailonly_2"))+ parseInt(GM_getValue("G_steamtracker_testapp_2"))+ parseInt(GM_getValue("G_steamtracker_preorder_2"))+ parseInt(GM_getValue("G_steamtracker_unreleased_2"));
                GM_setValue("G_steamtracker_total_1",total1);
                GM_setValue("G_steamtracker_total_2",total2);
                GM_setValue("G_steamtracker_totalgames_1",totalgames1);
                GM_setValue("G_steamtracker_totalgames_2",totalgames2);

                GM_setValue("G_steamtracker_privacy",json_st_data.recent_activity.error); 
                if (/private/i.test(json_st_data.recent_activity.error))
                {
                    console.log("Recent Activity Setting is set to " +json_st_data.recent_activity.error + " and is honored. #1");
                }
                else
                {
                    //Recent Activity
                    GM_setValue("G_steamtracker_recentactivity_appid_0", json_st_data.recent_activity[0].appid);
                    GM_setValue("G_steamtracker_recentactivity_title_0", json_st_data.recent_activity[0].name);
                    GM_setValue("G_steamtracker_recentactivity_status_0", json_st_data.recent_activity[0].status);
                    GM_setValue("G_steamtracker_recentactivity_appid_1", json_st_data.recent_activity[1].appid);
                    GM_setValue("G_steamtracker_recentactivity_title_1", json_st_data.recent_activity[1].name);
                    GM_setValue("G_steamtracker_recentactivity_status_1", json_st_data.recent_activity[1].status);
                    GM_setValue("G_steamtracker_recentactivity_appid_2", json_st_data.recent_activity[2].appid);
                    GM_setValue("G_steamtracker_recentactivity_title_2", json_st_data.recent_activity[2].name);
                    GM_setValue("G_steamtracker_recentactivity_status_2", json_st_data.recent_activity[2].status);
                    GM_setValue("G_steamtracker_recentactivity_appid_3", json_st_data.recent_activity[3].appid);
                    GM_setValue("G_steamtracker_recentactivity_title_3", json_st_data.recent_activity[3].name);
                    GM_setValue("G_steamtracker_recentactivity_status_3", json_st_data.recent_activity[3].status);

                }
                st_GetAppList_only();
            }
        }
    });
}
function st_GetAppList_only(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://steam-tracker.com/api?action=GetAppList",
        onload: function(response_GetAppList) {
            var GetAppList_str = response_GetAppList.responseText;
            var json_ownedappids_data = JSON.parse(GetAppList_str);
            var st_keys=[];
            for(var i = 0; i < json_ownedappids_data.removed_apps.length; i++) {
                st_keys += json_ownedappids_data.removed_apps[i].appid + ",";
            }
            GM_setValue("G_st_keys", st_keys.substring(0, st_keys.length - 1));
            console.log("st api done");
            GM_setValue("G_API", "1");

        }
    });
}
//---Settings
function Settings(){
    document.body.innerHTML = ' ';
    var Settings = document.createElement("div");
    Settings.innerHTML = "<p><h3>SteamTracker Extension Settings.</h3></p><br>";
    document.body.appendChild(Settings, document.body.firstChild);

    var hr = document.createElement('hr');
    hr.innerHTML = ' ';
    document.body.appendChild(hr);

    /*-------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    //Showcase Default.
    var Showcase_Default_F = function() {
        var Showcase_Default_V = document.getElementById('Showcase_Default_id').value;
        GM_setValue("Showcase_Default_Value", Showcase_Default_V);
        console.log("[Showcase_Default:] = " + GM_getValue("Showcase_Default_Value"));
    };

    var Showcase_Default_B = document.createElement("input");
    Showcase_Default_B.type="button";
    Showcase_Default_B.value="Showcase_Default";
    Showcase_Default_B.className="btnv6_blue_hoverfade";
    Showcase_Default_B.style.width = "150px";
    Showcase_Default_B.style.height = "30px";
    Showcase_Default_B.onclick = Showcase_Default_F;
    document.body.appendChild(Showcase_Default_B);

    var Showcase_Default_I = document.createElement("input");
    Showcase_Default_I.type="number";
    Showcase_Default_I.id="Showcase_Default_id";
    Showcase_Default_I.name="Showcase_Default_id";
    Showcase_Default_I.value=GM_getValue("Showcase_Default_Value");
    Showcase_Default_I.min="0";
    Showcase_Default_I.max="1";
    Showcase_Default_I.style.width = "33px";
    Showcase_Default_I.style.height = "25px";
    Showcase_Default_I.onclick = Showcase_Default_F;
    document.body.appendChild(Showcase_Default_I);

    var P_Showcase_Default = document.createElement("p");
    var Showcase_Default_Text = document.createTextNode(" : 0 = off / 1 = on  - adds Showcase Default to the steam profile page.");
    document.body.appendChild(Showcase_Default_Text);

    console.log("[Showcase_Default:] = " + GM_getValue("Showcase_Default_Value"));

    var hr = document.createElement('hr');
    hr.innerHTML = ' ';
    document.body.appendChild(hr);

    //Showcase Recent Activity.
    var Showcase_RA_F = function() {
        var Showcase_RA_V = document.getElementById('Showcase_RA_id').value;
        GM_setValue("Showcase_RA_Value", Showcase_RA_V);
        console.log("[Showcase_RA:] = " + GM_getValue("Showcase_RA_Value"));
    };

    var Showcase_RA_B = document.createElement("input");
    Showcase_RA_B.type="button";
    Showcase_RA_B.value="Showcase_RA";
    Showcase_RA_B.className="btnv6_blue_hoverfade";
    Showcase_RA_B.style.width = "150px";
    Showcase_RA_B.style.height = "30px";
    Showcase_RA_B.onclick = Showcase_RA_F;
    document.body.appendChild(Showcase_RA_B);

    var Showcase_RA_I = document.createElement("input");
    Showcase_RA_I.type="number";
    Showcase_RA_I.id="Showcase_RA_id";
    Showcase_RA_I.name="Showcase_RA_id";
    Showcase_RA_I.value=GM_getValue("Showcase_RA_Value");
    Showcase_RA_I.min="0";
    Showcase_RA_I.max="1";
    Showcase_RA_I.style.width = "33px";
    Showcase_RA_I.style.height = "25px";
    Showcase_RA_I.onclick = Showcase_RA_F;
    document.body.appendChild(Showcase_RA_I);

    var P_Showcase_RA = document.createElement("p");
    var Showcase_RA_Text = document.createTextNode(" : 0 = off / 1 = on  - adds Showcase Recent Activity to the steam profile page.");
    document.body.appendChild(Showcase_RA_Text);

    console.log("[Showcase_RA:] = " + GM_getValue("Showcase_RA_Value"));

    var hr = document.createElement('hr');
    hr.innerHTML = ' ';
    document.body.appendChild(hr);

    //Showcase Rarest Owned Appid.
    var Showcase_ROA_F = function() {
        var Showcase_ROA_V = document.getElementById('Showcase_ROA_id').value;
        GM_setValue("Showcase_ROA_Value", Showcase_ROA_V);
        console.log("[Showcase_ROA:] = " + GM_getValue("Showcase_ROA_Value"));
    };

    var Showcase_ROA_B = document.createElement("input");
    Showcase_ROA_B.type="button";
    Showcase_ROA_B.value="Showcase_ROA";
    Showcase_ROA_B.className="btnv6_blue_hoverfade";
    Showcase_ROA_B.style.width = "150px";
    Showcase_ROA_B.style.height = "30px";
    Showcase_ROA_B.onclick = Showcase_ROA_F;
    document.body.appendChild(Showcase_ROA_B);

    var Showcase_ROA_I = document.createElement("input");
    Showcase_ROA_I.type="number";
    Showcase_ROA_I.id="Showcase_ROA_id";
    Showcase_ROA_I.name="Showcase_ROA_id";
    Showcase_ROA_I.value=GM_getValue("Showcase_ROA_Value");
    Showcase_ROA_I.min="0";
    Showcase_ROA_I.max="1";
    Showcase_ROA_I.style.width = "33px";
    Showcase_ROA_I.style.height = "25px";
    Showcase_ROA_I.onclick = Showcase_ROA_F;
    document.body.appendChild(Showcase_ROA_I);

    var P_Showcase_ROA = document.createElement("p");
    var Showcase_ROA_Text = document.createTextNode(" : 0 = off / 1 = on  - adds Showcase Rarest Owned Appids to the steam profile page.");
    document.body.appendChild(Showcase_ROA_Text);

    console.log("[Showcase_ROA:] = " + GM_getValue("Showcase_ROA_Value"));

    var hr = document.createElement('hr');
    hr.innerHTML = ' ';
    document.body.appendChild(hr);

    //RemGC Showcase setting.
    var RemGCTracker_F = function() {
        var RemGCTracker_V = document.getElementById('RemGCTrackerid').value;
        GM_setValue("RemGCTracker_Value", RemGCTracker_V);
        console.log("[RemGCTracker:] = " + GM_getValue("RemGCTracker_Value"));
    };

    var RemGCTracker_B = document.createElement("input");
    RemGCTracker_B.type="button";
    RemGCTracker_B.value="RemGCTracker";
    RemGCTracker_B.className="btnv6_blue_hoverfade";
    RemGCTracker_B.style.width = "150px";
    RemGCTracker_B.style.height = "30px";
    RemGCTracker_B.onclick = RemGCTracker_F;
    document.body.appendChild(RemGCTracker_B);

    var RemGCTracker_I = document.createElement("input");
    RemGCTracker_I.type="number";
    RemGCTracker_I.id="RemGCTrackerid";
    RemGCTracker_I.name="RemGCTrackerid";
    RemGCTracker_I.value=GM_getValue("RemGCTracker_Value");
    RemGCTracker_I.min="0";
    RemGCTracker_I.max="1";
    RemGCTracker_I.style.width = "33px";
    RemGCTracker_I.style.height = "25px";
    RemGCTracker_I.onclick = RemGCTracker_F;
    document.body.appendChild(RemGCTracker_I);

    var P_RemGCTracker = document.createElement("p");
    var RemGCTracker_Text = document.createTextNode(" : 0 = off / 1 = on  - adds a RemGC Showcase to the profile.");
    document.body.appendChild(RemGCTracker_Text);

    var hr = document.createElement('hr');
    hr.innerHTML = ' ';
    document.body.appendChild(hr);
    console.log("[RemGCTracker:] = " + GM_getValue("RemGCTracker_Value"));

    //C7K Showcase setting.
    var C7KTracker_F = function() {
        var C7KTracker_V = document.getElementById('C7KTrackerid').value;
        GM_setValue("C7KTracker_Value", C7KTracker_V);
        console.log("[C7KTracker:] = " + GM_getValue("C7KTracker_Value"));
    };

    var C7KTracker_B = document.createElement("input");
    C7KTracker_B.type="button";
    C7KTracker_B.value="C7KTracker";
    C7KTracker_B.className="btnv6_blue_hoverfade";
    C7KTracker_B.style.width = "150px";
    C7KTracker_B.style.height = "30px";
    C7KTracker_B.onclick = C7KTracker_F;
    document.body.appendChild(C7KTracker_B);

    var C7KTracker_I = document.createElement("input");
    C7KTracker_I.type="number";
    C7KTracker_I.id="C7KTrackerid";
    C7KTracker_I.name="C7KTrackerid";
    C7KTracker_I.value=GM_getValue("C7KTracker_Value");
    C7KTracker_I.min="0";
    C7KTracker_I.max="1";
    C7KTracker_I.style.width = "33px";
    C7KTracker_I.style.height = "25px";
    C7KTracker_I.onclick = C7KTracker_F;
    document.body.appendChild(C7KTracker_I);

    var P_C7KTracker = document.createElement("p");
    var C7KTracker_Text = document.createTextNode(" : 0 = off / 1 = on  - adds a C7K Showcase to the profile.");
    document.body.appendChild(C7KTracker_Text);

    var hr = document.createElement('hr');
    hr.innerHTML = ' ';
    document.body.appendChild(hr);
    console.log("[C7KTracker:] = " + GM_getValue("C7KTracker_Value"));

    //store page steam-tracker button.
    var StoreTracker_F = function() {
        var StoreTracker_V = document.getElementById('StoreTrackerid').value;
        GM_setValue("StoreTracker_Value", StoreTracker_V);
        console.log("[StoreTracker:] = " + GM_getValue("StoreTracker_Value"));
    };

    var StoreTracker_B = document.createElement("input");
    StoreTracker_B.type="button";
    StoreTracker_B.value="StoreTracker";
    StoreTracker_B.className="btnv6_blue_hoverfade";
    StoreTracker_B.style.width = "150px";
    StoreTracker_B.style.height = "30px";
    StoreTracker_B.onclick = StoreTracker_F;
    document.body.appendChild(StoreTracker_B);

    var StoreTracker_I = document.createElement("input");
    StoreTracker_I.type="number";
    StoreTracker_I.id="StoreTrackerid";
    StoreTracker_I.name="StoreTrackerid";
    StoreTracker_I.value=GM_getValue("StoreTracker_Value");
    StoreTracker_I.min="0";
    StoreTracker_I.max="1";
    StoreTracker_I.style.width = "33px";
    StoreTracker_I.style.height = "25px";
    StoreTracker_I.onclick = StoreTracker_F;
    document.body.appendChild(StoreTracker_I);

    var P_StoreTracker = document.createElement("p");
    var StoreTracker_Text = document.createTextNode(" : 0 = off / 1 = on  - adds a Steam-Tracker Button to the store page.");
    document.body.appendChild(StoreTracker_Text);

    console.log("[StoreTracker:] = " + GM_getValue("StoreTracker_Value"));

    var hr = document.createElement('hr');
    hr.innerHTML = ' ';
    document.body.appendChild(hr);

    //app hub page steam-tracker button.
    var HubTracker_F = function() {
        var HubTracker_V = document.getElementById('HubTrackerid').value;
        GM_setValue("HubTracker_Value", HubTracker_V);
        console.log("[HubTracker:] = " + GM_getValue("HubTracker_Value"));
    };

    var HubTracker_B = document.createElement("input");
    HubTracker_B.type="button";
    HubTracker_B.value="HubTracker";
    HubTracker_B.className="btnv6_blue_hoverfade";
    HubTracker_B.style.width = "150px";
    HubTracker_B.style.height = "30px";
    HubTracker_B.onclick = HubTracker_F;
    document.body.appendChild(HubTracker_B);

    var HubTracker_I = document.createElement("input");
    HubTracker_I.type="number";
    HubTracker_I.id="HubTrackerid";
    HubTracker_I.name="HubTrackerid";
    HubTracker_I.value=GM_getValue("HubTracker_Value");
    HubTracker_I.min="0";
    HubTracker_I.max="1";
    HubTracker_I.style.width = "33px";
    HubTracker_I.style.height = "25px";
    HubTracker_I.onclick = HubTracker_F;
    document.body.appendChild(HubTracker_I);

    var P_HubTracker = document.createElement("p");
    var HubTracker_Text = document.createTextNode(" : 0 = off / 1 = on  - adds a Steam-Tracker Button to the hub page.");
    document.body.appendChild(HubTracker_Text);

    var hr = document.createElement('hr');
    hr.innerHTML = ' ';
    document.body.appendChild(hr);
    console.log("[HubTracker:] = " + GM_getValue("HubTracker_Value"));

    var Save_F = function() {
        StoreTracker_F();
        HubTracker_F();
        Showcase_Default_F();
        Showcase_RA_F();
        RemGCTracker_F();
        C7KTracker_F();
        Showcase_ROA_F();

        location.href="http://steamcommunity.com/my";
    };
    var Save_Button = document.createElement("input");
    Save_Button.type="button";
    Save_Button.value="Save Settings";
    Save_Button.className="btn_green_white_innerfade";
    Save_Button.style.width = "10%";
    Save_Button.style.height = "30px";
    Save_Button.onclick = Save_F;
    document.body.appendChild(Save_Button);
}
//-- show

function steam_tracker_show(){
    var steamtrackerurl = 'https://steam-tracker.com/user/'+ GM_getValue("G_steam_id") +"/";
    var SteamTracker_link = document.createElement('a');
    var link = document.createTextNode("Steam-Tracker Profile: " + GM_getValue("G_steam_id"));
    SteamTracker_link.appendChild(link);
    SteamTracker_link.title = "Steam-Tracker Profile";
    SteamTracker_link.href = steamtrackerurl;

    var timekillerzurl = 'http://removed.timekillerz.eu/tools.php?steamprofile='+ GM_getValue("G_steam_id");
    var TimeKillerz_link = document.createElement('a');
    var link_tk = document.createTextNode("TimeKillerz Profile: " + GM_getValue("G_steam_id"));
    TimeKillerz_link.appendChild(link_tk);
    TimeKillerz_link.title = "TimeKillerz Profile";
    TimeKillerz_link.href = timekillerzurl;

    var tableheader = "<th class=\"license_date_col\">" + '<a href = "' + SteamTracker_link + '">Steam-Tracker</a>' + "</th>" + "<th class=\"license_date_col\">" + "Amount" + "</th>"+ "<th class=\"license_date_col\">" + "Total" + "</th>";
    var video = "<tr><td class=\"license_date_col\">" + "Video" + "</td>" + "<td>" + GM_getValue("G_steamtracker_video_2")+ "</td>" + "<td>" + GM_getValue("G_steamtracker_video_1") + "</td><tr>";
    var freesoftware = "<tr><td>" + "Free Software" + "</td>" + "<td>" + GM_getValue("G_steamtracker_freesoftware_2") + "</td>" + "<td>" + GM_getValue("G_steamtracker_freesoftware_1") + "</td><tr>";  
    var software = "<tr><td>" + "Software" + "</td>" + "<td>" + GM_getValue("G_steamtracker_software_2")+ "</td>" + "<td>" + GM_getValue("G_steamtracker_software_1")+ "</td><tr>";   
    var unreleased = "<tr><td>" + "Unreleased" + "</td>" + "<td>" + GM_getValue("G_steamtracker_unreleased_2") + "</td>" + "<td>" + GM_getValue("G_steamtracker_unreleased_1") + "</td><tr>";    
    var preorder = "<tr><td>" + "Pre-order" + "</td>" + "<td>" + GM_getValue("G_steamtracker_preorder_2") + "</td>" + "<td>" + GM_getValue("G_steamtracker_preorder_1") + "</td><tr>";    
    var testapp = "<tr><td>" + "Test app" + "</td>" + "<td>" + GM_getValue("G_steamtracker_testapp_2") + "</td>" + "<td>" + GM_getValue("G_steamtracker_testapp_1") + "</td><tr>";    
    var retailonly = "<tr><td>" + "Retail only" + "</td>" + "<td>" + GM_getValue("G_steamtracker_retailonly_2") + "</td>" + "<td>" + GM_getValue("G_steamtracker_retailonly_1") + "</td><tr>";    
    var F2P = "<tr><td>" + "F2P" + "</td>" + "<td>" + GM_getValue("G_steamtracker_F2P_2") + "</td>" + "<td>" + GM_getValue("G_steamtracker_F2P_1") + "</td><tr>";    
    var Disabled = "<tr><td>" + "Disabled" + "</td>" + "<td>" + GM_getValue("G_steamtracker_disabled_2") + "</td>" + "<td>" + GM_getValue("G_steamtracker_disabled_1")+ "</td><tr>";    
    var Delisted = "<tr><td>"  + '<a href = "' + SteamTracker_link + '">Delisted: Steam-Tracker</a>' + "</td>" + "<td>" + GM_getValue("G_steamtracker_delisted_2")+ "</td>" + "<td>" + GM_getValue("G_steamtracker_delisted_1") + "</td><tr>";    
    var TotalGames = "<tr><td>" + "Total Games" + "</td>" + "<td>" + GM_getValue("G_steamtracker_totalgames_2") + "</td>" + "<td>" + GM_getValue("G_steamtracker_totalgames_1")+ "</td><tr>";    
    var Total = "<tr><td>" + "Total" + "</td>" + "<td>" + GM_getValue("G_steamtracker_total_2") + "</td>" + "<td>" + GM_getValue("G_steamtracker_total_1") + "</td><tr>";    
    var total_tk = "<tr><td>" + '<a href = "' + TimeKillerz_link + '">Delisted: TimeKillerz</a>' + "</td>" + "<td>" +  GM_getValue("G_timekillerz_rcount") + "</td>" + "<td>" +  GM_getValue("G_timekillerz_trcount") + "</td><tr>";    
    var total_ck7 = "<tr><td>" + '<a href = "https://c7k.jfietkau.me/">Delisted: C7K</a>' + "</td>" + "<td>" +  GM_getValue("G_c7k_rcount") + "</td>" + "<td>" +  GM_getValue("G_c7k_trcount") + "</td><tr>";

    if (/private/i.test(GM_getValue("G_steamtracker_privacy")))
    {
        console.log("Recent Activity Setting: is set to private and is being honored. #2");

        if ((GM_getValue("Showcase_Default_Value") == 0) || (GM_getValue("Showcase_Default_Value") == "undefined") || (GM_getValue("Showcase_Default_Value") == null) ) {
            console.log("Showcase Default is set to : " + GM_getValue("Showcase_Default_Value") + " and will not add Showcase Default to the Steam Profile.");
        }
        else if ((GM_getValue("Showcase_Default_Value") == 1)) {
            console.log("Showcase Default is set to : " + GM_getValue("Showcase_Default_Value") + " and will add Showcase Default to the Steam Profile.");

            var stc_image_0s = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_0") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_0") + " : [" + GM_getValue("G_steamtracker_changelog_change_0") +"]"+ '"id="'+ GM_getValue("G_steamtracker_changelog_change_0").replace(" ", "") +'" alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_changelog_appid_0") +"/" + '" onclick="window.open(this.alt)">';
            var stc_image_1s = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_1") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_1") + " : [" + GM_getValue("G_steamtracker_changelog_change_1") +"]"+ '"id="'+ GM_getValue("G_steamtracker_changelog_change_1").replace(" ", "") +'" alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_changelog_appid_1") +"/" + '" onclick="window.open(this.alt)">';
            var stc_image_2s = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_2") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_2") + " : [" + GM_getValue("G_steamtracker_changelog_change_2") +"]"+ '"id="'+ GM_getValue("G_steamtracker_changelog_change_2").replace(" ", "") +'" alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_changelog_appid_2") +"/" + '" onclick="window.open(this.alt)">';
            var stc_image_3s = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_3") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_3") + " : [" + GM_getValue("G_steamtracker_changelog_change_3") +"]"+ '"id="'+ GM_getValue("G_steamtracker_changelog_change_3").replace(" ", "") +'" alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_changelog_appid_3") +"/" + '" onclick="window.open(this.alt)">';
            var stc_image_4s = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_4") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_4") + " : [" + GM_getValue("G_steamtracker_changelog_change_4") +"]"+ '"id="'+ GM_getValue("G_steamtracker_changelog_change_4").replace(" ", "") +'" alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_changelog_appid_4") +"/" + '" onclick="window.open(this.alt)">';
            var st_table = "<table style=\"width:100%\">" +tableheader+Total+TotalGames+total_ck7+Delisted+total_tk+Disabled+F2P+retailonly+testapp+preorder+unreleased+software+freesoftware+video+ "</table>";

            document.getElementsByClassName("profile_customization_area")[0].setAttribute("id", "MalikQayum_Showcase_0");
            var div_0 = document.getElementById("MalikQayum_Showcase_0");
            var x_div_0 = document.createElement('div');
            x_div_0.id = 'MalikQayum_Showcase_0';
            div_0.prepend(x_div_0);
            x_div_0.innerHTML =
                `
<div class="profile_customization">
<div class="profile_customization_header"> Steam Removed Games Showcase	</div>
<div class="profile_customization_block">
<div class="screenshot_showcase">
<div class="screenshot_showcase_primary showcase_slot ">`+st_table+`</div>
<div class="screenshot_showcase_rightcol">
<div class="screenshot_showcase_smallscreenshot showcase_slot ">
` +stc_image_0s +`
</div>
<div class="screenshot_showcase_smallscreenshot showcase_slot ">
` +stc_image_1s +`
</div>
<div class="screenshot_showcase_smallscreenshot showcase_slot ">
` +stc_image_2s +`
</div>
<div class="screenshot_showcase_smallscreenshot showcase_slot ">
` +stc_image_3s +`
</div>
<div class="screenshot_showcase_smallscreenshot showcase_slot ">
` +stc_image_4s +`
</div>
<div class="screenshot_showcase_smallscreenshot showcase_slot ">
<div class="showcase_stat favoritegroup_inchat">
<div class="value"></div>
<div class="label"><a href="https://steamcommunity.com/groups/remgc">RemGC</a></div>
</div>
<div style="clear: left;"></div>
</div>
<div class="screenshot_showcase_smallscreenshot showcase_slot ">
<div class="showcase_stat favoritegroup_inchat">
<div class="value"></div>
<div class="label"><a href="https://steamcommunity.com/groups/club7000">C7K</a></div>
</div>
<div style="clear: left;"></div>
</div>
</div>
<div style="clear: both;"></div>
</div>
</div>
</div>
`;

            console.log("skipping RA images/history : private 2 of 2");
        }
        else{
            //donothing
        }
        //showcase
    }
    else
    {
        //start-- showcase Default.
        if ((GM_getValue("Showcase_Default_Value") == 0) || (GM_getValue("Showcase_Default_Value") == "undefined") || (GM_getValue("Showcase_Default_Value") == null) ) {
            console.log("Showcase Default is set to : " + GM_getValue("Showcase_Default_Value") + " and will not add Showcase Default to the Steam Profile.");
        }
        else if ((GM_getValue("Showcase_Default_Value") == 1)) {
            console.log("Showcase Default is set to : " + GM_getValue("Showcase_Default_Value") + " and will add Showcase Default to the Steam Profile.");
            //RA
            var ra_image_0s = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_recentactivity_appid_0") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_steamtracker_recentactivity_title_0") + " : [" + GM_getValue("G_steamtracker_recentactivity_status_0") +"]"+ '"id="'+ GM_getValue("G_steamtracker_recentactivity_status_0").replace(" ", "") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_recentactivity_appid_0") +"/" + '" onclick="window.open(this.alt)">';
            var ra_image_1s = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_recentactivity_appid_1") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_steamtracker_recentactivity_title_1") + " : [" + GM_getValue("G_steamtracker_recentactivity_status_1") +"]"+ '"id="'+ GM_getValue("G_steamtracker_recentactivity_status_1").replace(" ", "") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_recentactivity_appid_1") +"/" + '" onclick="window.open(this.alt)">';
            var ra_image_2s = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_recentactivity_appid_2") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_steamtracker_recentactivity_title_2") + " : [" + GM_getValue("G_steamtracker_recentactivity_status_2") +"]"+ '"id="'+ GM_getValue("G_steamtracker_recentactivity_status_2").replace(" ", "") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_recentactivity_appid_2") +"/" + '" onclick="window.open(this.alt)">';
            var ra_image_3s = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_recentactivity_appid_3") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_steamtracker_recentactivity_title_3") + " : [" + GM_getValue("G_steamtracker_recentactivity_status_3") +"]"+ '"id="'+ GM_getValue("G_steamtracker_recentactivity_status_3").replace(" ", "") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_recentactivity_appid_3") +"/" + '" onclick="window.open(this.alt)">';
            //Changelog
            var stc_image_0s2 = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_0") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_0") + " : [" + GM_getValue("G_steamtracker_changelog_change_0") +"]"+ '"id="'+ GM_getValue("G_steamtracker_changelog_change_0").replace(" ", "") +'" alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_changelog_appid_0") +"/" + '" onclick="window.open(this.alt)">';
            var stc_image_1s2 = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_1") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_1") + " : [" + GM_getValue("G_steamtracker_changelog_change_1") +"]"+ '"id="'+ GM_getValue("G_steamtracker_changelog_change_1").replace(" ", "") +'" alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_changelog_appid_1") +"/" + '" onclick="window.open(this.alt)">';
            var stc_image_2s2 = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_2") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_2") + " : [" + GM_getValue("G_steamtracker_changelog_change_2") +"]"+ '"id="'+ GM_getValue("G_steamtracker_changelog_change_2").replace(" ", "") +'" alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_changelog_appid_2") +"/" + '" onclick="window.open(this.alt)">';
            var stc_image_3s2 = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_3") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_3") + " : [" + GM_getValue("G_steamtracker_changelog_change_3") +"]"+ '"id="'+ GM_getValue("G_steamtracker_changelog_change_3").replace(" ", "") +'" alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_changelog_appid_3") +"/" + '" onclick="window.open(this.alt)">';
            var stc_image_4s2 = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_4") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_4") + " : [" + GM_getValue("G_steamtracker_changelog_change_4") +"]"+ '"id="'+ GM_getValue("G_steamtracker_changelog_change_4").replace(" ", "") +'" alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_changelog_appid_4") +"/" + '" onclick="window.open(this.alt)">';

            var st_tablex = "<table style=\"width:100%\">" +tableheader+Total+TotalGames+total_ck7+Delisted+total_tk+Disabled+F2P+retailonly+testapp+preorder+unreleased+software+freesoftware+video+ "</table>";

            document.getElementsByClassName("profile_customization_area")[0].setAttribute("id", "MalikQayum_Showcase_1");
            var div_1 = document.getElementById("MalikQayum_Showcase_1");

            var x_div_1 = document.createElement('div');
            x_div_1.id = 'MalikQayum_Showcase_1';
            div_1.prepend(x_div_1);
            x_div_1.innerHTML =
                `
<div class="profile_customization"><div class="profile_customization_header"> Steam Removed Games Showcase	</div>
<div class="profile_customization_block">
<div class="screenshot_showcase">
<div class="screenshot_showcase_primary showcase_slot ">`+st_tablex+`</div>
<div class="screenshot_showcase_rightcol">
<div class="screenshot_showcase_smallscreenshot showcase_slot ">
` +stc_image_0s2 +`
</div>
<div class="screenshot_showcase_smallscreenshot showcase_slot ">
` +stc_image_1s2 +`
</div>
<div class="screenshot_showcase_smallscreenshot showcase_slot ">
` +stc_image_2s2 +`
</div>
<div class="screenshot_showcase_smallscreenshot showcase_slot ">
` +stc_image_3s2 +`
</div>
<div class="screenshot_showcase_smallscreenshot showcase_slot ">
` +stc_image_4s2 +`
</div>
<div class="screenshot_showcase_smallscreenshot showcase_slot ">
<div class="showcase_stat favoritegroup_inchat">
<div class="value"></div>
<div class="label"><a href="https://steamcommunity.com/groups/remgc">RemGC</a></div>
</div>
<div style="clear: left;"></div>
</div>
<div class="screenshot_showcase_smallscreenshot showcase_slot ">
<div class="showcase_stat favoritegroup_inchat">
<div class="value"></div>
<div class="label"><a href="https://steamcommunity.com/groups/club7000">C7K</a></div>
</div>
<div style="clear: left;"></div>
</div>
</div>
<div style="clear: both;"></div>
</div>
</div>
<div class="profile_customization_header">Recent Activity</div>
<div class="profile_customization_block">
<div class="gamecollector_showcase">
<div class="showcase_gamecollector_games">
<div class="showcase_slot showcase_gamecollector_game">
` +ra_image_0s +`
</div>
<div class="showcase_slot showcase_gamecollector_game">
` +ra_image_1s +`
</div>
</div>
<div class="showcase_slot showcase_gamecollector_game">
` +ra_image_2s +`
</div>
</div>
<div class="showcase_slot showcase_gamecollector_game">
` +ra_image_3s +`
</div>
</div>
<div style="clear: left;"></div>
</div>
</div>
<div style="clear: both"></div>
</div>
</div>
`;
        }
        else{
            //donothing
        }

        //showcase
        Recent_Activity_Showcase();
        RemGC_Showcase();
        C7K_Showcase();
        Rarest_Owned_Appids();
    }

    GM_deleteValue("G_steam_id");
    GM_deleteValue("G_timekillerz_rcount");
    GM_deleteValue("G_timekillerz_trcount");
    GM_deleteValue("G_c7k_rcount");
    GM_deleteValue("G_c7k_trcount");
    GM_deleteValue("G_steamtracker_privacy");
    GM_deleteValue("G_steamtracker_total_1");
    GM_deleteValue("G_steamtracker_total_2");
    GM_deleteValue("G_steamtracker_totalgames_1");
    GM_deleteValue("G_steamtracker_totalgames_2");
    GM_deleteValue("G_steamtracker_delisted_1");
    GM_deleteValue("G_steamtracker_delisted_2");
    GM_deleteValue("G_steamtracker_disabled_1");
    GM_deleteValue("G_steamtracker_disabled_2");
    GM_deleteValue("G_steamtracker_F2P_1");
    GM_deleteValue("G_steamtracker_F2P_2");
    GM_deleteValue("G_steamtracker_retailonly_1");
    GM_deleteValue("G_steamtracker_retailonly_2");
    GM_deleteValue("G_steamtracker_testapp_1");
    GM_deleteValue("G_steamtracker_testapp_2");
    GM_deleteValue("G_steamtracker_preorder_1");
    GM_deleteValue("G_steamtracker_preorder_2");
    GM_deleteValue("G_steamtracker_unreleased_1");
    GM_deleteValue("G_steamtracker_unreleased_2");
    GM_deleteValue("G_steamtracker_software_1");
    GM_deleteValue("G_steamtracker_software_2");
    GM_deleteValue("G_steamtracker_freesoftware_1");
    GM_deleteValue("G_steamtracker_freesoftware_2");
    GM_deleteValue("G_steamtracker_video_1");
    GM_deleteValue("G_steamtracker_video_2");
    GM_deleteValue("G_steamtracker_recentactivity_title_0");
    GM_deleteValue("G_steamtracker_recentactivity_appid_0");
    GM_deleteValue("G_steamtracker_recentactivity_status_0");
    GM_deleteValue("G_steamtracker_recentactivity_title_1");
    GM_deleteValue("G_steamtracker_recentactivity_appid_1");
    GM_deleteValue("G_steamtracker_recentactivity_status_1");
    GM_deleteValue("G_steamtracker_recentactivity_title_2");
    GM_deleteValue("G_steamtracker_recentactivity_appid_2");
    GM_deleteValue("G_steamtracker_recentactivity_status_2");
    GM_deleteValue("G_steamtracker_recentactivity_title_3");
    GM_deleteValue("G_steamtracker_recentactivity_appid_3");
    GM_deleteValue("G_steamtracker_recentactivity_status_3");
    GM_deleteValue("G_steamtracker_changelog_appid_0");
    GM_deleteValue("G_steamtracker_changelog_title_0");
    GM_deleteValue("G_steamtracker_changelog_change_0");
    GM_deleteValue("G_steamtracker_changelog_appid_1");
    GM_deleteValue("G_steamtracker_changelog_title_1");
    GM_deleteValue("G_steamtracker_changelog_change_1");
    GM_deleteValue("G_steamtracker_changelog_appid_2");
    GM_deleteValue("G_steamtracker_changelog_title_2");
    GM_deleteValue("G_steamtracker_changelog_change_2");
    GM_deleteValue("G_steamtracker_changelog_appid_3");
    GM_deleteValue("G_steamtracker_changelog_title_3");
    GM_deleteValue("G_steamtracker_changelog_change_3");
    GM_deleteValue("G_steamtracker_changelog_appid_4");
    GM_deleteValue("G_steamtracker_changelog_title_4");
    GM_deleteValue("G_steamtracker_changelog_change_4");
    GM_deleteValue("G_st_keys");
    GM_deleteValue("G_tk_keys");
    GM_deleteValue("G_r_owned_appids_0");
    GM_deleteValue("G_r_owned_appids_1");
    GM_deleteValue("G_r_owned_appids_2");
    GM_deleteValue("G_r_owned_appids_3");

}

//--showcases
//RemGC Showcase
function RemGC_Showcase(){
    if ((GM_getValue("RemGCTracker_Value") == 0) || (GM_getValue("RemGCTracker_Value") == "undefined") || (GM_getValue("RemGCTracker_Value") == null) ) {
        console.log("Showcase RemGC is set to : " + GM_getValue("RemGCTracker_Value") + " and will not add Showcase RemGC to the Steam Profile.");
    }
    else if ((GM_getValue("RemGCTracker_Value") == 1)) {
        console.log("Showcase RemGC Activity is set to : " + GM_getValue("RemGCTracker_Value") + " and will add Showcase RemGC to the Steam Profile.");

        document.getElementsByClassName("profile_customization_area")[0].setAttribute("id", "MalikQayum_Showcase_3");
        var div_3 = document.getElementById("MalikQayum_Showcase_3");

        var x_div_3 = document.createElement('div');
        x_div_3.id = 'MalikQayum_Showcase_3';
        div_3.appendChild(x_div_3);
        x_div_3.innerHTML =
            `
<div class="profile_customization"><div class="profile_customization_header">RemGC Group</div><div class="profile_customization_block">	<div class="favoritegroup_showcase"><div class="showcase_content_bg">
<div class="favoritegroup_showcase_group showcase_slot ">
<div class="favoritegroup_avatar">
<a href="http://steamcommunity.com/groups/RemGC">
<img src="http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/ea/ead110655c8169284d74b17a4d2c2e45eee6734e_full.jpg">
</a>
</div>
<div class="favoritegroup_content">
<div class="favoritegroup_namerow ellipsis">
<a class="favoritegroup_name whiteLink" href="http://steamcommunity.com/groups/RemGC">Removed Games Collectors</a>
</div>
<div class="favoritegroup_description">
Official Group for Removed Games Collectors							</div>
<div class="favoritegroup_stats showcase_stats_row">
<div class="showcase_stat favoritegroup_ingame">
<div class="value">`+ GM_getValue("G_timekillerz_rcount")+`</div>
<div class="label">Delisted</div>
</div>
<div class="showcase_stat favoritegroup_online">
<div class="value">`+ GM_getValue("G_timekillerz_trcount")+`</div>
<div class="label">Total</div>
</div>
<div class="showcase_stat favoritegroup_inchat">
<div class="value">RemGC</div>
<div class="label"><a href="steam://friends/joinchat/103582791435030951">Steam Chat</a></div>
</div>
<div style="clear: left;">
</div></div></div></div></div></div></div></div>
`;
    }
    else{
        //donothing
    }
}
//SHOWCASES ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Recent Activity Showcase.
function Recent_Activity_Showcase(){
    if ((GM_getValue("Showcase_RA_Value") == 0) || (GM_getValue("Showcase_RA_Value") == "undefined") || (GM_getValue("Showcase_RA_Value") == null) ) {
        console.log("Showcase Recent Activity is set to : " + GM_getValue("Showcase_RA_Value") + " and will not add Showcase Recent Activity to the Steam Profile.");
    }
    else if ((GM_getValue("Showcase_RA_Value") == 1)) {
        console.log("Showcase Recent Activity is set to : " + GM_getValue("Showcase_RA_Value") + " and will add Showcase Recent Activity to the Steam Profile.");
        //RA
        var ra_image_0sx = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_recentactivity_appid_0") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_steamtracker_recentactivity_title_0") + " : [" + GM_getValue("G_steamtracker_recentactivity_status_0") +"]"+ '"id="'+ GM_getValue("G_steamtracker_recentactivity_status_0").replace(" ", "") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_recentactivity_appid_0") +"/"+ '" onclick="window.open(this.alt)">';
        var ra_image_1sx = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_recentactivity_appid_1") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_steamtracker_recentactivity_title_1") + " : [" + GM_getValue("G_steamtracker_recentactivity_status_1") +"]"+ '"id="'+ GM_getValue("G_steamtracker_recentactivity_status_1").replace(" ", "") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_recentactivity_appid_1") +"/" + '" onclick="window.open(this.alt)">';
        var ra_image_2sx = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_recentactivity_appid_2") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_steamtracker_recentactivity_title_2") + " : [" + GM_getValue("G_steamtracker_recentactivity_status_2") +"]"+ '"id="'+ GM_getValue("G_steamtracker_recentactivity_status_2").replace(" ", "") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_recentactivity_appid_2") +"/" + '" onclick="window.open(this.alt)">';
        var ra_image_3sx = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_recentactivity_appid_3") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_steamtracker_recentactivity_title_3") + " : [" + GM_getValue("G_steamtracker_recentactivity_status_3") +"]"+ '"id="'+ GM_getValue("G_steamtracker_recentactivity_status_3").replace(" ", "") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_recentactivity_appid_3") +"/" + '" onclick="window.open(this.alt)">';

        document.getElementsByClassName("profile_customization_area")[0].setAttribute("id", "MalikQayum_Showcase_2");
        var div_2 = document.getElementById("MalikQayum_Showcase_2");

        var x_div_2 = document.createElement('div');
        x_div_2.id = 'MalikQayum_Showcase_2';
        div_2.appendChild(x_div_2);
        x_div_2.innerHTML =
            `
<div class="profile_customization"><div class="profile_customization_header">Recent Activity</div><div class="profile_customization_block"><div class="gamecollector_showcase"><div class="showcase_gamecollector_games">
<div class="showcase_slot showcase_gamecollector_game" >
` +ra_image_0sx +`
</div>
<div class="showcase_slot showcase_gamecollector_game">
` +ra_image_1sx +`
</div>
</div>
<div class="showcase_slot showcase_gamecollector_game">
` +ra_image_2sx +`
</div>
</div>
<div class="showcase_slot showcase_gamecollector_game">
` +ra_image_3sx +`
</div>
</div>
<div style="clear: left;"></div></div></div><div style="clear: both"></div></div></div>
`;
    }
    else{
        //donothing
    }
}
//Rarest Owned Appids Showcase.
function Rarest_Owned_Appids(){
    if ((GM_getValue("Showcase_ROA_Value") == 0) || (GM_getValue("Showcase_ROA_Value") == "undefined") || (GM_getValue("Showcase_ROA_Value") == null) ) {
        console.log("Showcase Rarest Owned Appids is set to : " + GM_getValue("Showcase_ROA_Value") + " and will not add Showcase Rarest Owned Appids to the Steam Profile.");
    }
    else if ((GM_getValue("Showcase_ROA_Value") == 1)) {
        console.log("Showcase Rarest Owned Appids is set to : " + GM_getValue("Showcase_ROA_Value") + " and will add Showcase Rarest Owned Appids to the Steam Profile.");
        tk_ownedapps();
    }
    else
    {
        //donothing
    }
}

function tk_ownedapps(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "http://removed.timekillerz.eu/content/generatejson.php?steamid="+ GM_getValue("G_steam_id"),
        onload: function(response_tk) {
            var tk_str = response_tk.responseText;
            var json_tk_data = JSON.parse(tk_str);
            var tk_keys=[];
            for(var i = 0; i < json_tk_data.response.games.length; i++) {
                tk_keys += json_tk_data.response.games[i].appid + ",";
            }
            GM_setValue("G_tk_keys", tk_keys.substring(0, tk_keys.length - 1));
            st_GetAppList();
        }
    });
}

function st_GetAppList(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://steam-tracker.com/api?action=GetAppList",
        onload: function(response_GetAppList) {
            var GetAppList_str = response_GetAppList.responseText;
            var json_ownedappids_data = JSON.parse(GetAppList_str);
            var st_keys=[];
            for(var i = 0; i < json_ownedappids_data.removed_apps.length; i++) {
                st_keys += json_ownedappids_data.removed_apps[i].appid + ",";
            }
            GM_setValue("G_st_keys", st_keys.substring(0, st_keys.length - 1));
            r_ownedappids();
        }
    });
}

function r_ownedappids(){
    var rarest_appids_Array =  JSON.parse("["+GM_getValue("G_st_keys")+"]");
    var Owned_appids_Array =  JSON.parse("["+GM_getValue("G_tk_keys")+"]");

    var r_owned_appids=[];
    var x = 0;

    for (var i = 0; i < rarest_appids_Array.length; i++) {
        for (var j = 0; j < Owned_appids_Array.length; j++) {
            if (x == 4) {
                break;
            }
            else if (rarest_appids_Array[i] == Owned_appids_Array[j]) {
                r_owned_appids += Owned_appids_Array[j]+",";
                x = x + 1;
            }
            else {
                //donothing
            }
        }
    }
    r_owned_appids = r_owned_appids.substring(0, r_owned_appids.length - 1);
    r_owned_appids=r_owned_appids.split(',');
    var out=[];
    for(i=0; i<r_owned_appids.length;i=i+2)
        out.push(r_owned_appids.slice(i,i+2).join(','));

    GM_setValue("G_r_owned_appids_0",r_owned_appids[0]);
    GM_setValue("G_r_owned_appids_1",r_owned_appids[1]);
    GM_setValue("G_r_owned_appids_2",r_owned_appids[2]);
    GM_setValue("G_r_owned_appids_3",r_owned_appids[3]);
    rarest_owned_appids_();
}

function rarest_owned_appids_(){

    document.getElementsByClassName("profile_customization_area")[0].setAttribute("id", "MalikQayum_Showcase_5");
    var div_5 = document.getElementById("MalikQayum_Showcase_5");

    var x_div_5 = document.createElement('div');
    x_div_5.id = 'MalikQayum_Showcase_5';
    div_5.appendChild(x_div_5);
    x_div_5.innerHTML =
        `
<div class="profile_customization"><div class="profile_customization_header">Rarest Owned Appids</div><div class="profile_customization_block"><div class="gamecollector_showcase"><div class="showcase_gamecollector_games">
<div class="showcase_slot showcase_gamecollector_game" >
` +'<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_r_owned_appids_0") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_r_owned_appids_0") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_r_owned_appids_0") +"/"+ '" onclick="window.open(this.alt)">' +`
</div>
<div class="showcase_slot showcase_gamecollector_game">
` +'<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_r_owned_appids_1") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_r_owned_appids_1") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_r_owned_appids_1") +"/"+ '" onclick="window.open(this.alt)">' +`
</div>
</div>
<div class="showcase_slot showcase_gamecollector_game">
` +'<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_r_owned_appids_2") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_r_owned_appids_2") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_r_owned_appids_2") +"/"+ '" onclick="window.open(this.alt)">' +`
</div>
</div>
<div class="showcase_slot showcase_gamecollector_game">
` +'<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_r_owned_appids_3") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_r_owned_appids_3") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_r_owned_appids_3") +"/"+ '" onclick="window.open(this.alt)">' +`
</div>
</div>
<div style="clear: left;"></div></div></div><div style="clear: both"></div></div></div>
`;

}
//C7K Showcase.
function C7K_Showcase(){
    if ((GM_getValue("C7KTracker_Value") == 0) || (GM_getValue("C7KTracker_Value") == "undefined") || (GM_getValue("C7KTracker_Value") == null) ) {
        console.log("Showcase C7K is set to : " + GM_getValue("C7KTracker_Value") + " and will not add Showcase C7K to the Steam Profile.");
    }
    else if ((GM_getValue("C7KTracker_Value") == 1)) {
        console.log("Showcase C7K is set to : " + GM_getValue("C7KTracker_Value") + " and will add Showcase C7K to the Steam Profile.");

        document.getElementsByClassName("profile_customization_area")[0].setAttribute("id", "MalikQayum_Showcase_4");
        var div_4 = document.getElementById("MalikQayum_Showcase_4");

        var x_div_4 = document.createElement('div');
        x_div_4.id = 'MalikQayum_Showcase_4';
        div_4.appendChild(x_div_4);
        x_div_4.innerHTML =
            `
<div class="profile_customization"><div class="profile_customization_header">C7K Group</div><div class="profile_customization_block">	<div class="favoritegroup_showcase"><div class="showcase_content_bg">
<div class="favoritegroup_showcase_group showcase_slot ">
<div class="favoritegroup_avatar">
<a href="http://steamcommunity.com/groups/club7000">
<img src="http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/7a/7aae84f5ec0c364ed2cecda22a822b7e3a01a8b0_full.jpg">
</a>
</div>
<div class="favoritegroup_content">
<div class="favoritegroup_namerow ellipsis">
<a class="favoritegroup_name whiteLink" href="http://steamcommunity.com/groups/club7000">Club 7000</a>
</div>
<div class="favoritegroup_description">
Official Group for Club 7000							</div>
<div class="favoritegroup_stats showcase_stats_row">
<div class="showcase_stat favoritegroup_ingame">
<div class="value">`+ GM_getValue("G_c7k_rcount")+`</div>
<div class="label">Delisted</div>
</div>
<div class="showcase_stat favoritegroup_online">
<div class="value">`+GM_getValue("G_c7k_trcount")+`</div>
<div class="label">Total</div>
</div>
<div class="showcase_stat favoritegroup_inchat">
<div class="value">C7K</div>
<div class="label"><a href="steam://friends/joinchat/103582791433418659">Steam Chat</a></div>
</div>
<div style="clear: left;">
</div></div></div></div></div></div></div></div>
`;
    }
    else{
        //donothing
    }
}