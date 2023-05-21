const db = require('mongoose')
require('dotenv').config()

db.Promise = global.Promise
 
async function connect(){    
    const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.l6omk.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`
    await db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log('[DB] - Conectado con exito!')) 
    .catch(e => console.log('Error de conexión', e.message))
}
 
module.exports = connect