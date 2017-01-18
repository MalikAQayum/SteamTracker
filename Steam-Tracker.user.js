// ==UserScript==
// @name         Steam-Tracker
// @namespace    https://steam-tracker.com/ + http://removed.timekillerz.eu/
// @version      0.1.1.1
// @description  add stats to the steam profile page from http://removed.timekillerz.eu/ and https://steam-tracker.com/user/*/ + adds a button to steam-tracker <appid> to the app hub page and store page.
// @author       MalikQayum
// @include      /^https?://steamcommunity\.com/(id|profiles)/*/edit/settings/steamtracker/
// @include      /^https?://steamcommunity\.com/(id|profiles)/*/
// @include      /^https?://steamcommunity\.com/app/*
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
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @updateURL    https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/Steam-Tracker.user.js
// @downloadURL  https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/Steam-Tracker.user.js
// ==/UserScript==

//settings page stuff--------------------------------------------------------------------------------------------------------------------------------------------------------------------
var StoreTracker_Value;
var HubTracker_Value;

var re_settings_page = new RegExp(/settings\/steamtracker/);
if(document.URL.match(re_settings_page))
{
    document.body.innerHTML = ' ';
    var Settings = document.createElement("div");
    Settings.innerHTML = "<p><h3>SteamTracker Extension Settings.</h3></p><br>";
    document.body.appendChild(Settings, document.body.firstChild);

    var hr = document.createElement('hr');
    hr.innerHTML = ' ';
    document.body.appendChild(hr);
    
    /*-------------------------------------------------------------------------------------------------------------------------------------------------------------*/

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
    StoreTracker_I.value=0;
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
    HubTracker_I.value=0;
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
}
//settings page stuff--------------------------------------------------------------------------------------------------------------------------------------------------------------------

//store app stuff
var re_appstore = new RegExp(/^https?:\/\/store\.steampowered\.com\/app\/*/);
if(document.URL.match(re_appstore))
{
    if ((GM_getValue("StoreTracker_Value") == 0) || (GM_getValue("StoreTracker_Value") == "undefined") || (GM_getValue("StoreTracker_Value") == null) ) {
        console.log("StoreTracker is set to : " + GM_getValue("StoreTracker_Value") + " and will not add a Steam-Tracker Button to the Steam Store Page.");
    }
    if ((GM_getValue("StoreTracker_Value") == 1)) {
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
}

//community app hub stuff (should respect the exclude rules)
/*
tiny issue here, this wont run on /screenshot and /videos: reason being we have the exclude rules for the steam profile ..
anyway the important part is that it is on the main app hub page.
exclude      *://steamcommunity.com/* /* /videos*
exclude      *://steamcommunity.com/* /* /screenshots*
*/
var re_apphub = new RegExp(/^https?:\/\/steamcommunity\.com\/app\/*/);
if(document.URL.match(re_apphub))
{
    if ((GM_getValue("HubTracker_Value") == 0) || (GM_getValue("HubTracker_Value") == "undefined") || (GM_getValue("HubTracker_Value") == null) ) {
        console.log("HubTracker is set to : " + GM_getValue("HubTracker_Value") + " and will not add a Steam-Tracker Button to the Hub.");
    }
    if ((GM_getValue("HubTracker_Value") == 1)) {
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
}


var re_steam_profile = new RegExp(/^https?:\/\/steamcommunity\.com\/(id|profiles)\/*/);
if(document.URL.match(re_steam_profile))
{
    Steam_id();
}
else
{
    //donothing
}


function Steam_id(){
    var html_str = document.documentElement.innerHTML;
    var start_pos_id = html_str.indexOf(',"steamid":"') + 12;
    var end_pos_id = html_str.indexOf('",',start_pos_id);
    var steam_id = html_str.substring(start_pos_id,end_pos_id);
    GM_setValue("G_steam_id", steam_id);
    
    var private_profile = document.getElementsByClassName('profile_private_info');
    if (private_profile.length > 0) {
        var c7k_p = "<a href=\"https://c7k.jfietkau.me/\">C7K</a>";
        var tk_p ="<a href=" + "http://removed.timekillerz.eu/tools.php?steamprofile="+steam_id + ">TimeKillerz</a>";
        var st_p ="<a href=" + "https://steam-tracker.com/user/"+steam_id+"/" + ">Steam-Tracker</a>";
        var div_pil_p = document.getElementsByClassName("profile_rightcol")[0];
        var pil_Div_p = document.createElement('div');
        pil_Div_p.id = 'profile_item_links_st_tk_c7k';
        pil_Div_p.className = "count_link_label";
        div_pil_p.prepend(pil_Div_p);
        pil_Div_p.innerHTML ="<p><span id=\"st\" class=\"count_link_label\">"+st_p+"</span></p>"+"<p><span id=\"tk\" class=\"count_link_label\">"+tk_p+"</span></p>"+"<p><span id=\"c7k\" class=\"count_link_label\">"+c7k_p+"</span></p>";
    }
    else
    {
        var c7k = "<a href=\"https://c7k.jfietkau.me/\">C7K</a>";
        var tk ="<a href=" + "http://removed.timekillerz.eu/tools.php?steamprofile="+steam_id + ">TimeKillerz</a>";
        var st ="<a href=" + "https://steam-tracker.com/user/"+steam_id+"/" + ">Steam-Tracker</a>";
        document.getElementsByClassName("profile_item_links")[0].setAttribute("id", "MalikQayum_profile_item_links");
        var div_pil = document.getElementById("MalikQayum_profile_item_links");
        var pil_Div = document.createElement('div');
        pil_Div.id = 'profile_item_links_st_tk_c7k';
        pil_Div.className = "count_link_label";
        div_pil.prepend(pil_Div);
        pil_Div.innerHTML ="<p><span id=\"st\" class=\"count_link_label\">"+st+"</span></p>"+"<p><span id=\"tk\" class=\"count_link_label\">"+tk+"</span></p>"+"<p><span id=\"c7k\" class=\"count_link_label\">"+c7k+"</span></p>";
        timekillerz_data();
    }
}

var G_steam_id, G_timekillerz_rcount, G_timekillerz_trcount, G_c7k_rcount, G_c7k_trcount, G_steamtracker_privacy, G_steamtracker_total_1, G_steamtracker_total_2, G_steamtracker_totalgames_1, G_steamtracker_totalgames_2, G_steamtracker_delisted_1, G_steamtracker_delisted_2, G_steamtracker_disabled_1, G_steamtracker_disabled_2, G_steamtracker_F2P_1, G_steamtracker_F2P_2, G_steamtracker_retailonly_1, G_steamtracker_retailonly_2, G_steamtracker_testapp_1, G_steamtracker_testapp_2, G_steamtracker_preorder_1, G_steamtracker_preorder_2, G_steamtracker_unreleased_1, G_steamtracker_unreleased_2, G_steamtracker_software_1, G_steamtracker_software_2, G_steamtracker_freesoftware_1, G_steamtracker_freesoftware_2, G_steamtracker_video_1, G_steamtracker_video_2, G_steamtracker_recentactivity_title_0, G_steamtracker_recentactivity_appid_0, G_steamtracker_recentactivity_status_0, G_steamtracker_recentactivity_title_1, G_steamtracker_recentactivity_appid_1, G_steamtracker_recentactivity_status_1, G_steamtracker_recentactivity_title_2, G_steamtracker_recentactivity_appid_2, G_steamtracker_recentactivity_status_2, G_steamtracker_recentactivity_title_3, G_steamtracker_recentactivity_appid_3, G_steamtracker_recentactivity_status_3, G_steamtracker_changelog_appid_0, G_steamtracker_changelog_title_0, G_steamtracker_changelog_change_0, G_steamtracker_changelog_appid_1, G_steamtracker_changelog_title_1, G_steamtracker_changelog_change_1, G_steamtracker_changelog_appid_2, G_steamtracker_changelog_title_2, G_steamtracker_changelog_change_2, G_steamtracker_changelog_appid_3, G_steamtracker_changelog_title_3, G_steamtracker_changelog_change_3, G_steamtracker_changelog_appid_4, G_steamtracker_changelog_title_4, G_steamtracker_changelog_change_4;

function timekillerz_data(){
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
            steam_tracker_data();
        }
    });
}

function steam_tracker_data(){
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
                var st ="<a href=" + "https://steam-tracker.com/user/"+GM_getValue("G_steam_id")+"/" + ">Steam-Tracker</a>";               
                document.getElementById("st").innerHTML ="<p><span id=\"st\" class=\"count_link_label\">"+st+"</span></p>";
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
                steamtracker_changelog_data();
            }
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
            steam_tracker_data_2();
        }
    });
}

