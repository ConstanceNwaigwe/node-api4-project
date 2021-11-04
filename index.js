require('dotenv').config();

const express = require('express');
const server = express();

const port = process.env.PORT || 5000;
const Users = [
    {
    id: 1,
    name:"Jane Doe",
    email:"janedoe@email.com"
    },
    {
        id: 2,
        name:"Amy Brown",
        email:"Abrown@email.com"
    }
];

server.get("/", (req,res) => {
    res.send("Users");
})
server.get("/api/users", (req,res) => {
    res.send(Users);
})
server.post("/api/register", (req,res) => {
    Users.push(req.body);
    res.status(201).json(req.body);
})
server.post("/api/login", (req,res) => {
    Users.push(req.body);
    res.status(201).json(req.body);
})

server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
  });