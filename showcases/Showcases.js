//Recent Activity Showcase.
function Recent_Activity_Showcase(){
    if ((GM_getValue("Showcase_RA_Value") == 0) || (GM_getValue("Showcase_RA_Value") == "undefined") || (GM_getValue("Showcase_RA_Value") == null) ) {
        console.log("Showcase Recent Activity is set to : " + GM_getValue("Showcase_RA_Value") + " and will not add Showcase Recent Activity to the Steam Profile.");
    }
    else if ((GM_getValue("Showcase_RA_Value") == 1)) {
        console.log("Showcase Recent Activity is set to : " + GM_getValue("Showcase_RA_Value") + " and will add Showcase Recent Activity to the Steam Profile.");
        //RA
        var ra_image_0sx = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_recentactivity_appid_0") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/noimageavailable.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_steamtracker_recentactivity_title_0") + " : [" + GM_getValue("G_steamtracker_recentactivity_status_0") +"]"+ '"id="'+ GM_getValue("G_steamtracker_recentactivity_status_0").replace(" ", "") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_recentactivity_appid_0") +"/"+ '" onclick="window.open(this.alt)">';
        var ra_image_1sx = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_recentactivity_appid_1") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/noimageavailable.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_steamtracker_recentactivity_title_1") + " : [" + GM_getValue("G_steamtracker_recentactivity_status_1") +"]"+ '"id="'+ GM_getValue("G_steamtracker_recentactivity_status_1").replace(" ", "") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_recentactivity_appid_1") +"/" + '" onclick="window.open(this.alt)">';
        var ra_image_2sx = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_recentactivity_appid_2") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/noimageavailable.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_steamtracker_recentactivity_title_2") + " : [" + GM_getValue("G_steamtracker_recentactivity_status_2") +"]"+ '"id="'+ GM_getValue("G_steamtracker_recentactivity_status_2").replace(" ", "") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_recentactivity_appid_2") +"/" + '" onclick="window.open(this.alt)">';
        var ra_image_3sx = '<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_steamtracker_recentactivity_appid_3") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/noimageavailable.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_steamtracker_recentactivity_title_3") + " : [" + GM_getValue("G_steamtracker_recentactivity_status_3") +"]"+ '"id="'+ GM_getValue("G_steamtracker_recentactivity_status_3").replace(" ", "") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_steamtracker_recentactivity_appid_3") +"/" + '" onclick="window.open(this.alt)">';

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

//Steam-Tracker Rarest Owned Appids Showcase.
function ST_ROA(){
    if ((GM_getValue("Showcase_ST_ROA_Value") == 0) || (GM_getValue("Showcase_ST_ROA_Value") == "undefined") || (GM_getValue("Showcase_ST_ROA_Value") == null) ) {
        console.log("Showcase Rarest Owned Appids is set to : " + GM_getValue("Showcase_ST_ROA_Value") + " and will not add Showcase Rarest Owned Appids to the Steam Profile.");
    }
    else if ((GM_getValue("Showcase_ST_ROA_Value") == 1)) {
        console.log("Showcase Rarest Owned Appids is set to : " + GM_getValue("Showcase_ST_ROA_Value") + " and will add Showcase Rarest Owned Appids to the Steam Profile.");
        st_oa();
    }
    else
    {
        //donothing
    }
}

function st_oa(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://steam-tracker.com/api?action=GetUserAppList&steamid="+ GM_getValue("G_steam_id"),
        onload: function(response_st) {
            var st_str = response_st.responseText;
            var json_st_data = JSON.parse(st_str);
            var st_oa_keys=[];
            for(var i = 0; i < json_st_data.apps.length; i++) {
                st_oa_keys += json_st_data.apps[i].appid + ",";
            }
            GM_setValue("G_st_oa_keys", st_oa_keys.substring(0, st_oa_keys.length - 1));
            st_GetAppListAPI();
        }
    });
}

//

function st_GetAppListAPI(){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://steam-tracker.com/api?action=GetAppListV3",
        onload: function(response_GetAppList) {
            var GetAppList_str = response_GetAppList.responseText;
            var json_ownedappids_data = JSON.parse(GetAppList_str);
            var st_list_keys=[];
            for(var i = 0; i < json_ownedappids_data.removed_apps.length; i++) {
                st_list_keys += json_ownedappids_data.removed_apps[i].appid + ",";
            }
            GM_setValue("G_st_list_keys", st_list_keys.substring(0, st_list_keys.length - 1));
            st_roa();
        }
    });
}

