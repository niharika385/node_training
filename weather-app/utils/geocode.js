const request= require('request')


const geocode = (address, callback) => {
    const url =  'http://api.weatherstack.com/current?access_key=e6393c7747adc7f7d513563a3d45d6e1&query='+address


    request({url: url}, (error, response) => {

        if (error) {
            callback('Unable to connect to location services!', undefined)
        }else if (JSON.parse(response.body).error){
            callback('Unable to connect to location services!', undefined)
        } 
        else {
            data = JSON.parse(response.body )
            //console.log( data.current.temperature )
            callback(undefined, data.current)
        }

})

}
module.exports = {
    'geocode': geocode
}