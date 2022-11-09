

const fs= require('fs')
const { parse } = require('path')

// const book={
//     title:'do epic shit',
//     author:'ankur warikoo'
// }
// string_data= JSON.stringify(book)
// parse_data = JSON.parse(string_data) 
// console.log(string_data, parse_data)

// //fs.writeFileSync('data.json', parse_data)
 const dataBuffer = fs.readFileSync('data.json')
 parse_data = dataBuffer.toString()
 data_obj = JSON.parse(parse_data)

 data_obj.name='Niharika'
 data_obj.age='25'
 console.log(data_obj)
 fs.writeFileSync('data.json', JSON.stringify(data_obj ) )

