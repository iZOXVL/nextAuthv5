"use server";

import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";

export const admin = async () => {
  const role = await currentRole();

  if (role === UserRole.ADMIN) {
    return { success: "Petición realizada correctamente!" };
  }

  return { error: "No tienes permiso para realizar esta petición" }
};