webpackHotUpdate(0,{259:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),i=n(r),m=a(27),s=n(m),d=a(7),p=(n(d),a(8)),f=(n(p),function(e){function t(e){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return c(t,e),u(t,[{key:"crearTicket",value:function(){var e={fechaEmision:document.getElementsByName("fechaEmision")[0].value,origen:document.getElementsByName("origen")[0].value,destino:document.getElementsByName("destino")[0].value,precio:Number.parseFloat(document.getElementsByName("precio")[0].value),adquirente:document.getElementsByName("adquirente")[0].value,puesto:Number.parseFloat(document.getElementsByName("puesto")[0].value)};s.default.put("/api/tickets",e).then(function(e){location.replace("/tickets")}).catch(function(e){alert(e.response.data)})}},{key:"updateTicket",value:function(){var e={fechaEmision:document.getElementsByName("fechaEmision")[0].value,origen:document.getElementsByName("origen")[0].value,destino:document.getElementsByName("destino")[0].value,precio:Number.parseFloat(document.getElementsByName("precio")[0].value),adquirente:document.getElementsByName("adquirente")[0].value,puesto:Number.parseFloat(document.getElementsByName("puesto")[0].value)};s.default.post("/api/tickets/"+this.props.fid,e).then(function(e){alert("Ticket actualizado"),location.replace("/tickets")}).catch(function(e){alert(e.response.data)})}},{key:"handleSubmit",value:function(){return this.props.update?this.updateTicket():this.crearTicket()}},{key:"componentDidMount",value:function(){this.props.update&&s.default.get("/api/tickets/"+this.props.fid,ticket).then(function(e){var t=e.data;document.getElementsByName("origen")[0].value=t.origen,document.getElementsByName("destino")[0].value=t.destino,document.getElementsByName("precio")[0].value=t.precio,document.getElementsByName("adquirente")[0].value=t.adquirente,document.getElementsByName("adquirente")[0].value=t.adquirente,document.getElementsByName("numRecibo")[0].value=recibo.numRecibo,document.getElementsByName("nombreRecibido")[0].value=recibo.nombreRecibido,document.getElementsByName("concepto")[0].value=recibo.concepto;var a=new Date(recibo.fechaPago),n=a.getMonth(),l=a.getDay();document.getElementsByName("date")[0].value=String(a.getFullYear())+"-"+(n<9?"0":"")+String(n)+"-"+(l<9?"0":"")+String(l)}).catch(function(e){alert("el ticket no existe"),location.replace("/tickets")})}},{key:"render",value:function(){var e=this;return i.default.createElement("form",{action:"/api/ticket",className:"well form-horizontal",name:"ticket",id:"formulario-ticket",form:!0},i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Fecha de Emisión"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-calendar"})),i.default.createElement("input",{name:"fechaEmision",placeholder:"Fecha de Emision",className:"form-control",type:"date",required:!0})))),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Origen"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-info-sign"})),i.default.createElement("select",{name:"origen",className:"form-control"},i.default.createElement("option",{disabled:!0,selected:!0,value:!0},"Seleccione origen"),i.default.createElement("option",{value:"guayaquil"},"Guayaquil"),i.default.createElement("option",{value:"quito"},"Quito"),i.default.createElement("option",{value:"cuenca"},"Cuenca"),i.default.createElement("option",{value:"portoviejo"},"Portoviejo"),i.default.createElement("option",{value:"manta"},"Manta"))))),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Destino"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-info-sign"})),i.default.createElement("select",{name:"destino",className:"form-control"},i.default.createElement("option",{disabled:!0,selected:!0,value:!0},"Seleccione destino"),i.default.createElement("option",{value:"guayaquil"},"Guayaquil"),i.default.createElement("option",{value:"quito"},"Quito"),i.default.createElement("option",{value:"cuenca"},"Cuenca"),i.default.createElement("option",{value:"portoviejo"},"Portoviejo"),i.default.createElement("option",{value:"manta"},"Manta"))))),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Precio"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-usd"})),i.default.createElement("input",{name:"precio",placeholder:"Precio",className:"form-control",type:"number",min:"0",step:"0.01",required:!0})))),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Adquirente"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-pencil"})),i.default.createElement("input",{name:"adquirente",placeholder:"Número de Cédula",className:"form-control",type:"text",required:!0})))),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Puesto"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-usd"})),i.default.createElement("input",{name:"puesto",placeholder:"Puesto",className:"form-control",type:"number",min:"1",step:"1",required:!0})))),i.default.createElement("div",{className:"form-group"},i.default.createElement("div",{className:"col-md-8 col-md-offset-2"},i.default.createElement("div",{className:"btn btn-success",onClick:function(){return e.handleSubmit()}},"Guardar",i.default.createElement("span",{className:"glyphicon glyphicon-save"})))))}}]),t}(i.default.Component));t.default=f}});