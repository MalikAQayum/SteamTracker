function Showcase_Default(){
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
}
