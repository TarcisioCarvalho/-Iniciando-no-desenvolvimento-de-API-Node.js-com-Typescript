import { Role } from "@roles/entities/Role";

type createRoleDTO = {
    name : string;
}

export class RolesRepository{

    private  roles:Role[] = [];

    constructor(){
        this.roles = [];
    }

    create({ name } : createRoleDTO){
        const role = new Role()
        Object.assign(role,  {
            name: name,
            created_at: new Date()
        })

        this.roles.push(role);
        return role;
    }
}
