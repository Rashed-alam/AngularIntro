const mongoose=require('mongoose');
const CurrencySchema = new mongoose.Schema({
    currencyName:{
        type:String,
    },
    currencySign:{
        type:String,
    }

});
module.exports =mongoose.model('currency',CurrencySchema);