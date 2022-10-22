import { AppError } from "@shared/Errors/AppError";
import { Router } from "express";
const routes = Router();


routes.get("/", (request, response) => {
    throw new AppError("Acesso Negado");
    return response.json({ message: "Olá Dev" });
});


export {routes};
