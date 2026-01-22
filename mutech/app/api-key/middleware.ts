import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
const paid = request.cookies.get("PAID_USER")?.value

if (!paid || paid !== "true") {
return NextResponse.redirect(new URL("/api-key?locked=true", request.url))
}
}

export const config = {
matcher: ["/api-key"],
}