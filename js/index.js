function include(url) {
	const script = document.createElement("script");
	script.src = url;
	document.getElementsByTagName("body")[0].appendChild(script);
}

include("js/items.js");
include("js/search.js");
include("js/core.js");
