import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticated } from "./lib/jwtToken";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get the `role` cookie
  const role = request.cookies.get("role")?.value;

  // Define role-based access rules
  const roleAccessMap: Record<string, string[]> = {
    "/mahasiswa": ["mahasiswa", "mhs"],
    "/wali": ["ortu", "wali"],
    "/prodi": ["prodi"],
  };

  if (pathname.startsWith("/prodi")) {
    const isAuthorized = await isAuthenticated(request);

    if (!isAuthorized) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (pathname.startsWith("/wali")) {
    const isAuthorized = roleAccessMap["/wali"].includes(role || "");

    if (!isAuthorized) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (pathname.startsWith("/mahasiswa")) {
    const isAuthorized = roleAccessMap["/mahasiswa"].includes(role || "");

    if (!isAuthorized) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

// Middleware applies to specific routes
export const config = {
  matcher: ["/mahasiswa/:path*", "/wali/:path*", "/prodi/:path*"],
};
