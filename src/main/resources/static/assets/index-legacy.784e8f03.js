!function(){function e(e,a){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,a){if(!e)return;if("string"==typeof e)return n(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,a)}(e))||a&&e&&"number"==typeof e.length){t&&(e=t);var l=0,o=function(){};return{s:o,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,u=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return u=e.done,e},e:function(e){c=!0,r=e},f:function(){try{u||null==t.return||t.return()}finally{if(c)throw r}}}}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,t=new Array(n);a<n;a++)t[a]=e[a];return t}var a=document.createElement("style");a.innerHTML=".el-drive-form-col[data-v-6e84d146]{padding-left:0!important}.zfile-site-id-input-site-type-select[data-v-6e84d146]{width:100px}.zfile-info-tooltip[data-v-6e84d146]{line-height:32px}.zfile-storage-edit[data-v-6e84d146] .z-form-item-input>.el-select{width:100%}\n",document.head.appendChild(a),System.register(["./base-legacy.79a28316.js","./button-legacy.de6f77a5.js","./popper-legacy.11dd4ac4.js","./popover-legacy.1bc93672.js","./link-legacy.8213c710.js","./tag-legacy.b431dc88.js","./switch-legacy.6fb569c7.js","./input-legacy.5c94c986.js","./select-legacy.61c6257e.js","./scrollbar-legacy.dc572a0d.js","./SvgIcon-legacy.7aa53c6f.js","./index-legacy.80d3f8d7.js","./common-legacy.659784d5.js","./ZFormItem-legacy.289abe9f.js","./admin-storage-legacy.de61cc9c.js","./request-legacy.c314e774.js","./admin-setting-legacy.3cb00d91.js","./vue3-clipboard.esm-bundler-legacy.fd707006.js","./route-block-legacy.2d113b05.js","./plugin-vue_export-helper-legacy.7bb61c33.js","./index-legacy.9384b887.js","./index-legacy.85dd86b1.js","./BadgeCheckIcon-legacy.f73790cb.js","./index-legacy.8ea32361.js","./index-legacy.fa20fae0.js","./focus-trap-legacy.271b160b.js","./validator-legacy.de23b084.js","./event-legacy.39ad8904.js","./scroll-legacy.3aa8de77.js","./index-legacy.167dff34.js","./_Uint8Array-legacy.07eecf66.js","./debounce-legacy.647e9b79.js","./index-legacy.61ab75a6.js","./dropdown-legacy.3fa4bae6.js","./index-legacy.16457413.js"],(function(n){"use strict";var a,t,l,o,r,u,c,i,s,d,m,f,y,p,v,g,h,b,k,S,V,w,P,A,_,j,I,U,q,C,T,x,E,L,z,N,F,M,O,K,R,H,B,D,Z,$,J,Q,W;return{setters:[function(e){a=e.D,t=e.A},function(){},function(){},function(){},function(e){l=e.E},function(){},function(e){o=e.E},function(){},function(e){r=e.E,u=e.a},function(){},function(e){c=e._},function(e){i=e.r,s=e.V,d=e.I,m=e.a8,f=e.a,y=e.b,p=e.e,v=e.m,g=e.j,h=e.L,b=e.u,k=e.t,S=e.f,V=e.F,w=e.v,P=e.J,A=e.K,_=e.k,j=e.Q,I=e.R,U=e.o,q=e.c,C=e.w},function(e){T=e.c},function(e){x=e.Z,E=e.a},function(e){L=e.f,z=e.g,N=e.h,F=e.i,M=e.e},function(e){O=e.d,K=e.E},function(e){R=e.l},function(e){H=e.t},function(e){B=e.b},function(e){D=e._},function(e){Z=e.E},function(e){$=e.E},function(e){J=e.r},function(e){Q=e.E},function(e){W=e.E},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var G={aliyun:[{name:"华东 1（杭州）",val:"oss-cn-hangzhou.aliyuncs.com"},{name:"华东 2（上海）",val:"oss-cn-shanghai.aliyuncs.com"},{name:"华北 1（青岛）",val:"oss-cn-qingdao.aliyuncs.com"},{name:"华北 2（北京）",val:"oss-cn-beijing.aliyuncs.com"},{name:"华北 3（张家口）",val:"oss-cn-zhangjiakou.aliyuncs.com"},{name:"华北 5（呼和浩特）",val:"oss-cn-huhehaote.aliyuncs.com"},{name:"华北 6（乌兰察布）",val:"oss-cn-wulanchabu.aliyuncs.com"},{name:"华南 1（深圳）",val:"oss-cn-shenzhen.aliyuncs.com"},{name:"华南 2（河源）",val:"oss-cn-heyuan.aliyuncs.com"},{name:"华南 3（广州）",val:"oss-cn-guangzhou.aliyuncs.com"},{name:"西南 1（成都）",val:"oss-cn-chengdu.aliyuncs.com"},{name:"中国（香港）",val:"oss-cn-hongkong.aliyuncs.com"},{name:"新加坡",val:"oss-ap-southeast-1.aliyuncs.com"},{name:"日本（东京）",val:"oss-ap-northeast-1.aliyuncs.com"},{name:"美国西部 1 （硅谷）",val:"oss-us-west-1.aliyuncs.com"},{name:"美国东部 1 （弗吉尼亚）",val:"oss-us-east-1.aliyuncs.com"},{name:"亚太东南 1 （新加坡）",val:"oss-ap-southeast-1.aliyuncs.com"},{name:"亚太东南 2 （悉尼）",val:"oss-ap-southeast-2.aliyuncs.com"},{name:"亚太东南 3 （吉隆坡）",val:"oss-ap-southeast-3.aliyuncs.com"},{name:"亚太东南 5 （雅加达）",val:"oss-ap-southeast-5.aliyuncs.com"},{name:"亚太东北 1 （日本）",val:"oss-ap-northeast-1.aliyuncs.com"},{name:"亚太南部 1 （孟买）",val:"oss-ap-south-1.aliyuncs.com"},{name:"欧洲中部 1 （法兰克福）",val:"oss-eu-central-1.aliyuncs.com"},{name:"英国（伦敦）",val:"oss-eu-west-1.aliyuncs.com"},{name:"中东东部 1 （迪拜）",val:"oss-me-east-1.aliyuncs.com"}],tencent:[{name:"北京一区",val:"cos.ap-beijing-1.myqcloud.com"},{name:"北京",val:"cos.ap-beijing.myqcloud.com"},{name:"上海",val:"cos.ap-shanghai.myqcloud.com"},{name:"广州",val:"cos.ap-guangzhou.myqcloud.com"},{name:"成都",val:"cos.ap-chengdu.myqcloud.com"},{name:"重庆",val:"cos.ap-chongqing.myqcloud.com"},{name:"深圳金融",val:"cos.ap-shenzhen-fsi.myqcloud.com"},{name:"上海金融",val:"cos.ap-shanghai-fsi.myqcloud.com"},{name:"北京金融",val:"cos.ap-beijing-fsi.myqcloud.com"},{name:"中国香港",val:"cos.ap-hongkong.myqcloud.com"},{name:"新加坡",val:"cos.ap-singapore.myqcloud.com"},{name:"孟买",val:"cos.ap-mumbai.myqcloud.com"},{name:"雅达加",val:"cos.ap-jakarta.myqcloud.com"},{name:"首尔",val:"cos.ap-seoul.myqcloud.com"},{name:"曼谷",val:"cos.ap-bangkok.myqcloud.com"},{name:"东京",val:"cos.ap-tokyo.myqcloud.com"},{name:"硅谷（美西）",val:"cos.na-siliconvalley.myqcloud.com"},{name:"弗吉尼亚（美东）",val:"cos.na-ashburn.myqcloud.com"},{name:"多伦多",val:"cos.na-toronto.myqcloud.com"},{name:"法兰克福",val:"cos.eu-frankfurt.myqcloud.com"},{name:"莫斯科",val:"cos.eu-moscow"}],huawei:[{name:"非洲-约翰内斯堡",val:"obs.af-south-1.myhuaweicloud.com"},{name:"华北-北京四",val:"obs.cn-north-4.myhuaweicloud.com"},{name:"华北-北京一",val:"obs.cn-north-1.myhuaweicloud.com"},{name:"华东-上海二",val:"obs.cn-east-2.myhuaweicloud.com"},{name:"华东-上海一",val:"obs.cn-east-3.myhuaweicloud.com"},{name:"华南-广州",val:"obs.cn-south-1.myhuaweicloud.com"},{name:"西南-贵阳一",val:"obs.cn-southwest-2.myhuaweicloud.com"},{name:"亚太-曼谷",val:"obs.ap-southeast-2.myhuaweicloud.com"},{name:"中国-香港",val:"obs.ap-southeast-1.myhuaweicloud.com"},{name:"亚太-新加坡",val:"obs.ap-southeast-3.myhuaweicloud.com"}],qiniu:[{name:"华东",val:"s3-cn-east-1.qiniucs.com"},{name:"华北",val:"s3-cn-north-1.qiniucs.com"},{name:"华南",val:"s3-cn-south-1.qiniucs.com"},{name:"北美",val:"s3-us-north-1.qiniucs.com"},{name:"东南亚",val:"s3-ap-southeast-1.qiniucs.com"},{name:"华东-浙江2",val:"s3-cn-east-2.qiniucs.com"}]},X=function(e){return j("data-v-6e84d146"),e=e(),I(),e},Y={class:"flex justify-items-center"},ee=X((function(){return v("span",null,"存储源信息",-1)})),ne=X((function(){return v("a",{class:"link",target:"_blank",href:"https://docs.zfile.vip/example"},"ZFile 存储源配置文档",-1)})),ae={style:{float:"left"}},te={style:{float:"right",color:"#8492a6","font-size":"13px"}},le={style:{float:"left"}},oe={style:{float:"left"}},re=X((function(){return v("span",{class:"float-left"}," 默认空间 ",-1)})),ue={class:"float-right"},ce={class:"float-left"},ie={class:"float-left"},se={class:"float-right"},de={key:8},me={key:0},fe={key:0},ye=["innerHTML"],pe={key:2},ve={key:3},ge={key:4},he={__name:"index",setup:function(n){var j=i(),I=s(),B=d(),D=null,X=i(),he=function(){X.value.validate((function(e){e&&(Ve.value=!0,L(ke.value).then((function(){Pe.value=!0,Q.confirm("保存成功, 是否返回存储源列表？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success",callback:function(e){"confirm"===e&&I.push("/admin/storage-list")}})})).finally((function(){Ve.value=!1})))}))},be=function(){var e=i({orderNum:null,name:"",type:"",remark:"",alias:"",defaultSwitchToImgMode:!1,enable:!0,enableFileOperator:!0,enableFileAnnoOperator:!1,searchEnable:!1,searchIgnoreCase:!1,searchMode:"SEARCH_CACHE",enableCache:!1,autoRefreshCache:!1,storageSourceAllParam:{endPoint:"",pathStyle:"",isPrivate:!1,accessKey:null,secretKey:null,bucketName:null,host:null,port:null,filePath:null,accessToken:null,refreshToken:null,secretId:null,username:null,password:null,basePath:"",domain:"",listId:"",redirectUri:"",siteId:"",proxyDomain:"",downloadLinkType:"",clientId:"",clientSecret:"",region:"",autoConfigCors:!1,driveId:""}}),n=i(!1),a=i([]);U((function(){z().then((function(e){a.value=e.data})),R().then((function(e){j.value=e.data,j.value.domain.endsWith("/")||(j.value.domain+="/")}));var t=B.params.storageId;t&&(n.value=!0,function(n){M(n).then((function(n){n.data.type=n.data.type.key,e.value=n.data,D=n.data.key}))}(t))}));var t=i(!1),l=i({name:[{required:!0,message:"请输入存储源名称"}],key:[{validator:function(e,n,a){if(null!=n&&""!==n){if(["admin","file","login","install","s","onedrive","api","sharepoint","s3"].includes(n))a(new Error("不可占用系统级名称，请修改。"));else{/^[\w\-]+$/.test(n)?D!==n?N({storageKey:n}).then((function(e){e.data?a(new Error("该存储源别名已存在，请修改。")):a()})):a():a(new Error("只允许使用字母、数字、下划线、横杠"))}}else a()}}],type:[{required:!0,message:"存储策略不能为空"}],"storageSourceAllParam.domain":[{type:"url",message:"请输入正确的域名，需以 http:// 或 https:// 开头"},{validator:function(e,n,a){null!=n&&""!==n?"https:"!==window.location.protocol||0!==n.indexOf("http://")?a():a(new Error("检测到当前 ZFile 站点是 https 协议, 受浏览器限制, 此处也必须是 https 协议, 否则可能无法正常使用.")):a()}}]});return{storageItem:e,supportStorageType:a,loading:t,rules:l,isEditMode:n}}(),ke=be.storageItem,Se=be.supportStorageType,Ve=be.loading,we=be.rules,Pe=be.isEditMode,Ae=function(){var e=i([]),n=q((function(){return{accessKey:ke.value.storageSourceAllParam.accessKey||ke.value.storageSourceAllParam.secretId,secretKey:ke.value.storageSourceAllParam.secretKey,endPoint:ke.value.storageSourceAllParam.endPoint,region:ke.value.storageSourceAllParam.region}}));C((function(){return n.value}),(function(e){T.storageType.s3Type.includes(ke.value.type)&&e.accessKey&&e.secretKey&&e.endPoint&&a(e)}));var a=function(n){var a;(a=n,O({url:"/s3/getBuckets",method:"post",data:a,config:{showDefaultMsg:!1}})).then((function(n){e.value=n.data})).catch((function(n){e.value=[]}))};return{bucketList:e}}(),_e=Ae.bucketList,je=function(){var e=i([]),n=q((function(){return{accessToken:ke.value.storageSourceAllParam.accessToken}}));C((function(){return n.value}),(function(e){"google-drive"===ke.value.type&&a(e)}));var a=function(n){var a;(a=n,O({url:"/gd/drives",method:"post",data:a,config:{showDefaultMsg:!1}})).then((function(n){e.value=n.data})).catch((function(n){e.value=[]}))};return{drivesList:e}}(),Ie=je.drivesList,Ue=function(){var e=i([]),n=i([]),a=function(e){return-1!==e.indexOf("sharepoint")},t=function(e){return"sharepoint"===e?"Standard":"China"};C((function(){return ke.value.storageSourceAllParam.accessToken}),(function(e){e&&l()}));var l=function(){var n,l=ke.value.type;if(a(l)){var o={type:t(l),accessToken:ke.value.storageSourceAllParam.accessToken};(n=o,O({url:"/sharepoint/getSites",method:"post",data:n})).then((function(n){e.value=n.data}))}};C((function(){return ke.value.storageSourceAllParam.siteId}),(function(e){e&&o()}));var o=function(){var e,l=ke.value.type;if(a(l)){var o={type:t(l),accessToken:ke.value.storageSourceAllParam.accessToken,siteId:ke.value.storageSourceAllParam.siteId};(e=o,O({url:"/sharepoint/getSiteLists",method:"post",data:e})).then((function(e){n.value=e.data}))}};return{sharepointSites:e,sharepointSiteLists:n,isSharePoint:a}}(),qe=Ue.sharepointSites,Ce=Ue.sharepointSiteLists,Te=Ue.isSharePoint,xe=function(){C((function(){return ke.value.type}),(function(e){a(e)}));var n=i([]),a=function(a){a&&F({storageType:a}).then((function(a){n.value=a.data;var t,l=e(n.value);try{for(l.s();!(t=l.n()).done;){var o=t.value;!Pe.value&&o.defaultValue?("true"===o.defaultValue?o.defaultValue=!0:"false"===o.defaultValue&&(o.defaultValue=!1),ke.value.storageSourceAllParam[o.key]=o.defaultValue):"redirectUri"!==o.key||ke.value.storageSourceAllParam[o.key]||(ke.value.storageSourceAllParam[o.key]=o.defaultValue)}}catch(r){l.e(r)}finally{l.f()}}))};return{storageSourceParamList:n}}(),Ee=xe.storageSourceParamList,Le=function(e){H(e).then((function(){K.success("复制成功")}))};return function(e,n){var i=c,s=m("router-link"),d=W,I=r,U=u,q=o,C=Z,T=l,L=$,z=t;return f(),y(E,{model:b(ke),class:"zfile-storage-edit",rules:b(we),ref_key:"storageEditForm",ref:X},{"form-title":p((function(){return[v("div",Y,[g(s,{to:"/admin/storage-list"},{default:p((function(){return[g(i,{class:"inline mr-2 cursor-pointer",name:"file-type-back"})]})),_:1}),ee])]})),"form-sub-title":p((function(){return[h(" 请维护您的存储源信息，可参考 "),ne]})),footer:p((function(){return[g(z,{loading:b(Ve),type:"primary",size:"default",icon:b(J),onClick:he},{default:p((function(){return[h("保存设置")]})),_:1},8,["loading","icon"])]})),default:p((function(){return[g(x,{label:"存储源名称",prop:"name"},{default:p((function(){return[g(d,{modelValue:b(ke).name,"onUpdate:modelValue":n[0]||(n[0]=function(e){return b(ke).name=e})},null,8,["modelValue"])]})),_:1}),g(x,{label:"存储源别名",prop:"key"},{tips:p((function(){var e;return[h(" 存储源别名，用于 URL 中展示, 如 "+k(null===(e=b(j))||void 0===e?void 0:e.domain)+k(b(ke).key||"{存储源别名}"),1)]})),default:p((function(){return[g(d,{modelValue:b(ke).key,"onUpdate:modelValue":n[1]||(n[1]=function(e){return b(ke).key=e})},null,8,["modelValue"])]})),_:1}),g(x,{label:"存储源备注"},{tips:p((function(){return[h(" 存储源备注信息, 用于辅助管理员区分不同的存储源, 此字段仅管理员可见 ")]})),default:p((function(){return[g(d,{type:"textarea",rows:3,placeholder:"请输入存储源备注",modelValue:b(ke).remark,"onUpdate:modelValue":n[2]||(n[2]=function(e){return b(ke).remark=e})},null,8,["modelValue"])]})),_:1}),g(x,{label:"存储策略",prop:"type"},{default:p((function(){return[g(U,{disabled:b(Pe),filterable:"",modelValue:b(ke).type,"onUpdate:modelValue":n[3]||(n[3]=function(e){return b(ke).type=e}),placeholder:"请选择存储策略"},{default:p((function(){return[(f(!0),S(V,null,w(b(Se),(function(e){return f(),y(I,{key:e.key,label:e.description,value:e.key},null,8,["label","value"])})),128))]})),_:1},8,["disabled","modelValue"])]})),_:1}),g(x,{label:"是否启用"},{tips:p((function(){return[h(" 如不启用，则在前台不显示，且不可访问. ")]})),default:p((function(){return[g(q,{modelValue:b(ke).enable,"onUpdate:modelValue":n[4]||(n[4]=function(e){return b(ke).enable=e})},null,8,["modelValue"])]})),_:1}),g(x,{label:"启用文件操作"},{tips:p((function(){return[h(" 是否启用文件上传，编辑，删除等操作. ")]})),default:p((function(){return[g(q,{modelValue:b(ke).enableFileOperator,"onUpdate:modelValue":n[5]||(n[5]=function(e){return b(ke).enableFileOperator=e})},null,8,["modelValue"])]})),_:1}),P(g(x,{label:"允许匿名文件操作"},{tips:p((function(){return[h(" 开启后所有人都可进行文件操作，反之仅管理员登录后可操作 ")]})),default:p((function(){return[g(q,{modelValue:b(ke).enableFileAnnoOperator,"onUpdate:modelValue":n[6]||(n[6]=function(e){return b(ke).enableFileAnnoOperator=e})},null,8,["modelValue"])]})),_:1},512),[[A,b(ke).enableFileOperator]]),g(x,{label:"是否默认打开画廊模式"},{tips:p((function(){return[h(" 启用后，每次切换到此存储源，是否默认打开画廊模式 ")]})),default:p((function(){return[g(q,{modelValue:b(ke).defaultSwitchToImgMode,"onUpdate:modelValue":n[7]||(n[7]=function(e){return b(ke).defaultSwitchToImgMode=e})},null,8,["modelValue"])]})),_:1}),(f(!0),S(V,null,w(b(Ee),(function(e){return f(),y(x,{label:e.name,key:e.name,required:e.required,prop:"storageSourceAllParam."+e.key},{tips:p((function(){return[e.link?(f(),S("div",me,["accessToken"===e.key?(f(),S("span",fe,[g(T,{target:"_blank",icon:b(a),href:e.link+"?clientId="+encodeURIComponent(b(ke).storageSourceAllParam.clientId)+"&clientSecret="+encodeURIComponent(b(ke).storageSourceAllParam.clientSecret)+"&redirectUri="+encodeURIComponent(b(ke).storageSourceAllParam.redirectUri)},{default:p((function(){return[h(k(e.linkName),1)]})),_:2},1032,["icon","href"]),g(i,{onClick:function(n){return b(Le)(e.link+"?clientId="+encodeURIComponent(b(ke).storageSourceAllParam.clientId)+"&clientSecret="+encodeURIComponent(b(ke).storageSourceAllParam.clientSecret)+"&redirectUri="+encodeURIComponent(b(ke).storageSourceAllParam.redirectUri))},class:"inline cursor-pointer ml-2 text-lg relative top-0.5",name:"copy"},null,8,["onClick"])])):(f(),y(T,{key:1,target:"_blank",icon:b(a),href:e.link},{default:p((function(){return[h(k(e.linkName),1)]})),_:2},1032,["icon","href"]))])):_("",!0),e.description?(f(),S("div",{key:1,innerHTML:e.description},null,8,ye)):_("",!0),"redirectUri"===e.key&&e.description&&["onedrive","sharepoint"].includes(b(ke).type)?(f(),S("div",pe,[h(" 如："+k(b(j).domain)+"onedrive/callback ",1),g(i,{onClick:n[13]||(n[13]=function(e){return b(Le)(b(j).domain+"onedrive/callback")}),class:"inline cursor-pointer ml-1",name:"copy"})])):_("",!0),"redirectUri"===e.key&&e.description&&["onedrive-china","sharepoint-china"].includes(b(ke).type)?(f(),S("div",ve,[h(" 如："+k(b(j).domain)+"onedrive/china-callback ",1),g(i,{onClick:n[14]||(n[14]=function(e){return b(Le)(b(j).domain+"onedrive/china-callback")}),class:"inline cursor-pointer ml-1",name:"copy"})])):_("",!0),"redirectUri"===e.key&&e.description&&"google-drive"===b(ke).type?(f(),S("div",ge,[h(" 如："+k(b(j).domain)+"gd/callback ",1),g(i,{onClick:n[15]||(n[15]=function(e){return b(Le)(b(j).domain+"gd/callback")}),class:"inline cursor-pointer ml-1",name:"copy"})])):_("",!0)]})),default:p((function(){var t,l;return["endPoint"===e.key&&b(G).hasOwnProperty(b(ke).type)?(f(),y(U,{key:0,filterable:"","allow-create":"","default-first-option":"",style:{width:"100%"},modelValue:b(ke).storageSourceAllParam.endPoint,"onUpdate:modelValue":n[8]||(n[8]=function(e){return b(ke).storageSourceAllParam.endPoint=e})},{default:p((function(){return[(f(!0),S(V,null,w(b(G)[b(ke).type],(function(e){return f(),y(I,{label:e.name,value:e.val,key:e.name},{default:p((function(){return[v("span",ae,k(e.name),1),v("span",te,k(e.val),1)]})),_:2},1032,["label","value"])})),128))]})),_:1},8,["modelValue"])):"siteId"===e.key&&b(Te)(b(ke).type)?(f(),y(U,{key:1,filterable:"",placeholder:"请选择站点列表",modelValue:b(ke).storageSourceAllParam.siteId,"onUpdate:modelValue":n[9]||(n[9]=function(e){return b(ke).storageSourceAllParam.siteId=e}),class:"input-with-select"},{default:p((function(){return[(f(!0),S(V,null,w(b(qe),(function(e){return f(),y(I,{key:e.id,label:e.displayName,value:e.id},{default:p((function(){return[v("span",le,[h(k(e.displayName)+" ",1),"Communication site"===e.displayName?(f(),y(C,{key:0,type:"success"},{default:p((function(){return[h("默认网站")]})),_:1})):_("",!0)]),g(L,{placement:"right",width:"400",trigger:"hover",content:e.webUrl},{reference:p((function(){return[g(T,{target:"_blank",icon:b(a),href:e.webUrl,underline:!1,class:"float-right",type:"primary"},{default:p((function(){return[h("查看网站")]})),_:2},1032,["icon","href"])]})),_:2},1032,["content"])]})),_:2},1032,["label","value"])})),128))]})),_:1},8,["modelValue"])):"listId"===e.key&&b(Te)(b(ke).type)?(f(),y(U,{key:2,filterable:"",placeholder:"请选择网站子目录",modelValue:b(ke).storageSourceAllParam.listId,"onUpdate:modelValue":n[10]||(n[10]=function(e){return b(ke).storageSourceAllParam.listId=e}),class:"input-with-select"},{default:p((function(){return[(f(!0),S(V,null,w(b(Ce),(function(e){return f(),y(I,{key:e.id,label:e.displayName,value:e.id},{default:p((function(){return[v("span",oe,[h(k(e.displayName)+" ",1),"Communication site"===e.displayName?(f(),y(C,{key:0,type:"success"},{default:p((function(){return[h("默认网站")]})),_:1})):_("",!0)]),g(L,{placement:"right",width:"400",trigger:"hover",content:e.webUrl},{reference:p((function(){return[g(T,{target:"_blank",icon:b(a),href:e.webUrl,underline:!1,class:"float-right",type:"primary"},{default:p((function(){return[h("查看网站")]})),_:2},1032,["icon","href"])]})),_:2},1032,["content"])]})),_:2},1032,["label","value"])})),128))]})),_:1},8,["modelValue"])):"driveId"===e.key&&(null===(t=b(Ie))||void 0===t?void 0:t.length)>0?(f(),y(U,{key:3,filterable:"",placeholder:"请选择驱动器列表",modelValue:b(ke).storageSourceAllParam.driveId,"onUpdate:modelValue":n[11]||(n[11]=function(e){return b(ke).storageSourceAllParam.driveId=e}),class:"input-with-select"},{default:p((function(){return[g(I,{value:"",label:"默认空间"},{default:p((function(){return[re,v("span",ue,[g(C,{type:"primary",class:"float-right"},{default:p((function(){return[h(" 个人盘 ")]})),_:1})])]})),_:1}),(f(!0),S(V,null,w(b(Ie),(function(e){return f(),y(I,{key:e.id,label:e.name,value:e.id},{default:p((function(){return[v("span",ce,k(e.name),1),g(L,{placement:"left",width:"400",trigger:"hover",content:e.id},{reference:p((function(){return[g(C,{type:"success",class:"float-right"},{default:p((function(){return[h(" 团队盘 ")]})),_:1})]})),_:2},1032,["content"])]})),_:2},1032,["label","value"])})),128))]})),_:1},8,["modelValue"])):"bucketName"===e.key&&(null===(l=b(_e))||void 0===l?void 0:l.length)>0?(f(),y(U,{key:4,filterable:"",placeholder:"请选择存储器列表",modelValue:b(ke).storageSourceAllParam.bucketName,"onUpdate:modelValue":n[12]||(n[12]=function(e){return b(ke).storageSourceAllParam.bucketName=e}),class:"input-with-select"},{default:p((function(){return[(f(!0),S(V,null,w(b(_e),(function(e){return f(),y(I,{key:e.name,label:e.name,value:e.name},{default:p((function(){return[v("span",ie,k(e.name),1),v("span",se,k(e.date),1)]})),_:2},1032,["label","value"])})),128))]})),_:1},8,["modelValue"])):"select"===e.type?(f(),y(U,{key:5,filterable:"","default-first-option":"",modelValue:b(ke).storageSourceAllParam[e.key],"onUpdate:modelValue":function(n){return b(ke).storageSourceAllParam[e.key]=n}},{default:p((function(){return[(f(!0),S(V,null,w(e.options,(function(e){return f(),y(I,{label:e.label,value:e.value},null,8,["label","value"])})),256))]})),_:2},1032,["modelValue","onUpdate:modelValue"])):"switch"===e.type?(f(),y(q,{key:6,modelValue:b(ke).storageSourceAllParam[e.key],"onUpdate:modelValue":function(n){return b(ke).storageSourceAllParam[e.key]=n}},null,8,["modelValue","onUpdate:modelValue"])):"input"===e.type?(f(),y(d,{key:7,modelValue:b(ke).storageSourceAllParam[e.key],"onUpdate:modelValue":function(n){return b(ke).storageSourceAllParam[e.key]=n}},null,8,["modelValue","onUpdate:modelValue"])):(f(),S("div",de," 服务端配置错误, 字段 "+k(e.key)+" 类型为 "+k(e.type)+", 不支持此类型的渲染. ",1))]})),_:2},1032,["label","required","prop"])})),128))]})),_:1},8,["model","rules"])}}};"function"==typeof B&&B(he);n("default",D(he,[["__scopeId","data-v-6e84d146"]]))}}}))}();