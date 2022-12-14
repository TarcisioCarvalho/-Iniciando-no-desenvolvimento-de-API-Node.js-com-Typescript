import { RolesRepository } from "@roles/repositories/RolesRepository";
import { roleController } from "@roles/useCases/createRole";
import { CreateRoleController } from "@roles/useCases/createRole/CreateRoleController";
import { deleteRoleController } from "@roles/useCases/deleterole";
import { listRolesController } from "@roles/useCases/listRoles";
import { ListRolesController } from "@roles/useCases/listRoles/ListRolesController";
import { showRoleController } from "@roles/useCases/showrole";
import { updateRoleController } from "@roles/useCases/updateRole";
import { Router } from "express";

const rolesRouter = Router();


rolesRouter.post("/",(request,response) => {
    roleController.handle(request,response);
});

rolesRouter.get("/",(request,response) => {
    listRolesController.handle(request,response);
});

rolesRouter.get("/:id",(request,response) => {
  return  showRoleController.handle(request,response);
});

rolesRouter.put("/:id",(request,response) => {
  return  updateRoleController.handle(request,response);
});

rolesRouter.delete("/:id",(request,response) => {
  return  deleteRoleController.handle(request,response);
});

export {rolesRouter};
