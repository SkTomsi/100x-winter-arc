import { AuthRouter } from "@/features/auth/server/route";
import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

export const routes = app.route("/auth", AuthRouter);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
