// TODO: Replace '{}' with the actual value or object you want to export
export class ProductDoc  {
    /**
         * Get all products 
         * @openapi
         * /products:
         *    get:
         *      tags:
         *        - products
         *      summary: "product list"
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
         * get product by Id
         * @openapi
         * /products/{Id}:
         *    get:
         *      tags:
         *        - products
         *      summary: "filter product by id"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint is used to filter product by their ID. 
         *      responses:
         *        '200':
         *          description: product updated.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         *      security:
         *       -  bearerAuth: []
         */

        /**
         * Create product
         * @openapi
         * /products:
         *    post:
         *      tags:
         *        - products
         *      summary: "Create product"
         *      description: This endpoint will allow us to create a product 
         *      requestBody:
         *          content:
         *            application/json:
         *              schema:
         *                $ref: "#/components/schemas/product"
         *      responses:
         *        '200':
         *          description: lot created.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         */

        /**
         * Update product
         * @openapi
         * /products/{Id}:
         *    put:
         *      tags:
         *        - products
         *      summary: "update product"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint will allow us to update a product 
         *      requestBody:
         *          content:
         *            application/json:
         *              schema:
         *                $ref: "#/components/schemas/product"
         *      responses:
         *        '200':
         *          description: product updated.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         *      security:
         *       -  bearerAuth: []
         */

        /**
         * Delete product
         * @openapi
         * /products/{Id}:
         *    delete:
         *      tags:
         *        - products
         *      summary: "Delete product"
         *      parameters:
         *          -   in: path
         *              name:   Id
         *              required:   true
         *              schema:
         *                  type:   string
         *      description: This endpoint is used to delete product by their ID. 
         *      responses:
         *        '200':
         *          description: product deleted.
         *        '401':
         *          description: Unauthorized or expired token.
         *        '500':
         *          description: Internal Server Error.
         *      security:
         *       -  bearerAuth: []
         */
};