const mongoose = require('mongoose')

const AffiliateStatSchema = new mongoose.Schema(
    {
        userId:{type: mongoose.Types.ObjectId, ref:'users'},
        affiliateSales: {
            type: [mongoose.Types.ObjectId],
            ref: 'transactions '
        },
    },
    {timestamps:true,}
)

const AffiliateStat = mongoose.model('affiliateStat',AffiliateStatSchema)

module.exports = AffiliateStat