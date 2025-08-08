// TODO: Replace '{}' with the actual value or object you want to export
export class CategoryDoc  {
    /**
         * Get all Category 
         * @openapi
         * /categories:
         *    get:
         *      tags:
         *        - categories
         *      summary: "category list"
         *      description: This endpoint is to list the total categories 
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
         * get category by Id
         * @openapi
         * /categories/{Id}:
         *    get:
         *      tags:
         *        - categories
         *      summary: "filter category by id"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint is used to filter category by their ID. 
         *      responses:
         *        '200':
         *          description: category updated.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         *      security:
         *       -  bearerAuth: []
         */

        /**
         * Create category
         * @openapi
         * /categories:
         *    post:
         *      tags:
         *        - categories
         *      summary: "Create category"
         *      description: This endpoint will allow us to create a category 
         *      requestBody:
         *          content:
         *            application/json:
         *              schema:
         *                $ref: "#/components/schemas/category"
         *      responses:
         *        '200':
         *          description: User created.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         */

        /**
         * Update category
         * @openapi
         * /categories/{Id}:
         *    put:
         *      tags:
         *        - categories
         *      summary: "update category"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint will allow us to update a category 
         *      requestBody:
         *          content:
         *            application/json:
         *              schema:
         *                $ref: "#/components/schemas/category"
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
         * Delete category
         * @openapi
         * /categories/{Id}:
         *    delete:
         *      tags:
         *        - categories
         *      summary: "Delete category"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint is used to delete category by their ID. 
         *      responses:
         *        '200':
         *          description: category deleted.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         *      security:
         *       -  bearerAuth: []
         */
};