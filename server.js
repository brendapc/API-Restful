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
    res.json(data);
})


app.get('/clients/id:', function(req,res){
    const { id } = req.params;
    const client = data.find(cli=> cli.id == id);

    if(!client) return res.status(204).json();

    res.json(client)
})
app.post('/clients',function(req,res){
    const {name , email} = req.body;

    //salvar
    res.json({name, email});
} )
app.put('/clients/:id', function(req,res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if(!client) return res.status(204).json();

    const { name } = req.body;

    client.name = name;

    res.json(client);

})
app.delete('/clients/:id', function(req,res){
    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id != id);

    res.json(clientsFiltered);
})

app.listen(3000, function(){
    console.log('server is running')
});