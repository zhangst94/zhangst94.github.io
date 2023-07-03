(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{380:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"什么是service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是service"}},[s._v("#")]),s._v(" 什么是Service")]),s._v(" "),t("ul",[t("li",[s._v("Service可以简单的理解为逻辑上的一组Pod。")]),s._v(" "),t("li",[s._v("一种可以访问Pod的策略，而且其他Pod可以通过这个Service访问到这个Service代理的Pod。")]),s._v(" "),t("li",[s._v("相对于Pod而言，它会有一个固定的名称，一旦创建就固定不变。")]),s._v(" "),t("li",[s._v("在创建service的时候会同步创建一个同名的EndPoint，这个EndPoint里面记录的就是Pod的IP地址")])]),s._v(" "),t("h2",{attrs:{id:"创建一个service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个service"}},[s._v("#")]),s._v(" 创建一个service")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --- 更改配置参数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("master01 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim nginx-svc.yaml")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Service\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("svc\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("svc\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Service端口的名称  根据他的属性来命名")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Service自己的端口, servicea --\x3e serviceb http://serviceb,http://serviceb:8080 ")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("protocol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" TCP "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# UDP TCP SCTP default: TCP")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("targetPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后端应用的端口")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("protocol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" TCP\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("targetPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 所代理Pod的label")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("sessionAffinity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" None\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ClusterIP \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[s._v("创建service；使用service代理k8s内部应用")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --- 创建一个service")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl create -f nginx-svc.yaml ")]),s._v("\nservice/nginx-svc created\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --- 查看创建的service")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个创建的service的IP地址是10.101.142.84     代理的后端应用的端口是80和443")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get svc")]),s._v("\nNAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("          AGE\nnginx-svc    ClusterIP   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.101")]),s._v(".142.84   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/TCP,443/TCP   4s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("测试访问service")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --- 在同一namespace下去验证通过service访问pod")]),s._v("\n那么我们就可以通过clusterIP访问到应用，但是我们是不建议使用clusterIP反问应用的，\n我们建议是使用service的name去访问\n \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# curl 172.18.195.17  // 通过pod的地址是可以访问到pod的页面内容的")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Welcome to nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# curl 10.101.142.84  // 也可以通过service的clusterIP访问到pod的页面的内容")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Welcome to nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# curl nginx-svc  // 也可以通过service的name访问到pod的页面的内容")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Welcome to nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# curl http://nginx-svc.default 跨namespace需要加上.default")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pod重启之后它的IP地址会发生变化，查看service地址及pod地址对应的endpoints,可以看到会把重建后的地址更新到service针对的ep中。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 所以说我们不需要关注service后端应用到底产生了什么样的变化，而是直接可以访问到我们的应用，")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 而且service的名称会更可靠，而且会更有稳定性。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务之间的调用使用service的名称去调用，不要使用clusterIP地址去调用")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一般情况下：应用之间的调用不要使用跨namespace，因为它很容易形成一个网状结构的网络，很不好处理")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用到情况：假设我们有一个中间件，比如说Redis，这个Redis可能会跟很多项目去共用数据，")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个项目可能部署在好几个namespace下，这个namespace去访问公共的Redis，")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 那么我们就可以把这个中间件或Redis单独的找一个namespace存放，")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以为其它的namespace调用。这样就可以使用跨namespace去调用。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"使用service代理k8s外部应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用service代理k8s外部应用"}},[s._v("#")]),s._v(" 使用service代理k8s外部应用")]),s._v(" "),t("p",[s._v("service代理k8s外部应用使用场景")]),s._v(" "),t("p",[s._v("希望在生产环境中使用某个固定的名称而非IP地址进行访问外部的中间件服务\n希望Service指向另一个Namespace中或其他集群中的服务\n某个项目正在迁移至k8s集群，但是一部分服务仍然在集群外部，\n此时可以使用service代理至k8s集群外部的服务")]),s._v(" "),t("h3",{attrs:{id:"使用service代理k8s外部应用-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用service代理k8s外部应用-2"}},[s._v("#")]),s._v(" 使用service代理k8s外部应用")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("master01 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat nginx-svc-external.yaml ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Service\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("svc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("external\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("svc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("external\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Service端口的名称")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Service自己的端口, servicea --\x3e serviceb http://serviceb,http://serviceb:8080 ")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("protocol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" TCP "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# UDP TCP SCTP default: TCP")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("targetPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后端应用的端口")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("sessionAffinity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" None\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ClusterIP\n  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --- 创建service代理k8s外部应用的pod")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建service.pod")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("master01 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl create -f nginx-svc-external.yaml ")]),s._v("\nservice/nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("svc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("external created\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ---手动创建一个service对应的endpoints")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建endpoints.yaml配置文件")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("master01 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim nginx-ep-external.yaml")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Endpoints\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("svc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("external\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("svc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("external "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 它要和service的名称一致，一致就会去建立连接")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" default\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("subsets")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("addresses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ip")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 220.181.38.148     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写外部服务的IP地址，比如我们需要访问百度的吧。")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 外部服务的端口号。")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("protocol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" TCP          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 协议也要一致")]),s._v("\n  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请求对应的service，是否和直接curl百度的数据一致")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ak8s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get svc nginx-svc-external")]),s._v("\nNAME                 TYPE        CLUSTER"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("IP       EXTERNAL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("IP   PORT(S)    AGE\nnginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("svc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("external   ClusterIP   10.100.152.144   <none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("        80/TCP     54s\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 说明service代理k8s外部应用OK")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ak8s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# curl -I 10.100.152.144")]),s._v("\nHTTP/1.1 200 OK\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Date")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Wed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 17 May 2023 18"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("57"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("19 GMT\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Apache\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Last-Modified")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Tue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 12 Jan 2010 13"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("48"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("00 GMT\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ETag")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"51-47cf7e6ee8400"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Accept-Ranges")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" bytes\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Content-Length")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("81")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Cache-Control")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" max"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("age=86400\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Expires")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Thu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 18 May 2023 18"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("57"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("19 GMT\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Connection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Keep"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Alive\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("Content-Type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" text/html\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br")])]),t("h3",{attrs:{id:"使用service反代域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用service反代域名"}},[s._v("#")]),s._v(" 使用Service反代域名")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ---创建service反代域名yaml配置文件")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim nginx-externalName.yaml ")]),s._v("\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app: nginx-externalname\n  name: nginx-externalname\nspec:\n  type: ExternalName\n  externalName: www.baidu.com\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl apply -f nginx-externalName.yaml ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ak8s-01 study"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get svc nginx-externalname")]),s._v("\nNAME                 TYPE           CLUSTER-IP       EXTERNAL-IP   PORT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    AGE\nnginx-externalname   ExternalName   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           baidu.com     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("     15m\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl exec -ti busybox -- sh")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过百度的IP地址是可以访问的")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请求http://nginx-externalname这个域名，这个域名有反代到www.baidu.com，")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这是一个跨域的现象，跨域被百度给拒绝了；")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不能去访问，报错403，在使用的时候一定要考虑跨域的现象。")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("h2",{attrs:{id:"service常用类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service常用类型"}},[s._v("#")]),s._v(" service常用类型")]),s._v(" "),t("p",[s._v("类型一："),t("strong",[s._v("ClusterIP")]),s._v("：在集群内部使用，也是默认值。")]),s._v(" "),t("p",[s._v("service的地址不要和公司的网段去重复，还有Pod的网段是不建议去重复。\nservice的地址基于k8s集群内部去管理的，外部网络不可以访问\n在node节点是可以访问的，pod也可以访问的，k8s外部网络不可以访问")]),s._v(" "),t("p",[s._v("类型二："),t("strong",[s._v("ExternalName")]),s._v("：通过返回定义的CNAME别名。")]),s._v(" "),t("p",[s._v("在这个ExternalName定义了一个外部的域名，\n解析nginx-externalname就可以解析到ExternalName对应的dns记录\n然后就可以访问到它了www.baidu.com")]),s._v(" "),t("p",[s._v("类型三："),t("strong",[s._v("NodePort")]),s._v("：kube-proxy的节点代理端口")]),s._v(" "),t("p",[s._v("NodePort：在所有安装了kube-proxy的节点上打开一个端口，此端口可以代理至后端Pod，\n然后集群外部可以使用节点的IP地址和NodePort的端口号访问到集群Pod的服务。\nNodePort端口范围默认是30000-32767。")]),s._v(" "),t("p",[s._v("类型四："),t("strong",[s._v("LoadBalancer")]),s._v("：使用云提供商的负载均衡器公开服务。")])])}),[],!1,null,null,null);t.default=e.exports}}]);