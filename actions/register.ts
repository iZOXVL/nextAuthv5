"use server";

import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import * as z from "zod";

import {RegisterSchema} from "@/schemas";
import { getUserByEmail } from "@/data/users";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
   const validateFielda = RegisterSchema.safeParse(values);

   if(!validateFielda.success){
    return{error: "Credenciales inavlidas"}
   }

   const {email, password, name} = validateFielda.data;
   const hashedPassword = await bcrypt.hash(password, 10);
   
   const existingUser = await getUserByEmail(email);

   if (existingUser){
    return {error: "El correo ya está siendo utilizado"};
    }
   
    await db.user.create ({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    //TODO: ENVIAR CORREO DE VERIFICACION AL CORREO ENEVIADO




    return{success: "Usuario creado"}
};