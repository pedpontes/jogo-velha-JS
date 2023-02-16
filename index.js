const axios = require('axios')
const verify = require('./rules/verify')
const zerandoTab = require('./rules/zerandoTab')
const express = require('express')
const app = express()
const PORT = 3000
var tab = [[3],[3],[3]]
const jogadores = [{id: 1, square: 'x'},{id: 2, square: 'o'}]

// app.post('/send', send)

app.listen(PORT, () => console.log(`Server running in port: ${PORT}`))