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

