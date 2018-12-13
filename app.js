const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const queries = require('./queries')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.get('/users', (req, res) => {
    queries.getAllUsers().then(response => res.send(response))
})
app.get('/users/:id', (req, res) => {
    queries.getUserById(req.params.id).then(user => res.status(200).send(user[0]))
})
app.post('/users', (req, res) => {
    queries.createUser(req.body).then(user => {
        res.send(user[0])
    })
})
app.put('/users/:id', (req, res) => {
    queries.editReview(req.params.id, req.body).then(editUser => res.json(editUser))
})
app.delete('/users/:id', (req, res) => {
    queries.deleteUser(req.params.id).then(res.status(204).send())
})

const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)