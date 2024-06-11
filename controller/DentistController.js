const Dentist = require('../model/DentistSchema');

const saveDentist=(req,resp)=>{
    const dentistDTO= new Dentist({
        id:req.body.id,
        name:req.body.name,
        age:req.body.age,
        number:req.body.number,
        sex:req.body.sex,
        address:req.body.address,
        description:req.body.description
    })

    dentistDTO.save()
        .then(result=>{
            console.log(dentistDTO);
            resp.status(201).json(result);
        }).catch(error=>{
            resp.status(500).json(error);
    });
}

const getAllDentist=(req,resp)=>{
    Dentist.find()
        .then(result=>{
            resp.status(200).json(result);
        }).catch(error=>{
            resp.status(500).json(error);
    })
}

const updateDentist=(req,resp)=>{
    Dentist.updateOne({id:req.body.id},{
        id:req.body.id,
        name:req.body.name,
        age:req.body.age,
        number:req.body.number,
        sex:req.body.sex,
        address:req.body.address,
        description:req.body.description
    }).then(result=>{
        resp.status(201).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const deleteDentist=(req,resp)=>{
    const userId=req.body.id
    Dentist.deleteOne({id:userId})
        .then(result=>{
            resp.status(201).json(result);
        }).catch(error=>{
        resp.status(500).json(error);
    })
}

module.exports={
    saveDentist,
    getAllDentist,
    updateDentist,
    deleteDentist
}