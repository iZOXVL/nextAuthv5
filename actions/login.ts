"use server";

import * as z from "zod";

import {LoginSchema} from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
   const validateFielda = LoginSchema.safeParse(values);

   if(!validateFielda.success){
    return{error: "Credenciales inavlidas"}
   }

    return{success: "Correo de verificación enviado"}
};