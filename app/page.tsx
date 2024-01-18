/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AftDvIasIZS
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button"

export default function Component() {
  return (
    <main className="flex h-full flex-col items-center  justify-center
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 to-indigo-700">
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      <div className="flex flex-col items-center justify-center">
        <Card className="w-full lg:max-w-full mx-auto p-10 h-full">
          <CardHeader>
            <CardTitle>Contenido Destacado</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              alt="Imagen Destacada"
              className="w-full h-64 object-cover rounded-md"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
              Este es un contenido destacado. Puede contener información importante o interesante.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Card className="w-full lg:max-w-full mx-auto p-14 h-full items-center justify-center ">
          <CardHeader className="items-center justify-center">
            <CardTitle style={{ fontSize: '54px'}}>🔐 OAuth 2.0</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 text-justify">
            Creada con React y Next.js, ofrece una experiencia de usuario ágil y moderna. Integrando Prisma para la gestión de bases de datos y OAuth 2.0 para una autenticación segura, garantizamos rendimiento y seguridad de vanguardia en una sola aplicación.
            </p>
            <div className="mt-4 flex justify-center">
            <LoginButton>
             <Button variant="default" size="xxl">
              Acceder
             </Button>
            </LoginButton>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </main>
  )
}

