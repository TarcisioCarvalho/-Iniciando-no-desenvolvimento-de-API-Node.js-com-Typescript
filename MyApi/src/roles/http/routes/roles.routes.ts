import { RolesRepository } from "@roles/repositories/RolesRepository";
import { Router } from "express";

const rolesRouter = Router();
const rolesRepository = new RolesRepository();


rolesRouter.post("/",(request,response) => {
    const {name} = request.body;
    const roleAlreadyExistis = rolesRepository.findByName(name);

    if (roleAlreadyExistis) return response.status(404).json({erro : "Role Already Existis"})

    const role = rolesRepository.create( {name} );

    return response.status(201).json(role);
});

rolesRouter.get("/",(request,response) => {
    
    const roles = rolesRepository.findAll();

    return response.json(roles);
});

export {rolesRouter};
