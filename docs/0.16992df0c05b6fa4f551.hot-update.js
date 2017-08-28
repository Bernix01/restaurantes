webpackHotUpdate(0,{264:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),i=n(u),m=a(30),d=n(m),s=a(7),p=(n(s),a(11)),f=(n(p),function(e){function t(e){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return c(t,e),r(t,[{key:"crearRecibo",value:function(){var e={numRecibo:document.getElementsByName("numRecibo")[0].value,nombreRecibido:document.getElementsByName("nombreRecibido")[0].value,concepto:document.getElementsByName("concepto")[0].value,cantidad:Number.parseFloat(document.getElementsByName("cantidad")[0].value),fechaPago:document.getElementsByName("fechaPago")[0].value};d.default.put("/api/recibos",e).then(function(e){location.replace("/recibos")}).catch(function(e){alert(e.response.data)})}},{key:"updateRecibo",value:function(){var e={numRecibo:document.getElementsByName("numRecibo")[0].value,nombreRecibido:document.getElementsByName("nombreRecibido")[0].value,concepto:document.getElementsByName("concepto")[0].value,cantidad:Number.parseFloat(document.getElementsByName("cantidad")[0].value),fechaPago:document.getElementsByName("fechaPago")[0].value};d.default.post("/api/recibos/"+this.props.fid,e).then(function(e){alert("Recibo actualizada"),location.replace("/recibos")}).catch(function(e){alert(e.response.data)})}},{key:"handleSubmit",value:function(){return this.props.update?this.updateRecibo():this.crearRecibo()}},{key:"componentDidMount",value:function(){this.props.update&&d.default.get("/api/recibos/"+this.props.fid,recibo).then(function(e){var t=e.data;document.getElementsByName("numRecibo")[0].value=t.numRecibo,document.getElementsByName("nombreRecibido")[0].value=t.nombreRecibido,document.getElementsByName("cantidad")[0].value=t.cantidad,document.getElementsByName("concepto")[0].value=t.concepto;var a=new Date(t.fechaPago),n=a.getMonth()+1,o=a.getDate()+1;document.getElementsByName("fechaPago")[0].value=String(a.getFullYear())+"-"+(n<9?"0":"")+String(n)+"-"+(o<9?"0":"")+String(o)}).catch(function(e){alert(e),location.replace("/recibos")})}},{key:"render",value:function(){var e=this;return i.default.createElement("form",{action:"/api/recibo",className:"well form-horizontal",name:"recibo",id:"formulario-recibo",form:!0},i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Número de Recibo"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-pencil"})),i.default.createElement("input",{name:"numRecibo",placeholder:"Número de Recibo",className:"form-control",type:"text",required:!0})))),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Recibido por"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-user"})),i.default.createElement("input",{name:"nombreRecibido",placeholder:"nombre",className:"form-control",type:"text",required:!0})))),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Concepto"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-user"})),i.default.createElement("input",{name:"concepto",placeholder:"concepto",className:"form-control",type:"text",required:!0})))),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Fecha de Pago"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-calendar"})),i.default.createElement("input",{name:"fechaPago",placeholder:"Fecha de Pago",className:"form-control",type:"date",required:!0})))),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Cantidad"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-usd"})),i.default.createElement("input",{name:"cantidad",placeholder:"Cantidad",className:"form-control",type:"number",min:"0",step:"0.01",required:!0})))),i.default.createElement("div",{className:"form-group"},i.default.createElement("div",{className:"col-md-8 col-md-offset-2"},i.default.createElement("div",{className:"btn btn-success",onClick:function(){return e.handleSubmit()}},"Guardar",i.default.createElement("span",{className:"glyphicon glyphicon-save"})))))}}]),t}(i.default.Component));t.default=f}});