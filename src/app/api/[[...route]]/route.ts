import { HabitsRouter } from "@/features/habits/server/route";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.use("*", clerkMiddleware());

export const routes = app.route("/habits", HabitsRouter);

app.get("/", (c) => {
  const auth = getAuth(c);

  if (!auth?.userId) {
    return c.json({
      message: "You are not logged in.",
    });
  }

  return c.json({
    message: "You are logged in!",
    userId: auth.userId,
  });
});

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
