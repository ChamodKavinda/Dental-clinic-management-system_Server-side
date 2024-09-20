const Appointment = require('../model/AppointmentSchema');

const saveAppointment=(req,resp)=>{
    const appointmentDto = new Appointment({
        id:req.body.id,
        patientId:req.body.patientId,
        dentistId:req.body.dentistId,
        date:req.body.date,
        time:req.body.time,
        email:req.body.email,
        description:req.body.description,
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
        patientId:req.body.patientId,
        dentistId:req.body.dentistId,
        date:req.body.date,
        time:req.body.time,
        email:req.body.email,
        description:req.body.description
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

const lastAppointment=(req,resp)=>{

    Appointment.find().sort({ _id: -1 }).limit(1)
        .then(result=>{
        resp.status(200).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const deleteAppointment=(req,resp)=>{
    const userId = req.body.userId;
    Appointment.deleteOne({ id: userId })
        .then(result=>{
        resp.status(200).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

module.exports={
    saveAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointment,
    lastAppointment
}