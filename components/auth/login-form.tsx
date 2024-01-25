"use client";
import * as z from "zod";
import { useState, useTransition } from "react";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";

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
import { login } from "@/actions/login";

export const LoginForm = () => {
    const searchParams = useSearchParams();
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "El correo ya está registrado con otro proveedor" : "";
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {

        setError("");
        setSuccess("");


        startTransition(() => {
            login(values)
            .then((data) => {
               setError(data?.error);
               setSuccess(data?.success);
            });
        });
    }

    return (  
       <CardWrapper
       headerLabel="Ingresa tus credenciales para acceder al sistema"
       backButtonLabel="No estoy registrado"
       backButtonHref="/auth/register"
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
        <FormError message={error || urlError}/>
        <FormSuccess message={success}/>
        <Button
        disabled={isPending}
        typeof="submit"
        className="w-full"
        >
            Entrar
        </Button>
        </form>
       </Form>
       </CardWrapper>
    );
};
 
export default LoginForm;