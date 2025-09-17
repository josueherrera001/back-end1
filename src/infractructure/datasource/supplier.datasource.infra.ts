import { prisma } from "../../data";
import { SupplierDatasource, CreateSupplierDto, SupplierEntity, UpdateSupplierDto } from "../../domain";
import { ErrorSpecific } from "../../helpers";

export class SupplierDataSourceInfra implements SupplierDatasource {
    async create(createDto: CreateSupplierDto): Promise<SupplierEntity> {
        const entity = await prisma.suppliers.create({
            data:{
                CompanyName: createDto.CompanyName,
                Address: createDto.Address,
                Email: createDto.Email ?? "",
                Phone: createDto.Phone,  
                Web: createDto.Web ?? "",               
                CreatedDate: new Date(),
            }
        });
        return SupplierEntity.fromObject( entity );
    }

    async getAll(): Promise<SupplierEntity[]> {
        const entities = await prisma.suppliers.findMany();

        return entities.map(entity => SupplierEntity.fromObject(entity));
    }

    async findById(id: string): Promise<SupplierEntity> {
        const entity = await prisma.suppliers.findFirst({
            where:{
                Id:id
            }
        });

        if ( !entity ) throw ErrorSpecific.ErrorEmpty(`Id proveedor:  ${ id } no encontrado`);
        return SupplierEntity.fromObject(entity);
    }
    
    async updateById(updateDto: UpdateSupplierDto): Promise<SupplierEntity> {
        
        await this.findById( updateDto.Id );       

        const updatedEntity = await prisma.suppliers.update({
            where:{
                Id:updateDto.Id
            },
            data:{
                CompanyName: updateDto.CompanyName,
                Address: updateDto.Address,
                Email: updateDto.Email ?? "",
                Phone: updateDto.Phone,  
                Web: updateDto.Web ?? "",    
            }
        });

        return SupplierEntity.fromObject( updatedEntity );
    }

    async deleteById(id: string): Promise<SupplierEntity> {
        await this.findById( id );  

        const deleteentity = await prisma.suppliers.delete({
            where:{
                Id:id
            }
        });

        return SupplierEntity.fromObject( deleteentity );
    }
    
}