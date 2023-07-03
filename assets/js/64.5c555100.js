(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{386:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"计划任务-job-cronjob"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计划任务-job-cronjob"}},[s._v("#")]),s._v(" 计划任务-Job&CronJob")]),s._v(" "),t("h3",{attrs:{id:"什么是job"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是job"}},[s._v("#")]),s._v(" 什么是Job？")]),s._v(" "),t("p",[s._v("job常用作初始化数据和基本的创建操作。")]),s._v(" "),t("h3",{attrs:{id:"job配置参数详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#job配置参数详解"}},[s._v("#")]),s._v(" Job配置参数详解")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" batch/v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Job\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("job-name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" echo\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" echo\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" default\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("suspend")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.21+")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ttlSecondsAfterFinished")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行结束之后自动清理")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("backoffLimit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果任务执行失败,失败多少次后不再执行")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("completions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有多少个Pod执行成功,认为任务是成功的")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("parallelism")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 并行执行任务的数量  ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" echo\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" Hello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("Job\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" registry.cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("beijing.aliyuncs.com/dotbalo/busybox\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("imagePullPolicy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" IfNotPresent\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" echo\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("resources")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restartPolicy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Never\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[s._v("backoffLimit：如果任务执行失败,失败多少次后不再执行")]),s._v(" "),t("p",[s._v("completions：有多少个Pod执行成功,认为任务是成功的,为空默认和parallelism数值一样")]),s._v(" "),t("p",[s._v("parallelism：并行执行任务的数量  如果parallelism数值大于未完成任务数，只会创建未完成的数量;比如")]),s._v(" "),t("p",[s._v("completions是4，并发是3，第一次会创建3个Pod执行任务，第二次只会创建一个Pod执行任务")]),s._v(" "),t("p",[s._v("ttlSecondsAfterFinished：Job在执行结束之后（状态为completed或Failed）自动清理。设置为0表示执行结束立即删除，不设置则不会清楚，需要开启TTLAfterFinished特性")]),s._v(" "),t("p",[s._v("job.yaml文件不可以修改后replace/apply,只能kubectl delete -f job,yaml删除后,修改后重新create。job一般是配合Helm进行部署。")]),s._v(" "),t("h3",{attrs:{id:"更强大的计划任务cronjob"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更强大的计划任务cronjob"}},[s._v("#")]),s._v(" 更强大的计划任务CronJob")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" batch/v1beta1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CronJob\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hello\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hello\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" default\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("concurrencyPolicy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Allow\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("failedJobsHistoryLimit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobTemplate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hello\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("args")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /bin/sh\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("c\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" date;echo Hello from the Kubernetes cluster\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" registry.cn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("beijing.aliyuncs.com/dotbalo/busybox\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("imagePullPolicy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Always\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hello\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("resources")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restartPolicy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" OnFailure\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("securityContext")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("schedule")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*/1 * * * *'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("successfulJobsHistoryLimit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("suspend")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("p",[s._v("apiVersion: batch/v1beta1 #1.21+ batch/v1")]),s._v(" "),t("p",[s._v("schedule:调度周期，和Linux一致,分别是分时日月周。restartPolicy:重启策略，和Pod一致。")]),s._v(" "),t("p",[s._v("concurrencyPolicy:并发调度策略。可选参数如下:")]),s._v(" "),t("ul",[t("li",[s._v("Allow:允许同时运行多个任务。")]),s._v(" "),t("li",[s._v("Forbid:不允许并发运行，如果之前的任务尚未完成，新的任务不会被创建。")]),s._v(" "),t("li",[s._v("Replace:如果之前的任务尚未完成，新的任务会替换的之前的任务。")])]),s._v(" "),t("p",[s._v("uspend:如果设置为true，则暂停后续的任务，默认为false。")]),s._v(" "),t("p",[s._v("successfulJobsHistoryLimit:保留多少已完成的任务，按需配置。failedJobsHistoryLimit:保留多少失败的任务。")])])}),[],!1,null,null,null);t.default=e.exports}}]);