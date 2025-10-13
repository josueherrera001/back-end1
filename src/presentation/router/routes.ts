// import { UserDoc } from './userdoc';
import { Router } from "express";
import { ContactRoutes } from "../contact/routes";
import { envs } from "../../config/envs";
import { UserRoutes } from "../user/routes.user";
import { AuthRoutes } from "../auth/routes.auth";
import { AddressRoutes } from "../address/routes";
import { CategoryRoutes } from "../category/routes";
import { LotRoutes } from "../lot/routes";
import { MenuRoutes } from "../menu/routes";
import { PresentationRoutes } from "../presentation/routes";
import { ProductRoutes } from "../product/routes";
import { RoleRoutes } from "../role/routes";
import { SubMenuRoutes } from "../submenu/routes";
import { SupplierRoutes } from "../supplier/routes";  
//#region Documentation
    import './contactdoc';
    import './auth-doc';
    import './user-doc';
    import './lot-doc';
    import './category-doc';
    import './menu-doc';
    import './presentation-doc';
    import './product-doc';
    import './role-doc';
    import './submenu-doc';
//#endregion


export class AppRoutes{

    static get route(): Router{
        const router = Router();

        router.use(`/api/${ envs.APP_API_VERSION }/auth`,AuthRoutes.route,);    
        router.use(`/api/${ envs.APP_API_VERSION }/users`,UserRoutes.route);
        router.use(`/api/${ envs.APP_API_VERSION }/contacts`,ContactRoutes.route);
        router.use(`/api/${ envs.APP_API_VERSION }/users`,UserRoutes.route);        
        router.use(`/api/${ envs.APP_API_VERSION }/addresses`,AddressRoutes.route);      
        router.use(`/api/${ envs.APP_API_VERSION }/categories`,CategoryRoutes.route);  
        router.use(`/api/${ envs.APP_API_VERSION }/lots`,LotRoutes.route);
        router.use(`/api/${ envs.APP_API_VERSION }/menus`,MenuRoutes.route);
        router.use(`/api/${ envs.APP_API_VERSION }/presentations`,PresentationRoutes.route);
        router.use(`/api/${ envs.APP_API_VERSION }/products`,ProductRoutes.route);
        router.use(`/api/${ envs.APP_API_VERSION }/roles`,RoleRoutes.route);
        router.use(`/api/${ envs.APP_API_VERSION }/submenus`,SubMenuRoutes.route);
        router.use(`/api/${ envs.APP_API_VERSION }/suppliers`, SupplierRoutes.route);
        return router;
    }
}