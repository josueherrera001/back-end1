import { prisma } from "../../data";
import { RoleDatasource, CreateRoleDto, RoleEntity, UpdateRoleDto } from "../../domain";
import { ErrorSpecific } from "../../helpers";

export class RoleDataSourceInfra implements RoleDatasource {
    async create(createDto: CreateRoleDto): Promise<RoleEntity> {
        const entity = await prisma.roles.create({
            data:{
                Description: createDto.Description,
                Name: createDto.Name,
                CreatedDate: new Date(),
            }
        });
        return RoleEntity.fromObject( entity );
    }

    async getAll(): Promise<RoleEntity[]> {
        const entities = await prisma.roles.findMany({
            where:{
                State:1
            }
        });

        return entities.map(entity => RoleEntity.fromObject(entity));
    }

    async findById(id: string): Promise<RoleEntity> {
        const entity = await prisma.roles.findFirst({
            where:{
                Id:id,
                State:1
            }
        });

        if ( !entity ) throw ErrorSpecific.ErrorEmpty(`Id role:  ${ id } no encontrado`);
        return RoleEntity.fromObject(entity);
    }
    
    async updateById(updateDto: UpdateRoleDto): Promise<RoleEntity> {
        
        await this.findById( updateDto.Id );       

        const updatedEntity = await prisma.roles.update({
            where:{
                Id:updateDto.Id
            },
            data:{
                Description: updateDto.Description,
                Name: updateDto.Name,
            }
        });

        return RoleEntity.fromObject( updatedEntity );
    }

    async deleteById(id: string): Promise<RoleEntity> {
        await this.findById( id );  

        const deleteentity = await prisma.roles.delete({
            where:{
                Id:id
            }
        });

        return RoleEntity.fromObject( deleteentity );
    }
    
}