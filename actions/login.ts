"use server";

import * as z from "zod";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import {LoginSchema} from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { CredentialsSignin } from "@auth/core/errors";

export const login = async (values: z.infer<typeof LoginSchema>) => {
   const validateFields = LoginSchema.safeParse(values);

   if(!validateFields.success){
    return{error: "Credenciales inavlidas"}
   }

    const {email,password} =validateFields.data;

    try {
        await signIn("credentials", {
            email, 
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        })
    }catch(error){
        if( error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin":
                    return{error: "Credenciales invalidas"}
                    default:
                        return{error: "Ha ocurrido un error en el servidor"}
            }
        }
        throw error;
    }
};