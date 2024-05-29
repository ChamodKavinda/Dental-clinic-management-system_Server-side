const Appointment = require('../model/AppointmentSchema');

const saveAppointment=(req,resp)=>{
    const appointmentDto = new Appointment({
        id:req.body.id,
        name:req.body.name,
    })
    appointmentDto.save().then(result=>{
        resp.status(200).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const updateAppointment=(req,resp)=>{

}

const getAppointment=(req,resp)=>{

}

const deleteAppointment=(req,resp)=>{

}

module.exports={
    saveAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointment
}