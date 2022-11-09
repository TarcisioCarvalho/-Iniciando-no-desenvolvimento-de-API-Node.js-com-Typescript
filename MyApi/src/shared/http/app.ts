import express, { NextFunction } from "express";
import "express-async-errors";
import swaggerUI from "swagger-ui-express";
import cors from "cors";
import { routes } from "./routes";
import { AppError } from "@shared/Errors/AppError";
import swaggerFile from "../../swagger.json";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/docs",swaggerUI.serve,swaggerUI.setup(swaggerFile));
app.use(routes);
app.use((error : Error, request : Request, response : Response, next : NextFunction) => {
    if (error instanceof(AppError)){
        return response.status(error.statusCode).json({
            status: "Error",
            message: error.message
        })
    }
    console.log(error);
    if (error instanceof(AppError)){
        return response.status(500).json({
            status: "Error",
            message: "Internal Server Error"
        })
    }
})

export {app};
