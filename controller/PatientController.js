const Patient = require('../model/PatientSchema');

const savePatient=(req,resp)=>{
    const patientDto = new Patient({
        id:req.body.id,
        name:req.body.name,
        age:req.body.age,
        number:req.body.number,
        sex:req.body.sex,
        address:req.body.address,
        description:req.body.description,
    })

    patientDto.save().then(result=>{
        resp.status(201).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const updatePatient=(req,resp)=>{
    Patient.updateOne({id:req.body.id},{
        id:req.body.id,
        name:req.body.name,
        age:req.body.age,
        number:req.body.number,
        sex:req.body.sex,
        address:req.body.address,
        description:req.body.description,
    }).then(result=>{
        resp.status(201).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const getAllPatient=(req,resp)=>{
    Patient.find().then(result=>{
        resp.status(200).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const deletePatient=(req,resp)=>{
    const userId=req.body.userId;
    Patient.deleteOne({id:userId})
        .then(result=>{
            resp.status(200).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const lastPatient=(req,resp)=>{

    Patient.find().sort({ _id: -1 }).limit(1)
        .then(result=>{
            resp.status(200).json(result);
        }).catch(error=>{
        resp.status(500).json(error);
    })
}

module.exports={
    savePatient,
    updatePatient,
    getAllPatient,
    deletePatient,
    lastPatient
}