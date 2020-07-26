const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkplaceSchema= Schema({
    name: String,
    ubicacion: String,
    active:Boolean
});

module.exports = mongoose.model("Workplace", WorkplaceSchema);