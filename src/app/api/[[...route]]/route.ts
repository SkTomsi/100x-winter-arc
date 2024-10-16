import { CheckInRouter } from "@/features/check-in/server/route";
import { HabitsRouter } from "@/features/habits/server/route";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

// export const runtime = "edge";

app.use("*", clerkMiddleware());

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app
  .route("/habits", HabitsRouter)
  .route("/checkIn", CheckInRouter);

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
