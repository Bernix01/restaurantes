webpackHotUpdate(0,{673:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),u=a(0),o=l(u),d=(a(34),a(47)),f=l(d),s=a(13),m=l(s),p=a(15),E=l(p),b=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={ticketData:[]},a}return i(t,e),c(t,[{key:"eliminarTicket",value:function(e){confirm("¿Desea eliminar el ticket?")&&(f.default.delete("/api/tickets",{params:{id:e}}).then(function(e){location.replace("/tickets")}).catch(function(e){alert("un error ha sucedido :(")}),window.location.reload())}},{key:"componentDidMount",value:function(){var e=this;f.default.get("/api/tickets").then(function(t){var a=t.data;e.setState({ticketData:a})})}},{key:"render",value:function(){var e=this,t=this.state.ticketData;return o.default.createElement("div",null,o.default.createElement(m.default,{page:this.props.location.pathname}),o.default.createElement("div",{className:"main container-fluid"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-md-8 col-md-offset-2"},o.default.createElement("div",{className:"card-header"},o.default.createElement("h1",null,"Tickets"),o.default.createElement("a",{href:"/ticket",className:"btn btn-success btn-block"},o.default.createElement("i",{className:"fa fa-th-list"}),"Generando ticket")),o.default.createElement("div",{className:"card-content table-responsive"},o.default.createElement("table",{className:"table table-bordered table-hover"},o.default.createElement("thead",null,o.default.createElement("tr",null,o.default.createElement("th",null,"Fecha Emision"),o.default.createElement("th",null,"Origen"),o.default.createElement("th",null,"Destino"),o.default.createElement("th",null,"Precio"),o.default.createElement("th",null,"Adquiriente"),o.default.createElement("th",null,"Puesto"))),o.default.createElement("tbody",null,t.map(function(t,a){return o.default.createElement("tr",null,o.default.createElement("td",null,t.fechaEmision),o.default.createElement("td",null,t.origen),o.default.createElement("td",null,t.destino),o.default.createElement("td",null,"$",t.precio),o.default.createElement("td",null,t.adquiriente),o.default.createElement("td",null,t.puesto),o.default.createElement("td",{className:"td-action"},o.default.createElement("a",{href:"/tickets/"+encodeURIComponent(t._id),rel:"tooltip",title:"Editar",className:"btn btn-simple btn-warning btn-xs","data-original-title":"Editar"},o.default.createElement("i",{className:"fa fa-pencil"})),o.default.createElement("a",{rel:"tooltip",title:"Eliminar",className:"btn-simple btn btn-danger btn-xs","data-original-title":"Eliminar",onClick:function(){return e.eliminarTicket(t._id)}},o.default.createElement("i",{className:"fa fa-remove"}))))}))))))),o.default.createElement(E.default,null))}}]),t}(o.default.Component);t.default=b}});