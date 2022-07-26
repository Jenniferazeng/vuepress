(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{531:function(t,e,l){"use strict";l.r(e);var a=l(42),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"群组"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#群组"}},[t._v("#")]),t._v(" 群组")]),t._v(" "),l("p"),l("div",{staticClass:"table-of-contents"},[l("ul",[l("li",[l("a",{attrs:{href:"#功能描述"}},[t._v("功能描述")]),l("ul",[l("li",[l("a",{attrs:{href:"#群组与聊天室的区别"}},[t._v("群组与聊天室的区别")])]),l("li",[l("a",{attrs:{href:"#群组成员角色"}},[t._v("群组成员角色")])]),l("li",[l("a",{attrs:{href:"#群组类型"}},[t._v("群组类型")])]),l("li",[l("a",{attrs:{href:"#群组功能"}},[t._v("群组功能")])]),l("li",[l("a",{attrs:{href:"#群组人数限制"}},[t._v("群组人数限制")])])])])])]),l("p"),t._v(" "),l("h2",{attrs:{id:"功能描述"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#功能描述"}},[t._v("#")]),t._v(" 功能描述")]),t._v(" "),l("p",[t._v("群组是支持多人沟通的即时通讯系统，成员关系相对稳定。所有群成员可以收到群中的消息，可以在群中发送消息。群成员离线时可以收到推送消息。群组成员支持多种角色：群主、群管理员和普通成员。群组提供丰富的管理能力，如群组禁言、群公告和群文件等。")]),t._v(" "),l("p",[t._v("本文以及接下来几篇主要介绍群组管理功能，如需查看消息相关内容，参见 "),l("a",{attrs:{href:"https://docs-im.easemob.com/ccim/android/message1",target:"_blank",rel:"noopener noreferrer"}},[t._v("消息管理"),l("OutboundLink")],1),t._v("。")]),t._v(" "),l("p",[t._v("群组支持两种加入授权方式：")]),t._v(" "),l("ul",[l("li",[t._v("需要群主授权加入；")]),t._v(" "),l("li",[t._v("不需要群主授权即可加入。")])]),t._v(" "),l("h3",{attrs:{id:"群组与聊天室的区别"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#群组与聊天室的区别"}},[t._v("#")]),t._v(" 群组与聊天室的区别")]),t._v(" "),l("p",[t._v("群组和聊天室均为支持多人沟通的即时通讯系统。两者的区别在于，群组中的成员会有固定的强的关系，成员加入后会长时间在群组中。聊天室中的成员没有固定关系，类似于一个开放的空间，大家可以自由加入，离开即退出聊天室。以下为功能对比：")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("功能")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("群组")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("聊天室")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("使用场景")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("类似于 Signal，Skype 里的群聊，所有加入的用户拥有固定的关系。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("类似 Twitch 的直播间，成员间没已有固定关系，离开即退出。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("创建方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("所有 app 用户都可以创建群组。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("仅 "),l("a",{attrs:{href:"https://docs-im.easemob.com/ccim/rest/chatroom#%E6%B7%BB%E5%8A%A0%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("超级管理员"),l("OutboundLink")],1),t._v(" 有权限创建聊天室。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("四种群组类型支持不同使用场景。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("仅有一种类型，所有用户可以自由加入退出。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("最大成员数")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("成员数支持取决于所选择的版本，最高版本支持 8,000 人。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("成员数支持取决于所选择的版本，最高版本支持 10,000 人。如需提升该上限，请联系商务。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("离线推送消息")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("离线时，会收到推送消息。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("离线时，不会收到推送消息；成员离线超过 5 分钟会自动退出聊天室。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("离线消息存储")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("支持离线消息存储，每个会话存储 200 条消息。"),l("br"),t._v("用户上线时，会收到离线消息。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("不支持离线消息存储。如果需要用户新加入聊天室时服务器推送最近的历史消息，可以联系商务开通聊天室历史消息推送，每个会话默认支持 10 条消息，最多可调整至 200 条。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("消息可靠性")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群组中发送的所有消息，用户都会收到。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("当消息量大时，聊天室中超过阈值的消息会被丢弃。消息开始丢弃的阈值为每秒 100 条消息，可以根据需求进行调整。")])])])]),t._v(" "),l("h3",{attrs:{id:"群组成员角色"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#群组成员角色"}},[t._v("#")]),t._v(" 群组成员角色")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("群成员角色")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("管理权限")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("普通成员")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("不具备管理权限的普通成员。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("普通成员可以收发消息，查看群组描述信息。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群管理员")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("由群主指定，协助群主进行管理，拥有一定的管理权限。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("管理员可以更改群组名称和描述信息、对群成员进行管理。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群主")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群组的创建者，在群中拥有最高权限。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群主可以指定管理员、解散群组、将群主权限转移给他人、更改群组名称和描述信息和对群成员进行管理。")])])])]),t._v(" "),l("h3",{attrs:{id:"群组类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#群组类型"}},[t._v("#")]),t._v(" 群组类型")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("群组类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("介绍")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("公开群")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("公开群可以被搜索到，用户只能申请加入群或者被管理员和群主邀请入群。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("私有群")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("私有群不能被搜索到，用户需要被邀请才能入群。")])])])]),t._v(" "),l("h3",{attrs:{id:"群组功能"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#群组功能"}},[t._v("#")]),t._v(" 群组功能")]),t._v(" "),l("p",[t._v("群组功能主要分为群组的建立和管理，群成员管理，以及群属性管理。")]),t._v(" "),l("h4",{attrs:{id:"创建和管理群组"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#创建和管理群组"}},[t._v("#")]),t._v(" 创建和管理群组")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("功能")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("创建群组")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群组数量和群成员数量根据套餐版本有所不同。详见 "),l("a",{attrs:{href:"https://www.easemob.com/pricing/im",target:"_blank",rel:"noopener noreferrer"}},[t._v("环信即时通讯 IM 价格"),l("OutboundLink")],1),t._v("。 群组有公开群和私有群，可以对加群的方式进行设置。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("加入群组")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("用户可以加入群组，公开群可以通过搜索群组 ID 的方式加入，私有群需要群主邀请才能加入。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("退出群组")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群主不支持退群操作，只能解散群。退出群组分为主动退群和被动退群。被动退群即为被群主踢出群组。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("解散群组")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("解散群组需要群主权限。"),l("br"),t._v("解散群组后将删除本地的群组数据，所有成员将收到群组解散的回调信息。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("用户申请入群")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("用户只能申请加入公开群。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("获取群成员列表")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从服务器分页获取群成员。"),l("br"),t._v("根据进群时间进行排序，后进群的在前面。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("获取群组列表")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从服务器获取自己加入和创建的群组列表。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("屏蔽和解除群消息")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群成员可以屏蔽和解除群消息，屏蔽群消息时将不再收取群消息。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群组事件监听")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("开发者可以通过设置监听，获取群组中的事件，并做相应的处理。如：新用户加入群，用户退出群。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("获取群组黑名单列表")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("需要群主或管理员权限。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("白名单管理")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("在白名单中的用户，在全局禁言时，可以发送消息。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("开启和关闭全员禁言")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("开启全员禁言后只有群主和群管理员可以发消息，该功能只有群主（或管理员）才有权限操作。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("获取被禁言列表")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("获取被禁言的用户列表，该功能只有群主（或管理员）才有权限操作。")])])])]),t._v(" "),l("h4",{attrs:{id:"群成员管理"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#群成员管理"}},[t._v("#")]),t._v(" 群成员管理")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("功能")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群组加人")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("公开群和私有群中，群主和管理员均可以邀请用户加入群。"),l("br"),t._v("支持需要用户确认后，再加入群。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群组踢人")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群主和群管理员可以将群成员踢出群。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("变更群组所有者")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群主可以将群主权限移交给指定的群成员，移交之后群主权限变为群成员权限。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("添加和移除群管理员权限")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群主可以增加或删除群管理员。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群组黑名单")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群主和群管理员可以将群成员加入或移出黑名单，黑名单中的成员将被移除群且无法再次加入群。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群组禁言")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群主和管理员可以将群成员加入或移出禁言列表，禁言列表中的成员无法发送群消息，可以接收群消息。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群组全员禁言")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群主和管理员可以开启或关闭全员禁言，开启全员禁言后，群成员无法发送群消息，管理员和群主可以发送群消息。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群组白名单")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群主和管理员可以将群成员加入或移出白名单，白名单中的群成员可以在全员禁言状态下，发送群消息。")])])])]),t._v(" "),l("h4",{attrs:{id:"群属性管理"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#群属性管理"}},[t._v("#")]),t._v(" 群属性管理")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("功能")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("修改群名称和描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群主和群管理员可以修改群名称和群组描述。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("群公告")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群主和群管理员可以设置和更新群公告，群成员可以获取群公告。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("共享文件")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群主和群管理员可以上传和删除所有群共享文件，群成员只能删除自己上传的文件。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("更改群扩展字段")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("群主和群管理员可以更新群组的扩展字段。 开发者可以通过群扩展字段设置 JSON 格式的数据，自定义更多群组信息。 群扩展字段的长度限制为：8KB。")])])])]),t._v(" "),l("h3",{attrs:{id:"群组人数限制"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#群组人数限制"}},[t._v("#")]),t._v(" 群组人数限制")]),t._v(" "),l("p",[t._v("群成员的数量根据不同的套餐版本而不同，免费版 100 人/群，专业版 300 人/群， 旗舰版 3,000 人/群，尊享版 8,000 人/群。")])])}),[],!1,null,null,null);e.default=_.exports}}]);