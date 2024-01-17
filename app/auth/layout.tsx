const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="flex h-full flex-col items-center justify-center 
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 to-indigo-700">
        
        {children}
        
        </div>
     );
}
 
export default AuthLayout;