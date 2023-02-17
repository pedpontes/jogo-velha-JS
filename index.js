const path = require('path')
const insert = require('./rules/insert')
const verify = require('./rules/verify')
const zerandoTab = require('./rules/zerandoTab')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
var tab = [[3],[3],[3]]

function init(player,res){
    let add = insert(tab,player);
    if(add){
        verify(tab)
            ? res.status(200).json({ add: true, win: true })
            : res.status(200).json({ add: true, win: false })}
    else{res.json({ add: false, win: false })}
}

app.use(express.static(path.join('client')))
app.use(bodyParser.json())

app.post('/send', (req,res) => {
    player = req.body.player
    init(player, res)
})
app.get('/reset', (req,res) => {
    zerandoTab(tab)
    res.sendStatus(200)
})

zerandoTab(tab)
app.listen(PORT, () => console.log(`Server running in port: ${PORT}`))