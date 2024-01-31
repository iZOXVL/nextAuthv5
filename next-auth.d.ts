import { UserRole } from "@prisma/client";
import NextAuth,{type DefaultSession} from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  provider?: string; // Asegúrate de que esta línea esté presente
};

declare module "next-auth"{
    interface Session{
      user: ExtendedUser;
    }
}
