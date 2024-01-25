"use server";

import * as z from "zod";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import {LoginSchema} from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { CredentialsSignin } from "@auth/core/errors";
import { getUserByEmail } from "@/data/users";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const login = async (values: z.infer<typeof LoginSchema>) => {
   const validateFields = LoginSchema.safeParse(values);

   if(!validateFields.success){
    return{error: "Credenciales inavlidas"}
   }

    const {email,password} =validateFields.data;

    const existingUser = await getUserByEmail(email);

    if(!existingUser || !existingUser.email || !existingUser.password){
        return{error: "Credenciales inexistentes!"}
    }

    if(!existingUser.emailVerified){
        const verificationToken = await generateVerificationToken(existingUser.email);


        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token,
        );

        
        return {success: "Correo de confirmación enviado!"}
    }

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