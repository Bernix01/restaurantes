webpackHotUpdate(0,{257:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),u=a(0),s=l(u),i=a(19),m=(l(i),a(22)),d=(l(m),function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={factura:{numfactura:"",cliente:"Guillermo",date:new Date,total:20,status:"pagado"}},a}return c(t,e),o(t,[{key:"crearFactura",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.method;return s.default.createElement("form",{action:"/api/facturas",className:"well form-horizontal",id:"formulario-factura",method:t},s.default.createElement("div",{className:"form-group"},s.default.createElement("label",{className:"col-md-3 control-label"},"Número de Factura"),s.default.createElement("div",{className:"col-md-9 inputGroupContainer"},s.default.createElement("div",{className:"input-group"},s.default.createElement("span",{className:"input-group-addon"},s.default.createElement("i",{className:"glyphicon glyphicon-pencil"})),s.default.createElement("input",{name:"numfactura",placeholder:"Número de Factura",className:"form-control",minLength:"16",maxLength:"16",value:this.state.factura.numfactura,type:"text",required:!0})))),s.default.createElement("div",{className:"form-group"},s.default.createElement("label",{className:"col-md-3 control-label"},"Cliente"),s.default.createElement("div",{className:"col-md-9 inputGroupContainer"},s.default.createElement("div",{className:"input-group"},s.default.createElement("span",{className:"input-group-addon"},s.default.createElement("i",{className:"glyphicon glyphicon-user"})),s.default.createElement("input",{name:"cliente",placeholder:"Cliente",value:this.state.factura.cliente,className:"form-control",type:"text",required:!0})))),s.default.createElement("div",{className:"form-group"},s.default.createElement("label",{className:"col-md-3 control-label"},"Fecha Máxima de Pago"),s.default.createElement("div",{className:"col-md-9 inputGroupContainer"},s.default.createElement("div",{className:"input-group"},s.default.createElement("span",{className:"input-group-addon"},s.default.createElement("i",{className:"glyphicon glyphicon-calendar"})),s.default.createElement("input",{name:"date",placeholder:"Fecha Máxima de Pago",value:this.state.factura.date,className:"form-control",type:"date",required:!0})))),s.default.createElement("div",{className:"form-group"},s.default.createElement("label",{className:"col-md-3 control-label"},"Total a Pagar"),s.default.createElement("div",{className:"col-md-9 inputGroupContainer"},s.default.createElement("div",{className:"input-group"},s.default.createElement("span",{className:"input-group-addon"},s.default.createElement("i",{className:"glyphicon glyphicon-usd"})),s.default.createElement("input",{name:"costo",placeholder:"Total a Pagar",value:this.state.factura.total,className:"form-control",type:"number",min:"0",step:"0.01",required:!0})))),s.default.createElement("div",{className:"form-group"},s.default.createElement("label",{className:"col-md-3 control-label"},"Mensaje"),s.default.createElement("div",{className:"col-md-9 inputGroupContainer"},s.default.createElement("div",{className:"input-group"},s.default.createElement("span",{className:"input-group-addon"},s.default.createElement("i",{className:"glyphicon glyphicon-info-sign"})),s.default.createElement("select",{name:"estado",value:this.state.factura.status,className:"form-control"},s.default.createElement("option",{disabled:!0,selected:!0,value:!0},"Seleccione un estado"),s.default.createElement("option",{value:"pagado",selected:!0},"Pagado"),s.default.createElement("option",{value:"pendiente"},"Pendiente"),s.default.createElement("option",{value:"acumulado"},"Acumulado"))))),s.default.createElement("div",{className:"form-group"},s.default.createElement("div",{className:"col-md-8 col-md-offset-2"},s.default.createElement("button",{onClick:function(){return e.crearFactura()},className:"btn btn-success"},"Guardar ",s.default.createElement("span",{className:"glyphicon glyphicon-save"})))))}}]),t}(s.default.Component));t.default=d}});