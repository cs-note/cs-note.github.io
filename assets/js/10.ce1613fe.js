(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{173:function(e,t,r){"use strict";r.r(t);var o=r(6),a=Object(o.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),r("h2",{attrs:{id:"shallow-copy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shallow-copy","aria-hidden":"true"}},[e._v("#")]),e._v(" Shallow copy")]),e._v(" "),r("p",[e._v("將所有的 field 都 copy 一份，如果是 primitive type 直接 copy value，如果是 reference type 就會指向同樣的 object。\n以 C++ 為例，pointer 就算是 reference type，default compiler 產生的 copy constructor 和 assign operator 就是使用 shallow copy。\n要是使用的 object 都沒有 reference type 就不會有問題，一但有 reference type 的 field 就必須去處理這部分，不然使用 copy 的時候兩個 object 的 reference 會指向同一個 object。")]),e._v(" "),r("h2",{attrs:{id:"deep-copy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deep-copy","aria-hidden":"true"}},[e._v("#")]),e._v(" Deep copy")]),e._v(" "),r("p",[e._v("在 reference type 的 field 會去 dereference 再去複製一份，C++ default compiler 對 container type 的會去 call member 的 copy，像是 vector、string...... 本身的 copy 就是 deep copy。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Object_copying",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ref"),r("OutboundLink")],1)])])},[],!1,null,null,null);a.options.__file="README.md";t.default=a.exports}}]);