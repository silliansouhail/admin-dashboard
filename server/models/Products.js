const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema(
    {
        name:String,
        price:Number,
        description:String,
        category:String,
        rating:Number,
        supply:Number,
    },
    {timestamps:true,}
)

const Products = mongoose.model('products',ProductsSchema)

module.exports = Products