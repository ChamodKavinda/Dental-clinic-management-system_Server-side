const mongoose = require('mongoose');

const DentistSchema = new mongoose.Schema({
    id:{type:String , require:true},
    name:{type:String , require:true},
    age:{type:Number , require:true},
    number:{type:Number , require:true},
    sex:{type:String , require:true},
    address:{type:String , require:true},
    description:{type:String , require:true},
})

module.exports=mongoose.model('dentist',DentistSchema)