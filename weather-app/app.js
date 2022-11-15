const request= require('request')
const utils = require('./utils/geocode.js') 
//without yargs, we can use process.argv for cmd line args.
address = process.argv[2]
console.log(process.argv)

utils.geocode(address , (error, {temperature, observation_time}) => {
    if (error){
        return console.log('error!')
    }
    //console.log(error)
    console.log(address + ' ' + temperature + ' '+ observation_time)
    utils.geocode('America', (error, data) =>{
        if (error){
            return console.log('error!')
        }
        //console.log(error)
        console.log('america'+data)
    })
})