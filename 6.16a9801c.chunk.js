(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2Oix":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,a.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var i,a=(i=n("YGjY"))&&i.__esModule?i:{default:i};e.exports=t.default},"3J9E":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=(i=n("rwOc"))&&i.__esModule?i:{default:i};var u={ordinalNumber:function(e,t){return String((t||{}).unit),e+"-ші"},era:(0,a.default)({values:{narrow:["б.з.д.","б.з."],abbreviated:["б.з.д.","б.з."],wide:["біздің заманымызға дейін","біздің заманымыз"]},defaultWidth:"wide"}),quarter:(0,a.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-ші тоқ.","2-ші тоқ.","3-ші тоқ.","4-ші тоқ."],wide:["1-ші тоқсан","2-ші тоқсан","3-ші тоқсан","4-ші тоқсан"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:{narrow:["Қ","А","Н","С","М","М","Ш","Т","Қ","Қ","Қ","Ж"],abbreviated:["қаң","ақп","нау","сәу","мам","мау","шіл","там","қыр","қаз","қар","жел"],wide:["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"]},defaultWidth:"wide",formattingValues:{narrow:["Қ","А","Н","С","М","М","Ш","Т","Қ","Қ","Қ","Ж"],abbreviated:["қаң","ақп","нау","сәу","мам","мау","шіл","там","қыр","қаз","қар","жел"],wide:["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"]},defaultFormattingWidth:"wide"}),day:(0,a.default)({values:{narrow:["Ж","Д","С","С","Б","Ж","С"],short:["жс","дс","сс","ср","бс","жм","сб"],abbreviated:["жс","дс","сс","ср","бс","жм","сб"],wide:["жексенбі","дүйсенбі","сейсенбі","сәрсенбі","бейсенбі","жұма","сенбі"]},defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:{narrow:{am:"ТД",pm:"ТК",midnight:"түн ортасы",noon:"түс",morning:"таң",afternoon:"күндіз",evening:"кеш",night:"түн"},wide:{am:"ТД",pm:"ТК",midnight:"түн ортасы",noon:"түс",morning:"таң",afternoon:"күндіз",evening:"кеш",night:"түн"}},defaultWidth:"any",formattingValues:{narrow:{am:"ТД",pm:"ТК",midnight:"түн ортасында",noon:"түс",morning:"таң",afternoon:"күн",evening:"кеш",night:"түн"},wide:{am:"ТД",pm:"ТК",midnight:"түн ортасында",noon:"түсте",morning:"таңертең",afternoon:"күндіз",evening:"кеште",night:"түнде"}},defaultFormattingWidth:"wide"})};t.default=u,e.exports=t.default},"7nJJ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(n("loZk")),a=u(n("sCib"));function u(e){return e&&e.__esModule?e:{default:e}}var r={ordinalNumber:(0,i.default)({matchPattern:/^(\d+)(-?(ші|шы))?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,a.default)({matchPatterns:{narrow:/^((б )?з\.?\s?д\.?)/i,abbreviated:/^((б )?з\.?\s?д\.?)/i,wide:/^(біздің заманымызға дейін|біздің заманымыз|біздің заманымыздан)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^б/i,/^з/i]},defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?ші)? тоқ.?/i,wide:/^[1234](-?ші)? тоқсан/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,a.default)({matchPatterns:{narrow:/^(қ|а|н|с|м|мау|ш|т|қыр|қаз|қар|ж)/i,abbreviated:/^(қаң|ақп|нау|сәу|мам|мау|шіл|там|қыр|қаз|қар|жел)/i,wide:/^(қаңтар|ақпан|наурыз|сәуір|мамыр|маусым|шілде|тамыз|қыркүйек|қазан|қараша|желтоқсан)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^қ/i,/^а/i,/^н/i,/^с/i,/^м/i,/^м/i,/^ш/i,/^т/i,/^қ/i,/^қ/i,/^қ/i,/^ж/i],abbreviated:[/^қаң/i,/^ақп/i,/^нау/i,/^сәу/i,/^мам/i,/^мау/i,/^шіл/i,/^там/i,/^қыр/i,/^қаз/i,/^қар/i,/^жел/i],any:[/^қ/i,/^а/i,/^н/i,/^с/i,/^м/i,/^м/i,/^ш/i,/^т/i,/^қ/i,/^қ/i,/^қ/i,/^ж/i]},defaultParseWidth:"any"}),day:(0,a.default)({matchPatterns:{narrow:/^(ж|д|с|с|б|ж|с)/i,short:/^(жс|дс|сс|ср|бс|жм|сб)/i,wide:/^(жексенбі|дүйсенбі|сейсенбі|сәрсенбі|бейсенбі|жұма|сенбі)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ж/i,/^д/i,/^с/i,/^с/i,/^б/i,/^ж/i,/^с/i],short:[/^жс/i,/^дс/i,/^сс/i,/^ср/i,/^бс/i,/^жм/i,/^сб/i],any:[/^ж[ек]/i,/^д[үй]/i,/^сe[й]/i,/^сә[р]/i,/^б[ей]/i,/^ж[ұм]/i,/^се[н]/i]},defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:{narrow:/^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,wide:/^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,any:/^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^ТД/i,pm:/^ТК/i,midnight:/^түн орта/i,noon:/^күндіз/i,morning:/таң/i,afternoon:/түс/i,evening:/кеш/i,night:/түн/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},HyFC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var n=t||{},i=n.width?String(n.width):e.defaultWidth;return e.formats[i]||e.formats[e.defaultWidth]}},e.exports=t.default},LP0B:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},QXA5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){(0,a.default)(2,arguments);var u=(0,i.default)(e,n),r=(0,i.default)(t,n);return u.getTime()===r.getTime()};var i=u(n("cBpt")),a=u(n("YGjY"));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},YGjY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+e>1?"s":" required, but only "+t.length+" present")},e.exports=t.default},cBpt:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,u.default)(1,arguments);var n=t||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,l=null==o?0:(0,i.default)(o),s=null==n.weekStartsOn?l:(0,i.default)(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=(0,a.default)(e),c=d.getUTCDay(),f=(c<s?7:0)+c-s;return d.setUTCDate(d.getUTCDate()-f),d.setUTCHours(0,0,0,0),d};var i=r(n("LP0B")),a=r(n("2Oix")),u=r(n("YGjY"));function r(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},loZk:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var i=String(t),a=n||{},u=i.match(e.matchPattern);if(!u)return null;var r=u[0],o=i.match(e.parsePattern);if(!o)return null;var l=e.valueCallback?e.valueCallback(o[0]):o[0];return{value:l=a.valueCallback?a.valueCallback(l):l,rest:i.slice(r.length)}}},e.exports=t.default},phs0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,i){var a=o[e];if("function"==typeof a)return a(t,n,i);return a};var i,a=(i=n("QXA5"))&&i.__esModule?i:{default:i};var u=["жексенбіде","дүйсенбіде","сейсенбіде","сәрсенбіде","бейсенбіде","жұмада","сенбіде"];function r(e){return"'"+u[e]+" сағат' p'-де'"}var o={lastWeek:function(e,t,n){var i=e.getUTCDay();return(0,a.default)(e,t,n)?r(i):function(e){return"'өткен "+u[e]+" сағат' p'-де'"}(i)},yesterday:"'кеше сағат' p'-де'",today:"'бүгін сағат' p'-де'",tomorrow:"'ертең сағат' p'-де'",nextWeek:function(e,t,n){var i=e.getUTCDay();return(0,a.default)(e,t,n)?r(i):function(e){return"'келесі "+u[e]+" сағат' p'-де'"}(i)},other:"P"};e.exports=t.default},rwOc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var i,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,r=a.width?String(a.width):u;i=e.formattingValues[r]||e.formattingValues[u]}else{var o=e.defaultWidth,l=a.width?String(a.width):e.defaultWidth;i=e.values[l]||e.values[o]}return i[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},sCib:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var i=String(t),a=n||{},u=a.width,r=u&&e.matchPatterns[u]||e.matchPatterns[e.defaultMatchWidth],o=i.match(r);if(!o)return null;var l,s=o[0],d=u&&e.parsePatterns[u]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(d,(function(e){return e.test(i)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(d,(function(e){return e.test(i)})),l=e.valueCallback?e.valueCallback(l):l,{value:l=a.valueCallback?a.valueCallback(l):l,rest:i.slice(s.length)}}},e.exports=t.default},uI5M:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=(i=n("HyFC"))&&i.__esModule?i:{default:i};var u={date:(0,a.default)({formats:{full:"EEEE, do MMMM y 'ж.'",long:"do MMMM y 'ж.'",medium:"d MMM y 'ж.'",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:(0,a.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,a.default)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})};t.default=u,e.exports=t.default},wMoF:function(e,t,n){"use strict";function i(e,t){if(void 0!==e.one&&1===t)return e.one;var n=t%10,i=t%100;return 1===n&&11!==i?e.singularNominative.replace("{{count}}",t):n>=2&&n<=4&&(i<10||i>20)?e.singularGenitive.replace("{{count}}",t):e.pluralGenitive.replace("{{count}}",t)}function a(e){return function(t,n){return n.addSuffix?n.comparison>0?e.future?i(e.future,t):i(e.regular,t)+" кейін":e.past?i(e.past,t):i(e.regular,t)+" бұрын":i(e.regular,t)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return n=n||{},u[e](t,n)};var u={lessThanXSeconds:a({regular:{one:"1 секундтан аз",singularNominative:"{{count}} секундтан аз",singularGenitive:"{{count}} секундтан аз",pluralGenitive:"{{count}} секундтан аз"},future:{one:"бір секундтан кейін",singularNominative:"{{count}} секундтан кейін",singularGenitive:"{{count}} секундтан кейін",pluralGenitive:"{{count}} секундтан кейін"}}),xSeconds:a({regular:{singularNominative:"{{count}} секунд",singularGenitive:"{{count}} секунд",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунд бұрын",singularGenitive:"{{count}} секунд бұрын",pluralGenitive:"{{count}} секунд бұрын"},future:{singularNominative:"{{count}} секундтан кейін",singularGenitive:"{{count}} секундтан кейін",pluralGenitive:"{{count}} секундтан кейін"}}),halfAMinute:function(e,t){return t.addSuffix?t.comparison>0?"жарты минут ішінде":"жарты минут бұрын":"жарты минут"},lessThanXMinutes:a({regular:{one:"1 минуттан аз",singularNominative:"{{count}} минуттан аз",singularGenitive:"{{count}} минуттан аз",pluralGenitive:"{{count}} минуттан аз"},future:{one:"минуттан кем ",singularNominative:"{{count}} минуттан кем",singularGenitive:"{{count}} минуттан кем",pluralGenitive:"{{count}} минуттан кем"}}),xMinutes:a({regular:{singularNominative:"{{count}} минут",singularGenitive:"{{count}} минут",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минут бұрын",singularGenitive:"{{count}} минут бұрын",pluralGenitive:"{{count}} минут бұрын"},future:{singularNominative:"{{count}} минуттан кейін",singularGenitive:"{{count}} минуттан кейін",pluralGenitive:"{{count}} минуттан кейін"}}),aboutXHours:a({regular:{singularNominative:"шамамен {{count}} сағат",singularGenitive:"шамамен {{count}} сағат",pluralGenitive:"шамамен {{count}} сағат"},future:{singularNominative:"шамамен {{count}} сағаттан кейін",singularGenitive:"шамамен {{count}} сағаттан кейін",pluralGenitive:"шамамен {{count}} сағаттан кейін"}}),xHours:a({regular:{singularNominative:"{{count}} сағат",singularGenitive:"{{count}} сағат",pluralGenitive:"{{count}} сағат"}}),xDays:a({regular:{singularNominative:"{{count}} күн",singularGenitive:"{{count}} күн",pluralGenitive:"{{count}} күн"},future:{singularNominative:"{{count}} күннен кейін",singularGenitive:"{{count}} күннен кейін",pluralGenitive:"{{count}} күннен кейін"}}),aboutXMonths:a({regular:{singularNominative:"шамамен {{count}} ай",singularGenitive:"шамамен {{count}} ай",pluralGenitive:"шамамен {{count}} ай"},future:{singularNominative:"шамамен {{count}} айдан кейін",singularGenitive:"шамамен {{count}} айдан кейін",pluralGenitive:"шамамен {{count}} айдан кейін"}}),xMonths:a({regular:{singularNominative:"{{count}} ай",singularGenitive:"{{count}} ай",pluralGenitive:"{{count}} ай"}}),aboutXYears:a({regular:{singularNominative:"шамамен {{count}} жыл",singularGenitive:"шамамен {{count}} жыл",pluralGenitive:"шамамен {{count}} жыл"},future:{singularNominative:"шамамен {{count}} жылдан кейін",singularGenitive:"шамамен {{count}} жылдан кейін",pluralGenitive:"шамамен {{count}} жылдан кейін"}}),xYears:a({regular:{singularNominative:"{{count}} жыл",singularGenitive:"{{count}} жыл",pluralGenitive:"{{count}} жыл"},future:{singularNominative:"{{count}} жылдан кейін",singularGenitive:"{{count}} жылдан кейін",pluralGenitive:"{{count}} жылдан кейін"}}),overXYears:a({regular:{singularNominative:"{{count}} жылдан астам",singularGenitive:"{{count}} жылдан астам",pluralGenitive:"{{count}} жылдан астам"},future:{singularNominative:"{{count}} жылдан астам",singularGenitive:"{{count}} жылдан астам",pluralGenitive:"{{count}} жылдан астам"}}),almostXYears:a({regular:{singularNominative:"{{count}} жылға жақын",singularGenitive:"{{count}} жылға жақын",pluralGenitive:"{{count}} жылға жақын"},future:{singularNominative:"{{count}} жылдан кейін",singularGenitive:"{{count}} жылдан кейін",pluralGenitive:"{{count}} жылдан кейін"}})};e.exports=t.default},zGPi:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n("wMoF")),a=l(n("uI5M")),u=l(n("phs0")),r=l(n("3J9E")),o=l(n("7nJJ"));function l(e){return e&&e.__esModule?e:{default:e}}var s={code:"kk",formatDistance:i.default,formatLong:a.default,formatRelative:u.default,localize:r.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=s,e.exports=t.default}}]);
//# sourceMappingURL=6.16a9801c.chunk.js.map