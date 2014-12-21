exports.Window1 = function (g_Vars)
{
	
// Add textfield
var textField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText : 'Type in a thing',
	color: '#336699',
	top: 10,
	left: 10,
	width: 300, 
	height: 50
});


// when the return button is clicked on the virtual keyboard
textField.addEventListener('return', function(data) 
{
	
	
	// save the text to the database
	getThings(textField.value);
	
	// clear the textfield
	textField.value = '';
	
});

// create an activity indicator
var style;
if (Ti.Platform.name === 'iPhone OS'){
	style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
} else {
	style = Ti.UI.ActivityIndicatorStyle.DARK;
}
var activityIndicator = Ti.UI.createActivityIndicator({
	color: 'white',
	font: {fontFamily:'Helvetica Neue', fontSize:14},
	message: 'Loading...',
	style: style,
	top: 50,
	left: 100,
	zIndex: 1
});



// create a table view to hold our things
var thingsTable = Ti.UI.createTableView({
	top: 70,
	left: 0
});

function getThings(thing)
{
	// show activity indicator
	activityIndicator.show();
	
	// create an empty data array
	var data = [];
	
	// create an empty results array
	var results = [];
	
	// create the httpRequest 
	var xhr = Titanium.Network.createHTTPClient(); 
	
	// open the httpRequest 
	xhr.open('POST','http://hellosearch.esy.es/ti_search/search.php'); 
	
	// this method will be called when the request is complete
	xhr.onload = function() 
	{ 
		// hide activity indicator
		activityIndicator.hide();
		
		// parse json coming from the server
		var json = JSON.parse(this.responseText);

		// if things are returned
 		if(json.things)
		{
	 		
	
				// create a new table row
				var row = Ti.UI.createTableViewRow();
	
				// create a label inside the table row
				var titleLabel = Ti.UI.createLabel({
					text: "名稱："+json.things[0].item_name,
					left: 10,
					top: 10,
					height: 40,
					width: 210
				});
				row.add(titleLabel);
			
				// push the row object to the data array
				data.push(row);
				
				var row2 = Ti.UI.createTableViewRow();
				// create a label inside the table row
				var titleLabel2 = Ti.UI.createLabel({
					text: "到達："+json.things[0].item_to,
					left: 10,
					top: 10,
					height: 40,
					width: 210
				});
				row2.add(titleLabel2);
			
				// push the row object to the data array
				data.push(row2);
				
				
				var row3 = Ti.UI.createTableViewRow();
				// create a label inside the table row
				var titleLabel3 = Ti.UI.createLabel({
					text: "運送狀態："+json.things[0].status,
					left: 10,
					top: 10,
					height: 40,
					width: 210
				});
				row3.add(titleLabel3);
			
				// push the row object to the data array
				data.push(row3);
				
				
				var row4 = Ti.UI.createTableViewRow();
				// create a label inside the table row
				var titleLabel4 = Ti.UI.createLabel({
					text: "到達時間："+json.things[0].arrive_time,
					left: 10,
					top: 10,
					height: 40,
					width: 290
				});
				row4.add(titleLabel4);
			
				// push the row object to the data array
				data.push(row4);
				
				
				var row5 = Ti.UI.createTableViewRow();
				// create a label inside the table row
				var titleLabel5 = Ti.UI.createLabel({
					text: "說明："+json.things[0].item_description,
					left: 10,
					top: 10,
					height: 40,
					width: 290
				});
				row5.add(titleLabel5);
			
				// push the row object to the data array
				data.push(row5);
			
			
			// populate the things table with data
			thingsTable.data = data;
		}	

		
	}; 
	
	// this method will be called if there is an error 
	xhr.onerror = function()
	{
		alert(this.error + ': ' + this.statusText);
		return false;
	};

	xhr.send({'thing': thing});
}

	
	
// Creation - GUI DO NOT TOUCH
// [an:PartOfTab][true][ta:PartOfTab][true][ph:PartOfTab][true][pa:PartOfTab][true][mw:PartOfTab][true][an:Startup][true][ta:Startup][true][ph:Startup][true][pa:Startup][true][mw:Startup][true][an:icon][/images/dialog-information-3.ico][ta:icon][/images/dialog-information-3.ico][ph:icon][/images/dialog-information-3.ico][pa:icon][/images/dialog-information-3.ico][mw:icon][/images/dialog-information-3.ico][an:name][Window1][ta:name][Window1][ph:name][Window1][pa:name][Window1][mw:name][Window1][an:backgroundColor][#ffffff][ta:backgroundColor][#ffffff][ph:backgroundColor][#ffffff][pa:backgroundColor][#ffffff][mw:backgroundColor][#ffffff][ph:tintColor][#000000][pa:tintColor][#000000][an:title][搜尋][ta:title][搜尋][ph:title][搜尋][pa:title][搜尋][mw:title][搜尋]
var win;
if (g_Vars.m_fIsAndroid) win = Titanium.UI.createWindow({
PartOfTab : true,
Startup : true,
icon : '/images/dialog-information-3.ico',
name : 'Window1',
backgroundColor : '#ffffff',
title : '搜尋',
});
if (g_Vars.m_fIsiPhone) win = Titanium.UI.createWindow({
PartOfTab : true,
Startup : true,
icon : '/images/dialog-information-3.ico',
name : 'Window1',
backgroundColor : '#ffffff',
tintColor : '#000000',
title : '搜尋',
});
if (g_Vars.m_fIsiPad) win = Titanium.UI.createWindow({
PartOfTab : true,
Startup : true,
icon : '/images/dialog-information-3.ico',
name : 'Window1',
backgroundColor : '#ffffff',
tintColor : '#000000',
title : '搜尋',
});
if (g_Vars.m_fIsMobileWeb) win = Titanium.UI.createWindow({
PartOfTab : true,
Startup : true,
icon : '/images/dialog-information-3.ico',
name : 'Window1',
backgroundColor : '#ffffff',
title : '搜尋',
});
if (g_Vars.m_fIsTablet) win = Titanium.UI.createWindow({
PartOfTab : true,
Startup : true,
icon : '/images/dialog-information-3.ico',
name : 'Window1',
backgroundColor : '#ffffff',
title : '搜尋',
});

win.aoChildWindows = {};
// Creation - END

// Window1_close - BEGIN
win.addEventListener ('close', function (e) {
	Ti.API.fireEvent ('GUI_Window_Closed', { win : win});
});
// Window1_close - END

win.add(textField);
win.add(activityIndicator);
win.add(thingsTable);


// Startup - GUI DO NOT TOUCH
var aoChildWindows = undefined;
var oTopMost = undefined; 
if (g_Vars.aoChildWindows['Tabs']) { oTopMost = g_Vars.aoChildWindows['Tabs']; aoChildWindows = g_Vars.aoChildWindows['Tabs'].aoChildWindows;  }
if (aoChildWindows) { aoChildWindows['Window1'] = win; oTopMost.aoChildWindows = aoChildWindows; }
var tab = Titanium.UI.createTab ({icon : '/images/dialog-information-3.ico', title : '搜尋', window : win, });
g_Vars.Tabs.addTab(tab);
win.pParentTab = g_Vars.Tabs;
g_Vars.Tabs.tabTab_Window1 = tab;
g_Vars.currentWindow = win;
// Startup - END

return win;
};
