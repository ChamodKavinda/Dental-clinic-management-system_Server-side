const Patient = require('/model/PatientSchema');

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