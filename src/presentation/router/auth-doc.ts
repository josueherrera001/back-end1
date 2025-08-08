export class AuthDoc{
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
}