import { createContainer } from "./container";
import Koa from "koa";

(async () => {
  const container = await createContainer();

  const app = container.resolve<Koa>("app");
  const port = process.env.APP_PORT;

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });

  console.log("HELLO");
})();
