(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{382:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"label-selector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#label-selector"}},[s._v("#")]),s._v(" Label&Selector")]),s._v(" "),a("p",[a("strong",[s._v("Label")]),s._v("：对k8s中各种资源进行分类、分组，添加一个具有特别属性的一个标签")]),s._v(" "),a("p",[a("strong",[s._v("Selector")]),s._v("：通过一个过滤的语法进行查找到对应标签的资源")]),s._v(" "),a("p",[s._v("当Kubernetes对系统的任何API对象如Pod和节点进行“分组”时，会对其添加Label（key=value形式的“键-值对”）用以精准地选择对应的API对象。而Selector（标签选择器）则是针对匹配对象的查询方法。注：键-值对就是key-value pair")]),s._v(" "),a("p",[s._v("例如，常用的标签tier可用于区分容器的属性，如frontend、backend；或者一个release_track用于区分容器的环境，如canary、production等")]),s._v(" "),a("h3",{attrs:{id:"label"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#label"}},[s._v("#")]),s._v(" Label")]),s._v(" "),a("p",[s._v("定义 Label")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl label node k8s-node02 region=subnet7")]),s._v("\nnode/k8s-node02 labeled\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("通过Selector对其筛选")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get no -l region=subnet7")]),s._v("\nNAME         STATUS   ROLES    AGE     VERSION\nk8s-node02   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   3d17h   v1.17\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("在Deployment或其他控制器中指定将Pod部署到该节点")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dnsPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ClusterFirst\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nodeSelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("region")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" subnet7\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restartPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Always\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("对Service进行Label")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl label svc canary-v1 -n canary-production env=canary version=v1")]),s._v("\nservice/canary-v1 labeled\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("查看Labels")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get svc -n canary-production --show-labels")]),s._v("\nNAME        TYPE        CLUSTER-IP      EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    AGE   LABELS\ncanary-v1   ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.110")]),s._v(".253.62   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/TCP   24h   "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("canary,version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("v1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("查看所有Version为v1的svc")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 canary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get svc --all-namespaces -l version=v1")]),s._v("\nNAMESPACE           NAME        TYPE        CLUSTER-IP      EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    AGE\ncanary-production   canary-v1   ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.110")]),s._v(".253.62   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/TCP   25h\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"selector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selector"}},[s._v("#")]),s._v(" Selector")]),s._v(" "),a("p",[s._v("Selector主要用于资源的匹配，只有符合条件的资源才会被调用或使用，可以使用该方式对集群中的各类资源进行分配")]),s._v(" "),a("p",[s._v("假如对Selector进行条件匹配，目前已有的Label如下")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get svc --show-labels")]),s._v("\nNAME          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    AGE     LABELS\ndetails       ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.99")]),s._v(".9.178      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9080")]),s._v("/TCP   45h     "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("details\nkubernetes    ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".0.1        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("/TCP    3d19h   "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("apiserver,provider"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes\nnginx         ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.106")]),s._v(".194.137   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/TCP     2d21h   "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("productpage,version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("v1\nnginx-v2      ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.108")]),s._v(".176.132   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/TCP     2d20h   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nproductpage   ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.105")]),s._v(".229.52    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9080")]),s._v("/TCP   45h     "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("productpage,tier"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("frontend\nratings       ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".104.95     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9080")]),s._v("/TCP   45h     "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ratings\nreviews       ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.102")]),s._v(".188.143   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9080")]),s._v("/TCP   45h     "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("reviews\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("选择app为reviews或者productpage的svc")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get svc -l  'app in (details, productpage)' --show-labels")]),s._v("\nNAME          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    AGE     LABELS\ndetails       ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.99")]),s._v(".9.178      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9080")]),s._v("/TCP   45h     "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("details\nnginx         ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.106")]),s._v(".194.137   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/TCP     2d21h   "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("productpage,version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("v1\nproductpage   ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.105")]),s._v(".229.52    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9080")]),s._v("/TCP   45h     "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("productpage,tier"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("frontend\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("选择app为productpage或reviews但不包括version=v1的svc")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get svc -l  version!=v1,'app in (details, productpage)' --show-labels")]),s._v("\nNAME          TYPE        CLUSTER-IP      EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    AGE   LABELS\ndetails       ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.99")]),s._v(".9.178     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9080")]),s._v("/TCP   45h   "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("details\nproductpage   ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.105")]),s._v(".229.52   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9080")]),s._v("/TCP   45h   "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("productpage,tier"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("frontend\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("选择labelkey名为app的svc")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get svc -l app --show-labels")]),s._v("\nNAME          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    AGE     LABELS\ndetails       ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.99")]),s._v(".9.178      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9080")]),s._v("/TCP   45h     "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("details\nnginx         ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.106")]),s._v(".194.137   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/TCP     2d21h   "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("productpage,version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("v1\nproductpage   ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.105")]),s._v(".229.52    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9080")]),s._v("/TCP   45h     "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("productpage,tier"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("frontend\nratings       ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".104.95     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9080")]),s._v("/TCP   45h     "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ratings\nreviews       ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.102")]),s._v(".188.143   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9080")]),s._v("/TCP   45h     "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("reviews\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("在实际使用中，Label的更改是经常发生的事情，可以使用overwrite参数修改标签")]),s._v(" "),a("p",[s._v("修改标签，比如将version=v1改为version=v2")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 canary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get svc -n canary-production --show-labels")]),s._v("\nNAME        TYPE        CLUSTER-IP      EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    AGE   LABELS\ncanary-v1   ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.110")]),s._v(".253.62   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/TCP   26h   "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("canary,version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("v1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 canary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl label svc canary-v1 -n canary-production version=v2 --overwrite")]),s._v("\nservice/canary-v1 labeled\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 canary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get svc -n canary-production --show-labels")]),s._v("\nNAME        TYPE        CLUSTER-IP      EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    AGE   LABELS\ncanary-v1   ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.110")]),s._v(".253.62   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/TCP   26h   "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("canary,version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("v2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("删除标签，比如删除version")]),s._v(" "),a("p",[s._v("复制")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 canary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl label svc canary-v1 -n canary-production version-")]),s._v("\nservice/canary-v1 labeled\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 canary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get svc -n canary-production --show-labels")]),s._v("\nNAME        TYPE        CLUSTER-IP      EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    AGE   LABELS\ncanary-v1   ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.110")]),s._v(".253.62   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/TCP   26h   "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("canary\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);