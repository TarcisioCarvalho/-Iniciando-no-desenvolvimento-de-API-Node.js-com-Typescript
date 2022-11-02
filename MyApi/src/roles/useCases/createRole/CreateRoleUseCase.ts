import { Role } from "@roles/entities/Role";
import { RolesRepository } from "@roles/repositories/RolesRepository";
import { AppError } from "@shared/Errors/AppError";

type CreateRoleDTO = {
    name : string;
}

export class CreateRoleUseCase{
    constructor(private rolesRepository : RolesRepository){}

    execute({ name } : CreateRoleDTO) : Role{
        
        const roleAlreadyExistis = this.rolesRepository.findByName(name);

        if (roleAlreadyExistis) throw new AppError("Role Already Existis");

        return this.rolesRepository.create( {name} );

    }
}
