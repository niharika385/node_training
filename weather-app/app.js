const request= require('request')

const url =  'http://api.weatherstack.com/current?access_key=e6393c7747adc7f7d513563a3d45d6e1&query=New York'

request({url: url}, (error, response) => {

    if (error) {
        console.log('Unable to connect to location services!')
        } else {
            data = JSON.parse(response.body )
            console.log( data.current.temperature )
        }

})