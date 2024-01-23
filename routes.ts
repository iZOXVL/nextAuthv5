/**
 * Array de rutas que pueden entrar sin sesion
 */

export const publicRoutes = [
    "/",
];

/**
 * Array de rutas que necesitan tener una sesion
 * @type{string[]}
 */

export const authRoutes = [
    "/auth/login",
    "/auth/register"
]



export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";