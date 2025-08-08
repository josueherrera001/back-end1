// TODO: Replace '{}' with the actual value or object you want to export
export class PresentationDoc  {
    /**
         * Get all presentations 
         * @openapi
         * /presentations:
         *    get:
         *      tags:
         *        - presentations
         *      summary: "presentation list"
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
         * get presentation by Id
         * @openapi
         * /presentations/{Id}:
         *    get:
         *      tags:
         *        - presentations
         *      summary: "filter presentation by id"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint is used to filter lot by their ID. 
         *      responses:
         *        '200':
         *          description: presentation updated.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         *      security:
         *       -  bearerAuth: []
         */

        /**
         * Create presentation
         * @openapi
         * /presentations:
         *    post:
         *      tags:
         *        - presentations
         *      summary: "Create presentation"
         *      description: This endpoint will allow us to create a presentation 
         *      requestBody:
         *          content:
         *            application/json:
         *              schema:
         *                $ref: "#/components/schemas/presentation"
         *      responses:
         *        '200':
         *          description: lot created.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         */

        /**
         * Update presentation
         * @openapi
         * /presentations/{Id}:
         *    put:
         *      tags:
         *        - presentations
         *      summary: "update presentation"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint will allow us to update a presentation 
         *      requestBody:
         *          content:
         *            application/json:
         *              schema:
         *                $ref: "#/components/schemas/presentation"
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
         * Delete presentation
         * @openapi
         * /presentations/{Id}:
         *    delete:
         *      tags:
         *        - presentations
         *      summary: "Delete presentation"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint is used to delete presentation by their ID. 
         *      responses:
         *        '200':
         *          description: presentation deleted.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         *      security:
         *       -  bearerAuth: []
         */
};