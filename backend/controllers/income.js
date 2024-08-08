const IncomeSchema = require("../models/incomeMode");


exports.addIncome=async(req,res) => {
    const {title,amount,category,description,date} =req.body;
    
    const income=IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        if(!title || !category || !description || !date){
            return res.status(400).json({message:"All field are required"})
        }
        if(amount <=0 || !amount === 'number'){
            return res.status(400).json({message:"Amount should be positive"})
        }await income.save()
        res.status(200).json({message:'Income Added'})
    } catch (error) {
        res.status(500).json({message:'Server error'})
    }

    console.log(income);
}