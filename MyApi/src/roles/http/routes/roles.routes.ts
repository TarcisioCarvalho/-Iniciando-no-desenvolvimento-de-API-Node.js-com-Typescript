import { RolesRepository } from "@roles/repositories/RolesRepository";
import { roleController } from "@roles/useCases/createRole";
import { CreateRoleController } from "@roles/useCases/createRole/CreateRoleController";
import { Router } from "express";

const rolesRouter = Router();

const rolesRepository = new RolesRepository();

rolesRouter.post("/",(request,response) => {
    roleController.handle(request,response);
});

rolesRouter.get("/",(request,response) => {

    const roles = rolesRepository.findAll();

    return response.json(roles);
});

export {rolesRouter};
