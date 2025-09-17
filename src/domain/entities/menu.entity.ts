// Add this import or definition at the top of the file
// Adjust the path as needed

import { SubMenuEntity } from "./submenu.entity";

export class MenuEntity{
    constructor(
        public readonly Id: string,
        public readonly Name: string,
        public readonly Url: string,
        public readonly HasSubMenu: boolean,
        public readonly Description: string,
        public readonly Position: number = 0, // Default position if not provided
        public readonly SubMenu: SubMenuEntity[] = []
    ){}

    public static fromObject (object:{[key: string]:any}){
        const{Id,Name, Url, HasSubMenu, Description, Position, SubMenu= [] } = object;    
        return new MenuEntity(Id,Name, Url, HasSubMenu, Description,Position,SubMenu.map((submenu: any) => SubMenuEntity.fromObject(submenu)));
    }
}