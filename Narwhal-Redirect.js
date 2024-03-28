// ==UserScript==
// @name         Redirect Reddit URLs to Narwhal
// @namespace    https://github.com/The-Linux-User/iOS-narwhal-redirect
// @version      1.0
// @description  Redirects Reddit URLs to Narwhal
// @author       The-Linux-User
// @match        *://*.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to extract the original URL and redirect to Narwhal
    function redirectToNarwhal() {
        var originalUrl = window.location.href;
        var encodedUrl = encodeURIComponent(originalUrl);
        window.location.href = 'narwhal://open-url/' + encodedUrl;
    }

    // Check if the URL contains "reddit" and redirect if necessary
    if (window.location.href.indexOf('reddit') !== -1) {
        redirectToNarwhal();
    }
})();
