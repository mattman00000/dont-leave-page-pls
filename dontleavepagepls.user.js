	// ==UserScript==
// @name         Don't Leave Page Pls
// @namespace    https://github.com/mattman00000/dont-leave-page-pls
// @version      0.0.1
// @description  keeps you on current page when enabled
// @author       mattman00000
// @match        <all_urls>
// @grant        none
// @updateURL    https://github.com/mattman00000/dont-leave-page-pls/raw/master/dontleavepagepls.user.js
// @downloadURL  https://github.com/mattman00000/dont-leave-page-pls/raw/master/dontleavepagepls.user.js
// ==/UserScript==

if (localStorage.getItem("dontleavepagepls")=="true") document.body.onbeforeunload = function() {return "Don't Leave Page, Pls";} ;
else if (localStorage.getItem("dontleavepagepls")=="false") document.body.onbeforeunload = null;
else localStorage.setItem("dontleavepagepls","false");

function dlppTruthify(tvar) { //turns tvar into "true" or "false" using Boolean()
    try { return String(Boolean(tvar)); } catch(err) { return "false"; } ;
}

function dlpp(truth) { //toggles DLPP localstorage flag
    localStorage.setItem("dontleavepagepls",dlppTruthify(truth));
}
