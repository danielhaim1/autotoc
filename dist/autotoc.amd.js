/*!
 * @danielhaim/autotoc - v1.2.0 - 2024-03-15
 * git+https://github.com/danielhaim1/autotoc.git
 * Copyright (c) 2024 Daniel Haim, Licensed MIT
 */(()=>{var e={808:(e,t,r)=>{"use strict";r.r(t);var n=r(748);(e=r.hmd(e)).exports&&(e.exports={modulate:n.v}),"object"==typeof window&&(window.modulate=n.v)},748:(e,t,r)=>{"use strict";function n(e,t,r=!1,n=null,o=100,i=null){if("function"!=typeof e)throw new TypeError("Expected a function for the first parameter");if("number"!=typeof t||isNaN(t))throw new TypeError("Expected a number for the second parameter");if("number"!=typeof t||isNaN(t))throw new TypeError("Expected a number for the second parameter (wait)");if("boolean"!=typeof r)throw new TypeError("Expected a boolean for the third parameter");if("number"!=typeof o||isNaN(o))throw new TypeError("Expected a number for the fifth parameter");if(null!==i&&("number"!=typeof i||isNaN(i)))throw new TypeError("Expected a number for the sixth parameter");if(null!==i&&i<t)throw new TypeError("Expected the sixth parameter to be greater than or equal to the second parameter");let a,c=[],s=new Map,l=0,h=!1;const u=function(...u){return new Promise((h=>{function p(e=(()=>{}),t=0,r=!1,n=0){const o=Date.now()-n;if("function"!=typeof e)return Promise.reject(new Error("Expected a function for the first parameter"));if("number"!=typeof t||isNaN(t)||t<=0)return Promise.reject(new Error("Expected a number for the second parameter"));if("number"!=typeof o||isNaN(o)||o<0)return Promise.reject(new Error("Invalid timeSinceLast value"));if(r||o>=t||null!==i&&o>=i)return e(),Promise.resolve(Date.now());const a=t-o;return a<=0?Promise.resolve(Date.now()):new Promise((e=>setTimeout((()=>e(Date.now())),a)))}const f=r&&!a,d=Date.now()-l,m=null!==i&&d>=i;if(clearTimeout(a),a=m?setTimeout(p,d):setTimeout((()=>p(e,t,f,l)),null!==i?i:t),f&&!m){const t=e.apply(n,u);c.push(t),s.set(JSON.stringify(u),t),s.size>o&&s.delete(s.keys().next().value),h(t),l=Date.now()}const y=s.get(JSON.stringify(u));void 0!==y&&h(y)})).finally((()=>{h&&(c=[],s.clear()),h=!1}))};return u.cancel=function(){clearTimeout(a),h=!0},u.result=function(){return c},u}r.d(t,{v:()=>n}),(e=r.hmd(e)).exports&&(e.exports={modulate:n})},851:(e,t,r)=>{"use strict";r.r(t),r.d(t,{slugify:()=>o});const n=[["ß","ss"],["ẞ","Ss"],["ä","ae"],["Ä","Ae"],["ö","oe"],["Ö","Oe"],["ü","ue"],["Ü","Ue"],["À","A"],["Á","A"],["Â","A"],["Ã","A"],["Ä","Ae"],["Å","A"],["Æ","AE"],["Ç","C"],["È","E"],["É","E"],["Ê","E"],["Ë","E"],["Ì","I"],["Í","I"],["Î","I"],["Ï","I"],["Ð","D"],["Ñ","N"],["Ò","O"],["Ó","O"],["Ô","O"],["Õ","O"],["Ö","Oe"],["Ő","O"],["Ø","O"],["Ù","U"],["Ú","U"],["Û","U"],["Ü","Ue"],["Ű","U"],["Ý","Y"],["Þ","TH"],["ß","ss"],["à","a"],["á","a"],["â","a"],["ã","a"],["ä","ae"],["å","a"],["æ","ae"],["ç","c"],["è","e"],["é","e"],["ê","e"],["ë","e"],["ì","i"],["í","i"],["î","i"],["ï","i"],["ð","d"],["ñ","n"],["ò","o"],["ó","o"],["ô","o"],["õ","o"],["ö","oe"],["ő","o"],["ø","o"],["ù","u"],["ú","u"],["û","u"],["ü","ue"],["ű","u"],["ý","y"],["þ","th"],["ÿ","y"],["ẞ","SS"],["à","a"],["À","A"],["á","a"],["Á","A"],["â","a"],["Â","A"],["ã","a"],["Ã","A"],["è","e"],["È","E"],["é","e"],["É","E"],["ê","e"],["Ê","E"],["ì","i"],["Ì","I"],["í","i"],["Í","I"],["ò","o"],["Ò","O"],["ó","o"],["Ó","O"],["ô","o"],["Ô","O"],["õ","o"],["Õ","O"],["ù","u"],["Ù","U"],["ú","u"],["Ú","U"],["ý","y"],["Ý","Y"],["ă","a"],["Ă","A"],["Đ","D"],["đ","d"],["ĩ","i"],["Ĩ","I"],["ũ","u"],["Ũ","U"],["ơ","o"],["Ơ","O"],["ư","u"],["Ư","U"],["ạ","a"],["Ạ","A"],["ả","a"],["Ả","A"],["ấ","a"],["Ấ","A"],["ầ","a"],["Ầ","A"],["ẩ","a"],["Ẩ","A"],["ẫ","a"],["Ẫ","A"],["ậ","a"],["Ậ","A"],["ắ","a"],["Ắ","A"],["ằ","a"],["Ằ","A"],["ẳ","a"],["Ẳ","A"],["ẵ","a"],["Ẵ","A"],["ặ","a"],["Ặ","A"],["ẹ","e"],["Ẹ","E"],["ẻ","e"],["Ẻ","E"],["ẽ","e"],["Ẽ","E"],["ế","e"],["Ế","E"],["ề","e"],["Ề","E"],["ể","e"],["Ể","E"],["ễ","e"],["Ễ","E"],["ệ","e"],["Ệ","E"],["ỉ","i"],["Ỉ","I"],["ị","i"],["Ị","I"],["ọ","o"],["Ọ","O"],["ỏ","o"],["Ỏ","O"],["ố","o"],["Ố","O"],["ồ","o"],["Ồ","O"],["ổ","o"],["Ổ","O"],["ỗ","o"],["Ỗ","O"],["ộ","o"],["Ộ","O"],["ớ","o"],["Ớ","O"],["ờ","o"],["Ờ","O"],["ở","o"],["Ở","O"],["ỡ","o"],["Ỡ","O"],["ợ","o"],["Ợ","O"],["ụ","u"],["Ụ","U"],["ủ","u"],["Ủ","U"],["ứ","u"],["Ứ","U"],["ừ","u"],["Ừ","U"],["ử","u"],["Ử","U"],["ữ","u"],["Ữ","U"],["ự","u"],["Ự","U"],["ỳ","y"],["Ỳ","Y"],["ỵ","y"],["Ỵ","Y"],["ỷ","y"],["Ỷ","Y"],["ỹ","y"],["Ỹ","Y"],["ء","e"],["آ","a"],["أ","a"],["ؤ","w"],["إ","i"],["ئ","y"],["ا","a"],["ب","b"],["ة","t"],["ت","t"],["ث","th"],["ج","j"],["ح","h"],["خ","kh"],["د","d"],["ذ","dh"],["ر","r"],["ز","z"],["س","s"],["ش","sh"],["ص","s"],["ض","d"],["ط","t"],["ظ","z"],["ع","e"],["غ","gh"],["ـ","_"],["ف","f"],["ق","q"],["ك","k"],["ل","l"],["م","m"],["ن","n"],["ه","h"],["و","w"],["ى","a"],["ي","y"],["َ‎","a"],["ُ","u"],["ِ‎","i"],["٠","0"],["١","1"],["٢","2"],["٣","3"],["٤","4"],["٥","5"],["٦","6"],["٧","7"],["٨","8"],["٩","9"],["چ","ch"],["ک","k"],["گ","g"],["پ","p"],["ژ","zh"],["ی","y"],["۰","0"],["۱","1"],["۲","2"],["۳","3"],["۴","4"],["۵","5"],["۶","6"],["۷","7"],["۸","8"],["۹","9"],["ټ","p"],["ځ","z"],["څ","c"],["ډ","d"],["ﺫ","d"],["ﺭ","r"],["ړ","r"],["ﺯ","z"],["ږ","g"],["ښ","x"],["ګ","g"],["ڼ","n"],["ۀ","e"],["ې","e"],["ۍ","ai"],["ٹ","t"],["ڈ","d"],["ڑ","r"],["ں","n"],["ہ","h"],["ھ","h"],["ے","e"],["А","A"],["а","a"],["Б","B"],["б","b"],["В","V"],["в","v"],["Г","G"],["г","g"],["Д","D"],["д","d"],["ъе","ye"],["Ъе","Ye"],["ъЕ","yE"],["ЪЕ","YE"],["Е","E"],["е","e"],["Ё","Yo"],["ё","yo"],["Ж","Zh"],["ж","zh"],["З","Z"],["з","z"],["И","I"],["и","i"],["ый","iy"],["Ый","Iy"],["ЫЙ","IY"],["ыЙ","iY"],["Й","Y"],["й","y"],["К","K"],["к","k"],["Л","L"],["л","l"],["М","M"],["м","m"],["Н","N"],["н","n"],["О","O"],["о","o"],["П","P"],["п","p"],["Р","R"],["р","r"],["С","S"],["с","s"],["Т","T"],["т","t"],["У","U"],["у","u"],["Ф","F"],["ф","f"],["Х","Kh"],["х","kh"],["Ц","Ts"],["ц","ts"],["Ч","Ch"],["ч","ch"],["Ш","Sh"],["ш","sh"],["Щ","Sch"],["щ","sch"],["Ъ",""],["ъ",""],["Ы","Y"],["ы","y"],["Ь",""],["ь",""],["Э","E"],["э","e"],["Ю","Yu"],["ю","yu"],["Я","Ya"],["я","ya"],["ă","a"],["Ă","A"],["ș","s"],["Ș","S"],["ț","t"],["Ț","T"],["ţ","t"],["Ţ","T"],["ş","s"],["Ş","S"],["ç","c"],["Ç","C"],["ğ","g"],["Ğ","G"],["ı","i"],["İ","I"],["ա","a"],["Ա","A"],["բ","b"],["Բ","B"],["գ","g"],["Գ","G"],["դ","d"],["Դ","D"],["ե","ye"],["Ե","Ye"],["զ","z"],["Զ","Z"],["է","e"],["Է","E"],["ը","y"],["Ը","Y"],["թ","t"],["Թ","T"],["ժ","zh"],["Ժ","Zh"],["ի","i"],["Ի","I"],["լ","l"],["Լ","L"],["խ","kh"],["Խ","Kh"],["ծ","ts"],["Ծ","Ts"],["կ","k"],["Կ","K"],["հ","h"],["Հ","H"],["ձ","dz"],["Ձ","Dz"],["ղ","gh"],["Ղ","Gh"],["ճ","tch"],["Ճ","Tch"],["մ","m"],["Մ","M"],["յ","y"],["Յ","Y"],["ն","n"],["Ն","N"],["շ","sh"],["Շ","Sh"],["ո","vo"],["Ո","Vo"],["չ","ch"],["Չ","Ch"],["պ","p"],["Պ","P"],["ջ","j"],["Ջ","J"],["ռ","r"],["Ռ","R"],["ս","s"],["Ս","S"],["վ","v"],["Վ","V"],["տ","t"],["Տ","T"],["ր","r"],["Ր","R"],["ց","c"],["Ց","C"],["ու","u"],["ՈՒ","U"],["Ու","U"],["փ","p"],["Փ","P"],["ք","q"],["Ք","Q"],["օ","o"],["Օ","O"],["ֆ","f"],["Ֆ","F"],["և","yev"],["ა","a"],["ბ","b"],["გ","g"],["დ","d"],["ე","e"],["ვ","v"],["ზ","z"],["თ","t"],["ი","i"],["კ","k"],["ლ","l"],["მ","m"],["ნ","n"],["ო","o"],["პ","p"],["ჟ","zh"],["რ","r"],["ს","s"],["ტ","t"],["უ","u"],["ფ","ph"],["ქ","q"],["ღ","gh"],["ყ","k"],["შ","sh"],["ჩ","ch"],["ც","ts"],["ძ","dz"],["წ","ts"],["ჭ","tch"],["ხ","kh"],["ჯ","j"],["ჰ","h"],["č","c"],["ď","d"],["ě","e"],["ň","n"],["ř","r"],["š","s"],["ť","t"],["ů","u"],["ž","z"],["Č","C"],["Ď","D"],["Ě","E"],["Ň","N"],["Ř","R"],["Š","S"],["Ť","T"],["Ů","U"],["Ž","Z"],["ހ","h"],["ށ","sh"],["ނ","n"],["ރ","r"],["ބ","b"],["ޅ","lh"],["ކ","k"],["އ","a"],["ވ","v"],["މ","m"],["ފ","f"],["ދ","dh"],["ތ","th"],["ލ","l"],["ގ","g"],["ޏ","gn"],["ސ","s"],["ޑ","d"],["ޒ","z"],["ޓ","t"],["ޔ","y"],["ޕ","p"],["ޖ","j"],["ޗ","ch"],["ޘ","tt"],["ޙ","hh"],["ޚ","kh"],["ޛ","th"],["ޜ","z"],["ޝ","sh"],["ޞ","s"],["ޟ","d"],["ޠ","t"],["ޡ","z"],["ޢ","a"],["ޣ","gh"],["ޤ","q"],["ޥ","w"],["ަ","a"],["ާ","aa"],["ި","i"],["ީ","ee"],["ު","u"],["ޫ","oo"],["ެ","e"],["ޭ","ey"],["ޮ","o"],["ޯ","oa"],["ް",""],["α","a"],["β","v"],["γ","g"],["δ","d"],["ε","e"],["ζ","z"],["η","i"],["θ","th"],["ι","i"],["κ","k"],["λ","l"],["μ","m"],["ν","n"],["ξ","ks"],["ο","o"],["π","p"],["ρ","r"],["σ","s"],["τ","t"],["υ","y"],["φ","f"],["χ","x"],["ψ","ps"],["ω","o"],["ά","a"],["έ","e"],["ί","i"],["ό","o"],["ύ","y"],["ή","i"],["ώ","o"],["ς","s"],["ϊ","i"],["ΰ","y"],["ϋ","y"],["ΐ","i"],["Α","A"],["Β","B"],["Γ","G"],["Δ","D"],["Ε","E"],["Ζ","Z"],["Η","I"],["Θ","TH"],["Ι","I"],["Κ","K"],["Λ","L"],["Μ","M"],["Ν","N"],["Ξ","KS"],["Ο","O"],["Π","P"],["Ρ","R"],["Σ","S"],["Τ","T"],["Υ","Y"],["Φ","F"],["Χ","X"],["Ψ","PS"],["Ω","O"],["Ά","A"],["Έ","E"],["Ί","I"],["Ό","O"],["Ύ","Y"],["Ή","I"],["Ώ","O"],["Ϊ","I"],["Ϋ","Y"],["ā","a"],["ē","e"],["ģ","g"],["ī","i"],["ķ","k"],["ļ","l"],["ņ","n"],["ū","u"],["Ā","A"],["Ē","E"],["Ģ","G"],["Ī","I"],["Ķ","K"],["Ļ","L"],["Ņ","N"],["Ū","U"],["č","c"],["š","s"],["ž","z"],["Č","C"],["Š","S"],["Ž","Z"],["ą","a"],["č","c"],["ę","e"],["ė","e"],["į","i"],["š","s"],["ų","u"],["ū","u"],["ž","z"],["Ą","A"],["Č","C"],["Ę","E"],["Ė","E"],["Į","I"],["Š","S"],["Ų","U"],["Ū","U"],["Ќ","Kj"],["ќ","kj"],["Љ","Lj"],["љ","lj"],["Њ","Nj"],["њ","nj"],["Тс","Ts"],["тс","ts"],["ą","a"],["ć","c"],["ę","e"],["ł","l"],["ń","n"],["ś","s"],["ź","z"],["ż","z"],["Ą","A"],["Ć","C"],["Ę","E"],["Ł","L"],["Ń","N"],["Ś","S"],["Ź","Z"],["Ż","Z"],["Є","Ye"],["І","I"],["Ї","Yi"],["Ґ","G"],["є","ye"],["і","i"],["ї","yi"],["ґ","g"],["Ĳ","IJ"],["ĳ","ij"],["¢","c"],["¥","Y"],["߿","b"],["৳","t"],["૱","Bo"],["฿","B"],["₠","CE"],["₡","C"],["₢","Cr"],["₣","F"],["₥","m"],["₦","N"],["₧","Pt"],["₨","Rs"],["₩","W"],["₫","s"],["€","E"],["₭","K"],["₮","T"],["₯","Dp"],["₰","S"],["₱","P"],["₲","G"],["₳","A"],["₴","S"],["₵","C"],["₶","tt"],["₷","S"],["₸","T"],["₹","R"],["₺","L"],["₽","P"],["₿","B"],["﹩","$"],["￠","c"],["￥","Y"],["￦","W"],["𝐀","A"],["𝐁","B"],["𝐂","C"],["𝐃","D"],["𝐄","E"],["𝐅","F"],["𝐆","G"],["𝐇","H"],["𝐈","I"],["𝐉","J"],["𝐊","K"],["𝐋","L"],["𝐌","M"],["𝐍","N"],["𝐎","O"],["𝐏","P"],["𝐐","Q"],["𝐑","R"],["𝐒","S"],["𝐓","T"],["𝐔","U"],["𝐕","V"],["𝐖","W"],["𝐗","X"],["𝐘","Y"],["𝐙","Z"],["𝐚","a"],["𝐛","b"],["𝐜","c"],["𝐝","d"],["𝐞","e"],["𝐟","f"],["𝐠","g"],["𝐡","h"],["𝐢","i"],["𝐣","j"],["𝐤","k"],["𝐥","l"],["𝐦","m"],["𝐧","n"],["𝐨","o"],["𝐩","p"],["𝐪","q"],["𝐫","r"],["𝐬","s"],["𝐭","t"],["𝐮","u"],["𝐯","v"],["𝐰","w"],["𝐱","x"],["𝐲","y"],["𝐳","z"],["𝐴","A"],["𝐵","B"],["𝐶","C"],["𝐷","D"],["𝐸","E"],["𝐹","F"],["𝐺","G"],["𝐻","H"],["𝐼","I"],["𝐽","J"],["𝐾","K"],["𝐿","L"],["𝑀","M"],["𝑁","N"],["𝑂","O"],["𝑃","P"],["𝑄","Q"],["𝑅","R"],["𝑆","S"],["𝑇","T"],["𝑈","U"],["𝑉","V"],["𝑊","W"],["𝑋","X"],["𝑌","Y"],["𝑍","Z"],["𝑎","a"],["𝑏","b"],["𝑐","c"],["𝑑","d"],["𝑒","e"],["𝑓","f"],["𝑔","g"],["𝑖","i"],["𝑗","j"],["𝑘","k"],["𝑙","l"],["𝑚","m"],["𝑛","n"],["𝑜","o"],["𝑝","p"],["𝑞","q"],["𝑟","r"],["𝑠","s"],["𝑡","t"],["𝑢","u"],["𝑣","v"],["𝑤","w"],["𝑥","x"],["𝑦","y"],["𝑧","z"],["𝑨","A"],["𝑩","B"],["𝑪","C"],["𝑫","D"],["𝑬","E"],["𝑭","F"],["𝑮","G"],["𝑯","H"],["𝑰","I"],["𝑱","J"],["𝑲","K"],["𝑳","L"],["𝑴","M"],["𝑵","N"],["𝑶","O"],["𝑷","P"],["𝑸","Q"],["𝑹","R"],["𝑺","S"],["𝑻","T"],["𝑼","U"],["𝑽","V"],["𝑾","W"],["𝑿","X"],["𝒀","Y"],["𝒁","Z"],["𝒂","a"],["𝒃","b"],["𝒄","c"],["𝒅","d"],["𝒆","e"],["𝒇","f"],["𝒈","g"],["𝒉","h"],["𝒊","i"],["𝒋","j"],["𝒌","k"],["𝒍","l"],["𝒎","m"],["𝒏","n"],["𝒐","o"],["𝒑","p"],["𝒒","q"],["𝒓","r"],["𝒔","s"],["𝒕","t"],["𝒖","u"],["𝒗","v"],["𝒘","w"],["𝒙","x"],["𝒚","y"],["𝒛","z"],["𝒜","A"],["𝒞","C"],["𝒟","D"],["𝒢","g"],["𝒥","J"],["𝒦","K"],["𝒩","N"],["𝒪","O"],["𝒫","P"],["𝒬","Q"],["𝒮","S"],["𝒯","T"],["𝒰","U"],["𝒱","V"],["𝒲","W"],["𝒳","X"],["𝒴","Y"],["𝒵","Z"],["𝒶","a"],["𝒷","b"],["𝒸","c"],["𝒹","d"],["𝒻","f"],["𝒽","h"],["𝒾","i"],["𝒿","j"],["𝓀","h"],["𝓁","l"],["𝓂","m"],["𝓃","n"],["𝓅","p"],["𝓆","q"],["𝓇","r"],["𝓈","s"],["𝓉","t"],["𝓊","u"],["𝓋","v"],["𝓌","w"],["𝓍","x"],["𝓎","y"],["𝓏","z"],["𝓐","A"],["𝓑","B"],["𝓒","C"],["𝓓","D"],["𝓔","E"],["𝓕","F"],["𝓖","G"],["𝓗","H"],["𝓘","I"],["𝓙","J"],["𝓚","K"],["𝓛","L"],["𝓜","M"],["𝓝","N"],["𝓞","O"],["𝓟","P"],["𝓠","Q"],["𝓡","R"],["𝓢","S"],["𝓣","T"],["𝓤","U"],["𝓥","V"],["𝓦","W"],["𝓧","X"],["𝓨","Y"],["𝓩","Z"],["𝓪","a"],["𝓫","b"],["𝓬","c"],["𝓭","d"],["𝓮","e"],["𝓯","f"],["𝓰","g"],["𝓱","h"],["𝓲","i"],["𝓳","j"],["𝓴","k"],["𝓵","l"],["𝓶","m"],["𝓷","n"],["𝓸","o"],["𝓹","p"],["𝓺","q"],["𝓻","r"],["𝓼","s"],["𝓽","t"],["𝓾","u"],["𝓿","v"],["𝔀","w"],["𝔁","x"],["𝔂","y"],["𝔃","z"],["𝔄","A"],["𝔅","B"],["𝔇","D"],["𝔈","E"],["𝔉","F"],["𝔊","G"],["𝔍","J"],["𝔎","K"],["𝔏","L"],["𝔐","M"],["𝔑","N"],["𝔒","O"],["𝔓","P"],["𝔔","Q"],["𝔖","S"],["𝔗","T"],["𝔘","U"],["𝔙","V"],["𝔚","W"],["𝔛","X"],["𝔜","Y"],["𝔞","a"],["𝔟","b"],["𝔠","c"],["𝔡","d"],["𝔢","e"],["𝔣","f"],["𝔤","g"],["𝔥","h"],["𝔦","i"],["𝔧","j"],["𝔨","k"],["𝔩","l"],["𝔪","m"],["𝔫","n"],["𝔬","o"],["𝔭","p"],["𝔮","q"],["𝔯","r"],["𝔰","s"],["𝔱","t"],["𝔲","u"],["𝔳","v"],["𝔴","w"],["𝔵","x"],["𝔶","y"],["𝔷","z"],["𝔸","A"],["𝔹","B"],["𝔻","D"],["𝔼","E"],["𝔽","F"],["𝔾","G"],["𝕀","I"],["𝕁","J"],["𝕂","K"],["𝕃","L"],["𝕄","M"],["𝕆","N"],["𝕊","S"],["𝕋","T"],["𝕌","U"],["𝕍","V"],["𝕎","W"],["𝕏","X"],["𝕐","Y"],["𝕒","a"],["𝕓","b"],["𝕔","c"],["𝕕","d"],["𝕖","e"],["𝕗","f"],["𝕘","g"],["𝕙","h"],["𝕚","i"],["𝕛","j"],["𝕜","k"],["𝕝","l"],["𝕞","m"],["𝕟","n"],["𝕠","o"],["𝕡","p"],["𝕢","q"],["𝕣","r"],["𝕤","s"],["𝕥","t"],["𝕦","u"],["𝕧","v"],["𝕨","w"],["𝕩","x"],["𝕪","y"],["𝕫","z"],["𝕬","A"],["𝕭","B"],["𝕮","C"],["𝕯","D"],["𝕰","E"],["𝕱","F"],["𝕲","G"],["𝕳","H"],["𝕴","I"],["𝕵","J"],["𝕶","K"],["𝕷","L"],["𝕸","M"],["𝕹","N"],["𝕺","O"],["𝕻","P"],["𝕼","Q"],["𝕽","R"],["𝕾","S"],["𝕿","T"],["𝖀","U"],["𝖁","V"],["𝖂","W"],["𝖃","X"],["𝖄","Y"],["𝖅","Z"],["𝖆","a"],["𝖇","b"],["𝖈","c"],["𝖉","d"],["𝖊","e"],["𝖋","f"],["𝖌","g"],["𝖍","h"],["𝖎","i"],["𝖏","j"],["𝖐","k"],["𝖑","l"],["𝖒","m"],["𝖓","n"],["𝖔","o"],["𝖕","p"],["𝖖","q"],["𝖗","r"],["𝖘","s"],["𝖙","t"],["𝖚","u"],["𝖛","v"],["𝖜","w"],["𝖝","x"],["𝖞","y"],["𝖟","z"],["𝖠","A"],["𝖡","B"],["𝖢","C"],["𝖣","D"],["𝖤","E"],["𝖥","F"],["𝖦","G"],["𝖧","H"],["𝖨","I"],["𝖩","J"],["𝖪","K"],["𝖫","L"],["𝖬","M"],["𝖭","N"],["𝖮","O"],["𝖯","P"],["𝖰","Q"],["𝖱","R"],["𝖲","S"],["𝖳","T"],["𝖴","U"],["𝖵","V"],["𝖶","W"],["𝖷","X"],["𝖸","Y"],["𝖹","Z"],["𝖺","a"],["𝖻","b"],["𝖼","c"],["𝖽","d"],["𝖾","e"],["𝖿","f"],["𝗀","g"],["𝗁","h"],["𝗂","i"],["𝗃","j"],["𝗄","k"],["𝗅","l"],["𝗆","m"],["𝗇","n"],["𝗈","o"],["𝗉","p"],["𝗊","q"],["𝗋","r"],["𝗌","s"],["𝗍","t"],["𝗎","u"],["𝗏","v"],["𝗐","w"],["𝗑","x"],["𝗒","y"],["𝗓","z"],["𝗔","A"],["𝗕","B"],["𝗖","C"],["𝗗","D"],["𝗘","E"],["𝗙","F"],["𝗚","G"],["𝗛","H"],["𝗜","I"],["𝗝","J"],["𝗞","K"],["𝗟","L"],["𝗠","M"],["𝗡","N"],["𝗢","O"],["𝗣","P"],["𝗤","Q"],["𝗥","R"],["𝗦","S"],["𝗧","T"],["𝗨","U"],["𝗩","V"],["𝗪","W"],["𝗫","X"],["𝗬","Y"],["𝗭","Z"],["𝗮","a"],["𝗯","b"],["𝗰","c"],["𝗱","d"],["𝗲","e"],["𝗳","f"],["𝗴","g"],["𝗵","h"],["𝗶","i"],["𝗷","j"],["𝗸","k"],["𝗹","l"],["𝗺","m"],["𝗻","n"],["𝗼","o"],["𝗽","p"],["𝗾","q"],["𝗿","r"],["𝘀","s"],["𝘁","t"],["𝘂","u"],["𝘃","v"],["𝘄","w"],["𝘅","x"],["𝘆","y"],["𝘇","z"],["𝘈","A"],["𝘉","B"],["𝘊","C"],["𝘋","D"],["𝘌","E"],["𝘍","F"],["𝘎","G"],["𝘏","H"],["𝘐","I"],["𝘑","J"],["𝘒","K"],["𝘓","L"],["𝘔","M"],["𝘕","N"],["𝘖","O"],["𝘗","P"],["𝘘","Q"],["𝘙","R"],["𝘚","S"],["𝘛","T"],["𝘜","U"],["𝘝","V"],["𝘞","W"],["𝘟","X"],["𝘠","Y"],["𝘡","Z"],["𝘢","a"],["𝘣","b"],["𝘤","c"],["𝘥","d"],["𝘦","e"],["𝘧","f"],["𝘨","g"],["𝘩","h"],["𝘪","i"],["𝘫","j"],["𝘬","k"],["𝘭","l"],["𝘮","m"],["𝘯","n"],["𝘰","o"],["𝘱","p"],["𝘲","q"],["𝘳","r"],["𝘴","s"],["𝘵","t"],["𝘶","u"],["𝘷","v"],["𝘸","w"],["𝘹","x"],["𝘺","y"],["𝘻","z"],["𝘼","A"],["𝘽","B"],["𝘾","C"],["𝘿","D"],["𝙀","E"],["𝙁","F"],["𝙂","G"],["𝙃","H"],["𝙄","I"],["𝙅","J"],["𝙆","K"],["𝙇","L"],["𝙈","M"],["𝙉","N"],["𝙊","O"],["𝙋","P"],["𝙌","Q"],["𝙍","R"],["𝙎","S"],["𝙏","T"],["𝙐","U"],["𝙑","V"],["𝙒","W"],["𝙓","X"],["𝙔","Y"],["𝙕","Z"],["𝙖","a"],["𝙗","b"],["𝙘","c"],["𝙙","d"],["𝙚","e"],["𝙛","f"],["𝙜","g"],["𝙝","h"],["𝙞","i"],["𝙟","j"],["𝙠","k"],["𝙡","l"],["𝙢","m"],["𝙣","n"],["𝙤","o"],["𝙥","p"],["𝙦","q"],["𝙧","r"],["𝙨","s"],["𝙩","t"],["𝙪","u"],["𝙫","v"],["𝙬","w"],["𝙭","x"],["𝙮","y"],["𝙯","z"],["𝙰","A"],["𝙱","B"],["𝙲","C"],["𝙳","D"],["𝙴","E"],["𝙵","F"],["𝙶","G"],["𝙷","H"],["𝙸","I"],["𝙹","J"],["𝙺","K"],["𝙻","L"],["𝙼","M"],["𝙽","N"],["𝙾","O"],["𝙿","P"],["𝚀","Q"],["𝚁","R"],["𝚂","S"],["𝚃","T"],["𝚄","U"],["𝚅","V"],["𝚆","W"],["𝚇","X"],["𝚈","Y"],["𝚉","Z"],["𝚊","a"],["𝚋","b"],["𝚌","c"],["𝚍","d"],["𝚎","e"],["𝚏","f"],["𝚐","g"],["𝚑","h"],["𝚒","i"],["𝚓","j"],["𝚔","k"],["𝚕","l"],["𝚖","m"],["𝚗","n"],["𝚘","o"],["𝚙","p"],["𝚚","q"],["𝚛","r"],["𝚜","s"],["𝚝","t"],["𝚞","u"],["𝚟","v"],["𝚠","w"],["𝚡","x"],["𝚢","y"],["𝚣","z"],["𝚤","l"],["𝚥","j"],["𝛢","A"],["𝛣","B"],["𝛤","G"],["𝛥","D"],["𝛦","E"],["𝛧","Z"],["𝛨","I"],["𝛩","TH"],["𝛪","I"],["𝛫","K"],["𝛬","L"],["𝛭","M"],["𝛮","N"],["𝛯","KS"],["𝛰","O"],["𝛱","P"],["𝛲","R"],["𝛳","TH"],["𝛴","S"],["𝛵","T"],["𝛶","Y"],["𝛷","F"],["𝛸","x"],["𝛹","PS"],["𝛺","O"],["𝛻","D"],["𝛼","a"],["𝛽","b"],["𝛾","g"],["𝛿","d"],["𝜀","e"],["𝜁","z"],["𝜂","i"],["𝜃","th"],["𝜄","i"],["𝜅","k"],["𝜆","l"],["𝜇","m"],["𝜈","n"],["𝜉","ks"],["𝜊","o"],["𝜋","p"],["𝜌","r"],["𝜍","s"],["𝜎","s"],["𝜏","t"],["𝜐","y"],["𝜑","f"],["𝜒","x"],["𝜓","ps"],["𝜔","o"],["𝜕","d"],["𝜖","E"],["𝜗","TH"],["𝜘","K"],["𝜙","f"],["𝜚","r"],["𝜛","p"],["𝜜","A"],["𝜝","V"],["𝜞","G"],["𝜟","D"],["𝜠","E"],["𝜡","Z"],["𝜢","I"],["𝜣","TH"],["𝜤","I"],["𝜥","K"],["𝜦","L"],["𝜧","M"],["𝜨","N"],["𝜩","KS"],["𝜪","O"],["𝜫","P"],["𝜬","S"],["𝜭","TH"],["𝜮","S"],["𝜯","T"],["𝜰","Y"],["𝜱","F"],["𝜲","X"],["𝜳","PS"],["𝜴","O"],["𝜵","D"],["𝜶","a"],["𝜷","v"],["𝜸","g"],["𝜹","d"],["𝜺","e"],["𝜻","z"],["𝜼","i"],["𝜽","th"],["𝜾","i"],["𝜿","k"],["𝝀","l"],["𝝁","m"],["𝝂","n"],["𝝃","ks"],["𝝄","o"],["𝝅","p"],["𝝆","r"],["𝝇","s"],["𝝈","s"],["𝝉","t"],["𝝊","y"],["𝝋","f"],["𝝌","x"],["𝝍","ps"],["𝝎","o"],["𝝏","a"],["𝝐","e"],["𝝑","i"],["𝝒","k"],["𝝓","f"],["𝝔","r"],["𝝕","p"],["𝝖","A"],["𝝗","B"],["𝝘","G"],["𝝙","D"],["𝝚","E"],["𝝛","Z"],["𝝜","I"],["𝝝","TH"],["𝝞","I"],["𝝟","K"],["𝝠","L"],["𝝡","M"],["𝝢","N"],["𝝣","KS"],["𝝤","O"],["𝝥","P"],["𝝦","R"],["𝝧","TH"],["𝝨","S"],["𝝩","T"],["𝝪","Y"],["𝝫","F"],["𝝬","X"],["𝝭","PS"],["𝝮","O"],["𝝯","D"],["𝝰","a"],["𝝱","v"],["𝝲","g"],["𝝳","d"],["𝝴","e"],["𝝵","z"],["𝝶","i"],["𝝷","th"],["𝝸","i"],["𝝹","k"],["𝝺","l"],["𝝻","m"],["𝝼","n"],["𝝽","ks"],["𝝾","o"],["𝝿","p"],["𝞀","r"],["𝞁","s"],["𝞂","s"],["𝞃","t"],["𝞄","y"],["𝞅","f"],["𝞆","x"],["𝞇","ps"],["𝞈","o"],["𝞉","a"],["𝞊","e"],["𝞋","i"],["𝞌","k"],["𝞍","f"],["𝞎","r"],["𝞏","p"],["𝞐","A"],["𝞑","V"],["𝞒","G"],["𝞓","D"],["𝞔","E"],["𝞕","Z"],["𝞖","I"],["𝞗","TH"],["𝞘","I"],["𝞙","K"],["𝞚","L"],["𝞛","M"],["𝞜","N"],["𝞝","KS"],["𝞞","O"],["𝞟","P"],["𝞠","S"],["𝞡","TH"],["𝞢","S"],["𝞣","T"],["𝞤","Y"],["𝞥","F"],["𝞦","X"],["𝞧","PS"],["𝞨","O"],["𝞩","D"],["𝞪","av"],["𝞫","g"],["𝞬","d"],["𝞭","e"],["𝞮","z"],["𝞯","i"],["𝞰","i"],["𝞱","th"],["𝞲","i"],["𝞳","k"],["𝞴","l"],["𝞵","m"],["𝞶","n"],["𝞷","ks"],["𝞸","o"],["𝞹","p"],["𝞺","r"],["𝞻","s"],["𝞼","s"],["𝞽","t"],["𝞾","y"],["𝞿","f"],["𝟀","x"],["𝟁","ps"],["𝟂","o"],["𝟃","a"],["𝟄","e"],["𝟅","i"],["𝟆","k"],["𝟇","f"],["𝟈","r"],["𝟉","p"],["𝟊","F"],["𝟋","f"],["⒜","(a)"],["⒝","(b)"],["⒞","(c)"],["⒟","(d)"],["⒠","(e)"],["⒡","(f)"],["⒢","(g)"],["⒣","(h)"],["⒤","(i)"],["⒥","(j)"],["⒦","(k)"],["⒧","(l)"],["⒨","(m)"],["⒩","(n)"],["⒪","(o)"],["⒫","(p)"],["⒬","(q)"],["⒭","(r)"],["⒮","(s)"],["⒯","(t)"],["⒰","(u)"],["⒱","(v)"],["⒲","(w)"],["⒳","(x)"],["⒴","(y)"],["⒵","(z)"],["Ⓐ","(A)"],["Ⓑ","(B)"],["Ⓒ","(C)"],["Ⓓ","(D)"],["Ⓔ","(E)"],["Ⓕ","(F)"],["Ⓖ","(G)"],["Ⓗ","(H)"],["Ⓘ","(I)"],["Ⓙ","(J)"],["Ⓚ","(K)"],["Ⓛ","(L)"],["Ⓝ","(N)"],["Ⓞ","(O)"],["Ⓟ","(P)"],["Ⓠ","(Q)"],["Ⓡ","(R)"],["Ⓢ","(S)"],["Ⓣ","(T)"],["Ⓤ","(U)"],["Ⓥ","(V)"],["Ⓦ","(W)"],["Ⓧ","(X)"],["Ⓨ","(Y)"],["Ⓩ","(Z)"],["ⓐ","(a)"],["ⓑ","(b)"],["ⓒ","(b)"],["ⓓ","(c)"],["ⓔ","(e)"],["ⓕ","(f)"],["ⓖ","(g)"],["ⓗ","(h)"],["ⓘ","(i)"],["ⓙ","(j)"],["ⓚ","(k)"],["ⓛ","(l)"],["ⓜ","(m)"],["ⓝ","(n)"],["ⓞ","(o)"],["ⓟ","(p)"],["ⓠ","(q)"],["ⓡ","(r)"],["ⓢ","(s)"],["ⓣ","(t)"],["ⓤ","(u)"],["ⓥ","(v)"],["ⓦ","(w)"],["ⓧ","(x)"],["ⓨ","(y)"],["ⓩ","(z)"],["Ċ","C"],["ċ","c"],["Ġ","G"],["ġ","g"],["Ħ","H"],["ħ","h"],["Ż","Z"],["ż","z"],["𝟎","0"],["𝟏","1"],["𝟐","2"],["𝟑","3"],["𝟒","4"],["𝟓","5"],["𝟔","6"],["𝟕","7"],["𝟖","8"],["𝟗","9"],["𝟘","0"],["𝟙","1"],["𝟚","2"],["𝟛","3"],["𝟜","4"],["𝟝","5"],["𝟞","6"],["𝟟","7"],["𝟠","8"],["𝟡","9"],["𝟢","0"],["𝟣","1"],["𝟤","2"],["𝟥","3"],["𝟦","4"],["𝟧","5"],["𝟨","6"],["𝟩","7"],["𝟪","8"],["𝟫","9"],["𝟬","0"],["𝟭","1"],["𝟮","2"],["𝟯","3"],["𝟰","4"],["𝟱","5"],["𝟲","6"],["𝟳","7"],["𝟴","8"],["𝟵","9"],["𝟶","0"],["𝟷","1"],["𝟸","2"],["𝟹","3"],["𝟺","4"],["𝟻","5"],["𝟼","6"],["𝟽","7"],["𝟾","8"],["𝟿","9"],["①","1"],["②","2"],["③","3"],["④","4"],["⑤","5"],["⑥","6"],["⑦","7"],["⑧","8"],["⑨","9"],["⑩","10"],["⑪","11"],["⑫","12"],["⑬","13"],["⑭","14"],["⑮","15"],["⑯","16"],["⑰","17"],["⑱","18"],["⑲","19"],["⑳","20"],["⑴","1"],["⑵","2"],["⑶","3"],["⑷","4"],["⑸","5"],["⑹","6"],["⑺","7"],["⑻","8"],["⑼","9"],["⑽","10"],["⑾","11"],["⑿","12"],["⒀","13"],["⒁","14"],["⒂","15"],["⒃","16"],["⒄","17"],["⒅","18"],["⒆","19"],["⒇","20"],["⒈","1."],["⒉","2."],["⒊","3."],["⒋","4."],["⒌","5."],["⒍","6."],["⒎","7."],["⒏","8."],["⒐","9."],["⒑","10."],["⒒","11."],["⒓","12."],["⒔","13."],["⒕","14."],["⒖","15."],["⒗","16."],["⒘","17."],["⒙","18."],["⒚","19."],["⒛","20."],["⓪","0"],["⓫","11"],["⓬","12"],["⓭","13"],["⓮","14"],["⓯","15"],["⓰","16"],["⓱","17"],["⓲","18"],["⓳","19"],["⓴","20"],["⓵","1"],["⓶","2"],["⓷","3"],["⓸","4"],["⓹","5"],["⓺","6"],["⓻","7"],["⓼","8"],["⓽","9"],["⓾","10"],["⓿","0"],["🙰","&"],["🙱","&"],["🙲","&"],["🙳","&"],["🙴","&"],["🙵","&"],["🙶",'"'],["🙷",'"'],["🙸",'"'],["‽","?!"],["🙹","?!"],["🙺","?!"],["🙻","?!"],["🙼","/"],["🙽","\\"],["🜇","AR"],["🜈","V"],["🜉","V"],["🜆","VR"],["🜅","VF"],["🜩","2"],["🜪","5"],["🝡","f"],["🝢","W"],["🝣","U"],["🝧","V"],["🝨","T"],["🝪","V"],["🝫","MB"],["🝬","VB"],["🝲","3B"],["🝳","3B"],["💯","100"],["🔙","BACK"],["🔚","END"],["🔛","ON!"],["🔜","SOON"],["🔝","TOP"],["🔞","18"],["🔤","abc"],["🔠","ABCD"],["🔡","abcd"],["🔢","1234"],["🔣","T&@%"],["#️⃣","#"],["*️⃣","*"],["0️⃣","0"],["1️⃣","1"],["2️⃣","2"],["3️⃣","3"],["4️⃣","4"],["5️⃣","5"],["6️⃣","6"],["7️⃣","7"],["8️⃣","8"],["9️⃣","9"],["🔟","10"],["🅰️","A"],["🅱️","B"],["🆎","AB"],["🆑","CL"],["🅾️","O"],["🅿","P"],["🆘","SOS"],["🅲","C"],["🅳","D"],["🅴","E"],["🅵","F"],["🅶","G"],["🅷","H"],["🅸","I"],["🅹","J"],["🅺","K"],["🅻","L"],["🅼","M"],["🅽","N"],["🆀","Q"],["🆁","R"],["🆂","S"],["🆃","T"],["🆄","U"],["🆅","V"],["🆆","W"],["🆇","X"],["🆈","Y"],["🆉","Z"],["№","number"],["°","degrees"]];e=r.hmd(e);class o{constructor(e=n){this.replacements=e}escapeRegExp(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}generate(e,t="-"){try{let r=e.toString().trim();this.replacements.forEach((([e,t])=>{r=r.replace(new RegExp(this.escapeRegExp(e),"g"),t)})),"string"==typeof t&&""!==t||(t="-");const n=this.escapeRegExp(t);return r=r.toLowerCase().replace(/&/g," and ").replace(/@/g," at ").replace(/'/g,"").replace(/#+([a-zA-Z0-9_]+)/gi,"hashtag $&").replace(/#([0-9]\d*)/g,"number $&").replace("hashtag number","number").replace(/--+/g," ").replace(/[^a-zA-Z0-9_\u3400-\u9FBF\s-]/g," ").replace(/\s+/g,t).replace(new RegExp(`^${n}+`),"").replace(new RegExp(`${n}+$`),""),r}catch(e){throw console.error(`Error in generate method: ${e.message}`),e}}}e.exports&&(e.exports={slugify:o})},497:(e,t,r)=>{var n,o;e=r.nmd(e),n=[r(352)],void 0===(o=function(r){"use strict";function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var a={Generate:r.Generate};"object"===i(e)&&e.exports&&(e.exports=a),void 0===(o=function(){return a}.apply(t,n=[]))||(e.exports=o),"object"===("undefined"==typeof window?"undefined":i(window))&&(window.AutoToc=a)}.apply(t,n))||(e.exports=o)},352:(e,t,r)=>{var n,o;n=[t,r(808),r(851)],void 0===(o=function(e,r,n){"use strict";var o;function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,l(n.key),n)}}function l(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==i(t)?t:String(t)}Object.defineProperty(e,"__esModule",{value:!0}),t.Generate=void 0,r=(o=r)&&o.__esModule?o:{default:o};t.Generate=function(){function e(t,r,n,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.contentSelector=t,this.navigationContainer=r,this.tocTitle=n,this.tocIcon=o,this.highlightOffset=i,this.headingDepthLimit=a,this.tocMap=new Map,this.tocTopMap=new Map,this.tocBottomMap=new Map,this.pendingExternalLinks=[]}var t,r,o;return t=e,r=[{key:"validateParameters",value:function(){if("string"!=typeof this.contentSelector||!document.querySelector(this.contentSelector))throw new Error("Invalid contentSelector: Must be a valid CSS selector string for an existing element.");if("string"!=typeof this.navigationContainer||!document.querySelector(this.navigationContainer))throw new Error("Invalid navigationContainer: Must be a valid CSS selector string for an existing element.");if("string"!=typeof this.tocTitle)throw new Error("Invalid tocTitle: Must be a string.");if(null!==this.tocIcon&&"string"!=typeof this.tocIcon&&void 0!==this.tocIcon)throw new Error("Invalid tocIcon: Must be a string or null.");if("number"!=typeof this.highlightOffset||this.highlightOffset<0)throw new Error("Invalid highlightOffset: Must be a non-negative number.");if("number"!=typeof this.headingDepthLimit||this.headingDepthLimit<1||this.headingDepthLimit>6||!Number.isInteger(this.headingDepthLimit))throw new Error("Invalid headingDepthLimit: Must be an integer between 1 and 6.")}},{key:"detachEventListeners",value:function(){window.removeEventListener("scroll",this.boundScrollListener)}},{key:"generateUniqueId",value:function(e){return(new n.slugify).generate(e.textContent||"")}},{key:"populateTocMap",value:function(){var e=this,t=document.querySelectorAll("".concat(this.createHeadingSelector())),r=new Map;t.forEach((function(t){var n=parseInt(t.tagName.substring(1),10),o=t.id||e.generateUniqueId(t),i=t.textContent.trim();e.tocMap.has(o)||r.set(o,{level:n,text:i})})),this.tocMap=new Map([].concat(a(this.tocMap),a(r))),this.renderTocHtml()}},{key:"createTocList",value:function(e){var t=document.createElement("ol");return 0===e.size||e.forEach((function(e,r){var n=e.level,o=e.text.replace(/^#/,""),i=document.createElement("li");i.className="toc-list--item level-".concat(n),i.setAttribute("role","listitem");var a=document.createElement("a");a.href="#".concat(r),a.textContent=o,i.appendChild(a),t.appendChild(i)})),t}},{key:"findFirstHeadingLevel",value:function(){for(var e=1;e<=this.headingDepthLimit;e++)if(document.querySelector("".concat(this.contentSelector," h").concat(e)))return e;return null}},{key:"renderTocHtml",value:function(){var e=this,t=this.findFirstHeadingLevel()||1,r=document.createElement("ol");r.className="toc-list",r.setAttribute("role","list");var n=[r],o=this.createTocList(this.tocTopMap),i=this.createTocList(this.tocBottomMap);this.pendingExternalLinks.forEach((function(e){var t=document.createElement("li");t.className="toc-list--item level-level-0",t.setAttribute("role","listitem");var r=document.createElement("a");r.href="#".concat(e.id),r.textContent=e.text,t.appendChild(r),n[n.length-1].appendChild(t)}));var a=function(e,t){null!=e?e.appendChild(t):console.error("Attempted to append to a non-existent element.")};this.tocMap.forEach((function(e,r){var o=e.level,i=e.text,a=o-t;if(a>0)for(var c=0;c<a;c++){var s=document.createElement("ol");n[n.length-1].lastElementChild.appendChild(s),n.push(s)}else if(a<0)for(var l=0;l<-a;l++)n.pop();var h=i.replace(/^#/,""),u=document.createElement("li");u.className="toc-list--item level-".concat(o),u.setAttribute("role","listitem");var p=document.createElement("a");p.href="#".concat(r),p.textContent=h,u.appendChild(p),n[n.length-1].appendChild(u),t=o}));var c=document.querySelector(this.navigationContainer);c?(c.innerHTML="<header><h2>".concat(this.tocIcon,"<span>").concat(this.tocTitle,"</span></h2></header>"),a(c,o),a(c,r),a(c,i),c.setAttribute("role","doc-toc"),c.addEventListener("click",(function(t){if("A"===t.target.tagName&&t.target.getAttribute("href")){t.preventDefault();var r=t.target.getAttribute("href").substring(1);e.scrollToElement(r)}}))):console.error("Navigation container not found")}},{key:"attachAnchorsToHeadings",value:function(){var e=this;document.querySelectorAll("".concat(this.createHeadingSelector())).forEach((function(t){if(!e.navigationContainer.includes(t.parentNode)){var r=e.generateUniqueId(t);t.id=r;var n=document.createElement("a");n.href="#".concat(r),n.textContent="#",t.insertBefore(n,t.firstChild)}}))}},{key:"createHeadingSelector",value:function(){var e=this;return Array.from({length:this.headingDepthLimit},(function(t,r){return"".concat(e.contentSelector," h").concat(r+1)})).join(", ")}},{key:"scrollToElement",value:function(e){var t=document.getElementById(e);if(t){this.highlightOffset;var r=t.offsetTop-window.innerHeight/2+t.clientHeight/2;window.scrollTo({top:r,behavior:"smooth"})}}},{key:"highlightActiveSection",value:function(){var e=this,t=this.highlightOffset,r=this.createHeadingSelector(),n=document.querySelectorAll(r);n.forEach((function(r,o){var i=r.getAttribute("id"),a=document.querySelector("".concat(e.navigationContainer,' .toc-list--item a[href="#').concat(i,'"]')),c=n[o+1],s=window.pageYOffset>=r.offsetTop-t,l=!!c&&window.pageYOffset>=c.offsetTop-t;a&&(s&&!l?a.classList.add("active"):a.classList.remove("active"))}))}},{key:"addContentToToc",value:function(e,t,r){this.tocMap.has(t)||(this.tocMap.set(t,{level:e,text:r}),this.renderTocHtml())}},{key:"addExternalLinksToToc",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bottom",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"level-0";if(!Array.isArray(e))throw new Error("Invalid links: Must be an array of link objects.");"top"===r?e.forEach((function(e){if("object"!==i(e)||!e.id||!e.text)throw new Error("Invalid link format: Each link object must have 'id' and 'text' properties.");t.tocTopMap.has(e.id)||t.tocTopMap.set(e.id,{level:n,text:e.text})})):e.forEach((function(e){if("object"!==i(e)||!e.id||!e.text)throw new Error("Invalid link format: Each link object must have 'id' and 'text' properties.");t.tocBottomMap.has(e.id)||t.tocBottomMap.set(e.id,{level:n,text:e.text})})),this.renderTocHtml()}},{key:"initializeScrollHighlighting",value:function(){this.boundHighlightActiveSection=this.highlightActiveSection.bind(this);var e=this.boundHighlightActiveSection;window.addEventListener("scroll",e)}},{key:"initialize",value:function(){this.validateParameters(),this.attachAnchorsToHeadings(),this.populateTocMap(),this.renderTocHtml(),this.initializeScrollHighlighting()}}],r&&s(t.prototype,r),o&&s(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}()}.apply(t,n))||(e.exports=o)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n](i,i.exports,r),i.loaded=!0,i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);r(497)})();