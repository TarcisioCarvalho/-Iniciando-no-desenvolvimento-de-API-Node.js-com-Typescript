import { Role } from "@roles/entities/Role";
import {dataSource} from "@shared/typeorm";
import { Repository } from "typeorm";

type createRoleDTO = {
    name : string;
}

export type paginateParms = {
    page: number;
    skip: number;
    take: number;
}

export type rolesPaginateProperties = {
    per_page: number;
    total: number;
    current_page: number;
    data: Role[]
}

export class RolesRepository{

    private  respository:Repository<Role>;
    private static INSTANCE: RolesRepository;

    private constructor(){
        this.respository = dataSource.getRepository(Role);
    }

    public static getInstance(): RolesRepository{
        if(!this.INSTANCE) return RolesRepository.INSTANCE = new RolesRepository();
        return this.INSTANCE;
    }

    async create({ name } : createRoleDTO) : Promise<Role>{
        const role = this.respository.create({name})
        return this.respository.save(role);
    }
    async save(role:Role):Promise<Role>{
        return this.respository.save(role);
    }
    async delete(role:Role):Promise<void>{
        await this.respository.remove(role);
    }
    async findAll({page,skip,take}: paginateParms):Promise<rolesPaginateProperties>{
        const [roles,total] = await this.respository.createQueryBuilder()
        .skip(skip)
        .take(take)
        .getManyAndCount();

        const result:rolesPaginateProperties = {
            current_page:page,
            per_page:take,
            total:total,
            data:roles
        };

        return result;
    }

    async findByName(name : string) : Promise<Role | null> {
        return await this.respository.findOneBy({name});
        
    }

    async findById(id : string) : Promise<Role | null> {
        return await this.respository.findOneBy({id});
        
    }
}
