(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{369:function(s,n,a){"use strict";a.r(n);var t=a(4),r=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"containerd-配置加速"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#containerd-配置加速"}},[s._v("#")]),s._v(" containerd 配置加速")]),s._v(" "),n("p",[s._v("1、指定配置文件目录")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[plugins."io.containerd.grpc.v1.cri".registry]\n      config_path = "/etc/containerd/certs.d/"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("2、根据镜像仓库创建文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cd /etc/containerd/certs.d/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("3、配置加速")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /etc/containerd/certs.d/docker.io\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/etc/containerd/certs.d/docker.io/hosts.toml "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\nserver = "https://docker.io"\n[host."https://g0v522ip.mirror.aliyuncs.com"]\n  capabilities = ["pull","resolve"]\n[host."https://docker.mirrors.ustc.edu.cn"]\n  capabilities = ["pull","resolve"]\n[host."https://docker.mirrors.sjtug.sjtu.edu.cn"]\n  capabilities = ["pull","resolve"]\n[host."https://registry-1.docker.io"]\n  capabilities = ["pull","resolve","push"]\nEOF')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /etc/containerd/certs.d/k8s.gcr.io\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/etc/containerd/certs.d/k8s.gcr.io/hosts.toml "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\nserver = "https://k8s.gcr.io"\n[host."https://lank8s.cn"]\n  capabilities = ["pull","resolve"]\n[host."https://k8s-gcr-io.mirrors.sjtug.sjtu.edu.cn"]\n  capabilities = ["pull","resolve"]\n[host."https://gcr.nju.edu.cn/google-containers"]\n  capabilities = ["pull","resolve"]\n[host."https://k8s.dockerproxy.com"]\n  capabilities = ["pull","resolve"]\nEOF')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /etc/containerd/certs.d/quay.io \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/etc/containerd/certs.d/quay.io /hosts.toml "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\nserver = "https://quay.io"\n[host."https://quay.mirrors.ustc.edu.cn"]\n  capabilities = ["pull","resolve"]\n[host."https://quay.nju.edu.cn"]\n  capabilities = ["pull","resolve"]\n[host."https://quay.io"]\n  capabilities = ["pull","resolve","push"]\nEOF')]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br")])]),n("p",[s._v("注意的是：")]),s._v(" "),n("ul",[n("li",[s._v("如果hosts.toml文件中的capabilities中不加resolve的话，无法加速镜像")]),s._v(" "),n("li",[s._v("要配保底的加速站点，否则可能会导致下载失败")])]),s._v(" "),n("p",[s._v("参考：https://blog.51cto.com/lajifeiwomoshu/5428345")]),s._v(" "),n("h2",{attrs:{id:"docker加速配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker加速配置"}},[s._v("#")]),s._v(" Docker加速配置")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("vim /etc/docker/daemon.json\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry-mirrors"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://hub-mirror.c.163.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://mirror.baidubce.com"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    网易\n        http"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//hub-mirror.c.163.com")]),s._v("\n    ustc\n        https"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//docker.mirrors.ustc.edu.cn")]),s._v("\n    百度云\n        https"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//mirror.baidubce.com/")]),s._v("\n    南京大学\n        https"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//docker.nju.edu.cn/")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("div",{staticClass:"language-markdown line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[s._v("Docker-hub\n    上海交通大学\n        docker.mirrors.sjtug.sjtu.edu.cn\n    中科大\n        docker.mirrors.ustc.edu.cn\n    docker proxy\n        dockerproxy.com\ngcr.io\n    南京大学\n        gcr.nju.edu.cn\n    docker proxy\n        gcr.dockerproxy.com\n    lank8s：后期可能会转成付费\n        gcr.lank8s.cn\nk8s.gcr.io\n    上海交通大学\n        k8s-gcr-io.mirrors.sjtug.sjtu.edu.cn\n    南京大学\n        gcr.nju.edu.cn/google-containers\n    docker proxy\n        k8s.dockerproxy.com\n    lank8s\n        lank8s.cn\nghcr.io\n    docker proxy\n        ghcr.dockerproxy.com\n    南京大学\n        ghcr.nju.edu.cn\nquay.io\n    中科大\n        quay.mirrors.ustc.edu.cn\n    南京大学\n        quay.nju.edu.cn\nnvcr.io\n    南京大学\n        ngc.nju.edu\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br")])]),n("p",[s._v("更多好用的镜像：https://github.com/eryajf/Thanks-Mirror")])])}),[],!1,null,null,null);n.default=r.exports}}]);