import type { auth } from "@/lib/auth/client.js";

type Session = typeof auth.$Infer.Session;

declare module "hono" {
  interface Variables {
    requestId: string;
    user: Session["user"];
    session: Session["session"];
  }
}
