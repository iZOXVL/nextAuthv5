import { auth, signOut } from "@/auth";

const SettingsPage = async() => {
    const session = await auth();
    return (  
        <div className="container">
            {JSON.stringify(session)}
            <form action={async () => {
            "use server";

            await signOut();
            }
            }>
                <button type="submit">
                    Salir
                </button>
            </form>
        </div>
    );
}
 
export default SettingsPage;