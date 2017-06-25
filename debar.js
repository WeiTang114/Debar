const DEMO_DIV_CLASS = "punch-full-screen-element punch-full-window-overlay";
const DEMO_CONTROL_CLASS = "punch-viewer-nav-rounded-container";

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

function getBar() {
    var iframe = document.getElementsByClassName("punch-present-iframe")[0];
    if (iframe != null && iframe.contentWindow != null) {
        var bar = iframe.contentWindow.document.body.getElementsByClassName(DEMO_CONTROL_CLASS)[0];
        return bar;
    }
    return null;
}

// The "DeBar" button
var div = document.createElement("div");
div.className = "goog-inline-block debar";
div.style = `display: inline-block; 
             text-decoration:none; 
             color: #ddd; 
             font-size: 12pt;
             position: absolute;
             top: 3px;
             right: 5px;
             `;
div.innerHTML = '&times;';
div.onclick = () => {
    //console.log("clicked");
    var bar = getBar();
    //console.log(bar);
    if (bar) {
        bar.style.display = "none";
    }
}

var observer = new MutationObserver(function(mutations, observer) {
    var bar = getBar();
    if (bar && bar.getElementsByClassName("debar").length == 0) {
        //console.log(bar);
        bar.appendChild(div);
    }
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback

var body = document.getElementsByTagName("BODY")[0];
//console.log(body);
observer.observe(body, {
  attributes: true,
  childList: true,
  subtree: true,
  //...
});


