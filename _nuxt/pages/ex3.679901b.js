(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{172:function(r,t,e){var content=e(174);"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,e(57).default)("bdd0b2aa",content,!0,{sourceMap:!1})},173:function(r,t,e){"use strict";var o=e(172);e.n(o).a},174:function(r,t,e){(t=e(56)(!1)).push([r.i,"pre{white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word}",""]),r.exports=t},179:function(r,t,e){"use strict";e.r(t);var o={head:{title:"Libro de niños",script:[{src:"//unpkg.com/brain.js"}]},data:function(){return{arrayToTrain:["La gallina vio a el aguila.","El lobo vio a la gallina.","El aguila vio a el lobo y la gallina mirándose.","Eso fue amor a primera vista, y el aguila tenía bellas plumas. Eso fue un momento muy agradable para todos.","Celeste vio a el aguila."],iterations:["La gallina","El lobo","El aguila","Eso","Celeste"],output:[]}},mounted:function(){var r=this,t=new brain.recurrent.LSTM;t.train(this.arrayToTrain,{iterations:1200,log:function(details){return console.log(details)},errorThresh:.012});this.iterations.forEach((function(e,o){r.output.push(t.run(e))}))}},n=(e(173),e(32)),component=Object(n.a)(o,(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{staticClass:"p-4"},[e("h2",{staticClass:"text-center"},[r._v("LBRO DE NIÑOS")]),e("div",{staticClass:"grid grid-cols-3"},[e("small",[e("b",[r._v("Entrenamiento")]),r._l(r.arrayToTrain,(function(t,o){return e("pre",{key:o},[r._v("- "+r._s(t))])}))],2),e("small",[e("b",[r._v("salida")]),r._l(r.output,(function(t,o){return e("pre",{key:o},[r._v("corrida "+r._s(o+1)+": "+r._s(r.iterations[o]+t))])}))],2),e("small",[e("b",[r._v("test iterations")]),e("pre",[r._v(r._s(r.iterations))])])])])}),[],!1,null,null,null);t.default=component.exports}}]);