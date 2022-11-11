import { Role } from "@roles/entities/Role";
import { DataSource } from "typeorm";
import { CreateRolesTable1668111256449 } from "./migrations/1668111256449-CreateRolesTable";


export const dataSource = new DataSource({
    type:"sqlite",
    database:"./db.sqlite",
    entities:[Role],
    migrations:[CreateRolesTable1668111256449]
});
