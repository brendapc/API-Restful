const express = require('express')
const app = express()
const data = require('./data.json')

app.use(express.json());

//verbos HTTP
/*GET, POST, PUT, DELETE usar esses verbos é uma boa pratica
get -> recebe os dados dados de um resource
post-> envia os dados e infos para serem processados por um resource
put->atualizar dados de um resource
delete->deletar um resource

http://localhost:3000/client
o resource aqui é o client

use todos os resources num padrão:  tudo singular ou plural
*/
app.get('/clients', function(req,res){
    res.json(data)
})


app.get('/clients/id:', function(req,res){
    
})
app.post('/clients',function(req,res){

} )
app.put('/clients/:id', function(req,res){

})
app.delete('/clients/:id', function(req,res){

})

app.listen(3000, function(){
    console.log('server is running')
});