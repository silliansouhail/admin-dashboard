const User = require("../models/UserSchema")
const OverallStat = require("../models/OverallStat")
const Transaction = require("../models/Transaction")

const generalControllers ={
    getUser: async(req, res,) =>{
        try {
            const {id}=req.params
            
            const user = await User.findById(id)
            res.status(200).json(user)
        } catch (error) {
            res.status(404).json({message:error.message});
        }
    },
    getDashboardStats: async (req,res)=>{
        try {
            //hardCoded data
            const currentMonth = 'November'
            const currentYear = '2021'
            const currentDay = '2021-11-15'
            
            // Recent Transactions
            const transactions = await Transaction.find().limit(50).sort({createdOn: -1})

            // Overall Stats
            const overallStats = await OverallStat.find({year: currentYear})

            const {
                totalCustomers,
                yearlyTotalSoldUnits,
                yearlySalesTotal,
                monthlyData,
                salesByCategory,
            } = overallStats[0]

            const thisMonthStats = overallStats[0].monthlyData.find(({month}) =>{
                return month === currentMonth
            })

            const toDayStats = overallStats[0].dailyData.find(({date}) =>{
                return date === currentDay
            })

            res.status(200).json({
                totalCustomers,
                yearlyTotalSoldUnits,
                yearlySalesTotal,
                monthlyData,
                salesByCategory,
                thisMonthStats,
                toDayStats,
                transactions,
            });
        } catch (error) {
            res.status(404).json({message:error.message});
        }
    },
}

module.exports = generalControllers