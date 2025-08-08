// TODO: Replace '{}' with the actual value or object you want to export
export class LotDoc  {
    /**
         * Get all Lot 
         * @openapi
         * /lots:
         *    get:
         *      tags:
         *        - lots
         *      summary: "category list"
         *      description: This endpoint is to list the total lots 
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
         * get lot by Id
         * @openapi
         * /lots/{Id}:
         *    get:
         *      tags:
         *        - lots
         *      summary: "filter lot by id"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint is used to filter lot by their ID. 
         *      responses:
         *        '200':
         *          description: lot updated.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         *      security:
         *       -  bearerAuth: []
         */

        /**
         * Create lot
         * @openapi
         * /lots:
         *    post:
         *      tags:
         *        - lots
         *      summary: "Create lot"
         *      description: This endpoint will allow us to create a lot 
         *      requestBody:
         *          content:
         *            application/json:
         *              schema:
         *                $ref: "#/components/schemas/lot"
         *      responses:
         *        '200':
         *          description: lot created.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         */

        /**
         * Update lot
         * @openapi
         * /lots/{Id}:
         *    put:
         *      tags:
         *        - lots
         *      summary: "update lot"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint will allow us to update a lot 
         *      requestBody:
         *          content:
         *            application/json:
         *              schema:
         *                $ref: "#/components/schemas/lot"
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
         * Delete lot
         * @openapi
         * /lots/{Id}:
         *    delete:
         *      tags:
         *        - lots
         *      summary: "Delete lot"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint is used to delete lot by their ID. 
         *      responses:
         *        '200':
         *          description: lot deleted.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         *      security:
         *       -  bearerAuth: []
         */
};