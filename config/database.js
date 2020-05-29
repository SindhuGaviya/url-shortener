const mongoose=require('mongoose')

const setupDB=()=>{
    mongoose.connect('mongodb://localhost:27017/short-URL')
    .then(()=>{
        console.log('success')
    })
    .catch(()=>{
        console.log('err')
    })
}

module.exports=setupDB