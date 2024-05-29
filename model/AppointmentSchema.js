const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
   id:{type:String, require:true},
   name:{type:String, require:true},
});

module.exports=mongoose.model('appointment',AppointmentSchema)