const mongoose = require('mongoose')
require('dotenv').config()

/*
const AffiliateStat = require('../models/AffiliateStat')
const dataAffiliateStat = require('../data/index').dataAffiliateStat

const OverallStat = require('../models/OverallStat')
const dataOverallStat = require('../data/index').dataOverallStat

const Transaction = require('../models/Transaction')
const dataTransaction = require('../data/index').dataTransaction

const Products= require("../models/Products")
const ProductStat= require("../models/ProductStat")

const dataProduct = require("../data/index").dataProduct
const dataProductStat = require("../data/index").dataProductStat
*/

const connection = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewURLParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> {
        
        /*
        AffiliateStat.insertMany(dataAffiliateStat)
        OverallStat.insertMany(dataOverallStat)
        Transaction.insertMany(dataTransaction)
        Products.insertMany(dataProduct)
        ProductStat.insertMany(dataProductStat)
        */
        console.log('Connected to the database is established successfully')
    })
    .catch(err=> console.log(err))
}

module.exports = connection