import express from "express";
import "express-async-errors";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.get('/', (request,response) => {
    return response.json({message:"Olá Dev"});
});

app.listen(3000,()=> console.log("Rota Funcionando"));
