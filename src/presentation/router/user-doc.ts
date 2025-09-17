export const UserDoc = {
    /**
         * Get all User 
         * @openapi
         * /users:
         *    get:
         *      tags:
         *        - users
         *      summary: "users list"
         *      description: This endpoint is to list the total user 
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
}