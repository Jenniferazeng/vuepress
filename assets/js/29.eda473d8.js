(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{543:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"在多个设备上登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在多个设备上登录"}},[t._v("#")]),t._v(" 在多个设备上登录")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#功能描述"}},[t._v("功能描述")])]),a("li",[a("a",{attrs:{href:"#技术原理"}},[t._v("技术原理")])]),a("li",[a("a",{attrs:{href:"#前提条件"}},[t._v("前提条件")])]),a("li",[a("a",{attrs:{href:"#实现方法"}},[t._v("实现方法")]),a("ul",[a("li",[a("a",{attrs:{href:"#获取其他设备上登录的-id-和给其他设备发送消息"}},[t._v("获取其他设备上登录的 ID 和给其他设备发送消息")])]),a("li",[a("a",{attrs:{href:"#强制该账号从一个设备下线"}},[t._v("强制该账号从一个设备下线")])]),a("li",[a("a",{attrs:{href:"#获取其他设备上进行的好友或者群组操作"}},[t._v("获取其他设备上进行的好友或者群组操作")])]),a("li",[a("a",{attrs:{href:"#典型示例"}},[t._v("典型示例")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"功能描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能描述"}},[t._v("#")]),t._v(" 功能描述")]),t._v(" "),a("p",[t._v("环信即时通讯 IM 支持同一个用户 ID 在多个平台或者多个设备上登录；")]),t._v(" "),a("p",[t._v("客户端支持查询当前账号的已登录设备列表，可强制该账号从其他已登录设备下线；")]),t._v(" "),a("p",[t._v("环信即时通讯 IM Android SDK 支持在同一账号所有已登录设备上同步在线消息和离线消息以及对应的回执和已读状态；")]),t._v(" "),a("p",[t._v("同一账号所有已登录的离线设备都可以接收推送；")]),t._v(" "),a("p",[t._v("在同一账号所有已登录设备上同步好友相关操作；")]),t._v(" "),a("p",[t._v("在同一账号所有已登录设备上同步群组和聊天室相关操作；")]),t._v(" "),a("p",[t._v("默认最多支持 4 个设备同时在线，具体见 "),a("a",{attrs:{href:"https://www.easemob.com/pricing/im",target:"_blank",rel:"noopener noreferrer"}},[t._v("环信即时通讯 IM 价格"),a("OutboundLink")],1),t._v("。如需增加支持的设备数量，可以联系环信即时通讯 IM 的商务经理。")]),t._v(" "),a("h2",{attrs:{id:"技术原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术原理"}},[t._v("#")]),t._v(" 技术原理")]),t._v(" "),a("p",[t._v("用户在 Android 端上初始化 SDK 时会生成一个识别设备的 ID，主要用于多设备登录和推送。服务器会自动分发新消息到各个登录中的设备。环信即时通讯 IM Android SDK 提供如下方法来实现多个设备上的互动功能。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("getSelfIdsOnOtherPlatform")]),t._v(" 获取在其他设备上登录的 ID；")]),t._v(" "),a("li",[a("code",[t._v("EMMultiDeviceListener")]),t._v(" 获取其他设备上进行的好友或者群组操作。")])]),t._v(" "),a("h2",{attrs:{id:"前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),a("p",[t._v("开始前，请确保满足以下条件：")]),t._v(" "),a("p",[t._v("完成 SDK 初始化，并连接到服务器，详见 "),a("a",{attrs:{href:"https://docs-im.easemob.com/ccim/android/quickstart",target:"_blank",rel:"noopener noreferrer"}},[t._v("快速开始"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"实现方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现方法"}},[t._v("#")]),t._v(" 实现方法")]),t._v(" "),a("h3",{attrs:{id:"获取其他设备上登录的-id-和给其他设备发送消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取其他设备上登录的-id-和给其他设备发送消息"}},[t._v("#")]),t._v(" 获取其他设备上登录的 ID 和给其他设备发送消息")]),t._v(" "),a("p",[t._v("你可以调用 "),a("code",[t._v("getSelfIdsOnOtherPlatform")]),t._v(" 方法来获取在其他设备上登录的 ID，将此 ID 作为消息接收方来发出消息，则其他设备上登录的账号可以收到消息，实现不同设备上相互发送文件等功能。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ids "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("contactManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSelfIdsOnOtherPlatform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//选择一个 ID 作为发送目标。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" toChatUsername "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建一条文本消息，content 为消息文字内容，toChatUsername 为接收方 ID。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMMessage")]),t._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTxtSendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" toChatUsername"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//发送消息。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chatManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("h3",{attrs:{id:"强制该账号从一个设备下线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制该账号从一个设备下线"}},[t._v("#")]),t._v(" 强制该账号从一个设备下线")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// username：账户名称，password：该账户密码。需要在异步线程中执行。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMDeviceInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" deviceInfos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLoggedInDevicesFromServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// username：账户名称，password：该账户密码, resource：设备ID。需要在异步线程中执行。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kickDevice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deviceInfos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selectedIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"获取其他设备上进行的好友或者群组操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取其他设备上进行的好友或者群组操作"}},[t._v("#")]),t._v(" 获取其他设备上进行的好友或者群组操作")]),t._v(" "),a("p",[t._v("账号 A 同时在设备 A 和设备 B 上登录，账号 A 在设备 A 上进行一些操作，设备 B 上会收到这些操作对应的通知。")]),t._v(" "),a("p",[t._v("你需要先实现 "),a("code",[t._v("EMMultiDeviceListener")]),t._v(" 监听其他设备上的操作，再设置多设备监听。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//实现 `EMMultiDeviceListener` 监听其他设备上的操作。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChatEMMultiDeviceListener")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMMultiDeviceListener")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//@param event 事件。")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//@param target 联系⼈ ID； @param ext 扩展信息。")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onContactEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" ext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TAG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"onContactEvent event"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DemoDbHelper")]),t._v(" dbHelper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DemoDbHelper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DemoApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//好友已经在其他设备上被移除。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" CONTACT_REMOVE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//好友请求已经在其他设备上同意。    ")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" CONTACT_ACCEPT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//好友请求已经在其他设备上拒绝。")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" CONTACT_DECLINE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前用户在其他设备加某人进入黑名单。")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" CONTACT_BAN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 好友在其他设备被移出黑名单。 ")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" CONTACT_ALLOW"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onGroupEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" groupId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" usernames"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TAG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"onEMGroupEvent event"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备创建了群组。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_CREATE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备销毁了群组。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_DESTROY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备加⼊了群组。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_JOIN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备离开了群组。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_LEAVE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备发起了群组申请。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_APPLY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备同意了群组申请。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_APPLY_ACCEPT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备拒绝了群组申请。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_APPLY_DECLINE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备邀请了群成员。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_INVITE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备同意了群组邀请。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_INVITE_ACCEPT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备拒绝了群组邀请。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_INVITE_DECLINE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备将某⼈踢出群。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_KICK"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备将成员加⼊群组⿊名单。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_BAN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备将成员移除群组⿊名单。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_ALLOW"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备屏蔽群组。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_BLOCK"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备取消群组屏蔽。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_UNBLOCK"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备转移群主。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_ASSIGN_OWNER"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备添加管理员。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_ADD_ADMIN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备移除管理员。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_REMOVE_ADMIN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备禁⾔⽤户。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_ADD_MUTE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前⽤户在其他设备移除禁⾔。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" GROUP_REMOVE_MUTE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChatMultiDeviceListener")]),t._v(" chatMultiDeviceListener "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChatMultiDeviceListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置多设备监听。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addMultiDeviceListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chatMultiDeviceListener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//移除多设备监听。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeMultiDeviceListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chatMultiDeviceListener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"典型示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#典型示例"}},[t._v("#")]),t._v(" 典型示例")]),t._v(" "),a("p",[t._v("当 PC 端和手机端登录同一个账号时，在手机端可以通过特定方法获取到 PC 端的设备 ID，该设备 ID 相当于特殊的好友 Username，可以直接使用于聊天，使用方法与好友类似。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List<String> selfIds = EMClient.getInstance().contactManager().getSelfIdsOnOtherPlatform();\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);