// TODO: Replace '{}' with the actual value or object you want to export
export class MenuDoc  {
    /**
         * Get all Menu 
         * @openapi
         * /menus:
         *    get:
         *      tags:
         *        - menus
         *      summary: "menu list"
         *      description: This endpoint is to list the total munus 
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
         * get menu by Id
         * @openapi
         * /menus/{Id}:
         *    get:
         *      tags:
         *        - menus
         *      summary: "filter menu by id"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint is used to filter menu by their ID. 
         *      responses:
         *        '200':
         *          description: menu updated.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         *      security:
         *       -  bearerAuth: []
         */

        /**
         * Create menu
         * @openapi
         * /menus:
         *    post:
         *      tags:
         *        - menus
         *      summary: "Create menu"
         *      description: This endpoint will allow us to create a menu 
         *      requestBody:
         *          content:
         *            application/json:
         *              schema:
         *                $ref: "#/components/schemas/menu"
         *      responses:
         *        '200':
         *          description: menu created.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         */

        /**
         * Update menu
         * @openapi
         * /menus/{Id}:
         *    put:
         *      tags:
         *        - menus
         *      summary: "update menu"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint will allow us to update a menu 
         *      requestBody:
         *          content:
         *            application/json:
         *              schema:
         *                $ref: "#/components/schemas/menu"
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
         * Delete menu
         * @openapi
         * /menus/{Id}:
         *    delete:
         *      tags:
         *        - menus
         *      summary: "Delete menu"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint is used to delete menu by their ID. 
         *      responses:
         *        '200':
         *          description: menu deleted.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         *      security:
         *       -  bearerAuth: []
         */
};