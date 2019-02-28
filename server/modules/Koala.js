const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const koalaSchema = new Schema ({
    name: {type: String, required: true},
    gender: { type: String, required: true},
    age: { type: Number, required: true}, 
    ready_to_transfer: {type: Boolean, default: false},
    notes: {type: String}
})

module.exports = mongoose.model('koalas', koalaSchema);