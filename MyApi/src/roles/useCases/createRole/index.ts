import { RolesRepository } from "@roles/repositories/RolesRepository";
import { CreateRoleController } from "./CreateRoleController";
import { CreateRoleUseCase } from "./CreateRoleUseCase";

const rolesRepository = RolesRepository.getInstance();
const rolesUseCase = new CreateRoleUseCase(rolesRepository);
export const roleController = new CreateRoleController(rolesUseCase);
