function Settings(){
    document.body.innerHTML = ' ';
    var Settings = document.createElement("div");
    Settings.innerHTML = "<p><h3>SteamTracker Extension Settings.</h3></p><br>";
    document.body.appendChild(Settings, document.body.firstChild);

    var hr = document.createElement('hr');
    hr.innerHTML = ' ';
    document.body.appendChild(hr);

	/*	Steam-Tracker.com API only needed showcases.	*/
	var P_ST_API = document.createElement("p");
    var Showcase_ST_API_Text = document.createTextNode(" Steam-Tracker.com API only needed showcases.");
    document.body.appendChild(Showcase_ST_API_Text);
    var hr = document.createElement('hr');
    hr.innerHTML = ' ';
    document.body.appendChild(hr);

	//Showcase Steam-Tracker Default.
    var Showcase_ST_Default_F = function() {
        var Showcase_ST_Default_V = document.getElementById('Showcase_ST_Default_id').value;
        GM_setValue("Showcase_ST_Default_Value", Showcase_ST_Default_V);
        console.log("[Showcase_ST_Default:] = " + GM_getValue("Showcase_ST_Default_Value"));
    };

    var Showcase_ST_Default_B = document.createElement("input");
    Showcase_ST_Default_B.type="button";
    Showcase_ST_Default_B.value="Showcase_ST_Default";
    Showcase_ST_Default_B.className="btnv6_blue_hoverfade";
    Showcase_ST_Default_B.style.width = "150px";
    Showcase_ST_Default_B.style.height = "30px";
    Showcase_ST_Default_B.onclick = Showcase_ST_Default_F;
    document.body.appendChild(Showcase_ST_Default_B);

    var Showcase_ST_Default_I = document.createElement("input");
    Showcase_ST_Default_I.type="number";
    Showcase_ST_Default_I.id="Showcase_ST_Default_id";
    Showcase_ST_Default_I.name="Showcase_ST_Default_id";
    Showcase_ST_Default_I.value=GM_getValue("Showcase_ST_Default_Value");
    Showcase_ST_Default_I.min="0";
    Showcase_ST_Default_I.max="1";
    Showcase_ST_Default_I.style.width = "33px";
    Showcase_ST_Default_I.style.height = "25px";
    Showcase_ST_Default_I.onclick = Showcase_ST_Default_F;
    document.body.appendChild(Showcase_ST_Default_I);

    var P_Showcase_ST_Default = document.createElement("p");
    var Showcase_ST_Default_Text = document.createTextNode(" : 0 = off / 1 = on  - adds Showcase steam-tracker Default to the steam profile page.");
    document.body.appendChild(Showcase_ST_Default_Text);

    console.log("[Showcase_ST_Default:] = " + GM_getValue("Showcase_ST_Default_Value"));
	
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
	
	//Steam-Tracker Showcase Rarest Owned Appid.
    var Showcase_ST_ROA_F = function() {
        var Showcase_ST_ROA_V = document.getElementById('Showcase_ST_ROA_id').value;
        GM_setValue("Showcase_ST_ROA_Value", Showcase_ST_ROA_V);
        console.log("[Showcase_ST_ROA:] = " + GM_getValue("Showcase_ST_ROA_Value"));
    };

    var Showcase_ST_ROA_B = document.createElement("input");
    Showcase_ST_ROA_B.type="button";
    Showcase_ST_ROA_B.value="Showcase_ST_ROA";
    Showcase_ST_ROA_B.className="btnv6_blue_hoverfade";
    Showcase_ST_ROA_B.style.width = "150px";
    Showcase_ST_ROA_B.style.height = "30px";
    Showcase_ST_ROA_B.onclick = Showcase_ST_ROA_F;
    document.body.appendChild(Showcase_ST_ROA_B);

    var Showcase_ST_ROA_I = document.createElement("input");
    Showcase_ST_ROA_I.type="number";
    Showcase_ST_ROA_I.id="Showcase_ST_ROA_id";
    Showcase_ST_ROA_I.name="Showcase_ST_ROA_id";
    Showcase_ST_ROA_I.value=GM_getValue("Showcase_ST_ROA_Value");
    Showcase_ST_ROA_I.min="0";
    Showcase_ST_ROA_I.max="1";
    Showcase_ST_ROA_I.style.width = "33px";
    Showcase_ST_ROA_I.style.height = "25px";
    Showcase_ST_ROA_I.onclick = Showcase_ST_ROA_F;
    document.body.appendChild(Showcase_ST_ROA_I);

    var P_Showcase_ST_ROA = document.createElement("p");
    var Showcase_ST_ROA_Text = document.createTextNode(" : 0 = off / 1 = on  - adds Steam-Tracker Showcase Rarest Owned Appids to the steam profile page.");
    document.body.appendChild(Showcase_ST_ROA_Text);

    console.log("[Showcase_ST_ROA:] = " + GM_getValue("Showcase_ST_ROA_Value"));

    var hr = document.createElement('hr');
    hr.innerHTML = ' ';
    document.body.appendChild(hr);
	
	/*	NO API needed settings.	*/
	var P_NO_API = document.createElement("p");
    var Showcase_NO_API_Text = document.createTextNode(" These settings requires No Api.");
    document.body.appendChild(Showcase_NO_API_Text);
    var hr = document.createElement('hr');
    hr.innerHTML = ' ';
    document.body.appendChild(hr);
	
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
	
	var P_Showcase_SS_API = document.createElement("p");
    var Showcase_SS_API_Text = document.createTextNode(" store.steampowered required logged in. ");
    document.body.appendChild(Showcase_SS_API_Text);
    var hr = document.createElement('hr');
    hr.innerHTML = ' ';
    document.body.appendChild(hr);
	
	//Steam Licenses Chart button _v3.
    var SLChart_v3_F = function() {
        var SLChart_v3_V = document.getElementById('SLChartid_v3').value;
        GM_setValue("SLChart_v3_Value", SLChart_v3_V);
        console.log("[SLChart_v3:] = " + GM_getValue("SLChart_v3_Value"));
    };

    var SLChart_v3_B = document.createElement("input");
    SLChart_v3_B.type="button";
    SLChart_v3_B.value="SLChart_v3";
    SLChart_v3_B.className="btnv6_blue_hoverfade";
    SLChart_v3_B.style.width = "150px";
    SLChart_v3_B.style.height = "30px";
    SLChart_v3_B.onclick = SLChart_v3_F;
    document.body.appendChild(SLChart_v3_B);

    var SLChart_v3_I = document.createElement("input");
    SLChart_v3_I.type="number";
    SLChart_v3_I.id="SLChartid_v3";
    SLChart_v3_I.name="SLChartid_v3";
    SLChart_v3_I.value=GM_getValue("SLChart_v3_Value");
    SLChart_v3_I.min="0";
    SLChart_v3_I.max="1";
    SLChart_v3_I.style.width = "33px";
    SLChart_v3_I.style.height = "25px";
    SLChart_v3_I.onclick = SLChart_v3_F;
    document.body.appendChild(SLChart_v3_I);

    var P_SLChart_v3 = document.createElement("p");
    var SLChart_Text_v3 = document.createTextNode(" : 0 = off / 1 = on  - adds a Steam Licenses showcase _v3 to the profile page.");
    document.body.appendChild(SLChart_Text_v3);

    var hr = document.createElement('hr');
    hr.innerHTML = ' ';
    document.body.appendChild(hr);
    console.log("[SLChart_v3:] = " + GM_getValue("SLChart_v3_Value"));

	/*	SAVE VALUES + BUTTON.	*/
    var Save_F = function() {
	Showcase_ST_Default_F();
        StoreTracker_F();
        HubTracker_F();
        Showcase_RA_F();
		Showcase_ST_ROA_F();
		SLChart_v3_F();
		
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