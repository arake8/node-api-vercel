const express = require('express')
const app = express()
const PORT = 4000

app.listen(PORT, ()=>{
    console.log(`API Listening on PORT ${PORT}`)
})

app.get('/', (req, res) =>{
    return res.send({
        error:false,
        message: 'Welcome to ReSTful API',
        written_by: 'Kitsana',
        published_on: 'https://milerdev.dev'
    })
})
