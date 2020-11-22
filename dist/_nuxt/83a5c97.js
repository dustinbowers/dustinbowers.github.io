(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{308:function(e,t,n){var content=n(325);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("6833e292",content,!0,{sourceMap:!1})},324:function(e,t,n){"use strict";n(308)},325:function(e,t,n){(t=n(25)(!1)).push([e.i,".v-card[data-v-3003c032]{margin-bottom:16px}",""]),e.exports=t},342:function(e,t,n){"use strict";n.r(t);var r={components:{},data:function(){return{publications:[{title:'Hui Wu, Dustin M. Bowers , Toan T. Huynh, and Richard Souvenir. "Deformable alignment using random projections of landmark images." In International Symposium on Biomedical Imaging (ISBI), 2014.',abstract:"This paper presents a method for rigid alignment of objects undergoing deformation. Automated algorithms can be affected by auxiliary motion, such as image motion caused by transducer movement in echocardiography. Unlike de-formable registration methods, the goal of this work is alignment without introducing additional distortion. Our method, based on random projection theory, incorporates motion metadata for phase-aware alignment and outperforms rigid alignment approaches on synthetic data. We demonstrate the benefit of this as a pre-processing step to two common biomedical image analysis tasks: object segmentation and video denoising.",url:"https://ieeexplore.ieee.org/document/6867980"},{title:"Hui Wu, Dustin M. Bowers , Toan T. Huynh, and Richard Souvenir. “Biomedical video denoising using supervised manifold learning.” In International Symposium on Biomedical Imaging (ISBI), 2013.",abstract:"This paper presents algorithms for biomedical video denoising using real-valued side information. In certain clinical settings, side information correlated to the underlying motion under imaging is available and can be used to infer motion and act as a global constraint for image denoising. Our methods assume the input data are noisy samples that lie on or near an image manifold parameterized by the associated side information and cast denoising as a supervised manifold learning problem. We demonstrate real-world use on echocardiography data and associated electrocardiogram (ECG) signals.",url:"https://ieeexplore.ieee.org/document/6556756"},{title:"Hui Wu, Dustin M. Bowers , Toan T. Huynh, and Richard Souvenir. “Echocardiogram view classification using low-level features.” In International Symposium on Biomedical Imaging (ISBI), 2013.",abstract:"This paper presents a view classification method for 2D heart ultrasound. Our method uses low-level image features to train a frame-level classifier, which unlike related approaches, does not require an additional pixel-level classification of heart structures. By employing kernel-based classification, our algorithm can classify images from any phase of the heartbeat cycle and efficiently incorporate information from subsequent frames without re-training the model. On real-world data, our algorithm achieves 98.51% accuracy for 8-way classification. While the method can efficiently aggregate multiple frames, in ~94% of the tests, identification only requires a single frame.",url:"https://ieeexplore.ieee.org/document/6556584"}]}}},o=(n(324),n(66)),l=n(105),c=n.n(l),d=n(313),m=n(300),h=n(337),v=n(339),f=n(345),w=n(343),_=n(346),y=n(198),x=n(340),I=n(341),k=n(338),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[n("div",{staticClass:"text-center"}),e._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("\n        Featured Projects\n      ")]),e._v(" "),n("v-card-text",[n("v-card",[n("v-img",{attrs:{"aspect-ratio":.875,width:"300",src:"https://github.com/dustinbowers/intel8080emu/raw/master/screens/gameplay.gif"}}),e._v(" "),n("v-card-title",[e._v("Intel 8080 CPU Emulator")]),e._v(" "),n("v-card-text",[n("p",[e._v("Written in Go using the SDL library for rendering. This project is meant to roughly emulate the Intel 8080 CPU and Space Invaders arcade cabinet architecture. The original Space Invaders ROM can be loaded into it.")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/dustinbowers/intel8080emu",target:"_blank"}},[e._v("View Source on GitHub")])])])],1),e._v(" "),n("v-card",[n("v-card-title",[e._v("Chip8 CPU Emulator w/ WebAssembly")]),e._v(" "),n("v-card-text",[n("p",[e._v("Written in Go using Ebiten library for compiling to WebAssembly. This project wraps my original Chip8 emulator with a new rendering engine that can be executed in-browser.")]),e._v(" "),n("p",[n("nuxt-link",{attrs:{to:"chip8"}},[e._v("View a Live Demo")])],1),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/dustinbowers/chip8emu-wasm",target:"_blank"}},[e._v("View Source on GitHub")])])])],1),e._v(" "),n("v-card",[n("v-card-title",[e._v("Chip8 CPU Emulator")]),e._v(" "),n("v-card-text",[n("p",[e._v("Written in Go using the SDL library for rendering. This project was my first foray into CPU Emulator development. It was a perfect candidate due to a minimalist opcode table and straightforward architecture")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/dustinbowers/chip8emu",target:"_blank"}},[e._v("View Source on GitHub")])])])],1)],1)],1),e._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("\n        Links\n      ")]),e._v(" "),n("v-card-text",[n("v-list",[n("v-list-item",[n("a",{attrs:{href:"https://www.linkedin.com/in/dustin-bowers-76a0645b",target:"_blank"}},[e._v("LinkedIn")])]),e._v(" "),n("v-list-item",[n("a",{attrs:{href:"https://www.github.com/dustinbowers",target:"_blank"}},[e._v("GitHub")])])],1)],1)],1),e._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("\n        Publications\n      ")]),e._v(" "),n("v-card-text",[n("v-expansion-panels",e._l(e.publications,(function(t){return n("v-expansion-panel",{key:t.title},[n("v-expansion-panel-header",[e._v("\n              "+e._s(t.title)+"\n            ")]),e._v(" "),n("v-expansion-panel-content",[n("p",{staticClass:"text--secondary"},[e._v(e._s(t.abstract))]),e._v(" "),n("p",[n("a",{attrs:{href:t.url,target:"_blank"}},[e._v("View on IEEExplore")])])])],1)})),1)],1)],1)],1)],1)}),[],!1,null,"3003c032",null);t.default=component.exports;c()(component,{VCard:d.a,VCardText:m.a,VCardTitle:m.b,VCol:h.a,VExpansionPanel:v.a,VExpansionPanelContent:f.a,VExpansionPanelHeader:w.a,VExpansionPanels:_.a,VImg:y.a,VList:x.a,VListItem:I.a,VRow:k.a})}}]);