webpackHotUpdate(0,{667:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),i=a(c),f=n(19),s=a(f),d=n(22),p=a(d),m=n(257),b=a(m),y=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),u(t,[{key:"crearFactura",value:function(e){confirm("¿Está seguro que desea eliminar esta factura?")&&(alert("Eliminando factura..."),alert(e),axios.delete("/api/facturas",{params:{id:e}}).then(function(e){alert(e)}).catch(function(e){alert(e)}),window.location.reload())}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(s.default,{page:this.props.location.pathname}),i.default.createElement("div",{className:"main container-fluid"},i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col-md-6 col-md-offset-3"},i.default.createElement("h1",null,"Crear Factura"),i.default.createElement(b.default,null)))),i.default.createElement(p.default,null))}}]),t}(i.default.Component);t.default=y}});