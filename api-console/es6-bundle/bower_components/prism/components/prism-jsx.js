(function(Prism){var javascript=Prism.util.clone(Prism.languages.javascript);Prism.languages.jsx=Prism.languages.extend("markup",javascript);Prism.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i;Prism.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i;Prism.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i;Prism.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/;Prism.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},Prism.languages.jsx.tag);Prism.languages.insertBefore("inside","attr-value",{script:{// Allow for two levels of nesting
pattern:/=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:Prism.languages.jsx},alias:"language-javascript"}},Prism.languages.jsx.tag);// The following will handle plain text inside tags
var stringifyToken=function(token){if(!token){return""}if("string"===typeof token){return token}if("string"===typeof token.content){return token.content}return token.content.map(stringifyToken).join("")},walkTokens=function(tokens){for(var openedTags=[],i=0;i<tokens.length;i++){var token=tokens[i],notTagNorBrace=/* eat */!1;if("string"!==typeof token){if("tag"===token.type&&token.content[0]&&"tag"===token.content[0].type){// We found a tag, now find its kind
if("</"===token.content[0].content[0].content){// Closing tag
if(0<openedTags.length&&openedTags[openedTags.length-1].tagName===stringifyToken(token.content[0].content[1])){// Pop matching opening tag
openedTags.pop()}}else{if("/>"===token.content[token.content.length-1].content){// Autoclosed tag, ignore
}else{// Opening tag
openedTags.push({tagName:stringifyToken(token.content[0].content[1]),openedBraces:0})}}}else if(0<openedTags.length&&"punctuation"===token.type&&"{"===token.content){// Here we might have entered a JSX context inside a tag
openedTags[openedTags.length-1].openedBraces++}else if(0<openedTags.length&&0<openedTags[openedTags.length-1].openedBraces&&"punctuation"===token.type&&"}"===token.content){// Here we might have left a JSX context inside a tag
openedTags[openedTags.length-1].openedBraces--}else{notTagNorBrace=!0}}if(notTagNorBrace||"string"===typeof token){if(0<openedTags.length&&0===openedTags[openedTags.length-1].openedBraces){// Here we are inside a tag, and not inside a JSX context.
// That's plain text: drop any tokens matched.
var plainText=stringifyToken(token);// And merge text with adjacent text
if(i<tokens.length-1&&("string"===typeof tokens[i+1]||"plain-text"===tokens[i+1].type)){plainText+=stringifyToken(tokens[i+1]);tokens.splice(i+1,1)}if(0<i&&("string"===typeof tokens[i-1]||"plain-text"===tokens[i-1].type)){plainText=stringifyToken(tokens[i-1])+plainText;tokens.splice(i-1,1);i--}tokens[i]=new Prism.Token("plain-text",plainText,null,plainText)}}if(token.content&&"string"!==typeof token.content){walkTokens(token.content)}}};Prism.hooks.add("after-tokenize",function(env){if("jsx"!==env.language&&"tsx"!==env.language){return}walkTokens(env.tokens)})})(Prism);