const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let productoSchema = new Schema({
    name: {
        type: String,
        //required: true,
        required: [true, 'Name is required'],
        //default:"Sim nombre"
    },
    branch: {
        type: String,
        required: true,
        required: [true, 'Branch is required'],
    },
    description: {
        type: String,
        required: false,
        default: 'With out description'
    },
    color: {
        type: String,
        required: false,
        default: 'With out color '
    },
    cost: {
        type: Number,
        required: [true, "Cost is required"],
    },
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model("productM", productoSchema)