(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{430:function(s,n,e){"use strict";e.r(n);var t=e(4),a=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"n9e-helm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#n9e-helm"}},[s._v("#")]),s._v(" n9e-helm")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/flashcatcloud/n9e-helm",target:"_blank",rel:"noopener noreferrer"}},[s._v("n9e-helm"),n("OutboundLink")],1),s._v(" 用于在k8s集群中安装"),n("a",{attrs:{href:"https://github.com/didi/nightingale",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nightingale"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("h3",{attrs:{id:"获取-repo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取-repo"}},[s._v("#")]),s._v(" 获取 repo")]),s._v(" "),n("p",[n("code",[s._v("git clone https://github.com/flashcatcloud/n9e-helm.git")])]),s._v(" "),n("h3",{attrs:{id:"配置chart"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置chart"}},[s._v("#")]),s._v(" 配置chart")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" n9e-helm/values.yaml\n···\n  ingress:\n    hosts:\n      web: hello.n9e.info   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 ingress 时这里配置域名 需集群中已安装ingress-controller")]),s._v("\n···\nexternalURL: http://hello.n9e.info "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n···\npersistence:\n  enabled: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设为true时需要集群中有动态存储 ")]),s._v("\n···\ncategraf:\n···\n    docker_socket: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 默认是"unix:///var/run/docker.sock"，如使用contained或其他运行时，设为空')]),s._v("\n    \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" n9e-helm/categraf/conf/config.toml  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 已安装好的可以 kubectl edit configmap -n n9e categraf-config 修改")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ip")]),s._v('"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h3",{attrs:{id:"安装chart"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装chart"}},[s._v("#")]),s._v(" 安装chart")]),s._v(" "),n("p",[s._v("使用 "),n("code",[s._v("nightingale")]),s._v(" 名称进行安装:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("helm install nightingale ./n9e-helm -n n9e --create-namespace\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("查看Pod 都 Running 后就安装好了")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ak8s-01 n9e-helm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get po -n n9e")]),s._v("\nNAME                                  READY   STATUS    RESTARTS      AGE\nnightingale-categraf-v6-fwhfp         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("             10m\nnightingale-categraf-v6-g786t         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("             10m\nnightingale-center-6579b88556-6x75l   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("10m ago"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   10m\nnightingale-database-0                "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("             10m\nnightingale-prometheus-0              "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("             10m\nnightingale-redis-0                   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("             10m\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("查看 ingress")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ak8s-01 n9e-helm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get ingress -n n9e")]),s._v("\nNAME                  CLASS     HOSTS           ADDRESS   PORTS   AGE\nnightingale-ingress   higress   hello.n9e.info             "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("      17m\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("配置本地hosts  "),n("code",[s._v("hello.n9e.info ingress节点IP")])]),s._v(" "),n("p",[s._v("在浏览器输入 "),n("code",[s._v("http://hello.n9e.info")]),s._v("，")]),s._v(" "),n("p",[s._v("然后输入初始用户名 "),n("code",[s._v("root")]),s._v("，初始密码 "),n("code",[s._v("root.2020")]),s._v("即可登录系统。")]),s._v(" "),n("p",[s._v("首次登陆需配置数据源：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ak8s-01 n9e-helm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get svc -n n9e")]),s._v("\nNAME                     TYPE        CLUSTER-IP      EXTERNAL-IP   PORT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    AGE\nnightingale-center       ClusterIP   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.108")]),s._v(".76.105   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/TCP     17m\nnightingale-database     ClusterIP   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.111")]),s._v(".68.130   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("/TCP   17m\nnightingale-prometheus   ClusterIP   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.97")]),s._v(".109.82    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9090")]),s._v("/TCP   17m\nnightingale-redis        ClusterIP   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".180.209   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/TCP   17m\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("查看数据源 prometheus 的 service ，")]),s._v(" "),n("p",[s._v("配置 url 为：http://nightingale-prometheus:9090  或http://10.97.109.82:9090")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/z3942/images/img/image-20230520044945127.png",alt:"image-20230520044945127"}})]),s._v(" "),n("p",[s._v("克隆内置仪表盘查看")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/z3942/images/img/image-20230520045204908.png",alt:"image-20230520045204908"}})])])}),[],!1,null,null,null);n.default=a.exports}}]);