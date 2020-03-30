'use strict'

const express = require('express')

const PORT = 8000
const HOST = '35.194.216.248'

const app = express()
app.get('/', (req, res) => {
    res.write('Sumakmur 51017028 Sistem Informasi123')
    res.end()
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
