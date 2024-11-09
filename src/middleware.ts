// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

const PUBLIC_PATHS = [
   "/",
   "/login",
   "/signup",
   "/about",
   "/contact",
   "/games",
   "/yt-channels",
   "/gospel-websites"
];

export async function middleware(request: NextRequest) {
   const token = request.cookies.get("auth-token");
   const { pathname } = request.nextUrl;

   if (!token && !PUBLIC_PATHS.includes(pathname)) {
      const redirectUrl = new URL("/login", request.url);
      redirectUrl.searchParams.set("redirectUrl", pathname);
      return NextResponse.redirect(redirectUrl);
   }

   if (token) {
      try {
         // Decode the token using jwt-decode
         const decodedToken: any = jwtDecode(token.value);
         const userRole = decodedToken.role;

         // Prevent logged-in users from accessing public routes
         if (PUBLIC_PATHS.includes(pathname)) {
            return userRole === "admin"
               ? NextResponse.redirect(new URL("/admin", request.url))
               : NextResponse.redirect(new URL("/dashboard", request.url));
         }
      } catch (error) {
         console.error("Failed to decode token:", error);
         const redirectUrl = new URL("/login", request.url);
         return NextResponse.redirect(redirectUrl);
      }
   }

   // Allow other routes
   return NextResponse.next();
}

export const config = {
   matcher: ["/((?!_next/static|favicon.ico|api).*)"],
};
