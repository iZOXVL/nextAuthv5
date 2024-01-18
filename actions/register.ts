"use server";

import * as z from "zod";

import {RegisterSchema} from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
   const validateFielda = RegisterSchema.safeParse(values);

   if(!validateFielda.success){
    return{error: "Credenciales inavlidas"}
   }

    return{success: "Correo de verificación enviado"}
};