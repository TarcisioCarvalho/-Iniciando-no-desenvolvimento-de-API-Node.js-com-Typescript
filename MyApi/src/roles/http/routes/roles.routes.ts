import { RolesRepository } from "@roles/repositories/RolesRepository";
import { CreateRoleController } from "@roles/useCases/createRole/CreateRoleController";
import { Router } from "express";

const rolesRouter = Router();
const createRoleController = new CreateRoleController();
const rolesRepository = new RolesRepository();

rolesRouter.post("/",(request,response) => {
    createRoleController.handle(request,response);
});

rolesRouter.get("/",(request,response) => {

    const roles = rolesRepository.findAll();

    return response.json(roles);
});

export {rolesRouter};
