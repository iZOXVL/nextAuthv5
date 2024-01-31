import * as z from "zod";
import { UserRole } from "@prisma/client";

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(6)),
  newPassword: z.optional(z.string().min(6)),
})
  .refine((data) => {
    if (data.password && !data.newPassword) {
      return false;
    }

    return true;
  }, {
    message: "La nueva contraseña es requerida!",
    path: ["newPassword"]
  })
  .refine((data) => {
    if (data.newPassword && !data.password) {
      return false;
    }

    return true;
  }, {
    message: "La contraseña es requerida!",
    path: ["password"]
  })

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimo 6 caracteres requeridos!",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Correo electrónico requerido!",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Correo electrónico requerido!",
  }),
  password: z.string().min(1, {
    message: "la contraseña es requerida!",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Correo electrónico requerido!",
  }),
  password: z.string().min(6, {
    message: "6 caracteres requeridos!",
  }),
  name: z.string().min(1, {
    message: "El nombre es requerido!",
  }),
});