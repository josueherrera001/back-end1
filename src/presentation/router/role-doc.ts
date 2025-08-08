// TODO: Replace '{}' with the actual value or object you want to export
export class RoleDoc  {
    /**
         * Get all roles 
         * @openapi
         * /roles:
         *    get:
         *      tags:
         *        - roles
         *      summary: "role list"
         *      description: This endpoint is to list the total roles 
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
         * get role by Id
         * @openapi
         * /roles/{Id}:
         *    get:
         *      tags:
         *        - roles
         *      summary: "filter role by id"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint is used to filter role by their ID. 
         *      responses:
         *        '200':
         *          description: role updated.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         *      security:
         *       -  bearerAuth: []
         */

        /**
         * Create role
         * @openapi
         * /roles:
         *    post:
         *      tags:
         *        - roles
         *      summary: "Create role"
         *      description: This endpoint will allow us to create a role 
         *      requestBody:
         *          content:
         *            application/json:
         *              schema:
         *                $ref: "#/components/schemas/role"
         *      responses:
         *        '200':
         *          description: lot created.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         */

        /**
         * Update role
         * @openapi
         * /roles/{Id}:
         *    put:
         *      tags:
         *        - roles
         *      summary: "update role"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint will allow us to update a role 
         *      requestBody:
         *          content:
         *            application/json:
         *              schema:
         *                $ref: "#/components/schemas/role"
         *      responses:
         *        '200':
         *          description: role updated.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         *      security:
         *       -  bearerAuth: []
         */

        /**
         * Delete role
         * @openapi
         * /roles/{Id}:
         *    delete:
         *      tags:
         *        - roles
         *      summary: "Delete role"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint is used to delete role by their ID. 
         *      responses:
         *        '200':
         *          description: role deleted.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         *      security:
         *       -  bearerAuth: []
         */
};