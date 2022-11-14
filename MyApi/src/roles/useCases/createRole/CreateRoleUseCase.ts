import { Role } from "@roles/entities/Role";
import { RolesRepository } from "@roles/repositories/RolesRepository";
import { AppError } from "@shared/Errors/AppError";

type CreateRoleDTO = {
    name : string;
}

export class CreateRoleUseCase{
    constructor(private rolesRepository : RolesRepository){}

   async execute({ name } : CreateRoleDTO) : Promise<Role>{

        const roleAlreadyExistis = await this.rolesRepository.findByName(name);

        if (roleAlreadyExistis) throw new AppError("Role Already Existis");

        return this.rolesRepository.create( {name} );

    }
}
