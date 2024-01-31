"use client";
import * as z from "zod";
import { useState, useTransition } from "react";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {motion} from "framer-motion";
import { useSearchParams } from "next/navigation";


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
import Link from "next/link";


export const LoginForm = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "El correo ya está registrado con otro proveedor" : "";
    const [showTwoFactor, setShowTwoFactor] = useState(false);
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
            login(values, callbackUrl)
            .then((data) => {
               if(data?.error){
                form.reset();
                setError(data.error);
               }
               if(data?.success){
                form.reset();
                setError(data.success);
               }
               if(data?.twoFactor){
                setShowTwoFactor(true);
               }
            })
            .catch(() => setError("Ha ocurrido un error"));
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
            {showTwoFactor && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                
                  <FormItem>
                    <motion.div variants={item}>
                    <FormLabel>Codigo de verificacion</FormLabel>
                    </motion.div>
                    <motion.div variants={item}>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="123456"
                      />
                    </FormControl>
                    </motion.div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {!showTwoFactor && (
              <>
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
                     
                      <FormMessage />
                     
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
                          placeholder="******"
                          type="password"
                        />
                      </FormControl>
                      </motion.div>
                      <motion.div variants={item}>
                      <Button
                        size="sm"
                        variant="link"
                        asChild
                        className="px-0 font-normal"
                      >
                        <Link href="/auth/reset">
                          No recuerdas tu contraseña?
                        </Link>
                      </Button>
                      </motion.div>
                      
                      <FormMessage />
                      
                    </FormItem>
                  )}
                />
            </>
          )}
         
        </div>
        
        <FormError message={error || urlError}/>
        <FormSuccess message={success}/>
        <motion.div variants={item}>
        <Button
        disabled={isPending}
        typeof="submit"
        className="w-full"
        >
             {showTwoFactor ? "Autorizar" : "Entrar"}
        </Button>
        </motion.div>
        </form>
       </Form>
       </CardWrapper>
    );
};
 
export default LoginForm;