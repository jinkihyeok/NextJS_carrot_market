import { type NextRequest, type NextFetchEvent, userAgent } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (userAgent(req).isBot) {
    return new Response("Plz don't be a bot. Be human.", { status: 403 });
  }

  if (!req.url.includes("/api")) {
    if (!req.url.includes("/enter") && !req.cookies.has("carrotsession")) {
      return NextResponse.redirect("/enter");
    }
  }

  if (req.nextUrl.pathname === "/chats") {
    console.log("chats ONLY middleware");
  }
}
