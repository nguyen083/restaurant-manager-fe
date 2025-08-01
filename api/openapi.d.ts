/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    '/auth/register': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Register a new user
         * @description Create a new user account
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    'application/json': components['schemas']['RegisterRequest'];
                };
            };
            responses: {
                /** @description User registered successfully */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ApiResponse'] & {
                            data?: components['schemas']['User'];
                        };
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ErrorResponse'];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/auth/login': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Login user
         * @description Authenticate user and return access token
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    'application/json': components['schemas']['LoginRequest'];
                };
            };
            responses: {
                /** @description Login successful */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ApiResponse'] & {
                            data?: {
                                user?: components['schemas']['User'];
                                accessToken?: string;
                                refreshToken?: string;
                            };
                        };
                    };
                };
                /** @description Invalid credentials */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ErrorResponse'];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/auth/logout': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Logout user
         * @description Logout current user
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Logout successful */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ApiResponse'];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/account/me': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get current user profile
         * @description Get the profile of the currently authenticated user
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description User profile retrieved successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ApiResponse'] & {
                            data?: components['schemas']['User'];
                        };
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ErrorResponse'];
                    };
                };
            };
        };
        /**
         * Update current user profile
         * @description Update the profile of the currently authenticated user
         */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    'application/json': components['schemas']['UpdateAccountRequest'];
                };
            };
            responses: {
                /** @description User profile updated successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ApiResponse'] & {
                            data?: components['schemas']['User'];
                        };
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ErrorResponse'];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/media/upload': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upload an image
         * @description Upload an image file to the server
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    'multipart/form-data': {
                        /**
                         * Format: binary
                         * @description Image file to upload
                         */
                        file?: string;
                    };
                };
            };
            responses: {
                /** @description File uploaded successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ApiResponse'] & {
                            data?: {
                                /**
                                 * Format: uri
                                 * @example http://localhost:4000/static/bec024f9ea534b7fbf078cb5462b30aa.jpg
                                 */
                                url?: string;
                            };
                        };
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ErrorResponse'];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/products': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all products
         * @description Retrieve a list of all products
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Products retrieved successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ApiResponse'] & {
                            data?: components['schemas']['Product'][];
                        };
                    };
                };
            };
        };
        put?: never;
        /**
         * Create a new product
         * @description Create a new product
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    'application/json': components['schemas']['CreateProductRequest'];
                };
            };
            responses: {
                /** @description Product created successfully */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ApiResponse'] & {
                            data?: components['schemas']['Product'];
                        };
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ErrorResponse'];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/products/{id}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get product by ID
         * @description Retrieve a specific product by its ID
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /**
                     * @description Product ID
                     * @example 2
                     */
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Product retrieved successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ApiResponse'] & {
                            data?: components['schemas']['Product'];
                        };
                    };
                };
                /** @description Product not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ErrorResponse'];
                    };
                };
            };
        };
        /**
         * Update product
         * @description Update a specific product by its ID
         */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /**
                     * @description Product ID
                     * @example 1
                     */
                    id: number;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    'application/json': components['schemas']['UpdateProductRequest'];
                };
            };
            responses: {
                /** @description Product updated successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ApiResponse'] & {
                            data?: components['schemas']['Product'];
                        };
                    };
                };
                /** @description Product not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ErrorResponse'];
                    };
                };
            };
        };
        post?: never;
        /**
         * Delete product
         * @description Delete a specific product by its ID
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /**
                     * @description Product ID
                     * @example 1
                     */
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Product deleted successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ApiResponse'];
                    };
                };
                /** @description Product not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ErrorResponse'];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/test': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Test API endpoint
         * @description Simple test endpoint to check if API is working
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Test successful */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        'application/json': components['schemas']['ApiResponse'];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        User: {
            /** @example 1 */
            id?: number;
            /** @example Dư Thanh Được */
            name?: string;
            /**
             * Format: email
             * @example user@gmail.com
             */
            email?: string;
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
        };
        Product: {
            /** @example 1 */
            id?: number;
            /** @example Iphone 13 */
            name?: string;
            /** @example Mô tả cho iphone 13 */
            description?: string;
            /**
             * Format: uri
             * @example http://localhost:4000/static/bec024f9ea534b7fbf078cb5462b30aa.jpg
             */
            image?: string;
            /** @example 15000000 */
            price?: number;
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
        };
        RegisterRequest: {
            /** @example Dư Thanh Được */
            name: string;
            /**
             * Format: email
             * @example user@gmail.com
             */
            email: string;
            /** @example 123123 */
            password: string;
            /** @example 123123 */
            confirmPassword: string;
        };
        LoginRequest: {
            /**
             * Format: email
             * @example user@gmail.com
             */
            email: string;
            /** @example 123123 */
            password: string;
        };
        UpdateAccountRequest: {
            /** @example Duoc Hello */
            name?: string;
        };
        CreateProductRequest: {
            /** @example Iphone 13 */
            name: string;
            /** @example Mô tả cho iphone 13 */
            description: string;
            /**
             * Format: uri
             * @example http://localhost:4000/static/bec024f9ea534b7fbf078cb5462b30aa.jpg
             */
            image: string;
            /** @example 15000000 */
            price: number;
        };
        UpdateProductRequest: {
            /** @example Chào */
            name?: string;
            /** @example 123123123 */
            description?: string;
            /**
             * Format: uri
             * @example http://localhost:4000/static/c4819080a778412a8c715afd0e2ca90f.jpg
             */
            image?: string;
            /** @example 100000000 */
            price?: number;
        };
        ApiResponse: {
            message?: string;
            data?: Record<string, never>;
        };
        ErrorResponse: {
            message?: string;
            error?: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
