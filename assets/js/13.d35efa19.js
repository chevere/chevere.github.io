(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{396:function(e,t,s){"use strict";s.r(t);var n=s(48),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"exceptions-spec"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exceptions-spec"}},[e._v("#")]),e._v(" Exceptions Spec")]),e._v(" "),s("p",[e._v("Exceptions are error events that happens on runtime, that disrupts the execution of the software.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Reference")]),e._v(" "),s("p",[e._v("Check thee "),s("RouterLink",{attrs:{to:"/reference/exceptions.html"}},[e._v("Exceptions Reference")]),e._v(" to learn about all the interfaces available.")],1)]),e._v(" "),s("h2",{attrs:{id:"conventions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conventions"}},[e._v("#")]),e._v(" Conventions")]),e._v(" "),s("p",[e._v("Interfaces "),s("strong",[e._v("must")]),e._v(":")]),e._v(" "),s("ul",[s("li",[e._v("Define a descriptive name")]),e._v(" "),s("li",[e._v("Named with "),s("code",[e._v("Exception")]),e._v(" suffix")]),e._v(" "),s("li",[e._v("Extend "),s("code",[e._v("Chevere\\Exceptions\\Core\\Exception")])]),e._v(" "),s("li",[e._v("Located at "),s("code",[e._v("Exceptions/<component>/")]),e._v(" namespace")])]),e._v(" "),s("h2",{attrs:{id:"design"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#design"}},[e._v("#")]),e._v(" Design")]),e._v(" "),s("h3",{attrs:{id:"uniqueness"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uniqueness"}},[e._v("#")]),e._v(" Uniqueness")]),e._v(" "),s("p",[e._v("Each different error event "),s("strong",[e._v("should")]),e._v(" have its own unique exception.")]),e._v(" "),s("h3",{attrs:{id:"descriptive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#descriptive"}},[e._v("#")]),e._v(" Descriptive")]),e._v(" "),s("p",[e._v("Use names that explicitly explain the context of the exception. For example, "),s("code",[e._v("SomeException")]),e._v(" is less descriptive than "),s("code",[e._v("RoutingBadRouteException")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"throwing-exceptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#throwing-exceptions"}},[e._v("#")]),e._v(" Throwing Exceptions")]),e._v(" "),s("h3",{attrs:{id:"exception-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exception-message"}},[e._v("#")]),e._v(" Exception Message")]),e._v(" "),s("p",[e._v("A "),s("RouterLink",{attrs:{to:"/components/Message.html"}},[e._v("Message")]),e._v(" "),s("strong",[e._v("should")]),e._v(" explain the error event when needed.")],1),e._v(" "),s("p",[e._v("Exception messages "),s("strong",[e._v("must")]),e._v(":")]),e._v(" "),s("ul",[s("li",[e._v("Clearly describe the error")]),e._v(" "),s("li",[e._v("Indicate the conflict element")])]),e._v(" "),s("p",[e._v("Exception messages "),s("strong",[e._v("should not")]),e._v(":")]),e._v(" "),s("ul",[s("li",[e._v("Provide "),s("em",[e._v("hints")]),e._v(" in how-to deal with the error")])]),e._v(" "),s("h3",{attrs:{id:"previous-exception"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#previous-exception"}},[e._v("#")]),e._v(" Previous Exception")]),e._v(" "),s("p",[e._v("Passing the previous exception "),s("strong",[e._v("should")]),e._v(" be preferred and wrapping a previous exception "),s("strong",[e._v("should")]),e._v(" be avoided.")])])}),[],!1,null,null,null);t.default=i.exports}}]);