function st_roa(){
    var st_rarest_appids_Array =  JSON.parse("["+GM_getValue("G_st_list_keys")+"]");
    var st_Owned_appids_Array =  JSON.parse("["+GM_getValue("G_st_oa_keys")+"]");

    var st_r_owned_appids=[];
    var x = 0;

    for (var i = 0; i < st_rarest_appids_Array.length; i++) {
        for (var j = 0; j < st_Owned_appids_Array.length; j++) {
            if (x == 4) {
                break;
            }
            else if (st_rarest_appids_Array[i] == st_Owned_appids_Array[j]) {
                st_r_owned_appids += st_Owned_appids_Array[j]+",";
                x = x + 1;
            }
            else {
                //donothing
            }
        }
    }
    st_r_owned_appids = st_r_owned_appids.substring(0, st_r_owned_appids.length - 1);
    st_r_owned_appids=st_r_owned_appids.split(',');
    var out=[];
    for(i=0; i<st_r_owned_appids.length;i=i+2)
        out.push(st_r_owned_appids.slice(i,i+2).join(','));

    GM_setValue("G_st_r_owned_appids_0",st_r_owned_appids[0]);
    GM_setValue("G_st_r_owned_appids_1",st_r_owned_appids[1]);
    GM_setValue("G_st_r_owned_appids_2",st_r_owned_appids[2]);
    GM_setValue("G_st_r_owned_appids_3",st_r_owned_appids[3]);
    st_rarest_owned_appids_();
}

