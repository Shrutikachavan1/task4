const mongoose=require('mongoose');
const proSchema= new mongoose.Schema({
    pname:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    },
    Description:{
        type:String,
        required:false
    },
    Image:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('products',proSchema);