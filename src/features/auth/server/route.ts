import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { LoginSchema } from "../schemas";

export const AuthRouter = new Hono()
  .post("/login", zValidator("json", LoginSchema), async (c) => {
    const { email, password } = c.req.valid("json");

    console.log({ email, password });

    return c.json({ email, password });
  })
  .get("/", (c) => {
    return c.json({ message: "Hello World" });
  });
