import express from "express";
import cors from "cors";

const server = express(); //cria um servidor
server.use(cors());
server.use(express.json());

const users= [];
const tweets = [];


server.post("/sing-up", (req, res) => {

const userData = req.body;


if(!userData.username || !userData.avatar){
  res.status(400).send("Todos os campos são obrigatórios!");
}

users.push(userData);
res.status(201).send("OK");
});



// //configura uma funlão pra ser executada quando bater um GET na rota "/menu"
// server.get("/tweets", (req, res) => {
//     //mando como resposta
//   res.send("ola sou o servidor da T9")
// })

//configura o servido para rodr na porta 4001
//server.listen(4000);
server.listen(5000, () => {
    console.log('Servidor deu bom!')
});