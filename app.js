'use strict'

const express = require('express')
const fs = require('fs')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.writeHead(200,{'Content-Type': 'text/html'})
    fs.readFile('index.html')
    res.write('Sumakmur 51017028 Sistem Informasi12345')
    res.end()
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
