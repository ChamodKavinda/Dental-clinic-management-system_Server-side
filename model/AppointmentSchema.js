const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
   id:{type:String, require:true},
   patient:{type:String, require:true},
   dentist:{type:String, require:true},
   date:{type:String, require:true},
   time:{type:String, require:true},
});

module.exports=mongoose.model('appointment',AppointmentSchema)