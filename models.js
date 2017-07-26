var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//modelo factura
var FacturaSchema = new Schema({
	numFactura: {type: String, required: true, unique: true},
	nombreEmpresa: {type: String, required: true},
	fechaPago: {type: Date, required: true},
	cantidad: {type: Number, required: true},
	estado: {type: String, required: true}
})

FacturaSchema.path('numFactura').validate(function(dato){
	return dato.length = 16;
});

module.exports = {
	Factura: FacturaSchema
};