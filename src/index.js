const express = require('express');

const app = express();

app.get('/projects',(req,res)=>{
    return res.json({
        projects:
    [
    'Project 1',
    'Project 2'   
    ]
    });
});

app.post('/projects',(req,res)=>{
    return res.json({
        projects:
        [
            'Project 1',
            'Project 2',
            'Project 3'
        ]
    })
});

app.put('/projects/:id',(req,res)=>{
    return res.json({
        projects:
        [
            'Project 4',
            'Project 2',
            'Project 3'
        ]
    })
});

app.delete('/projects/:id',(req,res)=>{
    return res.json({
        projects:
        [
            'Project 2',
            'Project 3'
        ]
    })
});

app.listen(3000);