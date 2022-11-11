const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbname='task-manager'
const mongodb = require('mongodb')
const mongoClient = new mongodb.MongoClient(connectionUrl)



mongoClient.connect(connectionUrl, {useNewUrlParser: true}, (error, client) =>{
    if(error){
        return console.log('could not connect')
    }

    const db = client.db(dbname)

    db.collection('users').insertOne({
        'name':'niharika',
        'age':25
    })

})