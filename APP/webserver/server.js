const express= require('express')
const hbs= require('hbs')
const fs= require('fs')
var app= express()
app.set('view engine', 'hbs')
//express middleware
app.use(express.static(__dirname+'/public'))
// register handler, next is whem middleware function is done
app.use((req, res, next)=>{
    var now= new Date().toString()
    var log=`${now}: ${req.method} ${req.url}`
    //console.log()
    fs.appendFile('hello.txt', log + '\n', (err)=>{
        if(err){
            console.log('not possible')
        }
    } )
    //fs.writeFileSync('hello.txt', `${now}: ${req.method} ${req.url}`)
    next()
})
app.get('/', (req,res)=>{
res.send({
    name: 'ruchika',
    age: [30,25,29]
})
})

app.get('/about', (req,res)=>{
res .render('about.hbs')    
})

   
    app.get('/bad', (req,res)=>{
        res.send({errorMessage: 'dcd'})
        })
    
        
app.listen(3000, ()=>{
    console.log('server is up at 3000')
})