webpackHotUpdate(0,{257:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),u=a(0),m=l(u),s=a(75),d=l(s),i=a(19),f=(l(i),a(22)),p=(l(f),function(e){function t(e){return n(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),r(t,[{key:"crearFactura",value:function(){var e={numfactura:document.getElementsByName("numfactura")[0].value,cliente:document.getElementsByName("cliente")[0].value,costo:document.getElementsByName("costo")[0].value,estado:document.getElementsByName("estado")[0].value,date:document.getElementsByName("date")[0].value};d.default.put("/api/facturas",e).then(function(e){alert(e)}).catch(function(e){alert(e.response.data)})}},{key:"componentDidMount",value:function(){d.default.get("/api/facturas/"+this.props.id,factura).then(function(e){alert(e)}).catch(function(e){alert(e)})}},{key:"render",value:function(){var e=this;return m.default.createElement("form",{action:"/api/facturas",className:"well form-horizontal",name:"factura",id:"formulario-factura"},m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{className:"col-md-3 control-label"},"Número de Factura"),m.default.createElement("div",{className:"col-md-9 inputGroupContainer"},m.default.createElement("div",{className:"input-group"},m.default.createElement("span",{className:"input-group-addon"},m.default.createElement("i",{className:"glyphicon glyphicon-pencil"})),m.default.createElement("input",{name:"numfactura",placeholder:"Número de Factura",className:"form-control",value:"1234567890123456",type:"text",required:!0})))),m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{className:"col-md-3 control-label"},"Cliente"),m.default.createElement("div",{className:"col-md-9 inputGroupContainer"},m.default.createElement("div",{className:"input-group"},m.default.createElement("span",{className:"input-group-addon"},m.default.createElement("i",{className:"glyphicon glyphicon-user"})),m.default.createElement("input",{name:"cliente",placeholder:"Cliente",value:"Guillermo",className:"form-control",type:"text",required:!0})))),m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{className:"col-md-3 control-label"},"Fecha Máxima de Pago"),m.default.createElement("div",{className:"col-md-9 inputGroupContainer"},m.default.createElement("div",{className:"input-group"},m.default.createElement("span",{className:"input-group-addon"},m.default.createElement("i",{className:"glyphicon glyphicon-calendar"})),m.default.createElement("input",{name:"date",placeholder:"Fecha Máxima de Pago",value:"2014-12-12",className:"form-control",type:"date",required:!0})))),m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{className:"col-md-3 control-label"},"Total a Pagar"),m.default.createElement("div",{className:"col-md-9 inputGroupContainer"},m.default.createElement("div",{className:"input-group"},m.default.createElement("span",{className:"input-group-addon"},m.default.createElement("i",{className:"glyphicon glyphicon-usd"})),m.default.createElement("input",{name:"costo",placeholder:"Total a Pagar",value:"12",className:"form-control",type:"number",min:"0",step:"0.01",required:!0})))),m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{className:"col-md-3 control-label"},"Mensaje"),m.default.createElement("div",{className:"col-md-9 inputGroupContainer"},m.default.createElement("div",{className:"input-group"},m.default.createElement("span",{className:"input-group-addon"},m.default.createElement("i",{className:"glyphicon glyphicon-info-sign"})),m.default.createElement("select",{name:"estado",className:"form-control"},m.default.createElement("option",{disabled:!0,selected:!0,value:!0},"Seleccione un estado"),m.default.createElement("option",{value:"pagado",selected:!0},"Pagado"),m.default.createElement("option",{value:"pendiente"},"Pendiente"),m.default.createElement("option",{value:"acumulado"},"Acumulado"))))),m.default.createElement("div",{className:"form-group"},m.default.createElement("div",{className:"col-md-8 col-md-offset-2"},m.default.createElement("div",{className:"btn btn-success",onClick:function(){return e.crearFactura()}},"Guardar ",m.default.createElement("span",{className:"glyphicon glyphicon-save"})))))}}]),t}(m.default.Component));t.default=p}});