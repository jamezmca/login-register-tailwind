const express = require('express')
const app = express()
const port = 5353

app.use(express.static('public'))
app.use(express.json())

app.post('/', (req, res) => {
    const { username, password } = req.body
    res.status(200).send({ details: { username, password } })
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))