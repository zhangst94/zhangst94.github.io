(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{389:function(s,a,n){"use strict";n.r(a);var t=n(4),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"pv-pvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pv-pvc"}},[s._v("#")]),s._v(" PV&PVC")]),s._v(" "),a("p",[s._v("传统连接配置：\nk8s集群中的Pod有些数据需要存储的话；就可以使用volumes直接连它来存储。")]),s._v(" "),a("p",[s._v("PV：\n使用PV去连接它存储集群中的存储。一套集群中PV可能会有很多个，后面连接着不同类型的存储集群。")]),s._v(" "),a("p",[s._v("PVC：\n对PV的申请；我这个容器需要申请存储空间挂载到该容器上。")]),s._v(" "),a("h3",{attrs:{id:"pv配置参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pv配置参数"}},[s._v("#")]),s._v(" PV配置参数")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建NFS类型PV配置参数")]),s._v("\n \napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: pv0003\nspec:\n  capacity:  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PV的容量")]),s._v("\n    storage: 5Gi\n  volumeMode: Filesystem  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 挂载的类型 Filesystem：文件系统，block：块存储")]),s._v("\n  accessModes:  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PV的访问模式")]),s._v("\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Recycle  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回收策略")]),s._v("\n  storageClassName: slow\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PV的类，可以说是一个类名，PVC和PV的这个名字一样，才能被绑定。")]),s._v("\n  mountOptions:\n    - hard\n    - "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("nfsvers")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.1")]),s._v("\n  nfs:\n    path: /tmp\n    server: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h3",{attrs:{id:"回收策略-persistentvolumereclaimpolicy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回收策略-persistentvolumereclaimpolicy"}},[s._v("#")]),s._v(" 回收策略：persistentVolumeReclaimPolicy")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Recycle：")]),s._v("\n默认：Recycle: 回收相当于：rm "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v("\n需要存储支持Recycle；nfs和hostpath是支持Recycle的。\n比如你有一个Deployment——"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("PVC——PV,：假设有一个deployment配置的是PVC，\n这个PVC连接的是PV，这个PV的策略是Recycle\n如果说你删除Deployment的时候，可以选择删除PVC，若是删除PVC的情况下，\n这个PVC配置的是Recycle，它会把这个PV里面额内容给清除掉。\n这个存储动态存储可以考虑一下，静态存储的话不用去考虑\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Retain：保留；使用比较多。")]),s._v("\n删除PVC的时候，这个PV的数据还在，可以被其它的容器去挂载。\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Delete：PVC –-> PV,删除PVC后PV也会被删掉，")]),s._v("\n这一类的PV，需要支持删除的功能，动态存储默认方式。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"pv的访问模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pv的访问模式"}},[s._v("#")]),s._v(" PV的访问模式")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[s._v("ReadWriteOnce：RWO，              // 可以被单节点以读写的模式挂载。\nReadWriteMany：RWX，              // 可以被多节点以读写的形式挂载。NFS就是支持多个节点读写的。\nReadOnlyMany：ROX，               // 可以被多个节点以只读的形式挂载。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"pv的状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pv的状态"}},[s._v("#")]),s._v(" PV的状态")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[s._v("Available：                      // 空闲的PV，没有被任何PVC绑定。\nBound：                          // 已经被PVC绑定\nReleased：                       // PVC被删除，但是资源未被重新使用\nFailed：                         // 自动回收失败。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"创建pv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建pv"}},[s._v("#")]),s._v(" 创建PV")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl create -f nfs-pv.yaml ")]),s._v("\npersistentvolume/pv0001 created\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pv")]),s._v("\nNAME     CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM   STORAGECLASS   REASON   AGE\npv0001   5Gi        RWX            Recycle          Available           nfs-slow                13s\nAvailable：                  // 空闲的PV，没有被任何PVC绑定。\nBound：                      // 已经被PVC绑定\nReleased：                   // PVC被删除，但是资源未被重新使用\nFailed：                     // 自动回收失败。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"创建pvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建pvc"}},[s._v("#")]),s._v(" 创建PVC")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("master01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim nfs-pvc.yaml")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" PersistentVolumeClaim\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" myclaim  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PVC的名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("accessModes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ReadWriteMany  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读写类型\t")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumeMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Filesystem  \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("resources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("requests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2Gi  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 存储是要比PV的空间要小，不可以比它高")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storageClassName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("slow  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 要和PV的ClassName保持一致。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl create -f nfs-pvc.yaml ")]),s._v("\npersistentvolumeclaim/myclaim created\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pvc")]),s._v("\nNAME      STATUS   VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS   AGE\nmyclaim   Bound    pv0001   5Gi        RWX            nfs-slow       7s\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master01 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pv")]),s._v("\nNAME     CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM             STORAGECLASS   REASON   AGE\npv0001   5Gi        RWX            Recycle          Bound    default/myclaim   nfs-slow\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"pod使用pvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pod使用pvc"}},[s._v("#")]),s._v(" Pod使用PVC")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("        volumeMounts:\n        - mountPath: /tmp/pvc\n          name: pvc-test\n      dnsPolicy: ClusterFirst\n···\n      volumes:\n      - name: pvc-test\n        persistentVolumeClaim:\n          claimName: myclaim\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"pvc创建和挂载处于pending的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pvc创建和挂载处于pending的原因"}},[s._v("#")]),s._v(" PVC创建和挂载处于Pending的原因")]),s._v(" "),a("p",[s._v("pvc不能replace/apply时,先delete -f,再create;")]),s._v(" "),a("p",[s._v("PVC一直Pending的原因:")]),s._v(" "),a("ul",[a("li",[s._v("PVC的空间申请大小大于PV的大小")]),s._v(" "),a("li",[s._v("PVC的StorageClassName没有和PV的一致")]),s._v(" "),a("li",[s._v("PVC的accessModes和PV的不一致")])]),s._v(" "),a("p",[s._v("挂载PVC的Pod一直处于Pending")]),s._v(" "),a("ul",[a("li",[s._v("PVC没有创建成功")]),s._v(" "),a("li",[s._v("PVC和Pod不在同一个Namespace")])])])}),[],!1,null,null,null);a.default=e.exports}}]);