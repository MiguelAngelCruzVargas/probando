const express = require ('express')


const app = express()

app.get('/', (req,res)=> {res.send('Hello word, GET')} )//los navegadores solo soportan el motodo GET

app.post('/', (req,res)=> {res.send('Hello word, POST')} )

app.put('/', (req,res)=> {res.send('Hello word, PUT')} )

app.patch('/', (req,res)=> {res.send('Hello word, PATCH')} )

app.delete('/', (req,res)=> {res.send('Hello word, DELETE')} )



/*
funcionalidad
*/

//http://localhost:3000/
app.listen(3000, ( ) =>{ console.log('listening on port 3000')})
