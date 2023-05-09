import { withAuth } from "next-auth/middleware"

export default withAuth(
  
  function middleware(req) {
    console.log("Voici le token génerée")
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized({token }) {
        if(token) return true // If there is a token, the user is authenticated
      }
    }
  }
)

export const config = { matcher: ["/video"] }

/*Todo Register route protected by role, only admin can acess register

export default withAuth(
  function middleware(req) {
    console.log(req.nextauth.token)
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "admin",
    },
  }
)
export const config = { matcher: ["/register] }
*/
