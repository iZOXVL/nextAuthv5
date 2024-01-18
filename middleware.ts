import { auth } from "./auth"
export default auth((req) => {
  console.log("ROUTE: ", req.nextUrl.pathname)
})

export const config = {
  matcher: ["/auth/login", "/auth/register"],
}