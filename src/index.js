const { response } = require('express');
const express = require('express');
const { json } = require('express/lib/response');
const {v4:uuidv4} = require('uuid');

const app = express();
app.use(express.json());

const projects = [];

function logRoutes(req,res,next){
    const {method,url} = req;
    console.log(`[${method.toUpperCase()}] ${url}`);
    return next();
}

app.get('/projects',logRoutes,(req,res)=>{
    
   
    return res.json(projects);
});
app.use(logRoutes);
app.post('/projects',(req,res)=>{

    const {Name,Owner} = req.body;

    const project = {
        id:uuidv4(),
        Name,
        Owner
    }
    projects.push(project);
    return res.status(201).json(project);
   
});

app.put('/projects/:id',(req,res)=>{

    const {id} = req.params;
    const {Name,Owner} = req.body;

   

   const projectIndex = projects.findIndex(project => project.id === id);

   if(projectIndex < 0) return res.status(404).json({erroMessage:"Not Found"});
   if(!Name || !Owner) return res.status(400).json({erroMessage:"Name and owner are required"});

   const project = {
    id:uuidv4(),
    Name,
    Owner
   }

   projects[projectIndex] = project;
   return res.json(project);
});

app.delete('/projects/:id',(req,res)=>{
    const {id} = req.params;
    const projectIndex = projects.findIndex(project => project.id === id);
    if(projectIndex < 0) return res.status(404).json({erroMessage:"Not Found"});
    projects.splice(projectIndex,1);
    return res.status(204).send();
});

app.listen(3000);