//chrome.runtime.sendMessage(document.URL);


var allId =["masthead-ad","mainLeaderboard","google_ads_iframe_/16833175/WideSkyScraper_0__container__","google_ads_iframe_/16833175/BottomMediumRectangle_0__container__","google_companion_ad_div","skyscraper","google_image_div","aw0","colorSlot1","dfp-tlb","tryitLeaderboard","sidebar","MarketGidComposite180488","videowall-ad-info-button","sub-frame-error","date-20180404 en_GB ltr lite exp-invert-logo exp-mouseover-img exp-responsive exp-scrollable-guide exp-search-big-thumbs   site-center-aligned site-as-giant-card  webkit webkit-537","t","div-gpt-ad-1493883843099-0","google_ads_iframe_/16833175/MidContent_0__container__","div-gpt-ad-1422003450156-0","google_ads_iframe_/16833175/BottomMediumRectangle_0__container__","google_ads_iframe_/16833175/BottomMediumRectangle_0","player-ads","container","google_companion_ad_div","aw0","google_image_div","instance-atom-text-18","ad-container","div-gpt-ad-1502360264505-0","google_image_div","ad_unit","div-gpt-ad-1422003450156-0"];

//var allclass=["topgooglead","container"];

chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
         if(request)
			 {
				 console.log(request.message);
				 allId.push(request);
        alert("Id is successfully added!");
		 		sendResponse({farewell: "goodbye"});	
          
			 }
		     
		 
      }
    );

for(var j=0;j<allId.length;j++)
	{
		var a=document.getElementById(allId[j]);
		if (a) {
    		a.remove();
			a.detach();
			}
	}
var anc=$("a img src").detach();
$.trim($("a[href*='googleads']"));
$(document).find("body").find("a");

var el = document.getElementsByTagName("iframe")[0];
el.parentNode.removeChild(el);
var allclass=["style-scope ytd-iframe-companion-renderer"];
for(var i=0;i<allclass.length;i++)
	{
		var c=$(allclass[i]);
		if(c)
			{
				c.attr("id","ads");
				document.getElementById("ads").remove();
			}
	}

document.getElementsByTagName('a > img').removeAll;

for(var i=0;i<allTags.lenght();i++){
	
	if(allTags[i].attributes('src').contains('https:') || allTags[i].attributes('src').contains('http:') || allTags[i].attributes('srcset').contains('https:') || allTags[i].attributes('srcset').contains('http:')	){
		document.getElementById(allTags[i].id).remove();
	}	
	
}
