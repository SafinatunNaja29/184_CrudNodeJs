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

//Endpoint untuk menghapus tugas
// router.delete('/todos/:id', (req, res) => {
//     const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
//     if (todoIndex === -1) return res.status(404).json({message:'Tugas tidak ditemukan'});

//     const deletedTodo = todos.splice(todoIndex, 1)[0]; //menghapus dan menyimpan todo yang dihapus
//     res.status(200).json({message:`Tugas '${deletedTodo.task}' telah dihapus`});
// });

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== id);
    res.status(200).send();
})


//Endpoint untuk memperbarui tugas
router.put('/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if(!todo) return res.status(404).json({message: 'Tugas tidak ditemukan'});
    todo.task = req.body.task || todo.task;

    res.status(200).json({
        message: `Tugas dengan ID '${todo.id}' telah diperbarui`,
        updateTodo: todo
    });
});