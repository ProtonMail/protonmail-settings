(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{FGw1:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,a){var i,o=(a=a||{}).addSuffix?n[t].withPreposition:n[t].standalone;i="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e);if(a.addSuffix)return a.comparison>0?i+"లో":i+" క్రితం";return i};var n={lessThanXSeconds:{standalone:{one:"సెకను కన్నా తక్కువ",other:"{{count}} సెకన్ల కన్నా తక్కువ"},withPreposition:{one:"సెకను",other:"{{count}} సెకన్ల"}},xSeconds:{standalone:{one:"ఒక సెకను",other:"{{count}} సెకన్ల"},withPreposition:{one:"ఒక సెకను",other:"{{count}} సెకన్ల"}},halfAMinute:{standalone:"అర నిమిషం",withPreposition:"అర నిమిషం"},lessThanXMinutes:{standalone:{one:"ఒక నిమిషం కన్నా తక్కువ",other:"{{count}} నిమిషాల కన్నా తక్కువ"},withPreposition:{one:"ఒక నిమిషం",other:"{{count}} నిమిషాల"}},xMinutes:{standalone:{one:"ఒక నిమిషం",other:"{{count}} నిమిషాలు"},withPreposition:{one:"ఒక నిమిషం",other:"{{count}} నిమిషాల"}},aboutXHours:{standalone:{one:"సుమారు ఒక గంట",other:"సుమారు {{count}} గంటలు"},withPreposition:{one:"సుమారు ఒక గంట",other:"సుమారు {{count}} గంటల"}},xHours:{standalone:{one:"ఒక గంట",other:"{{count}} గంటలు"},withPreposition:{one:"ఒక గంట",other:"{{count}} గంటల"}},xDays:{standalone:{one:"ఒక రోజు",other:"{{count}} రోజులు"},withPreposition:{one:"ఒక రోజు",other:"{{count}} రోజుల"}},aboutXMonths:{standalone:{one:"సుమారు ఒక నెల",other:"సుమారు {{count}} నెలలు"},withPreposition:{one:"సుమారు ఒక నెల",other:"సుమారు {{count}} నెలల"}},xMonths:{standalone:{one:"ఒక నెల",other:"{{count}} నెలలు"},withPreposition:{one:"ఒక నెల",other:"{{count}} నెలల"}},aboutXYears:{standalone:{one:"సుమారు ఒక సంవత్సరం",other:"సుమారు {{count}} సంవత్సరాలు"},withPreposition:{one:"సుమారు ఒక సంవత్సరం",other:"సుమారు {{count}} సంవత్సరాల"}},xYears:{standalone:{one:"ఒక సంవత్సరం",other:"{{count}} సంవత్సరాలు"},withPreposition:{one:"ఒక సంవత్సరం",other:"{{count}} సంవత్సరాల"}},overXYears:{standalone:{one:"ఒక సంవత్సరం పైగా",other:"{{count}} సంవత్సరాలకు పైగా"},withPreposition:{one:"ఒక సంవత్సరం",other:"{{count}} సంవత్సరాల"}},almostXYears:{standalone:{one:"దాదాపు ఒక సంవత్సరం",other:"దాదాపు {{count}} సంవత్సరాలు"},withPreposition:{one:"దాదాపు ఒక సంవత్సరం",other:"దాదాపు {{count}} సంవత్సరాల"}}};t.exports=e.default},HyFC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=e||{},n=a.width?String(a.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}},t.exports=e.default},NJ1g:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a("loZk")),i=o(a("sCib"));function o(t){return t&&t.__esModule?t:{default:t}}var r={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)(వ)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(క్రీ\.పూ\.|క్రీ\.శ\.)/i,abbreviated:/^(క్రీ\.?\s?పూ\.?|ప్ర\.?\s?శ\.?\s?పూ\.?|క్రీ\.?\s?శ\.?|సా\.?\s?శ\.?)/i,wide:/^(క్రీస్తు పూర్వం|ప్రస్తుత శకానికి పూర్వం|క్రీస్తు శకం|ప్రస్తుత శకం)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(పూ|శ)/i,/^సా/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^త్రై[1234]/i,wide:/^[1234](వ)? త్రైమాసికం/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,i.default)({matchPatterns:{narrow:/^(జూ|జు|జ|ఫి|మా|ఏ|మే|ఆ|సె|అ|న|డి)/i,abbreviated:/^(జన|ఫిబ్ర|మార్చి|ఏప్రి|మే|జూన్|జులై|ఆగ|సెప్|అక్టో|నవ|డిసె)/i,wide:/^(జనవరి|ఫిబ్రవరి|మార్చి|ఏప్రిల్|మే|జూన్|జులై|ఆగస్టు|సెప్టెంబర్|అక్టోబర్|నవంబర్|డిసెంబర్)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^జ/i,/^ఫి/i,/^మా/i,/^ఏ/i,/^మే/i,/^జూ/i,/^జు/i,/^ఆ/i,/^సె/i,/^అ/i,/^న/i,/^డి/i],any:[/^జన/i,/^ఫి/i,/^మా/i,/^ఏ/i,/^మే/i,/^జూన్/i,/^జులై/i,/^ఆగ/i,/^సె/i,/^అ/i,/^న/i,/^డి/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^(ఆ|సో|మ|బు|గు|శు|శ)/i,short:/^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i,abbreviated:/^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i,wide:/^(ఆదివారం|సోమవారం|మంగళవారం|బుధవారం|గురువారం|శుక్రవారం|శనివారం)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ఆ/i,/^సో/i,/^మ/i,/^బు/i,/^గు/i,/^శు/i,/^శ/i],any:[/^ఆది/i,/^సోమ/i,/^మం/i,/^బుధ/i,/^గురు/i,/^శుక్ర/i,/^శని/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i,any:/^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^పూర్వాహ్నం/i,pm:/^అపరాహ్నం/i,midnight:/^అర్ధ/i,noon:/^మిట్ట/i,morning:/ఉదయం/i,afternoon:/మధ్యాహ్నం/i,evening:/సాయంత్రం/i,night:/రాత్రి/i}},defaultParseWidth:"any"})};e.default=r,t.exports=e.default},SGoj:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=d(a("FGw1")),i=d(a("T135")),o=d(a("uPKI")),r=d(a("vYQK")),u=d(a("NJ1g"));function d(t){return t&&t.__esModule?t:{default:t}}var l={code:"te",formatDistance:n.default,formatLong:i.default,formatRelative:o.default,localize:r.default,match:u.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};e.default=l,t.exports=e.default},T135:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=a("HyFC"))&&n.__esModule?n:{default:n};var o={date:(0,i.default)({formats:{full:"d, MMMM y, EEEE",long:"d MMMM, y",medium:"d MMM, y",short:"dd-MM-yy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} {{time}}'కి'",long:"{{date}} {{time}}'కి'",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};e.default=o,t.exports=e.default},loZk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,a){var n=String(e),i=a||{},o=n.match(t.matchPattern);if(!o)return null;var r=o[0],u=n.match(t.parsePattern);if(!u)return null;var d=t.valueCallback?t.valueCallback(u[0]):u[0];return{value:d=i.valueCallback?i.valueCallback(d):d,rest:n.slice(r.length)}}},t.exports=e.default},rwOc:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,a){var n,i=a||{};if("formatting"===(i.context?String(i.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,r=i.width?String(i.width):o;n=t.formattingValues[r]||t.formattingValues[o]}else{var u=t.defaultWidth,d=i.width?String(i.width):t.defaultWidth;n=t.values[d]||t.values[u]}return n[t.argumentCallback?t.argumentCallback(e):e]}},t.exports=e.default},sCib:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,a){var n=String(e),i=a||{},o=i.width,r=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],u=n.match(r);if(!u)return null;var d,l=u[0],s=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(s)?function(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a}(s,(function(t){return t.test(n)})):function(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a}(s,(function(t){return t.test(n)})),d=t.valueCallback?t.valueCallback(d):d,{value:d=i.valueCallback?i.valueCallback(d):d,rest:n.slice(l.length)}}},t.exports=e.default},uPKI:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,a,i){return n[t]};var n={lastWeek:"'గత' eeee p",yesterday:"'నిన్న' p",today:"'ఈ రోజు' p",tomorrow:"'రేపు' p",nextWeek:"'తదుపరి' eeee p",other:"P"};t.exports=e.default},vYQK:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=a("rwOc"))&&n.__esModule?n:{default:n};var o={ordinalNumber:function(t,e){return Number(t)+"వ"},era:(0,i.default)({values:{narrow:["క్రీ.పూ.","క్రీ.శ."],abbreviated:["క్రీ.పూ.","క్రీ.శ."],wide:["క్రీస్తు పూర్వం","క్రీస్తుశకం"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["త్రై1","త్రై2","త్రై3","త్రై4"],wide:["1వ త్రైమాసికం","2వ త్రైమాసికం","3వ త్రైమాసికం","4వ త్రైమాసికం"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:(0,i.default)({values:{narrow:["జ","ఫి","మా","ఏ","మే","జూ","జు","ఆ","సె","అ","న","డి"],abbreviated:["జన","ఫిబ్ర","మార్చి","ఏప్రి","మే","జూన్","జులై","ఆగ","సెప్టెం","అక్టో","నవం","డిసెం"],wide:["జనవరి","ఫిబ్రవరి","మార్చి","ఏప్రిల్","మే","జూన్","జులై","ఆగస్టు","సెప్టెంబర్","అక్టోబర్","నవంబర్","డిసెంబర్"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["ఆ","సో","మ","బు","గు","శు","శ"],short:["ఆది","సోమ","మంగళ","బుధ","గురు","శుక్ర","శని"],abbreviated:["ఆది","సోమ","మంగళ","బుధ","గురు","శుక్ర","శని"],wide:["ఆదివారం","సోమవారం","మంగళవారం","బుధవారం","గురువారం","శుక్రవారం","శనివారం"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},abbreviated:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},wide:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"}},defaultWidth:"wide",formattingValues:{narrow:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},abbreviated:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},wide:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"}},defaultFormattingWidth:"wide"})};e.default=o,t.exports=e.default}}]);
//# sourceMappingURL=60.81583a68.chunk.js.map