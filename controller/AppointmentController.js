const Appointment = require('../model/AppointmentSchema');

const saveAppointment=(req,resp)=>{
    const appointmentDto = new Appointment({
        id:req.body.id,
        name:req.body.name,
    })
    appointmentDto.save().then(result=>{
        resp.status(201).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const updateAppointment=(req,resp)=>{
    Appointment.updateOne({id:req.body.id},{
        id:req.body.id,
        name:req.body.name
    }).then(result=>{
        resp.status(201).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    });
}

const getAppointment=(req,resp)=>{

    Appointment.find().then(result=>{
        resp.status(200).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const deleteAppointment=(req,resp)=>{
    Appointment.deleteOne({id:req.headers.id}).then(result=>{
        resp.status(200).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

module.exports={
    saveAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointment
}