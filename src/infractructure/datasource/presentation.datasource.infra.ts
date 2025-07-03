import { prisma } from "../../data";
import { CreatePresentationDto, PresentationDatasource, PresentationEntity, UpdatePresentationDto } from "../../domain";

export class PresentationDataSourceInfra implements PresentationDatasource {
    async create(createDto: CreatePresentationDto): Promise<PresentationEntity> {
        const entity = await prisma.presentations.create({
            data:{
                Description: createDto.Description,
                Name: createDto.Name,
                CreatedDate: new Date(),
            }
        });
        return PresentationEntity.fromObject( entity );
    }

    async getAll(): Promise<PresentationEntity[]> {
        const entities = await prisma.presentations.findMany();

        return entities.map(entity => PresentationEntity.fromObject(entity));
    }

    async findById(id: string): Promise<PresentationEntity> {
        const entity = await prisma.presentations.findFirst({
            where:{
                Id:id
            }
        });

        if ( !entity ) throw `Id de la presentacion:  ${ id } no encontrado`;
        return PresentationEntity.fromObject(entity);
    }
    
    async updateById(updateDto: UpdatePresentationDto): Promise<PresentationEntity> {
        
        await this.findById( updateDto.Id );       

        const updatedentity = await prisma.presentations.update({
            where:{
                Id:updateDto.Id
            },
            data:{
               
                Description: updateDto.Description,
                Name: updateDto.Name
            }
        });

        return PresentationEntity.fromObject( updatedentity );
    }

    async deleteById(id: string): Promise<PresentationEntity> {
        await this.findById( id );  

        const deleteentity = await prisma.presentations.delete({
            where:{
                Id:id
            }
        });

        return PresentationEntity.fromObject( deleteentity );
    }
    
}