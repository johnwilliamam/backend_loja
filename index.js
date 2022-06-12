const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

app.get("/", 
function itens(req, res){
    const items = [{"_id":"62699335927bf80017a8e1d3","id":1,"title":"Chaveiro de time","price":109.99,"description":"Chaveiro de time","category":"Chaveiro","image":"http://localhost:3000/images/chaveiro_time.jpg","rating":{"rate":3.9,"count":120}},{"_id":"626993de927bf80017a8e1d4","id":2,"title":"Chaveiro com Letra","price":33,"description":"Chaveiro personalizado com letra","category":"Chaveiro","image":"http://localhost:3000/images/chaveiro_letra.jpg","rating":{"rate":5,"count":120}},{"_id":"62699551927bf80017a8e1d6","id":3,"title":"Chaveiro com letras","price":199.9,"description":"Chaveiro com letras, grandes e pequenas","category":"Chaveiros","image":"http://localhost:3000/images/chaveiro_letras.jpg","rating":{"rate":5,"count":120}}]
    res.json(items)
})

var user = []
app.post('/usuarios', (req,res) => {
        var usuario = req.body
        console.log(req )
        console.log(usuario)
        user.push([usuario])
        console.log(user)
        return res.send(user)
})

app.get("/usuarios", (req,res) => {
    res.send(user)
})

app.listen(7000, ()=>{
    console.log('listening on port 3000')
})