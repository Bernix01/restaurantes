webpackHotUpdate(0,{257:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),u=a(0),i=l(u),s=a(671),d=l(s),m=a(19),f=(l(m),a(22)),p=(l(f),function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={numfactura:"",cliente:"Guillermo",date:new Date,total:20,status:"pagado"},a}return o(t,e),c(t,[{key:"crearFactura",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.method;return i.default.createElement("form",{action:"/api/facturas",className:"well form-horizontal",id:"formulario-factura",method:t},i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Número de Factura"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-pencil"})),i.default.createElement("input",{name:"numfactura",placeholder:"Número de Factura",className:"form-control",minLength:"16",maxLength:"16",valueLink:(0,d.default)(this,"numfactura"),type:"text",required:!0})))),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Cliente"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-user"})),i.default.createElement("input",{name:"cliente",placeholder:"Cliente",valueLink:(0,d.default)(this,"cliente"),className:"form-control",type:"text",required:!0})))),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Fecha Máxima de Pago"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-calendar"})),i.default.createElement("input",{name:"date",placeholder:"Fecha Máxima de Pago",valueLink:(0,d.default)(this,"date"),className:"form-control",type:"date",required:!0})))),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Total a Pagar"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-usd"})),i.default.createElement("input",{name:"costo",placeholder:"Total a Pagar",valueLink:(0,d.default)(this,"total"),className:"form-control",type:"number",min:"0",step:"0.01",required:!0})))),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Mensaje"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-info-sign"})),i.default.createElement("select",{name:"estado",valueLink:(0,d.default)(this,"status"),className:"form-control"},i.default.createElement("option",{disabled:!0,selected:!0,value:!0},"Seleccione un estado"),i.default.createElement("option",{value:"pagado",selected:!0},"Pagado"),i.default.createElement("option",{value:"pendiente"},"Pendiente"),i.default.createElement("option",{value:"acumulado"},"Acumulado"))))),i.default.createElement("div",{className:"form-group"},i.default.createElement("div",{className:"col-md-8 col-md-offset-2"},i.default.createElement("button",{onClick:function(){return e.crearFactura()},className:"btn btn-success"},"Guardar ",i.default.createElement("span",{className:"glyphicon glyphicon-save"})))))}}]),t}(i.default.Component));t.default=p}});