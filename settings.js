function Settings(){
    document.body.innerHTML = ' ';
    var Settings = document.createElement("div");
    Settings.innerHTML = "<p><h3>SteamTracker Extension Settings.</h3></p><br>";
    document.body.appendChild(Settings, document.body.firstChild);
	
/*	Steam-Tracker.com API only needed showcases.	*/
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
	
    var P_Showcase_ST_ROA2 = document.createElement("p");
    var Showcase_ST_ROA2_Text = document.createTextNode(" ---------------------------------------------------------------------------------------.");
    document.body.appendChild(Showcase_ST_ROA2_Text);
	
	/*	Steam-Tracker.com and Timekillerz API needed showcases.	*/
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
	
/*	NO API only needed showcases.	*/
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
	
	//Steam Licenses Chart button.
    var SLChart_F = function() {
        var SLChart_V = document.getElementById('SLChartid').value;
        GM_setValue("SLChart_Value", SLChart_V);
        console.log("[SLChart:] = " + GM_getValue("SLChart_Value"));
    };

    var SLChart_B = document.createElement("input");
    SLChart_B.type="button";
    SLChart_B.value="SLChart";
    SLChart_B.className="btnv6_blue_hoverfade";
    SLChart_B.style.width = "150px";
    SLChart_B.style.height = "30px";
    SLChart_B.onclick = SLChart_F;
    document.body.appendChild(SLChart_B);

    var SLChart_I = document.createElement("input");
    SLChart_I.type="number";
    SLChart_I.id="SLChartid";
    SLChart_I.name="SLChartid";
    SLChart_I.value=GM_getValue("SLChart_Value");
    SLChart_I.min="0";
    SLChart_I.max="1";
    SLChart_I.style.width = "33px";
    SLChart_I.style.height = "25px";
    SLChart_I.onclick = SLChart_F;
    document.body.appendChild(SLChart_I);

    var P_SLChart = document.createElement("p");
    var SLChart_Text = document.createTextNode(" : 0 = off / 1 = on  - adds a Steam Licenses Button to the profile page.");
    document.body.appendChild(SLChart_Text);

    var hr = document.createElement('hr');
    hr.innerHTML = ' ';
    document.body.appendChild(hr);
    console.log("[SLChart:] = " + GM_getValue("SLChart_Value"));

	/*	SAVE VALUES + BUTTON.	*/
    var Save_F = function() {
	Showcase_ST_Default_F();
        StoreTracker_F();
        HubTracker_F();
        Showcase_Default_F();
        Showcase_RA_F();
        RemGCTracker_F();
        C7KTracker_F();
        Showcase_ROA_F();
	Showcase_ST_ROA_F();
	SLChart_F();

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
