import { prisma } from "../../data";
import { AccountMenuItemDatasource, AccountMenuItemEntity, CreateAccountMenuItemDto, UpdateAccountMenuItemDto } from "../../domain";
import { ErrorSpecific } from "../../helpers";

export class AccountMenuItemDataSourceInfra implements AccountMenuItemDatasource {
    async create(createDto: CreateAccountMenuItemDto): Promise<AccountMenuItemEntity> {
         const entity = await prisma.accountMenuItem.create({
            data:{
                AccountId: createDto.AccountId,
                SubMenuId: createDto.SubMenuId,
                AccountMenuId: createDto.AccountMenuId
            }
        });
        return AccountMenuItemEntity.fromObject( entity );
    }

    async getAll(Id:string): Promise<AccountMenuItemEntity[]> {
        const entities = await prisma.accounts.findMany({
            where:{
                Id: Id
            },
            include:{
              AccountMenu:{
                include:{
                    Menu:{
                        include:{
                            SubMenu:{
                                where:{
                                    State:1
                                },
                            }
                        }
                    }
                },
                // User:true // Removed as it does not exist in the type
              },
                User:true,
                Role:true  
            }
        });
        return entities.map(entity => AccountMenuItemEntity.fromObject(entity));
    }

    async findById(id: string): Promise<AccountMenuItemEntity> {
        const entity = await prisma.accountMenuItem.findFirst({
            where:{
                Id:id
            }
        });

        if ( !entity ) throw ErrorSpecific.ErrorEmpty(`Id del menu relacionado:  ${ id } no encontrado`);
        return AccountMenuItemEntity.fromObject(entity);
    }
    
    async updateById(updateDto: UpdateAccountMenuItemDto): Promise<AccountMenuItemEntity> {
        await this.findById( updateDto.Id );   
            const updatedentity = await prisma.accountMenuItem.update({
                where:{
                    Id:updateDto.Id
                },
                data:{
                    AccountId: updateDto.AccountId,
                    SubMenuId: updateDto.SubMenuId,
                    AccountMenuId: updateDto.AccountMenuId
                }
            });

            return AccountMenuItemEntity.fromObject( updatedentity );
    }

    async deleteById(id: string): Promise<AccountMenuItemEntity> {
         await this.findById( id ); 
        const deleteentity = await prisma.accountMenuItem.delete({
            where:{
                Id:id
            }
        });

        return AccountMenuItemEntity.fromObject( deleteentity );
    }
    
}