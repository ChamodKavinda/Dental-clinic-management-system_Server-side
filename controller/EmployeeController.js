const Employee = require('../model/EmployeeSchema');

const saveEmployee=(req,resp)=>{
    const employeeDTO = new Employee({
        id:req.body.id,
        name:req.body.name,
        age:req.body.age,
        number:req.body.number,
        sex:req.body.sex,
        address:req.body.address,
        description:req.body.description,
    })

    employeeDTO.save()
    .then(result=>{
        resp.status(201).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const updateEmployee=(req,resp)=>{
    Employee.updateOne({id:req.body.id},{
        name:req.body.name,
        age:req.body.age,
        number:req.body.number,
        sex:req.body.sex,
        address:req.body.address,
        description:req.body.description,
    })
    .then(result=>{
        resp.status(201).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const deleteEmployee=(req,resp)=>{
    const userId=req.body.userId;
    Employee.deleteOne({id:userId})
    .then(result=>{
        resp.status(200).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const getAllEmployee=(req,resp)=>{
    Employee.find()
    .then(result=>{
        resp.status(200).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

module.exports={
    saveEmployee,
    deleteEmployee,
    getAllEmployee,
    updateEmployee
}