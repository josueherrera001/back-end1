import { Router } from "express";
import { ContactRoutes } from "../contact/routes";
import { envs } from "../../config/envs";
import { UserRoutes } from "../user/routes.user";
import { AuthRoutes } from "../auth/routes.auth";


export class AppRoutes{

    static get route(): Router{
        const router = Router();

        router.use(`/api/${ envs.APP_API_VERSION }/auth`,AuthRoutes.route,);
    
     //#region  Auth

    


    /**
     * validate account
     * @openapi
     * /validate-email/{token}:
     *    get:
     *      tags:
     *        - Auth
     *      summary: "This endpoint is for validating the account"
     *      parameters:
     *          -   in: path
     *              name:   token
     *              required:   true
     *              schema:
     *                  type:   string
     *      description: This endpoint is for validating the account. 
     *      responses:
     *        '200':
     *          description: Validated account.
     *        '401':
     *          description: Unauthorized or expired token.
     *        '500':
     *          description: Internal Server Error.
     */


    /**
     * login 
     * @openapi
     * /auth:
     *    post:
     *      tags:
     *        - Auth
     *      summary: "User login"
     *      description: This endpoint will allow you to log into the system. 
     *      requestBody:
     *          content:
     *            application/json:
     *              schema:
     *                $ref: "#/components/schemas/auth"
     *      responses:
     *        '200':
     *          description: log in.
     *        '401':
     *          description: Unauthorized or expired token.
     *        '500':
     *          description: Internal Server Error.
     */

    
    /**
     * Update Auth
     * @openapi
     * /change/{Id}:
     *    put:
     *      tags:
     *        - Auth
     *      summary: "Change password"
     *      parameters:
     *          -   in: path
     *              name:   Id
     *              required:   true
     *              schema:
     *                  type:   string
     *      description: This endpoint will allow you to update the account password. 
     *      responses:
     *        '200':
     *          description: User updated.
     *        '401':
     *          description: Unauthorized or expired token.
     *        '500':
     *          description: Internal Server Error.
     *      security:
     *       -  bearerAuth: []
     */


    /**
     * get User by Id
     * @openapi
     * /users/{Id}:
     *    get:
     *      tags:
     *        - users
     *      summary: "filter user by id"
     *      parameters:
     *          -   in: path
     *              name:   Id
     *              required:   true
     *              schema:
     *                  type:   string
     *      description: This endpoint is used to filter users by their ID. 
     *      responses:
     *        '200':
     *          description: User updated.
     *        '401':
     *          description: Unauthorized or expired token.
     *        '500':
     *          description: Internal Server Error.
     *      security:
     *       -  bearerAuth: []
     */

    /**
     * Create user
     * @openapi
     * /users:
     *    post:
     *      tags:
     *        - users
     *      summary: "Create user"
     *      description: This endpoint will allow us to create a user 
     *      requestBody:
     *          content:
     *            application/json:
     *              schema:
     *                $ref: "#/components/schemas/createUser"
     *      responses:
     *        '200':
     *          description: User created.
     *        '401':
     *          description: Unauthorized or expired token.
     *        '500':
     *          description: Internal Server Error.
     */

    /**
     * Update User
     * @openapi
     * /users/{Id}:
     *    put:
     *      tags:
     *        - users
     *      summary: "update user"
     *      parameters:
     *          -   in: path
     *              name:   Id
     *              required:   true
     *              schema:
     *                  type:   string
     *      description: This endpoint will allow us to update a user 
     *      requestBody:
     *          content:
     *            application/json:
     *              schema:
     *                $ref: "#/components/schemas/UpdateUser"
     *      responses:
     *        '200':
     *          description: User updated.
     *        '401':
     *          description: Unauthorized or expired token.
     *        '500':
     *          description: Internal Server Error.
     *      security:
     *       -  bearerAuth: []
     */

    /**
     * Delete user
     * @openapi
     * /users/{Id}:
     *    delete:
     *      tags:
     *        - users
     *      summary: "Delete user"
     *      parameters:
     *          -   in: path
     *              name:   Id
     *              required:   true
     *              schema:
     *                  type:   string
     *      description: This endpoint is used to delete users by their ID. 
     *      responses:
     *        '200':
     *          description: contact deleted.
     *        '401':
     *          description: Unauthorized or expired token.
     *        '500':
     *          description: Internal Server Error.
     *      security:
     *       -  bearerAuth: []
     */

    router.use(`/api/${ envs.APP_API_VERSION }/users`,UserRoutes.route);
//#endregion
       

     //#region  Contact

    /**
     * Get all contact 
     * @openapi
     * /contacts:
     *    get:
     *      tags:
     *        - contacts
     *      summary: "Contat list"
     *      description: This endpoint is to list the total contacts 
     *      responses:
     *        '200':
     *          description: Returns the object from the collection.
     *        '401':
     *          description: Unauthorized or expired token.
     *        '500':
     *          description: Internal Server Error.
     *      security:
     *       -  bearerAuth: []
     */

    /**
     * get contact by Id
     * @openapi
     * /contacts/{Id}:
     *    get:
     *      tags:
     *        - contacts
     *      summary: "filter contact by id"
     *      parameters:
     *          -   in: path
     *              name:   Id
     *              required:   true
     *              schema:
     *                  type:   string
     *      description: This endpoint is used to filter contact by their ID. 
     *      responses:
     *        '200':
     *          description: Contact updated.
     *        '401':
     *          description: Unauthorized or expired token.
     *        '500':
     *          description: Internal Server Error.
     *      security:
     *       -  bearerAuth: []
     */

    /**
     * Create contact
     * @openapi
     * /contacts:
     *    post:
     *      tags:
     *        - contacts
     *      summary: "Create contact"
     *      description: This endpoint will allow us to create a contact 
     *      requestBody:
     *          content:
     *            application/json:
     *              schema:
     *                $ref: "#/components/schemas/contact"
     *      responses:
     *        '200':
     *          description: User created.
     *        '401':
     *          description: Unauthorized or expired token.
     *        '500':
     *          description: Internal Server Error.
     */

    /**
     * Update contact
     * @openapi
     * /contacts/{Id}:
     *    put:
     *      tags:
     *        - contacts
     *      summary: "update contact"
     *      parameters:
     *          -   in: path
     *              name:   Id
     *              required:   true
     *              schema:
     *                  type:   string
     *      description: This endpoint will allow us to update a contact 
     *      requestBody:
     *          content:
     *            application/json:
     *              schema:
     *                $ref: "#/components/schemas/contact"
     *      responses:
     *        '200':
     *          description: User updated.
     *        '401':
     *          description: Unauthorized or expired token.
     *        '500':
     *          description: Internal Server Error.
     *      security:
     *       -  bearerAuth: []
     */

    /**
     * Delete contact
     * @openapi
     * /contacts/{Id}:
     *    delete:
     *      tags:
     *        - contacts
     *      summary: "Delete contact"
     *      parameters:
     *          -   in: path
     *              name:   Id
     *              required:   true
     *              schema:
     *                  type:   string
     *      description: This endpoint is used to delete contact by their ID. 
     *      responses:
     *        '200':
     *          description: contact deleted.
     *        '401':
     *          description: Unauthorized or expired token.
     *        '500':
     *          description: Internal Server Error.
     *      security:
     *       -  bearerAuth: []
     */

    router.use(`/api/${ envs.APP_API_VERSION }/contacts`,ContactRoutes.route);
//#endregion
       


    //#region  User

    /**
     * Get all user 
     * @openapi
     * /users:
     *    get:
     *      tags:
     *        - users
     *      summary: "User list"
     *      description: This endpoint is to list the total users 
     *      responses:
     *        '200':
     *          description: Returns the object from the collection.
     *        '401':
     *          description: Unauthorized or expired token.
     *        '500':
     *          description: Internal Server Error.
     *      security:
     *       -  bearerAuth: []
     */

    /**
     * get User by Id
     * @openapi
     * /users/{Id}:
     *    get:
     *      tags:
     *        - users
     *      summary: "filter user by id"
     *      parameters:
     *          -   in: path
     *              name:   Id
     *              required:   true
     *              schema:
     *                  type:   string
     *      description: This endpoint is used to filter users by their ID. 
     *      responses:
     *        '200':
     *          description: User updated.
     *        '401':
     *          description: Unauthorized or expired token.
     *        '500':
     *          description: Internal Server Error.
     *      security:
     *       -  bearerAuth: []
     */

    /**
     * Create user
     * @openapi
     * /users:
     *    post:
     *      tags:
     *        - users
     *      summary: "Create user"
     *      description: This endpoint will allow us to create a user 
     *      requestBody:
     *          content:
     *            application/json:
     *              schema:
     *                $ref: "#/components/schemas/createUser"
     *      responses:
     *        '200':
     *          description: User created.
     *        '401':
     *          description: Unauthorized or expired token.
     *        '500':
     *          description: Internal Server Error.
     */

    /**
     * Update User
     * @openapi
     * /users/{Id}:
     *    put:
     *      tags:
     *        - users
     *      summary: "update user"
     *      parameters:
     *          -   in: path
     *              name:   Id
     *              required:   true
     *              schema:
     *                  type:   string
     *      description: This endpoint will allow us to update a user 
     *      requestBody:
     *          content:
     *            application/json:
     *              schema:
     *                $ref: "#/components/schemas/UpdateUser"
     *      responses:
     *        '200':
     *          description: User updated.
     *        '401':
     *          description: Unauthorized or expired token.
     *        '500':
     *          description: Internal Server Error.
     *      security:
     *       -  bearerAuth: []
     */

    /**
     * Delete user
     * @openapi
     * /users/{Id}:
     *    delete:
     *      tags:
     *        - users
     *      summary: "Delete user"
     *      parameters:
     *          -   in: path
     *              name:   Id
     *              required:   true
     *              schema:
     *                  type:   string
     *      description: This endpoint is used to delete users by their ID. 
     *      responses:
     *        '200':
     *          description: contact deleted.
     *        '401':
     *          description: Unauthorized or expired token.
     *        '500':
     *          description: Internal Server Error.
     *      security:
     *       -  bearerAuth: []
     */

    router.use(`/api/${ envs.APP_API_VERSION }/users`,UserRoutes.route);
//#endregion
       
        return router;
    }
}