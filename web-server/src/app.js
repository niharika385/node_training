const express = require('express')

const path = require('path')
console.log(__dirname)
const pub_dir = path.join(__dirname, '../public')
const templates = path.join(__dirname, '../templates')
console.log(pub_dir)
app = express()

app.set('view engine', 'hbs')
app.use(express.static(pub_dir) )
app.set('views', templates)


app.get('', (req, res) => {
    res.render('index', {name:'niharika', lastname: 'singh'})
})

// app.get('/help', (req, res) => {
//     res.send('help')
// })

// app.get('/about', (req, res) => {
//     res.send('about')
// })

app.get('/weather', (req, res) => {
    res.send('weather')
})

app.listen(3000, () => {
    console.log('server is up!!!')
})