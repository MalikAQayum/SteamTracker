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
		//GM_setValue("G_ST_DB", "1"); so we can test around with so we can stop the script from looping on users that does not exist in the steam-tracker db.
		GM_setValue("G_ST_DB", "1");
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
                GM_setValue("G_steamtracker_video_1",json_st_data.stats[10].category_total);
                GM_setValue("G_steamtracker_video_2",json_st_data.stats[10].count);
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
				console.log("1/3");
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
			console.log("2/3");
            steamtracker_changelog_data_both();
        }
    });
}

function steamtracker_changelog_data_both(){
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
			console.log("3/3 Steam-Tracker API Stuff Done.");
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
				console.log("1/3");
                st_GetAppList_only();
            }
        }
    });
}

function st_GetAppList_only(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://steam-tracker.com/api?action=GetAppListV3",
        onload: function(response_GetAppList) {
            var GetAppList_str = response_GetAppList.responseText;
            var json_ownedappids_data = JSON.parse(GetAppList_str);
            var st_keys=[];
            for(var i = 0; i < json_ownedappids_data.removed_apps.length; i++) {
                st_keys += json_ownedappids_data.removed_apps[i].appid + ",";
            }
            GM_setValue("G_st_keys", st_keys.substring(0, st_keys.length - 1));
            console.log("2/3");
			steamtracker_changelog_data_only();

        }
    });
}

function steamtracker_changelog_data_only(){
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
            console.log("3/3 Steam-Tracker API Stuff Done.");;
            GM_setValue("G_API", "1");
        }
    });
}
