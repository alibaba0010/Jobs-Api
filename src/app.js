import express, { json } from "express";

import "express-async-errors";

import cors from "cors";
import helmet from "helmet";
import xss from "xss-clean";

import rateLimiter from "express-rate-limit";

import { errorHandler } from "./errors/error.js";

import { routeError } from "./errors/route.error.js";

import userRouter from "./routes/user.router.js";

import jobRouter from "./routes/jobs.router.js";

import { authenticateUser } from "./middleware/auth.js";

const app = express();

app.use(cors({ origin: "*" }));

app
  .use(
    rateLimiter({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    })
  )
  .use(json())
  .use(helmet())
  .use(cors())
  .use(xss())
  .use("/api/v1/user", userRouter)
  .use("/api/v1/job", authenticateUser, jobRouter)
  .use(routeError)
  .use(errorHandler);

export default app;
