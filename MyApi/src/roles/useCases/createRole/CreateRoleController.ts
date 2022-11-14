import { RolesRepository } from "@roles/repositories/RolesRepository";
import { AppError } from "@shared/Errors/AppError";
import { Request, Response } from "express";
import { CreateRoleUseCase } from "./CreateRoleUseCase";

export class CreateRoleController{

    constructor(private rolesUseCase : CreateRoleUseCase) {}

   async handle(request:Request,response:Response) : Promise<Response>{
        const {name} = request.body;

        const role = await this.rolesUseCase.execute( {name} );

        return response.status(201).json(role);
    }
}
