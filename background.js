/*chrome.runtime.onMessage.addListener(function(response,sender,sendresponse){
	//alert(response);
	$.get(response,function(data)
		{
		var htmldata =data;
		console.log(htmldata);
	});
});*/

var toggle = false;

chrome.browserAction.onClicked.addListener(function(tab) {

    toggle = !toggle;

    var status = 'off';

    if(toggle) {
        status = 'on';
    }

    // Toggle the icon
    chrome.browserAction.setIcon({path: 'icon-'+status+'.png', tabId:tab.id});

    // Execute script & pass a variable
    chrome.tabs.executeScript(tab.id, {
        code: 'var extension_status = "'+status+'";'
    }, function() {
        chrome.tabs.executeScript(tab.id, {file: 'myscript.js'});
    });

});