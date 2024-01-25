import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { CardWrapper } from "@/components/auth/card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Lo sentimos! Algo no ha salido bien!"
      backButtonHref="/auth/login"
      backButtonLabel="Regresar"
    >
         <div className="w-full flex justify-center items-center">
      <ExclamationTriangleIcon  className="text-destructive w-40 h-40" />
      </div>
    </CardWrapper>
  );
};