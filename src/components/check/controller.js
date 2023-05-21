const Model = require('./model')

getRegisters =async ()=>{
    let result = await Model.find()
    return result
}

addRegister = async (data)=>{
        const query = { fecha: `${data.fecha}` };
        let msg = 'Entrada Registrada!'

        if(await Model.findOne(query)){
            msg = 'Su antrada ya había sido registrada'
            return msg
        } 

        await Model.create(data)
        return msg
}

updateRegister = async (data)=>{
    const query = { fecha: `${data.fecha}` };
    let id = null

    let match = await Model.findOne(query)

    if(!match){
        await Model.create( {fecha: query.fecha, in: `` ,  out: `${data.out}` })
        return 'Se registró su salida pero no la entrada!'
    }else{
        id = match._id
        
        if(await Model.findOne({_id:id})) return 'Su salida ya había sido registrada'

        await Model.findOneAndUpdate({_id: id}, { out: `${data.out}` })   
        return 'Salida Registrada!'
    }

}

module.exports = {
    getRegisters,
    addRegister,
    updateRegister
}