import * as z from "zod";


export const ResetSchema = z.object({
    email: z.string().email({
        message: "El correo electrónico es requerido"
    }),
});
    

export const LoginSchema = z.object({
email: z.string().email({
    message: "El correo electrónico es requerido"
}),
password: z.string().min(1,{
    message: "La contraseña es requerida"
})
});


export const RegisterSchema = z.object({
    email: z.string().email({
        message: "El correo electrónico es requerido"
    }),
    password: z.string().min(6,{
        message: "La contraseña es muy corta"
    }),

    name: z.string().min(1,{
        message: "El nombre es requerido"
    })

    });
