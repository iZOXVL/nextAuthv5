"use client";
import * as z from "zod";
import { useState, useTransition } from "react";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {motion} from "framer-motion";
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


    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
      

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
            <motion.div variants={item}>
            <FormLabel>Nombre</FormLabel>
            </motion.div>
            <motion.div variants={item}>
            <FormControl>
                <Input
                {...field}
                disabled={isPending}
                placeholder="Juan Perez"
                type="text"
                />
            </FormControl>
            </motion.div>
            <FormMessage {...field}/>  
            </FormItem>
        )}
        />

        <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
            <FormItem>
                <motion.div variants={item}>
            <FormLabel>Correo electrónico</FormLabel>
            </motion.div>
            <motion.div variants={item}>
            <FormControl>
                <Input
                {...field}
                disabled={isPending}
                placeholder="ejemplo@dominio.com"
                type="email"
                />
            </FormControl>
            </motion.div>
            <FormMessage {...field}/>  
            </FormItem>
        )}
        />


        <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
            <FormItem>
                <motion.div variants={item}>
            <FormLabel>Contraseña</FormLabel>
            </motion.div>
            <motion.div variants={item}>
            <FormControl>
                <Input
                {...field}
                disabled={isPending}
                placeholder="••••••"
                type="password"
                />
            </FormControl>
            </motion.div>
            <FormMessage {...field}/>  
            </FormItem>
        )}
        />
        </div>
        <FormError message={error}/>
        <FormSuccess message={success}/>
        <motion.div variants={item}>
        <Button
        disabled={isPending}
        typeof="submit"
        className="w-full"
        >
            Crear cuenta
        </Button>
        </motion.div>
        </form>
       </Form>
       </CardWrapper>
    );
};
 
export default RegisterForm;