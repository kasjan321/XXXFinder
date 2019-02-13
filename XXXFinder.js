// ==UserScript==
// @name         XXXFinderv3
// @version      0.3

// @author       kasjan321
// @include      http*://*.youtube.com/*
// @include      http*://youtube.com/*
// @include      http*://*.youtu.be/*
// @include      http*://youtu.be/*
// @grant        all
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';
    var str;
    var str2;
    var str3;
    str = window.location.href;
    str2 = "xx";
    str3 = "xxx";
    var res = str.split("https://www.youtube.com/watch?v=");
    if(new RegExp(str2, 'i').test(res)) {
        alert("WYKRYTO XX");

}
    if(new RegExp(str3, 'i').test(res)) {
        alert("WYKRYTO XXX <3");

}

    console.log(res[1]);
})();