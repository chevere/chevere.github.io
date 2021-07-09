(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{403:function(t,a,s){"use strict";s.r(a);var e=s(48),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache"}},[t._v("#")]),t._v(" Cache")]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/reference/Chevere/Components/Cache/Cache.html"}},[t._v("Cache")]),t._v(" component is in charge of providing a filesystem-based persistent application cache layer. It is intended to be used to cache application states accelerated on top of "),s("a",{attrs:{href:"https://www.php.net/opcache",target:"_blank",rel:"noopener noreferrer"}},[t._v("OPcache"),s("OutboundLink")],1),t._v(".")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Learn by Example")]),t._v(" "),s("p",[t._v("Check the Router "),s("a",{attrs:{href:"https://github.com/chevere/examples/tree/main/03.Http#00router-makephp",target:"_blank",rel:"noopener noreferrer"}},[t._v("make"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/chevere/examples/tree/main/03.Http#01router-resolvephp",target:"_blank",rel:"noopener noreferrer"}},[t._v("resolve"),s("OutboundLink")],1),t._v(" for a working use-case of the Cache component.")])]),t._v(" "),s("h2",{attrs:{id:"creating-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-cache"}},[t._v("#")]),t._v(" Creating Cache")]),t._v(" "),s("p",[t._v("Create a Cache by passing the cache working directory.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Chevere"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Chevere"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Filesystem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("dirForPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$cache")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token argument-name"}},[t._v("dir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirForPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/to-cache/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"cache-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache-key"}},[t._v("#")]),t._v(" Cache Key")]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/reference/Chevere/Components/Cache/CacheKey.html"}},[t._v("CacheKey")]),t._v(" component provides cache keys to be used with the cache component. This is used to "),s("a",{attrs:{href:"#put"}},[t._v("put")]),t._v(", "),s("a",{attrs:{href:"#get"}},[t._v("get")]),t._v(", "),s("a",{attrs:{href:"#exists"}},[t._v("exists")]),t._v(" and "),s("a",{attrs:{href:"#remove"}},[t._v("remove")]),t._v(" cache.")],1),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Chevere"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CacheKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CacheKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token argument-name"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'the_cache_key'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h2",{attrs:{id:"put"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#put"}},[t._v("#")]),t._v(" Put")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("withPut")]),t._v(" method is used to cache a "),s("code",[t._v("var")]),t._v(" which must be of type "),s("RouterLink",{attrs:{to:"/reference/Chevere/Components/VarStorable/VarStorable.html"}},[t._v("VarStorable")]),t._v(".")],1),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Chevere"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Chevere"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CacheKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Chevere"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Variable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("VarStorable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$cache")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$cache")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withPut")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token argument-name"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VarStorable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("Cache keys represent PHP return files in the filesystem.")])]),t._v(" "),s("h2",{attrs:{id:"puts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#puts"}},[t._v("#")]),t._v(" Puts")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("puts")]),t._v(" method provides access to the cache put, which is an "),s("code",[t._v("array")]),t._v(" containing details about "),s("code",[t._v("PUT")]),t._v(" operations on the cache instance.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$puts")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$cache")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("puts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"exists"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exists"}},[t._v("#")]),t._v(" Exists")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("exists")]),t._v(" method is used to determine if cache exists for "),s("code",[t._v("$key")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Chevere"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exists")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$cache")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" Get")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("get")]),t._v(" method is used to retrieve a cached entry at the given "),s("code",[t._v("$key")]),t._v(". It returns the cached "),s("code",[t._v("$var")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Chevere"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$cache")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"remove"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove"}},[t._v("#")]),t._v(" Remove")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("withRemove")]),t._v(" method is used to remove the cache at the given "),s("code",[t._v("$key")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Chevere"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$cache")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$cache")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withRemove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);