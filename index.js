const express = require('express')
const app = express()
const port = 3001

app.get('/',(req,res)=> {
   res.send('hola mundo')
})


app.listen(port,()=>{
   console.log(`listen ip port ${port}`)
})
