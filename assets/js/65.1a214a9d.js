(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{390:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"initcontainer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initcontainer"}},[s._v("#")]),s._v(" InitContainer")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Init容器可以包含一些安装过程中应用容器中不存在的实用工具或个性化代码;")])]),s._v(" "),t("li",[t("p",[s._v("Init容器可以安全地运行这些工具，避免这些工具导致应用镜像的安全性降低;")])]),s._v(" "),t("li",[t("p",[s._v("Init容器可以以root身份运行，执行一些高权限命令;")])]),s._v(" "),t("li",[t("p",[s._v("Init容器相关操作执行完成以后即退出，不会给业务容器带来安全隐患。")])])]),s._v(" "),t("p",[s._v("在主应用启动之前，做一些初始化的操作，比如创建文件、修改内核参数等待依赖程序启动或其他需要在主程序启动之前需要做的工作")]),s._v(" "),t("h3",{attrs:{id:"初始化容器和普通容器、poststart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化容器和普通容器、poststart"}},[s._v("#")]),s._v(" 初始化容器和普通容器、PostStart")]),s._v(" "),t("h4",{attrs:{id:"lnit容器与poststart的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lnit容器与poststart的区别"}},[s._v("#")]),s._v(" lnit容器与PostStart的区别")]),s._v(" "),t("ul",[t("li",[s._v("PostStart:依赖主应用的环境，而且并不一定先于Command运行")]),s._v(" "),t("li",[s._v("InitContainer:不依赖主应用的环境，可以有更高的权限和更多的工具，一定会在主应用启动之前完成")])]),s._v(" "),t("h4",{attrs:{id:"lnit容器与普通的容器的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lnit容器与普通的容器的区别"}},[s._v("#")]),s._v(" lnit容器与普通的容器的区别")]),s._v(" "),t("ul",[t("li",[s._v("它们总是运行到完成")]),s._v(" "),t("li",[s._v("上一个运行完成才会运行下一个")]),s._v(" "),t("li",[s._v("如果Pod的 Init容器失败，Kubernetes会不断地重启该Pod，直到 Init容器成功为止,但是Pod对应的restartPolicy值为Never，Kubernetes不会重新启动Pod")]),s._v(" "),t("li",[s._v("Init容器不支持lifecycle、livenessProbe、readinessProbe和 startupProbe")])]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apps/v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deployment\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("init\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("init\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kube"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("public\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("replicas")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("matchLabels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("init\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("init\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" data\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("emptyDir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("initContainers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" sh\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("c\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" touch /mnt/test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("init.txt\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" registry.cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("beijing.aliyuncs.com/dotbalo/busybox\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("imagePullPolicy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" IfNotPresent\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" init"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("touch\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumeMounts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" data\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mountPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /mnt\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" registry.cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("beijing.aliyuncs.com/dotbalo/busybox\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("imagePullPolicy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" IfNotPresent\n       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# command: ["/bin/bash", "-ce", "tail -f /dev/null"]')]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#加上如下这句，不然容器启动后因为没有常驻进程导致退出，状态:CrashLoopBackOff")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/sh"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-ce"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sleep 3600"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("init\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumeMounts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" data\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mountPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /mnt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br")])]),t("h3",{attrs:{id:"为什么要用临时容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用临时容器"}},[s._v("#")]),s._v(" 为什么要用临时容器？")]),s._v(" "),t("p",[s._v("临时容器:具有工具包+root权限，帮助排查pod里其他容器的问题，排查容器的容器。")]),s._v(" "),t("h3",{attrs:{id:"使用临时容器在线debug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用临时容器在线debug"}},[s._v("#")]),s._v(" 使用临时容器在线debug")]),s._v(" "),t("p",[s._v("开启临时容器")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /usr/lib/systemd/system/kube-apiserver.service\n--feature-gates"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("EphemeralContainers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /usr/lib/systemd/system/kube-controller-manager.service\n--feature-gates"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("EphemeralContainers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /usr/lib/systemd/system/kube-scheduler.service\n--feature-gates"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("EphemeralContainers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /usr/lib/systemd/system/kube-proxy.service\n--feature-gates"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("EphemeralContainers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/kubernetes/kubelet-conf.yml\nfeatureGates:\n  EphemeralContainers: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\nsystemctl  daemon-reload \nsystemctl  restart kube-apiserver kube-scheduler kube-controller-manager kubelet kube-proxy\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("直接在你的pod上注入一个容器，并打开控制台；")]),s._v(" "),t("p",[s._v("进入临时容器方式1")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubectl debug nginx-7f5f97857f-5kqvl  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ti")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--image")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("registry.cn-beijing.aliyuncs.com/dotbalo/debug-tools  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" kube-system  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("进入临时容器方式2")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubectl attach nginx-7f5f97857f-5kqvl "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" debugger-r8k88 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v("\nkubectl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" nginx-7f5f97857f-5kqvl "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v("  debugger-r8k88 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--bash")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);