function st_rarest_owned_appids_(){

    document.getElementsByClassName("profile_customization_area")[0].setAttribute("id", "MalikQayum_Showcase_7");
    var div_7 = document.getElementById("MalikQayum_Showcase_7");

    var x_div_7 = document.createElement('div');
    x_div_7.id = 'MalikQayum_Showcase_7';
    div_7.appendChild(x_div_7);
    x_div_7.innerHTML =
        `
<div class="profile_customization"><div class="profile_customization_header">Rarest Owned Appids</div><div class="profile_customization_block"><div class="gamecollector_showcase"><div class="showcase_gamecollector_games">
<div class="showcase_slot showcase_gamecollector_game" >
` +'<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_st_r_owned_appids_0") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/noimageavailable.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_st_r_owned_appids_0") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_st_r_owned_appids_0") +"/"+ '" onclick="window.open(this.alt)">' +`
</div>
<div class="showcase_slot showcase_gamecollector_game">
` +'<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_st_r_owned_appids_1") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/noimageavailable.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_st_r_owned_appids_1") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_st_r_owned_appids_1") +"/"+ '" onclick="window.open(this.alt)">' +`
</div>
</div>
<div class="showcase_slot showcase_gamecollector_game">
` +'<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_st_r_owned_appids_2") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/noimageavailable.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_st_r_owned_appids_2") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_st_r_owned_appids_2") +"/"+ '" onclick="window.open(this.alt)">' +`
</div>
</div>
<div class="showcase_slot showcase_gamecollector_game">
` +'<img src="' + "https://steamcdn-a.akamaihd.net/steam/apps/" + GM_getValue("G_st_r_owned_appids_3") + "/capsule_231x87.jpg" + '"onerror="this.src=\'https://raw.githubusercontent.com/MalikAQayum/SteamTracker/master/noimageavailable.gif\'"; height="100%" size="100%" title="' + GM_getValue("G_st_r_owned_appids_3") + '"alt="' + "https://steam-tracker.com/app/"+ GM_getValue("G_st_r_owned_appids_3") +"/"+ '" onclick="window.open(this.alt)">' +`
</div>
</div>
<div style="clear: left;"></div></div></div><div style="clear: both"></div></div></div>
`;

}

//Steam licenses Chart v1
function SL_Chart_v1() {
    var html = document.documentElement.innerHTML;
    var steamid = html.match('steamid":"(.*?)"');
    steamid = JSON.stringify(steamid[1]).replace("\"","").slice(0,-1);
    if (g_steamID === steamid) {
        if ((GM_getValue("SLChart_v1_Value") == 0) || (GM_getValue("SLChart_v1_Value") == "undefined") || (GM_getValue("SLChart_v1_Value") == null) ) {
            console.log("Showcase Steam Licenses Chart is set to : " + GM_getValue("SLChart_v1_Value") + " and will not add Showcase Steam Licenses Chart to the Steam Profile.");
        }
        else if ((GM_getValue("SLChart_v1_Value") == 1)) {
            console.log("Showcase Steam Licenses Chart is set to : " + GM_getValue("SLChart_v1_Value") + " and will add Showcase Steam Licenses Chart to the Steam Profile.");

            document.getElementsByClassName("profile_customization_area")[0].setAttribute("id", "MalikQayum_Showcase_10");
            var div_10 = document.getElementById("MalikQayum_Showcase_10");

            var x_div_10 = document.createElement('div');
            x_div_10.id = 'MalikQayum_Showcase_10';
            div_10.appendChild(x_div_10);
            x_div_10.innerHTML =
                `
<div class="profile_customization"><div class="profile_customization_header ellipsis">Steam Licenses Chart</div>
<div class="profile_customization_block"><div class="customtext_showcase">
<div class="showcase_content_bg showcase_notes"><canvas id="SLChart_v1" height="300" width="600"></canvas>
</div></div></div></div>
`;

            var gdata =  GM_getValue("G_SteamLicensesData_v1");
            var glabels = GM_getValue("G_SteamLicensesLabels_v1");
            var data = {
                labels: glabels,
                datasets: [
                    {
                        label: "Steam Licenses Chart",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: gdata
                    }
                ]
            };

            var chart = document.getElementById('SLChart_v1').getContext('2d');
            var myslchart = new Chart(chart).Line(data);

            GM_deleteValue("G_SteamLicensesData_v1");
            GM_deleteValue("G_SteamLicensesLabels_v1");
        }
    }
}

function SLData_v1(){

    GM_xmlhttpRequest({
        method: "GET",
        url: "https://store.steampowered.com/account/licenses/?l=english",
        onload: function(response_sl) {
            var sl_str = response_sl.responseText;

            var arr = [];
            sl_str.replace(/<td  class="license_date_col">(.*?)<\/td>/g, function(s, match) {
                arr.push(match.slice(-2));
            });
            var arr2 = JSON.stringify(arr);
            var count_arr = [];

            if(arr.indexOf("17")==-1){/*donothing*/}else{count_arr.unshift(arr2.match(/17/g).length);}
            if(arr.indexOf("16")==-1){/*donothing*/}else{count_arr.unshift(arr2.match(/16/g).length);}
            if(arr.indexOf("15")==-1){/*donothing*/}else{count_arr.unshift(arr2.match(/15/g).length);}
            if(arr.indexOf("14")==-1){/*donothing*/}else{count_arr.unshift(arr2.match(/14/g).length);}
            if(arr.indexOf("13")==-1){/*donothing*/}else{count_arr.unshift(arr2.match(/13/g).length);}
            if(arr.indexOf("12")==-1){/*donothing*/}else{count_arr.unshift(arr2.match(/12/g).length);}
            if(arr.indexOf("11")==-1){/*donothing*/}else{count_arr.unshift(arr2.match(/11/g).length);}
            if(arr.indexOf("10")==-1){/*donothing*/}else{count_arr.unshift(arr2.match(/10/g).length);}
            if(arr.indexOf("09")==-1){/*donothing*/}else{count_arr.unshift(arr2.match(/09/g).length);}
            if(arr.indexOf("08")==-1){/*donothing*/}else{count_arr.unshift(arr2.match(/08/g).length);}
            if(arr.indexOf("07")==-1){/*donothing*/}else{count_arr.unshift(arr2.match(/07/g).length);}
            if(arr.indexOf("06")==-1){/*donothing*/}else{count_arr.unshift(arr2.match(/06/g).length);}
            if(arr.indexOf("05")==-1){/*donothing*/}else{count_arr.unshift(arr2.match(/05/g).length);}
            if(arr.indexOf("04")==-1){/*donothing*/}else{count_arr.unshift(arr2.match(/04/g).length);}
            if(arr.indexOf("03")==-1){/*donothing*/}else{count_arr.unshift(arr2.match(/03/g).length);}

            console.log(count_arr);

            var tmp = [];
            for(var i = 0; i < arr.length; i++){
                if(tmp.indexOf(arr[i]) == -1){
                    tmp.push(arr[i]);
                }
            }
            var temp2 = tmp.reverse();
            console.log(temp2);
            GM_setValue("G_SteamLicensesLabels_v1", temp2);
            GM_setValue("G_SteamLicensesData_v1", count_arr);
            GM_setValue("G_SteamLicensesChart_v1", "1");
        }
    });
}

function wait_sldata_v1() {
    if(GM_getValue("G_SteamLicensesChart_v1") === "1")
    {
        GM_setValue("G_SteamLicensesChart_v1", "0");
        SL_Chart_v1();
    }
    else
    {
        var date = new Date();
        console.log(date);
        setTimeout(function(){ wait_sldata_v1(); }, 500);
    }
}
//Steam licenses Chart v2
function SL_Chart_v2() {
    var html = document.documentElement.innerHTML;
    var steamid = html.match('steamid":"(.*?)"');
    steamid = JSON.stringify(steamid[1]).replace("\"","").slice(0,-1);
    if (g_steamID === steamid) {
        if ((GM_getValue("SLChart_v2_Value") == 0) || (GM_getValue("SLChart_v2_Value") == "undefined") || (GM_getValue("SLChart_v2_Value") == null) ) {
            console.log("Showcase Steam Licenses Chart_v2 is set to : " + GM_getValue("SLChart_v2_Value") + " and will not add Showcase Steam Licenses Chart_v2 to the Steam Profile.");
        }
        else if ((GM_getValue("SLChart_v2_Value") == 1)) {
            console.log("Showcase Steam Licenses Chart_v2 is set to : " + GM_getValue("SLChart_v2_Value") + " and will add Showcase Steam Licenses Chart_v2 to the Steam Profile.");

            document.getElementsByClassName("profile_customization_area")[0].setAttribute("id", "MalikQayum_Showcase_11");
            var div_11 = document.getElementById("MalikQayum_Showcase_11");

            var x_div_11 = document.createElement('div');
            x_div_11.id = 'MalikQayum_Showcase_11';
            div_11.appendChild(x_div_11);
            x_div_11.innerHTML =
                `
<div class="profile_customization"><div class="profile_customization_header ellipsis">Steam Licenses Chart v2</div>
<div class="profile_customization_block"><div class="customtext_showcase">
<div class="showcase_content_bg showcase_notes"><canvas id="SLChart_v2" height="300" width="600"></canvas>
</div></div></div></div>
`;

            var gdata =  GM_getValue("G_SteamLicensesData_v2");
            var glabels = GM_getValue("G_SteamLicensesLabels_v2");
            var data = {
                labels: glabels,
                datasets: [
                    {
                        label: "Steam Licenses Chart_v2",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: gdata
                    }
                ]
            };

            var chart = document.getElementById('SLChart_v2').getContext('2d');
            var myslchart = new Chart(chart).Line(data);

            GM_deleteValue("G_SteamLicensesData_v2");
            GM_deleteValue("G_SteamLicensesLabels_v2");
        }
    }
}

function SLData_v2(){

    GM_xmlhttpRequest({
        method: "GET",
        url: "https://store.steampowered.com/account/licenses/?l=english",
        onload: function(response_sl) {
            var sl_str = response_sl.responseText;

            var arr = [];
            sl_str.replace(/<td  class="license_date_col">(.*?)<\/td>/g, function(s, match) {
                arr.push(match.slice(-2));
            });
            var arr2 = JSON.stringify(arr);
            var count_arr = [];

            if(arr.indexOf("03")==-1){/*donothing*/}else{var newcount3 = arr2.match(/03/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount3);}else{ var countadded3 = count_arr[0] + newcount3; count_arr.unshift(countadded3);}}  
            if(arr.indexOf("04")==-1){/*donothing*/}else{var newcount4 = arr2.match(/04/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount4);}else{ var countadded4 = count_arr[0] + newcount4; count_arr.unshift(countadded4);}}  
            if(arr.indexOf("05")==-1){/*donothing*/}else{var newcount5 = arr2.match(/05/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount5);}else{ var countadded5 = count_arr[0] + newcount5; count_arr.unshift(countadded5);}}  
            if(arr.indexOf("06")==-1){/*donothing*/}else{var newcount6 = arr2.match(/06/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount6);}else{ var countadded6 = count_arr[0] + newcount6; count_arr.unshift(countadded6);}}  
            if(arr.indexOf("07")==-1){/*donothing*/}else{var newcount7 = arr2.match(/07/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount7);}else{ var countadded7 = count_arr[0] + newcount7; count_arr.unshift(countadded7);}}  
            if(arr.indexOf("08")==-1){/*donothing*/}else{var newcount8 = arr2.match(/08/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount8);}else{ var countadded8 = count_arr[0] + newcount8; count_arr.unshift(countadded8);}}  
            if(arr.indexOf("09")==-1){/*donothing*/}else{var newcount9 = arr2.match(/09/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount9);}else{ var countadded9 = count_arr[0] + newcount9; count_arr.unshift(countadded9);}}  
            if(arr.indexOf("10")==-1){/*donothing*/}else{var newcount10 = arr2.match(/10/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount10);}else{ var countadded10 = count_arr[0] + newcount10; count_arr.unshift(countadded10);}}  
            if(arr.indexOf("11")==-1){/*donothing*/}else{var newcount11 = arr2.match(/11/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount11);}else{ var countadded11 = count_arr[0] + newcount11; count_arr.unshift(countadded11);}}  
            if(arr.indexOf("12")==-1){/*donothing*/}else{var newcount12 = arr2.match(/12/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount12);}else{ var countadded12 = count_arr[0] + newcount12; count_arr.unshift(countadded12);}}  
            if(arr.indexOf("13")==-1){/*donothing*/}else{var newcount13 = arr2.match(/13/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount13);}else{ var countadded13 = count_arr[0] + newcount13; count_arr.unshift(countadded13);}}  
            if(arr.indexOf("14")==-1){/*donothing*/}else{var newcount14 = arr2.match(/14/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount14);}else{ var countadded14 = count_arr[0] + newcount14; count_arr.unshift(countadded14);}}  
            if(arr.indexOf("15")==-1){/*donothing*/}else{var newcount15 = arr2.match(/15/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount15);}else{ var countadded15 = count_arr[0] + newcount15; count_arr.unshift(countadded15);}}  
            if(arr.indexOf("16")==-1){/*donothing*/}else{var newcount16 = arr2.match(/16/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount16);}else{ var countadded16 = count_arr[0] + newcount16; count_arr.unshift(countadded16);}}  
            if(arr.indexOf("17")==-1){/*donothing*/}else{var newcount17 = arr2.match(/17/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount17);}else{ var countadded17 = count_arr[0] + newcount17; count_arr.unshift(countadded17);}}  
            if(arr.indexOf("18")==-1){/*donothing*/}else{var newcount18 = arr2.match(/18/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount18);}else{ var countadded18 = count_arr[0] + newcount18; count_arr.unshift(countadded18);}}  

            console.log(count_arr);

            var tmp = [];
            for(var i = 0; i < arr.length; i++){
                if(tmp.indexOf(arr[i]) == -1){
                    tmp.push(arr[i]);
                }
            }
            var temp2 = tmp.reverse();
            console.log(temp2);
            GM_setValue("G_SteamLicensesLabels_v2", temp2);
            GM_setValue("G_SteamLicensesData_v2", count_arr.reverse());
            GM_setValue("G_SteamLicensesChart_v2", "1");
        }
    });
}

function wait_sldata_v2() {
    if(GM_getValue("G_SteamLicensesChart_v2") === "1")
    {
        GM_setValue("G_SteamLicensesChart_v2", "0");
        SL_Chart_v2();
    }
    else
    {
        var date = new Date();
        console.log(date);
        setTimeout(function(){ wait_sldata_v2(); }, 500);
    }
}
//Steam licenses Chart v3
function SL_Chart_v3() {
    var html = document.documentElement.innerHTML;
    var steamid = html.match('steamid":"(.*?)"');
    steamid = JSON.stringify(steamid[1]).replace("\"","").slice(0,-1);
    if (g_steamID === steamid) {
        if ((GM_getValue("SLChart_v3_Value") == 0) || (GM_getValue("SLChart_v3_Value") == "undefined") || (GM_getValue("SLChart_v3_Value") == null) ) {
            console.log("Showcase Steam Licenses Chart_v3 is set to : " + GM_getValue("SLChart_v3_Value") + " and will not add Showcase Steam Licenses Chart_v3 to the Steam Profile.");
        }
        else if ((GM_getValue("SLChart_v3_Value") == 1)) {
            console.log("Showcase Steam Licenses Chart_v3 is set to : " + GM_getValue("SLChart_v3_Value") + " and will add Showcase Steam Licenses Chart_v3 to the Steam Profile.");

            document.getElementsByClassName("profile_customization_area")[0].setAttribute("id", "MalikQayum_Showcase_12");
            var div_12 = document.getElementById("MalikQayum_Showcase_12");

            var x_div_12 = document.createElement('div');
            x_div_12.id = 'MalikQayum_Showcase_12';
            div_12.appendChild(x_div_12);
            x_div_12.innerHTML =
                `
<div class="profile_customization"><div class="profile_customization_header"> Steam Licenses Showcase	</div>
<div class="profile_customization_block">
<div class="myguide_showcase">
<div class="myguide_showcase_item_ctn showcase_slot left "><canvas id="SLChart_v3_1" height="110" width="275"></canvas></div>
<div class="myguide_showcase_item_ctn showcase_slot  "><canvas id="SLChart_v3_2" height="110" width="275"></canvas></div>
<div class="myguide_showcase_item_ctn showcase_slot left "><canvas id="SLChart_v3_3" height="110" width="275"></canvas></div>
<div class="myguide_showcase_item_ctn showcase_slot  "><canvas id="SLChart_v3_4" height="110" width="275"></canvas></div>
<div style="clear: left;"></div>
</div>
</div>
</div>
`;

            var gdata1 =  GM_getValue("G_SteamLicensesData_v3_1");
            var glabels1 = GM_getValue("G_SteamLicensesLabels_v3_1");
            var gdata2 =  GM_getValue("G_SteamLicensesData_v3_2");
            var glabels2 = GM_getValue("G_SteamLicensesLabels_v3_2");
            var data = {
                labels: glabels1,
                datasets: [
                    {
                        label: "Steam Licenses Chart",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: gdata1
                    }
                ]
            };
            var data2 = {
                labels: glabels2,
                datasets: [
                    {
                        label: "Steam Licenses Chart",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: gdata2
                    }
                ]
            };

            var data3 = [
                {
                    value: GM_getValue("G_SteamLicensesC_Retail"),
                    label: "Retail",
                    color:"#003366"
                },
                {
                    value: GM_getValue("G_SteamLicensesC_SteamStore"),
                    label: "Steam Store",
                    color : "#FFFFFF"
                },
                {
                    value: GM_getValue("G_SteamLicensesC_GiftGuest_Pass"),
                    label: "Gift/Guest Pass",
                    color : "#000000"
                },
                {
                    value: GM_getValue("G_SteamLicensesC_Complimentary"),
                    label: "Complimentary",
                    color : "#606060"
                }
            ];

            var data4 = [
                {
                    value: GM_getValue("G_SteamLicensesC_BetaTesting"),
                    label: "Beta Testing",
                    color:"#FFD700"
                },
                {
                    value: GM_getValue("G_SteamLicensesC_DeveloperComp"),
                    label: "Dev Comp",
                    color : "#DC143C"
                }
            ];

            var chart_v3_1 = document.getElementById('SLChart_v3_1').getContext('2d');
            var chart_v3_2 = document.getElementById('SLChart_v3_2').getContext('2d');
            var chart_v3_3 = document.getElementById('SLChart_v3_3').getContext('2d');
            var chart_v3_4 = document.getElementById('SLChart_v3_4').getContext('2d');

            var options = {
                scaleShowLabels: false 
            };

            var myslchart_v3_1 = new Chart(chart_v3_1).Bar(data, options);
            var myslchart_v3_2 = new Chart(chart_v3_2).Line(data2, options);
            var myslchart_v3_3 = new Chart(chart_v3_3).Doughnut(data3);
            var myslchart_v3_4 = new Chart(chart_v3_4).Doughnut(data4);

            GM_deleteValue("G_SteamLicensesData_v3_1");
            GM_deleteValue("G_SteamLicensesLabels_v3_1");
			GM_deleteValue("G_SteamLicensesData_v3_2");
            GM_deleteValue("G_SteamLicensesLabels_v3_2");
        }
    }
}


function SLData_v3(){

    GM_xmlhttpRequest({
        method: "GET",
        url: "https://store.steampowered.com/account/licenses/?l=english",
        onload: function(response_sl) {
            var sl_str = response_sl.responseText;


            if(sl_str.indexOf("Retail")==-1){/*donothing*/}else{var C_Retail = (sl_str.match(/	Retail/ig) || []).length; GM_setValue("G_SteamLicensesC_Retail", C_Retail);}
            if(sl_str.indexOf("	Gift/Guest Pass")==-1){/*donothing*/}else{var C_GiftGuest_Pass = (sl_str.match(/	Gift\/Guest Pass/ig) || []).length; GM_setValue("G_SteamLicensesC_GiftGuest_Pass", C_GiftGuest_Pass);}
            if(sl_str.indexOf("Complimentary")==-1){/*donothing*/}else{var C_Complimentary = (sl_str.match(/	Complimentary/ig) || []).length; GM_setValue("G_SteamLicensesC_Complimentary", C_Complimentary);}
            if(sl_str.indexOf("Steam Store")==-1){/*donothing*/}else{var C_SteamStore = (sl_str.match(/	Steam Store/ig) || []).length; GM_setValue("G_SteamLicensesC_SteamStore", C_SteamStore);}


            if(sl_str.indexOf("Beta Testing")==-1){/*donothing*/}else{var C_BetaTesting = (sl_str.match(/Beta Testing								<\/td>/ig) || []).length; GM_setValue("G_SteamLicensesC_BetaTesting", C_BetaTesting);}
            if(sl_str.indexOf("Developer Comp")==-1){/*donothing*/}else{var C_DeveloperComp = (sl_str.match(/Developer Comp								<\/td>/ig) || []).length; GM_setValue("G_SteamLicensesC_DeveloperComp", C_DeveloperComp);}


            var arr = [];
            sl_str.replace(/<td  class="license_date_col">(.*?)<\/td>/g, function(s, match) {
                arr.push(match.slice(-2));
            });
            var arr2 = JSON.stringify(arr);
            var count_arr = [];

            if(arr.indexOf("03")==-1){/*donothing*/}else{var newcount3 = arr2.match(/03/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount3);}else{ var countadded3 = count_arr[0] + newcount3; count_arr.unshift(countadded3);}}  
            if(arr.indexOf("04")==-1){/*donothing*/}else{var newcount4 = arr2.match(/04/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount4);}else{ var countadded4 = count_arr[0] + newcount4; count_arr.unshift(countadded4);}}  
            if(arr.indexOf("05")==-1){/*donothing*/}else{var newcount5 = arr2.match(/05/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount5);}else{ var countadded5 = count_arr[0] + newcount5; count_arr.unshift(countadded5);}}  
            if(arr.indexOf("06")==-1){/*donothing*/}else{var newcount6 = arr2.match(/06/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount6);}else{ var countadded6 = count_arr[0] + newcount6; count_arr.unshift(countadded6);}}  
            if(arr.indexOf("07")==-1){/*donothing*/}else{var newcount7 = arr2.match(/07/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount7);}else{ var countadded7 = count_arr[0] + newcount7; count_arr.unshift(countadded7);}}  
            if(arr.indexOf("08")==-1){/*donothing*/}else{var newcount8 = arr2.match(/08/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount8);}else{ var countadded8 = count_arr[0] + newcount8; count_arr.unshift(countadded8);}}  
            if(arr.indexOf("09")==-1){/*donothing*/}else{var newcount9 = arr2.match(/09/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount9);}else{ var countadded9 = count_arr[0] + newcount9; count_arr.unshift(countadded9);}}  
            if(arr.indexOf("10")==-1){/*donothing*/}else{var newcount10 = arr2.match(/10/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount10);}else{ var countadded10 = count_arr[0] + newcount10; count_arr.unshift(countadded10);}}  
            if(arr.indexOf("11")==-1){/*donothing*/}else{var newcount11 = arr2.match(/11/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount11);}else{ var countadded11 = count_arr[0] + newcount11; count_arr.unshift(countadded11);}}  
            if(arr.indexOf("12")==-1){/*donothing*/}else{var newcount12 = arr2.match(/12/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount12);}else{ var countadded12 = count_arr[0] + newcount12; count_arr.unshift(countadded12);}}  
            if(arr.indexOf("13")==-1){/*donothing*/}else{var newcount13 = arr2.match(/13/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount13);}else{ var countadded13 = count_arr[0] + newcount13; count_arr.unshift(countadded13);}}  
            if(arr.indexOf("14")==-1){/*donothing*/}else{var newcount14 = arr2.match(/14/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount14);}else{ var countadded14 = count_arr[0] + newcount14; count_arr.unshift(countadded14);}}  
            if(arr.indexOf("15")==-1){/*donothing*/}else{var newcount15 = arr2.match(/15/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount15);}else{ var countadded15 = count_arr[0] + newcount15; count_arr.unshift(countadded15);}}  
            if(arr.indexOf("16")==-1){/*donothing*/}else{var newcount16 = arr2.match(/16/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount16);}else{ var countadded16 = count_arr[0] + newcount16; count_arr.unshift(countadded16);}}  
            if(arr.indexOf("17")==-1){/*donothing*/}else{var newcount17 = arr2.match(/17/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount17);}else{ var countadded17 = count_arr[0] + newcount17; count_arr.unshift(countadded17);}}  
            if(arr.indexOf("18")==-1){/*donothing*/}else{var newcount18 = arr2.match(/18/g).length; if(isNaN(parseInt(count_arr[0]))){count_arr.unshift(newcount18);}else{ var countadded18 = count_arr[0] + newcount18; count_arr.unshift(countadded18);}}  

            console.log(count_arr);

            var tmp = [];
            for(var i = 0; i < arr.length; i++){
                if(tmp.indexOf(arr[i]) == -1){
                    tmp.push(arr[i]);
                }
            }
            var temp2 = tmp;
            console.log(temp2);
            var arrx = [];
            sl_str.replace(/<td  class="license_date_col">(.*?)<\/td>/g, function(s, match) {
                arrx.push(match.slice(-2));
            });
            var arr2x = JSON.stringify(arrx);
            var count_arrx = [];

            if(arrx.indexOf("17")==-1){/*donothing*/}else{count_arrx.unshift(arr2x.match(/17/g).length);}
            if(arrx.indexOf("16")==-1){/*donothing*/}else{count_arrx.unshift(arr2x.match(/16/g).length);}
            if(arrx.indexOf("15")==-1){/*donothing*/}else{count_arrx.unshift(arr2x.match(/15/g).length);}
            if(arrx.indexOf("14")==-1){/*donothing*/}else{count_arrx.unshift(arr2x.match(/14/g).length);}
            if(arrx.indexOf("13")==-1){/*donothing*/}else{count_arrx.unshift(arr2x.match(/13/g).length);}
            if(arrx.indexOf("12")==-1){/*donothing*/}else{count_arrx.unshift(arr2x.match(/12/g).length);}
            if(arrx.indexOf("11")==-1){/*donothing*/}else{count_arrx.unshift(arr2x.match(/11/g).length);}
            if(arrx.indexOf("10")==-1){/*donothing*/}else{count_arrx.unshift(arr2x.match(/10/g).length);}
            if(arrx.indexOf("09")==-1){/*donothing*/}else{count_arrx.unshift(arr2x.match(/09/g).length);}
            if(arrx.indexOf("08")==-1){/*donothing*/}else{count_arrx.unshift(arr2x.match(/08/g).length);}
            if(arrx.indexOf("07")==-1){/*donothing*/}else{count_arrx.unshift(arr2x.match(/07/g).length);}
            if(arrx.indexOf("06")==-1){/*donothing*/}else{count_arrx.unshift(arr2x.match(/06/g).length);}
            if(arrx.indexOf("05")==-1){/*donothing*/}else{count_arrx.unshift(arr2x.match(/05/g).length);}
            if(arrx.indexOf("04")==-1){/*donothing*/}else{count_arrx.unshift(arr2x.match(/04/g).length);}
            if(arrx.indexOf("03")==-1){/*donothing*/}else{count_arrx.unshift(arr2x.match(/03/g).length);}

            console.log(count_arrx);

            var tmpx = [];
            for(var j = 0; j < arrx.length; j++){
                if(tmpx.indexOf(arrx[j]) == -1){
                    tmpx.push(arrx[j]);
                }
            }
            var temp2x = tmpx.reverse();
            console.log(temp2x);
            GM_setValue("G_SteamLicensesLabels_v3_1", temp2x);
            GM_setValue("G_SteamLicensesData_v3_1", count_arrx);
            GM_setValue("G_SteamLicensesLabels_v3_2", temp2.reverse());
            GM_setValue("G_SteamLicensesData_v3_2", count_arr.reverse());
			
            GM_setValue("G_SteamLicensesChart_v3", "1");
        }
    });
}

function wait_sldata_v3() {
    if(GM_getValue("G_SteamLicensesChart_v3") === "1")
    {
        GM_setValue("G_SteamLicensesChart_v3", "0");
        SL_Chart_v3();
    }
    else
    {
        var date = new Date();
        console.log(date);
        setTimeout(function(){ wait_sldata_v3(); }, 500);
    }
}
