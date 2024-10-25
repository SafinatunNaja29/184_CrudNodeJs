const express = require('express');
const router = express.Router();

let todos = [
    {
        id: 1,
        name : "Charlie",
        task: "Belajar Node.Js", 
        completed: false
    },
    {
        id: 2,
        name : "Alex",
        task: "Membuat API", 
        completed: false
    },
    {
        id: 3, 
        name : "Alice",
        task : "Membuat HTML",
        completed : false
    }, 
    {
        id: 4, 
        name : "Boby",
        task : "Belajar Express.js", 
        completed: false
    },
    {
        id: 5, 
        name : "Edlen",
        task : "Download Postman",
        completed: false
    },
    {
        id: 6, 
        name : "Jesica",
        task : "Membuat Web",
        completed: false
    },
];

//Endpoint untuk mendapatkan data todos
router.get('/', (req, res) => {res.json(todos); });

router.post('/', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        name : req.body.name,
        task: req.body.task,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

module.exports = router;