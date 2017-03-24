function default_private(){
    if ((GM_getValue("Showcase_Default_Value") == 0) || (GM_getValue("Showcase_Default_Value") == "undefined") || (GM_getValue("Showcase_Default_Value") == null) ) {
        console.log("Showcase Default is set to : " + GM_getValue("Showcase_Default_Value") + " and will not add Showcase Default to the Steam Profile.");
    }
    else if ((GM_getValue("Showcase_Default_Value") == 1)) {
        console.log("Showcase Default is set to : " + GM_getValue("Showcase_Default_Value") + " and will add Showcase Default to the Steam Profile.");
        var SteamTracker_link = document.createElement('a');
        var link = document.createTextNode("Steam-Tracker Profile: " + GM_getValue("G_steam_id"));
        SteamTracker_link.appendChild(link);
        SteamTracker_link.title = "Steam-Tracker Profile";
        SteamTracker_link.href = 'https://steam-tracker.com/user/'+ GM_getValue("G_steam_id") +"/";

        var TimeKillerz_link = document.createElement('a');
        var link_tk = document.createTextNode("TimeKillerz Profile: " + GM_getValue("G_steam_id"));
        TimeKillerz_link.appendChild(link_tk);
        TimeKillerz_link.title = "TimeKillerz Profile";
        TimeKillerz_link.href = 'http://removed.timekillerz.eu/tools.php?steamprofile='+ GM_getValue("G_steam_id");

        var tableheader = "<th class=\"license_date_col\">" + '<a href = "' + SteamTracker_link + '">Steam-Tracker</a>' + "</th>" + "<th class=\"license_date_col\">" + "Owned" + "</th>"+ "<th class=\"license_date_col\">" + "Total" + "</th>";
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

}