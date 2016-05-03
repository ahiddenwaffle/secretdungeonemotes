// ==UserScript==
// @name        Secret Dungeon Emotes
// @namespace   graulund.github.io
// @description A set of cool (in-joke) emoticons that you can use anywhere on Twitch.

// @include	*.twitch.tv/*
// @exclude api.twitch.tv/*

// @version 2.0
// @updateURL http:/ahiddenwaffle.github.io/secretdungeonemotes/dungeonemotes.user.js
// @grant       none
// @run-at      document-end
// ==/UserScript==

function sdeLoad()
{
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "//ahiddenwaffle.github.io/secretdungeonemotes/sde.js";
	document.getElementsByTagName("head")[0].appendChild(script);
}

sdeLoad();
