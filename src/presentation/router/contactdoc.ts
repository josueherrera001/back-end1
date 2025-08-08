// TODO: Replace '{}' with the actual value or object you want to export
export class ContactDoc  {
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
};