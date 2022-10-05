const express = require('express')
const app = express()
const PORT = 4000
// let bodyParser = require('body-parser')
// let mysql = require('mysql')

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))

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

// connection to mysql database

// app.get('/about', (req, res) => {
//     res.send('This is my about route')git aa
// })

module.exports = app;
