const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReciboSchema = new Schema({
	numRecibo: {type: String, required: true, unique: true},
    fechaPago: {type: Date, required: true},
    nombreRecibido: {type: String, required: true},
	concepto: {type: Number, required: true}
})

FacturaSchema.path('numRecibo').validate(function(dato){
	return dato.length === 16;
});

const Factura = mongoose.model('recibo', ReciboSchema, 'recibo');

module.exports = {
	Recibo: Recibo
};