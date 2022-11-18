import { Role } from "@roles/entities/Role";
import { RolesRepository } from "@roles/repositories/RolesRepository";
import { AppError } from "@shared/Errors/AppError";

type DeleteRoleParams = {
    id:string;
}

export class DeleteRoleUseCase{
    constructor(private rolesRepository: RolesRepository){}

    async execute({id}: DeleteRoleParams): Promise<void>{
        const role = await this.rolesRepository.findById(id);
        if(!role) throw new AppError("Role Not Found",404);
         await this.rolesRepository.delete(role);
    }
}
