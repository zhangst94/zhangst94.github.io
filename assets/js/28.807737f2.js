(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{353:function(n,s,a){"use strict";a.r(s);var t=a(4),e=Object(t.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h2",{attrs:{id:"以升级到nginx-1-18-0版本为例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以升级到nginx-1-18-0版本为例"}},[n._v("#")]),n._v(" "),s("strong",[n._v("以升级到nginx-1.18.0版本为例")])]),n._v(" "),s("p",[s("strong",[n._v("升级1.18.0版本只是举例，实际升级的话，nginx的话一般是升级到官方最新稳定版本")])]),n._v(" "),s("h3",{attrs:{id:"_1-准备新版nginx源码包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备新版nginx源码包"}},[n._v("#")]),n._v(" "),s("strong",[n._v("1.准备新版nginx源码包")])]),n._v(" "),s("p",[s("a",{attrs:{href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://nginx.org/en/download.html"),s("OutboundLink")],1)]),n._v(" "),s("p",[s("strong",[n._v("2.vim Dockerfile")])]),n._v(" "),s("div",{staticClass:"language-dockerfile line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("FROM")]),n._v(" [registry.yw.zj.chinamobile.com/special/nginx-apicloud-web:20200615225851](http://registry.yw.zj.chinamobile.com/special/nginx-apicloud-web:20200615225851)  ")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("ADD")]),n._v(" nginx-1.18.0.tar.gz /opt  ")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("RUN")]),n._v(" cd /opt/nginx-1.18.0 && /app/nginx/sbin/nginx -V 2>&1 | awk -F "),s("span",{pre:!0,attrs:{class:"token string"}},[n._v('":"')]),n._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[n._v("'/configure/{print $2}'")]),n._v(" | xargs ./configure && make && cp objs/nginx /app/nginx/sbin/nginx")]),n._v("\n\n【核心步骤：/app/nginx/sbin/nginx -V  获取当前基础镜像的编译参数，然后新版本的nginx编译时加上原本的编译参数 ./configure xx原本的编译参数xx】\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br")])]),s("h3",{attrs:{id:"_3-构建新镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-构建新镜像"}},[n._v("#")]),n._v(" "),s("strong",[n._v("3.构建新镜像")])]),n._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" build "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[n._v("-t")]),n._v("  registry.yw.zj.chinamobile.com/special/nginx-apicloud-web:202011160900 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v(".")]),n._v("\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("h3",{attrs:{id:"_4-推送镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-推送镜像"}},[n._v("#")]),n._v(" 4.推送镜像")]),n._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" push registry.yw.zj.chinamobile.com/special/nginx-apicloud-web:202011160900\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("h3",{attrs:{id:"nginx隐藏版本号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx隐藏版本号"}},[n._v("#")]),n._v(" nginx隐藏版本号")]),n._v(" "),s("p",[n._v("将nginx.conf文件里面加上server_tokens off;")])])}),[],!1,null,null,null);s.default=e.exports}}]);