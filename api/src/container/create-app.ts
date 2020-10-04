import Koa from "koa";
import logger from "koa-logger";
import compress from "koa-compress";
import responseTime from "koa-response-time";
import Router from "koa-router";
import { OK } from "http-status-codes";

export const createApp = (_env: NodeJS.ProcessEnv): Koa => {
  const app = new Koa();

  const router = new Router();

  router.get("health", "/health", (ctx, _next) => {
    ctx.response.status = OK;
  });

  app.use(logger());
  app.use(responseTime());
  app.use(compress());

  app.use(router.middleware());

  return app;
};
