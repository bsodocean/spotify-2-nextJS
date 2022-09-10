import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  console.log("Hello");
  // Token exists if logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  if (pathname.includes("/api/auth") || token) {
    NextResponse.next();
  }

  if (!token && pathname !== "/login") {
    NextResponse.rewrite(new URL("/login", req.url));
  }
}
