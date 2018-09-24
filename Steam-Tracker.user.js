// ==UserScript==
// @name         Steam-Tracker
// @namespace    https://github.com/MalikAQayum/SteamTracker
// @description  adds stats/showcases to the steam profile page from steam-tracker.com api + adds a button to steam-tracker <appid> to the app hub page and store page.
// @author       MalikQayum
// @connect      steam-tracker.com
// @connect      api.steampowered.com
// @connect      store.steampowered.com
// @connect      steamcommunity.com
// @include      /^https?://steamcommunity\.com/(id|profiles)/
// @include      /^https?://steamcommunity\.com/(id|profiles)/(games/?tab=removedappids*|games?tab=removedappids*)/
// @include      /^https?://steamcommunity\.com/(id|profiles)/edit/settings/steamtracker/
// @include      /^https?://steamcommunity\.com/(id|profiles)//
// @include      /^https?://steamcommunity\.com/app/*/
// @include      /^https?://store.steampowered.com/app/*/
// @require     https://code.jquery.com/jquery-2.1.4.min.js
// @require     https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.1.1/Chart.min.js
// @require  https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/api/api.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/settings.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/showcases/Showcases.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/showcases/default_st_public.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/showcases/default_st_private.js
// @require     https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/GMDelete.js
// @downloadURL https://github.com/MalikAQayum/SteamTracker/raw/master/Steam-Tracker.user.js
// @updateURL   https://github.com/MalikAQayum/SteamTracker/raw/master/Steam-Tracker.user.js
// @version      5.0.1.8
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_addStyle
// ==/UserScript==

var st_Version = GM_info.script.version, st_Name = GM_info.script.name, st_Author = GM_info.script.author, st_Namespace = GM_info.script.namespace;
console.log ('%c '+st_Name + ': v'+st_Version + ' by '+st_Author, 'background: grey; color: white; display: block;', st_Namespace);

