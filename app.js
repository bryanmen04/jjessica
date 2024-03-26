const mongoose  = require('mongoose')
const url_bd = 'mongodb://localhost:27017/bd2'
mongoose.connect(url_bd)
.then(() => {
    console.log('conexion succefully')
})
.catch((err) =>{
    console.log('conexxion succefullynt')
})

const al_es = new mongoose.Schema({
    name: {
        type: String
    },
    apepat: {
        type: String
    },
    apemat: {
        type: String
    },
    tel_numb: {
        type: Number
    }
})
const alumnos = new mongoose.model('tre', al_es)
alumnos.create({
    name:"bryan",
    apepat: "mendez",
    apemat: "delgado",
    tel_numb: 4493822451
})