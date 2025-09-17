// TODO: Replace '{}' with the actual value or object you want to export
export class MenuDoc  {
    /**
         * Get all SubMenu 
         * @openapi
         * /submenus:
         *    get:
         *      tags:
         *        - submenus
         *      summary: "submenu list"
         *      description: This endpoint is to list the total submenu 
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
         * get submenu by Id
         * @openapi
         * /submenus/{Id}:
         *    get:
         *      tags:
         *        - submenus
         *      summary: "filter submenu by id"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint is used to filter submenu by their ID. 
         *      responses:
         *        '200':
         *          description: submenu updated.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         *      security:
         *       -  bearerAuth: []
         */

        /**
         * Create submenu
         * @openapi
         * /submenus:
         *    post:
         *      tags:
         *        - submenus
         *      summary: "Create submenu"
         *      description: This endpoint will allow us to create a submenu 
         *      requestBody:
         *          content:
         *            application/json:
         *              schema:
         *                $ref: "#/components/schemas/submenu"
         *      responses:
         *        '200':
         *          description: sub menu created.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         */

        /**
         * Update submenu
         * @openapi
         * /submenus/{Id}:
         *    put:
         *      tags:
         *        - submenus
         *      summary: "update submenu"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint will allow us to update a submenu 
         *      requestBody:
         *          content:
         *            application/json:
         *              schema:
         *                $ref: "#/components/schemas/submenu"
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
         * Delete submenu
         * @openapi
         * /submenus/{Id}:
         *    delete:
         *      tags:
         *        - submenus
         *      summary: "Delete submenu"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint is used to delete submenu by their ID. 
         *      responses:
         *        '200':
         *          description: submenu deleted.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         *      security:
         *       -  bearerAuth: []
         */
};