GM_addStyle(`
#Available { border-right: 5px solid; color: blue;}
#Opensub { border-right: 5px solid; color: yellow;}
#Purchasedisabled { border-right: 5px solid; color: orange;}
#Delistedsoftware { border-right: 5px solid; color: gray;}
#Delistedvideo { border-right: 5px solid; color: gray;}
#Delisted { border-right: 5px solid; color: gray;}
#Freesoftware { border-right: 5px solid; color: gray;}
#F2P\\(unavailable\\) { border-right: 5px solid; color: gray;}
#Software { border-right: 5px solid; color: gray;}
#Video { border-right: 5px solid; color: gray;}
#Limited { border-right: 5px solid; color: yellow;}
#Unreleasedsoftware { border-right: 5px solid; color: black;}
#deleted { border-right: 5px solid; color: gray;}
#Banned { border-right: 5px solid; color: red;}
#new { border-right: 5px solid; color: green;}
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
var re_apphub_0 = new RegExp(/^https?:\/\/steamcommunity\.com\/app\/\d+/);
var re_apphub_1 = new RegExp(/^https?:\/\/steamcommunity\.com\/app\/\d+\/(discussions|screenshots|images|broadcasts|videos|workshop|allnews|guides|reviews)\//);
if (document.URL.match(re_apphub_0) || document.URL.match(re_apphub_1)) 
{
    if ((GM_getValue("HubTracker_Value") === 0) || (GM_getValue("HubTracker_Value") === "undefined") || (GM_getValue("HubTracker_Value") === null) ) {
        console.log("HubTracker is set to : " + GM_getValue("HubTracker_Value") + " and will not add a Steam-Tracker Button to the Hub.");
    }
    else if ((GM_getValue("HubTracker_Value") == 1)) {
        console.log("HubTracker is set to : " + GM_getValue("HubTracker_Value") + " and will add a Steam-Tracker Button to the Hub.");
        var appid = location.href.split("/")[4];
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


var re_steam_profile = new RegExp(/^https?:\/\/steamcommunity\.com\/(id|profiles)\/[^\/]+\/?$/);
if(document.URL.match(re_steam_profile))
{
    var anchors = document.querySelectorAll('a[href$="tab=all"]');
    Array.prototype.forEach.call(anchors, function (element, index) {
        element.href = window.location.href+"/games/?tab=removedappids";
    });

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

        if ((GM_getValue("Showcase_RA_Value") == 1) || (GM_getValue("Showcase_ST_Default_Value") == 1) || (GM_getValue("Showcase_ST_ROA_Value") == 1))  {
            if(GM_getValue("SLChart_v1_Value") === "1"){ SLData_v1(); wait_sldata_v1();}
		    if(GM_getValue("SLChart_v2_Value") === "1"){SLData_v2();wait_sldata_v2();}
		    if(GM_getValue("SLChart_v3_Value") === "1"){SLData_v3();wait_sldata_v3();}
            steam_tracker_data_only();
            wait_api();
        }
        else {
            if(GM_getValue("SLChart_v1_Value") === "1"){ SLData_v1(); wait_sldata_v1();}
	    	if(GM_getValue("SLChart_v2_Value") === "1"){SLData_v2();wait_sldata_v2();}
		    if(GM_getValue("SLChart_v3_Value") === "1"){SLData_v3();wait_sldata_v3();}
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
            default_st_private();
            ST_ROA();
            console.log("END: "+new Date());

        }
        else
        {
            //showcase
            default_st_public();
            Recent_Activity_Showcase();
            ST_ROA();
            console.log("END: "+new Date());
        }
        GMDelete();
    }
    else
    {
        console.log("START: "+new Date());
        setTimeout(function(){ wait_api(); }, 250);
    }
}

//START---- NEED TO ADD A SETTING FOR THIS AT ONE POINT SO IT BECOMES OPTIONAL:
//function to change the class in the "?tab=" from active to non active.
(function ($) {
    $.fn.replaceActiveClass = function (RemoveFromClass, AddToClass) {
        return this.removeClass(RemoveFromClass).addClass(AddToClass);
    };
}(jQuery));
//$('.sectionTab').replaceActiveClass('active','');

var re_removedappids = new RegExp(/tab=removedappids/g);
if(document.URL.match(re_removedappids))
{
    $('.sectionTab').replaceActiveClass('active','');
    var urlpath = location.href.split("/")[3];
    var urlpath2 = location.href.split("/")[4];
    $( '<a href="http://steamcommunity.com/'+urlpath+'/'+urlpath2+'/games/?tab=removedappids" class="sectionTab active"><span>removed appids</span></a>' ).appendTo( ".sectionTabs" );
    
    $('.sectionTabs').click(function() {
        $(this).toggleClass('sectionTabs active');
    });

    $("#games_list_rows").remove();
    var vanityurl = location.href.split("/")[3];
    if (/id/i.test(vanityurl))
    {
        vanityurl = location.href.split("/")[4];
        getsteamid();
    }
    else
    {
        vanityurl = location.href.split("/")[4];
        DelistedApps();
    }
}

function getsteamid(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "http://steamcommunity.com/id/"+vanityurl+"/?xml=1",
        onload: function(response_xml) {
            var xmlDoc = response_xml.responseXML;
            var x = xmlDoc.getElementsByTagName('steamID64')[0];
            var y = x.childNodes[0];
            vanityurl = y.nodeValue;
            DelistedApps();
        }
    });
}

function DelistedApps(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://steam-tracker.com/api?action=GetUserAppList&steamid="+vanityurl,
        onload: function(response_st) {
            var st_str = response_st.responseText;
            var json = JSON.parse(st_str);
            $('#games_list_row_container').append('<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"width:100%;\"></table>');

            $(document).ready(function () {
                var tr;
                for (var i = 0; i < json.apps.length; i++) {
                    tr = $('<tr/ class="gameListRow">');
                    tr.append("<td>" + "<img src=\"http://steamcdn-a.akamaihd.net/steam/apps/"+json.apps[i].appid+"/capsule_184x69.jpg\"onerror='this.src=\"https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/noimageavailable.gif\"'; alt=\""+json.apps[i].appid+"\" style=\"width:184px;height:69px;\">" + "</td>");
                    tr.append("<td>" + json.apps[i].appid + "</td>");
                    tr.append("<td>" + '<a href="https://steam-tracker.com/app/'+json.apps[i].appid+'">'+json.apps[i].name +'</a></td>' + '\r\n' + '<a class="pullup_item" href="http://store.steampowered.com/recommended/recommendgame/605470"><div class="menu_ico"><img src="http://steamcommunity-a.akamaihd.net/public/images/skin_1/icon_rate.png" width="16" height="16" border="0"></div>Review...	</a>');
                    $('table').append(tr);
                }
            });
        }
    });
}
//END---- NEED TO ADD A SETTING FOR THIS AT ONE POINT SO IT BECOMES OPTIONAL:
