const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router()
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use("/", router)

app.use(cors())

app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin:*"); // update to match the domain you will make the request from
    next();
  });

router.get("/", 
function itens(req, res){
    const items = [{"_id":"62699335927bf80017a8e1d3","id":1,"title":"Chaveiro de time","price":109.99,"description":"Chaveiro de time","category":"Chaveiro","image":"http://localhost:3000/images/chaveiro_time.jpg","rating":{"rate":3.9,"count":120}},{"_id":"626993de927bf80017a8e1d4","id":2,"title":"Chaveiro com Letra","price":33,"description":"Chaveiro personalizado com letra","category":"Chaveiro","image":"http://localhost:3000/images/chaveiro_letra.jpg","rating":{"rate":5,"count":120}},{"_id":"62699551927bf80017a8e1d6","id":3,"title":"Chaveiro com letras","price":199.9,"description":"Chaveiro com letras, grandes e pequenas","category":"Chaveiros","image":"http://localhost:3000/images/chaveiro_letras.jpg","rating":{"rate":5,"count":120}}]
    res.json(items)
})

var user = []
router.post('/usuarios', (req,res) => {
        var usuario = req.body
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log(req.body.name)
        console.log(usuario)
        user.push([usuario])
        console.log(user)
        res.json(user)
})

router.get("/usuarios", (req,res) => {
    const pass = req.query.password
    console.log(pass)
    res.json(user)
})

app.listen(7000, ()=>{
    console.log('listening on port 7000')
})