function steam_tracker_data_2(){
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

        var stc_changelog_url_0x = 'https://steam-tracker.com/app/'+ GM_getValue("G_steamtracker_changelog_appid_0") +"/";
        var stc_changelog_url_1x = 'https://steam-tracker.com/app/'+ GM_getValue("G_steamtracker_changelog_appid_1") +"/";
        var stc_changelog_url_2x = 'https://steam-tracker.com/app/'+ GM_getValue("G_steamtracker_changelog_appid_2") +"/";
        var stc_changelog_url_3x = 'https://steam-tracker.com/app/'+ GM_getValue("G_steamtracker_changelog_appid_3") +"/";
        var stc_changelog_url_4x = 'https://steam-tracker.com/app/'+ GM_getValue("G_steamtracker_changelog_appid_4") +"/";
        var stc_image_0s = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_0") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_0") + '"id="'+ GM_getValue("G_steamtracker_changelog_change_0").replace(" ", "") +'" alt="' + stc_changelog_url_0x + '" onclick="window.open(this.alt)">';
        var stc_image_1s = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_1") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_1") + '"id="'+ GM_getValue("G_steamtracker_changelog_change_1").replace(" ", "") +'" alt="' + stc_changelog_url_1x + '" onclick="window.open(this.alt)">';
        var stc_image_2s = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_2") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_2") + '"id="'+ GM_getValue("G_steamtracker_changelog_change_2").replace(" ", "") +'" alt="' + stc_changelog_url_2x + '" onclick="window.open(this.alt)">';
        var stc_image_3s = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_3") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_3") + '"id="'+ GM_getValue("G_steamtracker_changelog_change_3").replace(" ", "") +'" alt="' + stc_changelog_url_3x + '" onclick="window.open(this.alt)">';
        var stc_image_4s = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_4") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_4") + '"id="'+ GM_getValue("G_steamtracker_changelog_change_4").replace(" ", "") +'" alt="' + stc_changelog_url_4x + '" onclick="window.open(this.alt)">';
        var st_table = "<table style=\"width:100%\">" +tableheader+Total+TotalGames+total_ck7+Delisted+total_tk+Disabled+F2P+retailonly+testapp+preorder+unreleased+software+freesoftware+video+ "</table>";
        
        document.getElementsByClassName("profile_customization_area")[0].setAttribute("id", "MalikQayum_Showcase");
        var div_remgc = document.getElementById("MalikQayum_Showcase");
        var remgc_Div = document.createElement('div');
        remgc_Div.id = 'MalikQayum_Showcase_content';
        div_remgc.prepend(remgc_Div);
        remgc_Div.innerHTML =
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
        var styleNode = document.createElement('style');
        styleNode.type = "text/css";
        var styleText = document.createTextNode(
            `
            #Available {-webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */ filter: grayscale(0%);}
            #Opensub {-webkit-filter: grayscale(0.5) sepia(0.5); /* Safari 6.0 - 9.0 */ filter: grayscale(0.5) sepia(0.5);}
            #Purchasedisabled {-webkit-filter: grayscale(0.5); /* Safari 6.0 - 9.0 */ filter: grayscale(0.5);}
            #Delisted {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}

            #Freesoftware {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}
            #Software {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}
            #Video {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}

            #deleted {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}
            `);
        styleNode.appendChild(styleText);
        document.getElementsByTagName('head')[0].appendChild(styleNode);

        console.log("skipping RA images/history : private 2 of 2");
    }
    else
    {
        //RA
        var recent_activity_url_0x = 'https://steam-tracker.com/app/'+ GM_getValue("G_steamtracker_recentactivity_appid_0") +"/";
        var recent_activity_url_1x = 'https://steam-tracker.com/app/'+ GM_getValue("G_steamtracker_recentactivity_appid_1") +"/";
        var recent_activity_url_2x = 'https://steam-tracker.com/app/'+ GM_getValue("G_steamtracker_recentactivity_appid_2") +"/";
        var recent_activity_url_3x = 'https://steam-tracker.com/app/'+ GM_getValue("G_steamtracker_recentactivity_appid_3") +"/";
        var ra_image_0s = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_recentactivity_appid_0") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_steamtracker_recentactivity_title_0") + '"id="'+ GM_getValue("G_steamtracker_recentactivity_status_0").replace(" ", "") + '"alt="' + recent_activity_url_0x + '" onclick="window.open(this.alt)">';
        var ra_image_1s = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_recentactivity_appid_1") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_steamtracker_recentactivity_title_1") + '"id="'+ GM_getValue("G_steamtracker_recentactivity_status_1").replace(" ", "") + '"alt="' + recent_activity_url_1x + '" onclick="window.open(this.alt)">';
        var ra_image_2s = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_recentactivity_appid_2") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_steamtracker_recentactivity_title_2") + '"id="'+ GM_getValue("G_steamtracker_recentactivity_status_2").replace(" ", "") + '"alt="' + recent_activity_url_2x + '" onclick="window.open(this.alt)">';
        var ra_image_3s = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_recentactivity_appid_3") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_steamtracker_recentactivity_title_3") + '"id="'+ GM_getValue("G_steamtracker_recentactivity_status_3").replace(" ", "") + '"alt="' + recent_activity_url_3x + '" onclick="window.open(this.alt)">';

        var stc_changelog_url_0x2 = 'https://steam-tracker.com/app/'+ GM_getValue("G_steamtracker_changelog_appid_0") +"/";
        var stc_changelog_url_1x2 = 'https://steam-tracker.com/app/'+ GM_getValue("G_steamtracker_changelog_appid_1") +"/";
        var stc_changelog_url_2x2 = 'https://steam-tracker.com/app/'+ GM_getValue("G_steamtracker_changelog_appid_2") +"/";
        var stc_changelog_url_3x2 = 'https://steam-tracker.com/app/'+ GM_getValue("G_steamtracker_changelog_appid_3") +"/";
        var stc_changelog_url_4x2 = 'https://steam-tracker.com/app/'+ GM_getValue("G_steamtracker_changelog_appid_4") +"/";
        var stc_image_0s2 = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_0") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_0") + '"id="'+ GM_getValue("G_steamtracker_changelog_change_0").replace(" ", "") +'" alt="' + stc_changelog_url_0x2 + '" onclick="window.open(this.alt)">';
        var stc_image_1s2 = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_1") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_1") + '"id="'+ GM_getValue("G_steamtracker_changelog_change_1").replace(" ", "") +'" alt="' + stc_changelog_url_1x2 + '" onclick="window.open(this.alt)">';
        var stc_image_2s2 = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_2") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_2") + '"id="'+ GM_getValue("G_steamtracker_changelog_change_2").replace(" ", "") +'" alt="' + stc_changelog_url_2x2 + '" onclick="window.open(this.alt)">';
        var stc_image_3s2 = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_3") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_3") + '"id="'+ GM_getValue("G_steamtracker_changelog_change_3").replace(" ", "") +'" alt="' + stc_changelog_url_3x2 + '" onclick="window.open(this.alt)">';
        var stc_image_4s2 = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_changelog_appid_4") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://steam-tracker.com/images/transparent231x87.gif\'"; height="100%" width="100%" style="max-width: 100px;" title="' + GM_getValue("G_steamtracker_changelog_title_4") + '"id="'+ GM_getValue("G_steamtracker_changelog_change_4").replace(" ", "") +'" alt="' + stc_changelog_url_4x2 + '" onclick="window.open(this.alt)">';

        var st_tablex = "<table style=\"width:100%\">" +tableheader+Total+TotalGames+total_ck7+Delisted+total_tk+Disabled+F2P+retailonly+testapp+preorder+unreleased+software+freesoftware+video+ "</table>";

        document.getElementsByClassName("profile_customization_area")[0].setAttribute("id", "MalikQayum_Showcase");
        var div_remgc2 = document.getElementById("MalikQayum_Showcase");

        var remgc_Div2 = document.createElement('div');
        remgc_Div2.id = 'MalikQayum_Showcase_content';
        div_remgc2.prepend(remgc_Div2);
        remgc_Div2.innerHTML =
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
        var styleNode2 = document.createElement('style');
        styleNode2.type = "text/css";
        var styleText2 = document.createTextNode(
            `
            #Available {-webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */ filter: grayscale(0%);}
            #Opensub {-webkit-filter: grayscale(0.5) sepia(0.5); /* Safari 6.0 - 9.0 */ filter: grayscale(0.5) sepia(0.5);}
            #Purchasedisabled {-webkit-filter: grayscale(0.5); /* Safari 6.0 - 9.0 */ filter: grayscale(0.5);}
            #Delisted {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}

            #Freesoftware {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}
            #Software {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}
            #Video {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}

            #deleted {-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%);}
            `);
        styleNode2.appendChild(styleText2);
        document.getElementsByTagName('head')[0].appendChild(styleNode2);

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
}
