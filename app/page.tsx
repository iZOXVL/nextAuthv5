import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
 subsets: ["latin"],
 weight: ["600"]
});
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center 
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 to-indigo-700">
    <div className="space-y-6">
      <h1 className={cn(
        "text-6xl font-semibold text-white drop-shadow-md",
        font.className, 
      )}>
        🔐Auth
      </h1>
      <p className="text-white text-lg text-center">
        Servicio de autenticacion
      </p>
      <div className="justify-center text-center">
        <LoginButton>
        <Button variant="secondary" size="lg">
          Acceder
        </Button>
        </LoginButton>
      </div>
    </div>

    </main>
  )
}
