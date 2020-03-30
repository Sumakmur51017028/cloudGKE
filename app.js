'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.write('Sumakmur 51017028 Sistem Informasi12345')
    res.end()
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
