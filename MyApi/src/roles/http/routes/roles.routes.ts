import { RolesRepository } from "@roles/repositories/RolesRepository";
import { roleController } from "@roles/useCases/createRole";
import { CreateRoleController } from "@roles/useCases/createRole/CreateRoleController";
import { listRolesController } from "@roles/useCases/listRoles";
import { ListRolesController } from "@roles/useCases/listRoles/ListRolesController";
import { Router } from "express";

const rolesRouter = Router();


rolesRouter.post("/",(request,response) => {
    roleController.handle(request,response);
});

rolesRouter.get("/",(request,response) => {
    listRolesController.handle(request,response);
});

export {rolesRouter};
