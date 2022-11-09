import { dataSource } from "@shared/typeorm";
import "dotenv/config";
import "reflect-metadata";
import { app } from "./app";

dataSource.initialize()
.then(()=>{
    app.listen(process.env.PORT, () =>
    console.log(`Logado na porta ${process.env.PORT}`),
);
})
.catch()

