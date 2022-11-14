const express =require('express')
const { User } = require('../models/users')
const users = require('../models/users')
const { append } = require('vary')


const auth = require('../middleware/auth')

const router = new express.Router()

router.get('/test', (req, res) =>{
    res.send("test router!!!")
} )

router.get('/users', auth, async (req,res) =>{

    try{
        const user1 = await users.User.find({})
        res.status(200).send(user1)
    }catch(e) {
        res.status(400).send(e)
    }   
    // users.User.find({}).then( (users) =>{
    //     res.send(users)
    // }).catch( (error) => {
    //     res.status(404).send(error)
    // })
})
router.get('/users/:id', async (req,res) =>{
    try{    
        const userr = users.User.findById(req.params.id)
        res.send(userr)
    }catch(e){
        res.status(404).send(error)
    }

    // users.User.findById(req.params.id).then( (users) =>{
    //     res.send(users)
    // }).catch( (error) => {
    //     res.status(404).send(error)
    // })
})

router.patch('/users/:id', async (req, res) =>{
    try{
        const user = await users.User.findByIdAndUpdate(req.params.id , req.body, {new:true, runValidators:true})
        if (!user){
            res.status(404).send(e)
        }
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }
})

router.delete('/users/:id', async (req, res) =>{
    try{
        const userr = await users.User.findByIdAndDelete('req.params.id')
        res.status(200).send(userr)
    }catch(e){
        res.status(404).send(e)
    }
})

router.post('/users', async (req, res) =>{

     console.log(req.body)
     const user = new users.User(req.body)
     try{
        user.save()
        res.status(200).send(user)
     }catch(e){
        res.status(404).send(e)
     }
    // user.save().then( () =>{
    //     res.send(user)
    // }).catch( (error) => {
    //     res.status(404).send(error)
    // })
})

module.exports = router