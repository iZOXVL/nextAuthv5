import { currentUser } from "@/lib/auth";
import { 
    Card, 
    CardContent, 
    CardHeader
  } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServerPage = async () => {
  const user = await currentUser();

  return ( 
    <Card className="w-[600px] shadow-md">
    <CardHeader>
      <p className="text-2xl font-semibold text-center">
        Información del servidor 📟
      </p>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
        <p className="text-sm font-medium">
          ID
        </p>
        <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
        cls0psm2r8365flyb5g5j538q
        </p>
      </div>
      <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
        <p className="text-sm font-medium">
          Estado
        </p>
        <Badge 
          variant={"success"}
        >
          {"Online"}
        </Badge>
      </div>
      <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
        <p className="text-sm font-medium">
          Nombre (dominio)
        </p>
        <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
        https://www.armandovl.dev
        </p>
      </div>
      <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
        <p className="text-sm font-medium">
          Desplegado
        </p>
        <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
        https://vercel.com
        </p>
      </div>
      <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
        <p className="text-sm font-medium">
          Correo de soporte
        </p>
        <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
          soporte@armandovl.dev
        </p>
      </div>
      <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
        <p className="text-sm font-medium">
          Rol asignado
        </p>
        <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
          Admin
        </p>
      </div>

      <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
        <p className="text-sm font-medium">
          Autenticación de dos factores
        </p>
        <Badge 
          variant={"success"}
        >
          {"Activada"}
        </Badge>
      </div>
    </CardContent>
  </Card>
   );
}
 
export default ServerPage;