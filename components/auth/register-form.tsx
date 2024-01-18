"use client";
import * as z from "zod";
import { useState, useTransition } from "react";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { register } from "@/actions/register";

export const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        },
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {

        setError("");
        setSuccess("");


        startTransition(() => {
            register(values)
            .then((data) => {
               setError(data.error);
               setSuccess(data.success);
            });
        });
    }

    return (  
       <CardWrapper
       headerLabel="Ingresa tus datos para crear una cuenta"
       backButtonLabel="Ya tengo una cuenta"
       backButtonHref="/auth/login"
       showSocial
       >
       <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        >
        <div className="space-y-4">

        <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Nombre</FormLabel>
            <FormControl>
                <Input
                {...field}
                disabled={isPending}
                placeholder="Juan Perez"
                type="text"
                />
            </FormControl>
            <FormMessage {...field}/>  
            </FormItem>
        )}
        />

        <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Correo electrónico</FormLabel>
            <FormControl>
                <Input
                {...field}
                disabled={isPending}
                placeholder="ejemplo@dominio.com"
                type="email"
                />
            </FormControl>
            <FormMessage {...field}/>  
            </FormItem>
        )}
        />


        <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Contraseña</FormLabel>
            <FormControl>
                <Input
                {...field}
                disabled={isPending}
                placeholder="••••••"
                type="password"
                />
            </FormControl>
            <FormMessage {...field}/>  
            </FormItem>
        )}
        />
        </div>
        <FormError message={error}/>
        <FormSuccess message={success}/>
        <Button
        disabled={isPending}
        typeof="submit"
        className="w-full"
        >
            Crear cuenta
        </Button>
        </form>
       </Form>
       </CardWrapper>
    );
};
 
export default RegisterForm;