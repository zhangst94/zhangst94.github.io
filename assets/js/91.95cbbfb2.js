(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{416:function(e,s,a){"use strict";a.r(s);var t=a(4),n=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"openebs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#openebs"}},[e._v("#")]),e._v(" OpenEBS")]),e._v(" "),s("p",[e._v("如果你只想使用本地 PV（主机路径和设备），你可以使用以下命令安装精简版的 OpenEBS。")]),e._v(" "),s("p",[e._v("OpenEBS LocalPV https://github.com/openebs/dynamic-localpv-provisioner")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("kubectl apply "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v(" https://openebs.github.io/charts/openebs-operator-lite.yaml\nkubectl apply "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v(" https://openebs.github.io/charts/openebs-lite-sc.yaml\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("helm repo "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" openebs https://openebs.github.io/charts\nhelm repo update\nhelm "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--namespace")]),e._v(" openebs "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--name")]),e._v(" openebs openebs/openebs\n\nhelm pull openebs/openebs\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);