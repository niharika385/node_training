require('./db/mongoose')
const express = require('express')
const { User } = require('./models/users')
const users = require('./models/users')
const app = express()

app.use(express.json())


app.get('/users', (req,res) =>{
    users.User.find({}).then( (users) =>{
        res.send(users)
    }).catch( (error) => {
        res.status(404).send(error)
    })
})
app.get('/users/:id', (req,res) =>{
    users.User.findById(req.params.id).then( (users) =>{
        res.send(users)
    }).catch( (error) => {
        res.status(404).send(error)
    })
})

app.post('/users', (req, res) =>{
    console.log(req.body)
    const user = new users.User(req.body)
    user.save().then( () =>{
        res.send(user)
    }).catch( (error) => {
        res.status(404).send(error)
    })
})

app.listen(3000, () => {
    console.log("server is up")
})