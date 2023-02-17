const path = require('path')
const insert = require('./rules/insert')
const verify = require('./rules/verify')
const zerandoTab = require('./rules/zerandoTab')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
var tab = [[3],[3],[3]]

app.use(express.static(path.join('client')))
app.use(bodyParser.json())

app.post('/send', (req,res) => {
    console.log(req.body)
    // if(!insert(tab,player)){
    //     if(verify(tab)){
    //         res.json({ add: false, win: true })
    //     }
    //     else{
    //         res.json({ add: false, win: false })
    //     }
    // }
    // else{
    //     if(verify(tab)){
    //         res.json({ add: true, win: true })
    //     }
    //     else{
    //         res.json({ add: true, win: false })
    //     }
    // }
})

app.listen(PORT, () => console.log(`Server running in port: ${PORT}`))