// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE
// mode(s) for the sequence chart dsl's mscgen, xù and msgenny
// For more information on mscgen, see the site of the original author:
// http://www.mcternan.me.uk/mscgen
//
// This mode for mscgen and the two derivative languages were
// originally made for use in the mscgen_js interpreter
// (https://sverweij.github.io/mscgen_js)
(function(mod){if("object"==typeof exports&&"object"==typeof module)// CommonJS
mod(require("../../lib/codemirror"));else if("function"==typeof define&&define.amd)// AMD
define(["../../lib/codemirror"],mod);else// Plain browser env
mod(CodeMirror)})(function(CodeMirror){"use strict";var languages={mscgen:{keywords:["msc"],options:["hscale","width","arcgradient","wordwraparcs"],constants:["true","false","on","off"],attributes:["label","idurl","id","url","linecolor","linecolour","textcolor","textcolour","textbgcolor","textbgcolour","arclinecolor","arclinecolour","arctextcolor","arctextcolour","arctextbgcolor","arctextbgcolour","arcskip"],brackets:["\\{","\\}"],// [ and  ] are brackets too, but these get handled in with lists
arcsWords:["note","abox","rbox","box"],arcsOthers:["\\|\\|\\|","\\.\\.\\.","---","--","<->","==","<<=>>","<=>","\\.\\.","<<>>","::","<:>","->","=>>","=>",">>",":>","<-","<<=","<=","<<","<:","x-","-x"],singlecomment:["//","#"],operators:["="]},xu:{keywords:["msc","xu"],options:["hscale","width","arcgradient","wordwraparcs","wordwrapentities","watermark"],constants:["true","false","on","off","auto"],attributes:["label","idurl","id","url","linecolor","linecolour","textcolor","textcolour","textbgcolor","textbgcolour","arclinecolor","arclinecolour","arctextcolor","arctextcolour","arctextbgcolor","arctextbgcolour","arcskip","title","deactivate","activate","activation"],brackets:["\\{","\\}"],// [ and  ] are brackets too, but these get handled in with lists
arcsWords:["note","abox","rbox","box","alt","else","opt","break","par","seq","strict","neg","critical","ignore","consider","assert","loop","ref","exc"],arcsOthers:["\\|\\|\\|","\\.\\.\\.","---","--","<->","==","<<=>>","<=>","\\.\\.","<<>>","::","<:>","->","=>>","=>",">>",":>","<-","<<=","<=","<<","<:","x-","-x"],singlecomment:["//","#"],operators:["="]},msgenny:{keywords:null,options:["hscale","width","arcgradient","wordwraparcs","wordwrapentities","watermark"],constants:["true","false","on","off","auto"],attributes:null,brackets:["\\{","\\}"],arcsWords:["note","abox","rbox","box","alt","else","opt","break","par","seq","strict","neg","critical","ignore","consider","assert","loop","ref","exc"],arcsOthers:["\\|\\|\\|","\\.\\.\\.","---","--","<->","==","<<=>>","<=>","\\.\\.","<<>>","::","<:>","->","=>>","=>",">>",":>","<-","<<=","<=","<<","<:","x-","-x"],singlecomment:["//","#"],operators:["="]}};CodeMirror.defineMode("mscgen",function(_,modeConfig){var language=languages[modeConfig&&modeConfig.language||"mscgen"];return{startState:startStateFn,copyState:copyStateFn,token:produceTokenFunction(language),lineComment:"#",blockCommentStart:"/*",blockCommentEnd:"*/"}});CodeMirror.defineMIME("text/x-mscgen","mscgen");CodeMirror.defineMIME("text/x-xu",{name:"mscgen",language:"xu"});CodeMirror.defineMIME("text/x-msgenny",{name:"mscgen",language:"msgenny"});function wordRegexpBoundary(pWords){return new RegExp("\\b("+pWords.join("|")+")\\b","i")}function wordRegexp(pWords){return new RegExp("("+pWords.join("|")+")","i")}function startStateFn(){return{inComment:/* eat */!1,inString:!1,inAttributeList:!1,inScript:!1}}function copyStateFn(pState){return{inComment:pState.inComment,inString:pState.inString,inAttributeList:pState.inAttributeList,inScript:pState.inScript}}function produceTokenFunction(pConfig){return function(pStream,pState){if(pStream.match(wordRegexp(pConfig.brackets),!0,!0)){return"bracket"}/* comments */if(!pState.inComment){if(pStream.match(/\/\*[^\*\/]*/,!0,!0)){pState.inComment=!0;return"comment"}if(pStream.match(wordRegexp(pConfig.singlecomment),!0,!0)){pStream.skipToEnd();return"comment"}}if(pState.inComment){if(pStream.match(/[^\*\/]*\*\//,!0,!0))pState.inComment=!1;else pStream.skipToEnd();return"comment"}/* strings */if(!pState.inString&&pStream.match(/\"(\\\"|[^\"])*/,!0,!0)){pState.inString=!0;return"string"}if(pState.inString){if(pStream.match(/[^\"]*\"/,!0,!0))pState.inString=!1;else pStream.skipToEnd();return"string"}/* keywords & operators */if(!!pConfig.keywords&&pStream.match(wordRegexpBoundary(pConfig.keywords),!0,!0))return"keyword";if(pStream.match(wordRegexpBoundary(pConfig.options),!0,!0))return"keyword";if(pStream.match(wordRegexpBoundary(pConfig.arcsWords),!0,!0))return"keyword";if(pStream.match(wordRegexp(pConfig.arcsOthers),!0,!0))return"keyword";if(!!pConfig.operators&&pStream.match(wordRegexp(pConfig.operators),!0,!0))return"operator";if(!!pConfig.constants&&pStream.match(wordRegexp(pConfig.constants),!0,!0))return"variable";/* attribute lists */if(!pConfig.inAttributeList&&!!pConfig.attributes&&pStream.match(/\[/,!0,!0)){pConfig.inAttributeList=!0;return"bracket"}if(pConfig.inAttributeList){if(null!==pConfig.attributes&&pStream.match(wordRegexpBoundary(pConfig.attributes),!0,!0)){return"attribute"}if(pStream.match(/]/,!0,!0)){pConfig.inAttributeList=!1;return"bracket"}}pStream.next();return"base"}}});