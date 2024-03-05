const ClientModel = require("../model/clientModel")

module.exports={
    createClient: async(req, res)=>{
        console.log("reqbody", req.body)

        try {
            const data = req.body
            if(!data.name) throw new Error("Name is required")
            if(!data.lastName) throw new Error("lastname is required")
            if(!data.email) throw new Error("email is required")
            if(!data.project) throw new Error("project is required")
            if(!data.phoneNumber) throw new Error("Mobile Number is required")


            await ClientModel.create(data)
            res.send({status:200, message:"Client created successfully", data:[]})

            
        } catch (error) {
            res.send({status:200, message:error.message})
            
        }
    },
    getClients: async(req, res)=>{
        console.log("reqbody", req.body)

        try {
            const client= await ClientModel.find(data)
            res.send({status:200, message:"Client created successfully", data:client})

            
        } catch (error) {
            res.send({status:200, message:error.message})
            
        }
    }
}

