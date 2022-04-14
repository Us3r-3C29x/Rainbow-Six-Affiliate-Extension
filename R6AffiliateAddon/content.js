// @name          Rainbow Six | DE | Affiliate
// @namespace     
// @description   Mit diesem Extension unterstützt du durch jeden Kauf bei Amazon kostenlos und vollautomatisch den Rainbow Six DE Discord Server!
// @include       *
// @run-at        document-end
// @version       1.5

// Defining the Affiliate ID
var affID = 'r6de-21';

// Get the Product ASIN
function getASIN(href) {
  var asinMatch;
  if (!asinMatch) {asinMatch = href.match(/\/exec\/obidos\/ASIN\/(\w{10})/i); }
  if (!asinMatch) { asinMatch = href.match(/\/gp\/product\/(\w{10})/i); }
  if (!asinMatch) { asinMatch = href.match(/\/exec\/obidos\/tg\/detail\/\-\/(\w{10})/i); }
  if (!asinMatch) { asinMatch = href.match(/\/dp\/(\w{10})/i); }
  if (!asinMatch) { asinMatch = href.match(/\/exec\/o\/ASIN\/(\w{10})/i); }
  if (!asinMatch) { return null; }
  return asinMatch[1];
}

// Get The Domain
function getDomain() {
  if (document.location.hostname.substr(0,4) == 'www.') {
    return document.location.hostname.substr(4) ;
  }
  return document.location.hostname ;
}

// The Main Function
(function() {

  // Scope
  var currentDomain = getDomain();
  var linkDomain = (currentDomain.match(/amazon\./i) ? currentDomain : "amazon.com");

  // Get All Of Our Links And Loop
  var allLinks = document.getElementsByTagName("a");
  for (i = 0; i < allLinks.length; i++) {
    var href = allLinks[i].href;
    if (href.match(/amazon\./i)) {
     var asin = getASIN(href);
      if (asin != null) {    if (window.location.href.includes(affID) == false && ((window.location.href.includes("/obidos/") || window.location.href.includes("/o/") || window.location.href.includes("/dp/") || window.location.href.includes("/product/")) == true)) 
		  { window.location.replace("ref=nosim/"+affID)};
		allLinks[i].setAttribute("href", "http://"+linkDomain+"/o/ASIN/" + asin + "/ref=nosim/"+affID);
	}
    }
  }
})();
