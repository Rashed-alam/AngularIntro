const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dateFormat = require('dateformat');

//create ninja Schema and model
const ProductSchema = new Schema({
    prod_name: {
        type: String,
        required: [true, 'Name field is required']
    },
    prod_desc: {
        type: String,
        default: "Coming soon..."
    },
    prod_price: {
        type: Number,
        default: null,
        required: [true, 'Price field is required']
    },
    updated_at: {
        type: String,
        default: null
    }
});

const Product = mongoose.model('product',ProductSchema); //creating ninja model

//exporting the model
module.exports = Product;