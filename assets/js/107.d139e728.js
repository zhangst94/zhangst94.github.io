(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{425:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nightingale-夜莺监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nightingale-夜莺监控"}},[t._v("#")]),t._v(" Nightingale | 夜莺监控")]),t._v(" "),s("p",[t._v("Nightingale ：http://n9e.flashcat.cloud/")]),t._v(" "),s("p",[t._v("​\t\tNightingale | 夜莺监控，一款先进的开源云原生监控分析系统，采用 All-In-One 的设计，集数据采集、可视化、监控告警、数据分析于一体，与云原生生态紧密集成，提供开箱即用的企业级监控分析和告警能力。")]),t._v(" "),s("h2",{attrs:{id:"夜莺部署安装架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#夜莺部署安装架构"}},[t._v("#")]),t._v(" 夜莺部署安装架构")]),t._v(" "),s("p",[t._v("现在夜莺的版本已经更新迭代到"),s("strong",[t._v("V6")]),t._v("版本")]),t._v(" "),s("p",[t._v("Ninghtingale下载地址："),s("a",{attrs:{href:"https://flashcat.cloud/download/nightingale/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nightingale - 快猫星云 "),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Categraf下载地址："),s("a",{attrs:{href:"https://flashcat.cloud/download/categraf/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Categraf - 快猫星云"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("夜莺 6.x 版本相比 5.x 在架构上做了巨大的调整，之前服务端有两个模块，n9e-webapi 和 n9e-server，6.x  之后合并成了一个，就是 n9e，这个模块既可以提供接口给前端调用，也可以提供告警引擎的能力。但是有的时候机房网络链路不好，或者有acl限制，很多 agent 没法连通服务端，此时就需要下沉部署方案。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://flashcat.cloud/blog/nightingale-v6-arch/",target:"_blank",rel:"noopener noreferrer"}},[t._v("夜莺V6.X架构介绍"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"中心汇聚式部署方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中心汇聚式部署方案"}},[t._v("#")]),t._v(" 中心汇聚式部署方案")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://download.flashcat.cloud/ulric/20230327133406.png",alt:"中心汇聚式部署方案"}})]),t._v(" "),s("p",[s("strong",[t._v("Mysql")]),t._v("：所有的告警信息，配置信息(比如普罗米修斯的)，告警规则等等都存储在mysql里面；")]),t._v(" "),s("p",[s("strong",[t._v("Redis")]),t._v(": 存储一些验证信息，JWT的token，metadata元信息，元数据，心跳信息等")]),t._v(" "),s("p",[s("strong",[t._v("TSDB")]),t._v("：时序数据库（可以支持Prometheus、M3DB、VictoriaMetrics、Thanos等）")]),t._v(" "),s("p",[s("strong",[t._v("n9e")]),t._v("：夜莺V6版本只有一个模块了，就是 n9e，可以部署多个 n9e 实例组成集群，n9e 依赖 2 个存储，数据库、Redis，数据库可以使用 MySQL 或 Postgres")]),t._v(" "),s("p",[s("strong",[t._v("LB")]),t._v("：n9e 提供的是 HTTP 接口，前面负载均衡可以是 4 层的，也可以是 7 层的。一般就选用 Nginx 就可以了。")]),t._v(" "),s("p",[t._v("n9e 这个模块接收到数据之后，需要转发给后端的时序库，相关配置是：")]),t._v(" "),s("div",{staticClass:"language-toml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Pushgw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("LabelRewrite")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Pushgw.Writers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Url")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:9090/api/v1/write"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[s("strong",[t._v("categraf")]),t._v(": 是夜莺监控的默认的自制的数据采集器")]),t._v(" "),s("h3",{attrs:{id:"边缘下沉式混杂部署方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#边缘下沉式混杂部署方案"}},[t._v("#")]),t._v(" 边缘下沉式混杂部署方案")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://download.flashcat.cloud/ulric/20230327135615.png",alt:"边缘下沉式混杂部署方案"}})]),t._v(" "),s("p",[t._v("这种架构是对中心式部署方案的补充，主要是针对网络不好的情况：")]),t._v(" "),s("p",[t._v("机房网络链路不好，需要把时序库，告警引擎和转发网关下沉部署，但是心跳还是需要往中心心跳，在对象列表里才能看到机器的 CPU、内存使用率等监控信息")]),t._v(" "),s("p",[t._v("已有 Prometheus 的情况，也可以直接将 Prometheus 作为数据源接入。可以在夜莺里看图、配告警规则，就是在对象列表里看不到，也不能使用告警自愈的功能，核心功能不受影响。")]),t._v(" "),s("p",[t._v("边缘机房，下沉部署时序库、告警引擎、转发网关的时候，要注意，告警引擎需要依赖数据库，因为要同步告警规则，转发网关也要依赖数据库，因为要注册对象到数据库里去，需要打通相关网络，告警引擎和转发网关都不用Redis，所以无需为Redis打通网络。")]),t._v(" "),s("h2",{attrs:{id:"二进制方式部署夜莺"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二进制方式部署夜莺"}},[t._v("#")]),t._v(" 二进制方式部署夜莺")]),t._v(" "),s("h3",{attrs:{id:"组件安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件安装"}},[t._v("#")]),t._v(" 组件安装")]),t._v(" "),s("p",[t._v("VictoriaMetrics官方文档："),s("a",{attrs:{href:"https://victoriametrics.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VictoriaMetrics"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Github下载地址:Releases ·：https://github.com/VictoriaMetrics/VictoriaMetrics/releases")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install VictoriaMetrics ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" vm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" vm\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xf victoria-metrics-linux-amd64-v1.90.0.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" ./victoria-metrics-prod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&>")]),t._v(" stdout.log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /opt/n9e/etc/config.toml\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Pushgw.Writers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:8428/api/v1/write"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##这里添加为VictoriaMetrics的地址8428的端口")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install mysql")]),t._v("\nyum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" mariadb*\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" mariadb\nsystemctl restart mariadb\nmysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"SET PASSWORD FOR 'root'@'localhost' = PASSWORD('1234');\"")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install redis")]),t._v("\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" redis\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" redis\nsystemctl restart redis\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("p",[t._v("上例中mysql的root密码设置为了1234，建议维持这个不变，后续就省去了修改配置文件的麻烦。")]),t._v(" "),s("h3",{attrs:{id:"安装夜莺"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装夜莺"}},[t._v("#")]),t._v(" 安装夜莺")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /opt/n9e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt/n9e\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 去 https://github.com/didi/nightingale/releases 找最新版本的包，")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://download.flashcat.cloud/n9e-v6.0.0-ga.3-linux-amd64.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" zxvf n9e-v6.0.0-ga.3-linux-amd64.tar.gz\nmysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-uroot")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p1234")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n9e.sql\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" ./n9e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&>")]),t._v(" n9e.log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[s("strong",[t._v("启动成功，n9e 默认会监听在 17000 端口。上面使用 nohup 简单演示，")])]),t._v(" "),s("p",[t._v("配置文件在当前目录 "),s("code",[t._v("etc/config.toml")]),t._v(" 中含有 mysql 的连接地址配置，如果连接数据库报错，可以检查一下用户名和密码")]),t._v(" "),s("p",[t._v("夜莺服务端部署好之后，浏览器访问 17000 就可以体验相关功能了，默认用户是 "),s("code",[t._v("root")]),t._v("，密码是 "),s("code",[t._v("root.2020")])]),t._v(" "),s("h3",{attrs:{id:"部署categraf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署categraf"}},[t._v("#")]),t._v(" 部署categraf")]),t._v(" "),s("p",[t._v("Categraf官方github地址：https://github.com/flashcatcloud/categraf")]),t._v(" "),s("p",[t._v("解压categraf")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xf categraf-v0.2.38-linux-amd64.tar.gz "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-C")]),t._v(" /opt\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("解压完毕后会发现有一个可执行文件categraf和一个文件夹conf，conf文件下面有很多input的文件夹，里面都是每一个插件的配置文件（xxx.toml）config.toml是主配置文件")]),t._v(" "),s("div",{staticClass:"language-toml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##第一步  找到[[writers]]字段")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("writer_opt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("batch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("chan_size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("writers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("url")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:17000/prometheus/v1/write"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##这里的端口要改成你n9e启动的端口，默认的就是17000，")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##第二步  找到[heartbeat]字段")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("heartbeat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("enable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##这里的false改为ture 启动heartbeat功能来收集本台主机的信息")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# report os version cpu.util mem.util metadata")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("url")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:17000/v1/n9e/heartbeat"')]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("p",[s("strong",[t._v("然后直接启动categraf")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" ./categraf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&>")]),t._v("stdout.log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("在浏览器输入http://127.0.0.1:17000，然后输入用户名root，密码root.2020即可登录系统。\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhangst94/images/image-20230417215157647.png",alt:"image-20230417215157647.png"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);