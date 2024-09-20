const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
   id:{type:String, require:true},
   patientId:{type:String, require:true},
   dentistId:{type:String, require:true},
   date:{type:String, require:true},
   time:{type:String, require:true},
   email:{type:String, require:true},
   description:{type:String, require:true},
});

module.exports=mongoose.model('appointment',AppointmentSchema)