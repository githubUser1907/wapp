const path = require('path')
const express = require('express')
const app = express()
const hbs =  require('hbs')

const pathdirname = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../templates/views')
const pp = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewspath)
app.use(express.static(pathdirname))

hbs.registerPartials(pp)

app.get('',(req,res) => {
    res.render('index')
})

app.get('/help',(req,res) => {
    res.render('help')
})

app.get('/weather',(req,res) => {
    res.send({
        place:'New york',
        forecast: 'rainy'
    })
})



app.listen(3000 , () => {
    console.log("server started")
})
