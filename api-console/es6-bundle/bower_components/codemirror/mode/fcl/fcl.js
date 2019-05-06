// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE
(function(mod){if("object"==typeof exports&&"object"==typeof module)// CommonJS
mod(require("../../lib/codemirror"));else if("function"==typeof define&&define.amd)// AMD
define(["../../lib/codemirror"],mod);else// Plain browser env
mod(CodeMirror)})(function(CodeMirror){"use strict";CodeMirror.defineMode("fcl",function(config){var indentUnit=config.indentUnit,keywords={term:!0,method:!0,accu:!0,rule:!0,then:!0,is:!0,and:!0,or:!0,if:!0,default:!0},start_blocks={var_input:!0,var_output:!0,fuzzify:!0,defuzzify:!0,function_block:!0,ruleblock:!0},end_blocks={end_ruleblock:!0,end_defuzzify:!0,end_function_block:!0,end_fuzzify:!0,end_var:!0},atoms={true:!0,false:!0,nan:!0,real:!0,min:!0,max:!0,cog:!0,cogs:!0},isOperatorChar=/[+\-*&^%:=<>!|\/]/;function tokenBase(stream,state){var ch=stream.next();if(/[\d\.]/.test(ch)){if("."==ch){stream.match(/^[0-9]+([eE][\-+]?[0-9]+)?/)}else if("0"==ch){stream.match(/^[xX][0-9a-fA-F]+/)||stream.match(/^0[0-7]+/)}else{stream.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/)}return"number"}if("/"==ch||"("==ch){if(stream.eat("*")){state.tokenize=tokenComment;return tokenComment(stream,state)}if(stream.eat("/")){stream.skipToEnd();return"comment"}}if(isOperatorChar.test(ch)){stream.eatWhile(isOperatorChar);return"operator"}stream.eatWhile(/[\w\$_\xa1-\uffff]/);var cur=stream.current().toLowerCase();if(keywords.propertyIsEnumerable(cur)||start_blocks.propertyIsEnumerable(cur)||end_blocks.propertyIsEnumerable(cur)){return"keyword"}if(atoms.propertyIsEnumerable(cur))return"atom";return"variable"}function tokenComment(stream,state){var maybeEnd=/* eat */!1,ch;while(ch=stream.next()){if(("/"==ch||")"==ch)&&maybeEnd){state.tokenize=tokenBase;break}maybeEnd="*"==ch}return"comment"}function Context(indented,column,type,align,prev){this.indented=indented;this.column=column;this.type=type;this.align=align;this.prev=prev}function pushContext(state,col,type){return state.context=new Context(state.indented,col,type,null,state.context)}function popContext(state){if(!state.context.prev)return;var t=state.context.type;if("end_block"==t)state.indented=state.context.indented;return state.context=state.context.prev}// Interface
return{startState:function(basecolumn){return{tokenize:null,context:new Context((basecolumn||0)-indentUnit,0,"top",!1),indented:0,startOfLine:!0}},token:function(stream,state){var ctx=state.context;if(stream.sol()){if(null==ctx.align)ctx.align=!1;state.indented=stream.indentation();state.startOfLine=!0}if(stream.eatSpace())return null;var style=(state.tokenize||tokenBase)(stream,state);if("comment"==style)return style;if(null==ctx.align)ctx.align=!0;var cur=stream.current().toLowerCase();if(start_blocks.propertyIsEnumerable(cur))pushContext(state,stream.column(),"end_block");else if(end_blocks.propertyIsEnumerable(cur))popContext(state);state.startOfLine=!1;return style},indent:function(state,textAfter){if(state.tokenize!=tokenBase&&null!=state.tokenize)return 0;var ctx=state.context,closing=end_blocks.propertyIsEnumerable(textAfter);if(ctx.align)return ctx.column+(closing?0:1);else return ctx.indented+(closing?0:indentUnit)},electricChars:"ryk",fold:"brace",blockCommentStart:"(*",blockCommentEnd:"*)",lineComment:"//"}});CodeMirror.defineMIME("text/x-fcl","fcl")});