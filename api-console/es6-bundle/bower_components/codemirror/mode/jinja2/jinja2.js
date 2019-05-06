// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE
(function(mod){if("object"==typeof exports&&"object"==typeof module)// CommonJS
mod(require("../../lib/codemirror"));else if("function"==typeof define&&define.amd)// AMD
define(["../../lib/codemirror"],mod);else// Plain browser env
mod(CodeMirror)})(function(CodeMirror){"use strict";CodeMirror.defineMode("jinja2",function(){var keywords=["and","as","block","endblock","by","cycle","debug","else","elif","extends","filter","endfilter","firstof","for","endfor","if","endif","ifchanged","endifchanged","ifequal","endifequal","ifnotequal","endifnotequal","in","include","load","not","now","or","parsed","regroup","reversed","spaceless","endspaceless","ssi","templatetag","openblock","closeblock","openvariable","closevariable","openbrace","closebrace","opencomment","closecomment","widthratio","url","with","endwith","get_current_language","trans","endtrans","noop","blocktrans","endblocktrans","get_available_languages","get_current_language_bidi","plural"],operator=/^[+\-*&%=<>!?|~^]/,sign=/^[:\[\(\{]/,atom=["true","false"],number=/^(\d[+\-\*\/])?\d+(\.\d+)?/;keywords=new RegExp("(("+keywords.join(")|(")+"))\\b");atom=new RegExp("(("+atom.join(")|(")+"))\\b");function tokenBase(stream,state){var ch=stream.peek();//Comment
if(state.incomment){if(!stream.skipTo("#}")){stream.skipToEnd()}else{stream.eatWhile(/\#|}/);state.incomment=/* eat */!1}return"comment";//Tag
}else if(state.intag){//After operator
if(state.operator){state.operator=!1;if(stream.match(atom)){return"atom"}if(stream.match(number)){return"number"}}//After sign
if(state.sign){state.sign=!1;if(stream.match(atom)){return"atom"}if(stream.match(number)){return"number"}}if(state.instring){if(ch==state.instring){state.instring=!1}stream.next();return"string"}else if("'"==ch||"\""==ch){state.instring=ch;stream.next();return"string"}else if(stream.match(state.intag+"}")||stream.eat("-")&&stream.match(state.intag+"}")){state.intag=!1;return"tag"}else if(stream.match(operator)){state.operator=!0;return"operator"}else if(stream.match(sign)){state.sign=!0}else{if(stream.eat(" ")||stream.sol()){if(stream.match(keywords)){return"keyword"}if(stream.match(atom)){return"atom"}if(stream.match(number)){return"number"}if(stream.sol()){stream.next()}}else{stream.next()}}return"variable"}else if(stream.eat("{")){if(stream.eat("#")){state.incomment=!0;if(!stream.skipTo("#}")){stream.skipToEnd()}else{stream.eatWhile(/\#|}/);state.incomment=!1}return"comment";//Open tag
}else if(ch=stream.eat(/\{|%/)){//Cache close tag
state.intag=ch;if("{"==ch){state.intag="}"}stream.eat("-");return"tag"}}stream.next()};return{startState:function(){return{tokenize:tokenBase}},token:function(stream,state){return state.tokenize(stream,state)},blockCommentStart:"{#",blockCommentEnd:"#}"}});CodeMirror.defineMIME("text/jinja2","jinja2")});