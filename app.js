const express = require('express')
const app = express()
const port = 3000
var fs = require('fs')

const options = {
 key: fs.readFileSync('/opt/certs/example.com.key'),
 cert: fs.readFileSync('/opt/certs/example.com.crt')
};

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
