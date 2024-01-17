"use client";
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button";
import authAnimation from "@/resources/lottie/authAnimation.json"
import Lottie from "lottie-react";
import {motion} from "framer-motion";

const font = Poppins({
 subsets: ["latin"],
 weight: ["600"]
});
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center  
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 to-indigo-700">
    <div className="space-y-6">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} className="w-[350px]  h-[350px] ">
     <Lottie animationData={authAnimation}/>
     </motion.div>

      <h1 className={cn(
        "text-2xl font-semibold text-white drop-shadow-md text-center",
        font.className, 
      )}>
        Servicio de autenticacion
      </h1>
      <div className="text-center">
        <LoginButton>
        <Button variant="secondary" size="xl">
          Acceder
        </Button>
        </LoginButton>
      </div>
    </div>

    </main>
  )
}
