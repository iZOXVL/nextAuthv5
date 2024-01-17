import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm = () => {
    return (  
       <CardWrapper
       headerLabel="Bienvenido"
       backButtonLabel="No estoy registrado"
       backButtonHref="/aurh/regsister"
       showSocial
       >
        <div>
            <h1>Login Form</h1>
        </div>
       </CardWrapper>
    );
};
 
export default LoginForm;