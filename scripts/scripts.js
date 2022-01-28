function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    if (cssFile === "style/darkMode.css") {
        newlink.setAttribute("href", "style/ligthMode.css");
    } else {
        newlink.setAttribute("href", "style/darkMode.css");
    }


    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}