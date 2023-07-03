(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{355:function(e,t,s){"use strict";s.r(t);var a=s(4),_=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"_1、main-全局设置。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、main-全局设置。"}},[e._v("#")]),e._v(" 1、main 全局设置。")]),e._v(" "),t("p",[t("code",[e._v("woker_processes 2;")])]),e._v(" "),t("blockquote",[t("p",[e._v("在配置文件的顶级 main 部分，worker 角色的工作进程的个数，master 进程是接收并分配请求给 worker 处理。这个数值简单一点可以设置为  cpu 的核数 grep ^processor /proc/cpuinfo | wc -l，也是 auto 值，如果开启了 ssl 和 gzip 更应该设置成与逻辑 CPU 数量一样甚至为 2 倍，可以减少 I/O 操作。如果 nginx 服务器还有其它服务，可以考虑适当减少。")])]),e._v(" "),t("p",[t("code",[e._v("worker_cpu_affinity;")])]),e._v(" "),t("blockquote",[t("p",[e._v("也是写在 main 部分。在高并发情况下，通过设置 cpu 粘性来降低由于多 CPU 核切换造成的寄存器等现场重建带来的性能损耗。如 worker_cpu_affinity 0001 0010 0100 1000; （四核）。")])]),e._v(" "),t("p",[t("code",[e._v("worker_connections 2048;")])]),e._v(" "),t("blockquote",[t("p",[e._v("写在 events 部分。每一个 worker 进程能并发处理（发起）的最大连接数（包含与客户端或后端被代理服务器间等所有连接数）。nginx 作为反向代理服务器，计算公式 最大连接数 = worker_processes *")])]),e._v(" "),t("p",[t("code",[e._v("worker_rlimit_nofile 10240;")])]),e._v(" "),t("blockquote",[t("p",[e._v("写在 main 部分。默认是没有设置，可以限制为操作系统最大的限制 65535。")])]),e._v(" "),t("p",[t("code",[e._v("use epoll;")])]),e._v(" "),t("blockquote",[t("p",[e._v("写在 events 部分。在 Linux 操作系统下，nginx 默认使用 epoll 事件模型，得益于此，nginx 在 Linux  操作系统下效率相当高。同时 Nginx 在 OpenBSD 或 FreeBSD 操作系统上采用类似于 epoll 的高效事件模型  kqueue。在操作系统不支持这些高效模型时才使用 select。")])]),e._v(" "),t("h3",{attrs:{id:"_2、http-服务器。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、http-服务器。"}},[e._v("#")]),e._v(" 2、http 服务器。")]),e._v(" "),t("p",[t("code",[e._v("sendfile on;")])]),e._v(" "),t("blockquote",[t("p",[e._v("开启高效文件传输模式，sendfile 指令指定 nginx 是否调用 sendfile 函数来输出文件，减少用户空间到内核空间的上下文切换。对于普通应用设为  on，如果用来进行下载等应用磁盘 IO 重负载应用，可设置为 off，以平衡磁盘与网络 I/O 处理速度，降低系统的负载；")])]),e._v(" "),t("p",[t("code",[e._v("keepalive_timeout 65;")])]),e._v(" "),t("blockquote",[t("p",[e._v("长连接超时时间，单位是秒，这个参数很敏感，涉及浏览器的种类、后端服务器的超时设置、操作系统的设置，可以另外起一片文章了。长连接请求大量小文件的时候，可以减少重建连接的开销，但假如有大文件上传，65s 内没上传完成会导致失败。如果设置时间过长，用户又多，长时间保持连接会占用大量资源；")])]),e._v(" "),t("p",[t("code",[e._v("send_timeout ;")])]),e._v(" "),t("blockquote",[t("p",[e._v("用于指定响应客户端的超时时间。这个超时仅限于两个连接活动之间的时间，如果超过这个时间，客户端没有任何活动，Nginx 将会关闭连接；")])]),e._v(" "),t("p",[t("code",[e._v("client_max_body_size 10m;")])]),e._v(" "),t("blockquote",[t("p",[e._v("允许客户端请求的最大单文件字节数。如果有上传较大文件，请设置它的限制值；")])]),e._v(" "),t("p",[t("code",[e._v("client_body_buffer_size 128k;")])]),e._v(" "),t("blockquote",[t("p",[e._v("缓冲区代理缓冲用户端请求的最大字节数；")])]),e._v(" "),t("h3",{attrs:{id:"_3、模块-http-proxy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、模块-http-proxy"}},[e._v("#")]),e._v(" 3、模块 http_proxy")]),e._v(" "),t("p",[t("code",[e._v("proxy_read_timeout 60;")])]),e._v(" "),t("blockquote",[t("p",[e._v("连接成功后，与后端服务器两个成功的响应操作之间超时时间 (代理接收超时)")])]),e._v(" "),t("p",[t("code",[e._v("proxy_buffer_size 4k;")])]),e._v(" "),t("blockquote",[t("p",[e._v("设置代理服务器（nginx）从后端 realserver 读取并保存用户头信息的缓冲区大小，默认与 proxy_buffers 大小相同，其实可以将这个指令值设的小一点")])]),e._v(" "),t("p",[t("code",[e._v("proxy_buffers 4 32k;")])]),e._v(" "),t("blockquote",[t("p",[e._v("proxy_buffers 缓冲区，nginx 针对单个连接缓存来自后端 realserver 的响应，网页平均在 32k 以下的话，这样设置")])]),e._v(" "),t("p",[t("code",[e._v("proxy_busy_buffers_size 64k;")])]),e._v(" "),t("blockquote",[t("p",[e._v("高负荷下缓冲大小（proxy_buffers*2）")])]),e._v(" "),t("p",[t("code",[e._v("proxy_max_temp_file_size;")])]),e._v(" "),t("blockquote",[t("p",[e._v("当 proxy_buffers 放不下后端服务器的响应内容时，会将一部分保存到硬盘的临时文件中，这个值用来设置最大临时文件大小，默认 1024M，它与 proxy_cache 没有关系。大于这个值，将从 upstream 服务器传回。设置为 0 禁用。")])]),e._v(" "),t("p",[t("code",[e._v("proxy_temp_file_write_size 64k;")])]),e._v(" "),t("blockquote",[t("p",[e._v("当缓存被代理的服务器响应到临时文件时，这个选项限制每次写临时文件的大小。proxy_temp_path（可以在编译的时候）指定写到哪那个目录。")])]),e._v(" "),t("h3",{attrs:{id:"_4、模块-http-gzip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、模块-http-gzip"}},[e._v("#")]),e._v(" 4、模块 http_gzip：")]),e._v(" "),t("p",[t("code",[e._v("gzip on :")])]),e._v(" "),t("blockquote",[t("p",[e._v("开启 gzip 压缩输出，减少网络传输。")])]),e._v(" "),t("p",[t("code",[e._v("gzip_min_length 1k ：")])]),e._v(" "),t("blockquote",[t("p",[e._v("设置允许压缩的页面最小字节数，页面字节数从 header 头得 content-length 中进行获取。默认值是 20。建议设置成大于 1k 的字节数，小于 1k 可能会越压越大。")])]),e._v(" "),t("p",[t("code",[e._v("gzip_buffers 4 16k ：")])]),e._v(" "),t("blockquote",[t("p",[e._v("设置系统获取几个单位的缓存用于存储 gzip 的压缩结果数据流。4 16k 代表以 16k 为单位，安装原始数据大小以 16k 为单位的 4 倍申请内存。")])]),e._v(" "),t("p",[t("code",[e._v("gzip_http_version 1.0 ：")])]),e._v(" "),t("blockquote",[t("p",[e._v("用于识别 http 协议的版本，早期的浏览器不支持 Gzip 压缩，用户就会看到乱码，所以为了支持前期版本加上了这个选项，如果你用了 Nginx 的反向代理并期望也启用 Gzip 压缩的话，由于末端通信是 http/1.0，故请设置为 1.0。")])]),e._v(" "),t("p",[t("code",[e._v("gzip_comp_level 6 ：")])]),e._v(" "),t("blockquote",[t("p",[e._v("gzip 压缩比，1 压缩比最小处理速度最快，9 压缩比最大但处理速度最慢 (传输快但比较消耗 cpu)")])]),e._v(" "),t("p",[t("code",[e._v("gzip_types ：")])]),e._v(" "),t("blockquote",[t("p",[e._v("匹配 mime 类型进行压缩，无论是否指定,”text/html” 类型总是会被压缩的。")])]),e._v(" "),t("p",[t("code",[e._v("gzip_proxied any ：")])]),e._v(" "),t("blockquote",[t("p",[e._v("Nginx 作为反向代理的时候启用，决定开启或者关闭后端服务器返回的结果是否压缩，匹配的前提是后端服务器必须要返回包含”Via” 的 header 头。")])]),e._v(" "),t("p",[t("code",[e._v("gzip_vary on ：")])]),e._v(" "),t("blockquote",[t("p",[e._v("和 http 头有关系，会在响应头加个 Vary: Accept-Encoding ，可以让前端的缓存服务器缓存经过 gzip 压缩的页面，例如，用 Squid 缓存经过 Nginx 压缩的数据。")])]),e._v(" "),t("h3",{attrs:{id:"_5、server-虚拟主机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、server-虚拟主机"}},[e._v("#")]),e._v(" 5、server 虚拟主机")]),e._v(" "),t("p",[t("code",[e._v("listen;")])]),e._v(" "),t("blockquote",[t("p",[e._v("监听端口，默认 80，小于 1024 的要以 root 启动。可以为 listen *:80、listen 127.0.0.1:80 等形式。")])]),e._v(" "),t("p",[t("code",[e._v("server_name;")])]),e._v(" "),t("blockquote",[t("p",[e._v("服务器名，如 localhost、www.example.com，可以通过正则匹配。")])]),e._v(" "),t("h3",{attrs:{id:"_6、模块-http-stream"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、模块-http-stream"}},[e._v("#")]),e._v(" 6、模块 http_stream")]),e._v(" "),t("p",[t("code",[e._v("host:port options;")])]),e._v(" "),t("blockquote",[t("p",[e._v("这个模块通过一个简单的调度算法来实现客户端 IP 到后端服务器的负载均衡，upstream 后接负载均衡器的名字，后端 realserver 以 host:port options;  方式组织在 {} 中。如果后端被代理的只有一台，也可以直接写在 proxy_pass 。")])]),e._v(" "),t("h3",{attrs:{id:"_7、location"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、location"}},[e._v("#")]),e._v(" 7、location")]),e._v(" "),t("p",[t("code",[e._v("root /var/www/html;")])]),e._v(" "),t("blockquote",[t("p",[e._v("定义服务器的默认网站根目录位置。如果 locationURL 匹配的是子目录或文件，root 没什么作用，一般放在 server 指令里面或 / 下。")])]),e._v(" "),t("p",[t("code",[e._v("index index.jsp index.html index.htm;")])]),e._v(" "),t("blockquote",[t("p",[e._v("定义路径下默认访问的文件名，一般跟着 root 放")])]),e._v(" "),t("p",[t("code",[e._v("proxy_pass http:/backend;")])]),e._v(" "),t("blockquote",[t("p",[e._v("请求转向 backend 定义的服务器列表，即反向代理，对应 upstream 负载均衡器。也可以 proxy_pass http://ip:port。")])]),e._v(" "),t("h3",{attrs:{id:"_8、访问控制-allow-deny"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、访问控制-allow-deny"}},[e._v("#")]),e._v(" 8、访问控制 allow/deny")]),e._v(" "),t("p",[e._v("Nginx 的访问控制模块默认就会安装，而且写法也非常简单，可以分别有多个"),t("code",[e._v("allow,deny")]),e._v("，允许或禁止某个 ip 或 ip 段访问，依次满足任何一个规则就停止往下匹配。如：")]),e._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("location")]),e._v(" /nginx-status")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("stub_status")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("on")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("access_log")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("off")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# auth_basic "NginxStatus";')]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# auth_basic_user_file /usr/local/nginx-1.6/htpasswd;")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("allow")]),e._v(" 192.168.10.100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("allow")]),e._v(" 172.29.73.0/24")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("deny")]),e._v(" all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("p",[e._v("也常用 httpd-devel 工具的 "),t("code",[e._v("htpasswd")]),e._v(" 来为访问的路径设置登录密码：")]),e._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# htpasswd -c htpasswd admin")]),e._v("\nNew passwd:\nRe-type new password:\nAdding password for user admin\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# htpasswd htpasswd admin //修改admin密码")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# htpasswd htpasswd sean //多添加一个认证用户")]),e._v("\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("参考：https://mp.weixin.qq.com/s?__biz=Mzg2NjY4NTk2MQ==&mid=2247495887&idx=1&sn=c3c142eb87fd1574ecc5c566a093c920&source=41#wechat_redirect")])])}),[],!1,null,null,null);t.default=_.exports}}]);