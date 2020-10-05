import { createContainer } from "./container";
import Koa from "koa";
import { PrismaClient } from ".prisma/client";

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { PrismaClient } = require("@prisma/client");

(async () => {
  const container = await createContainer();

  const app = container.resolve<Koa>("app");
  const port = process.env.APP_PORT;

  const prisma: PrismaClient = new PrismaClient();
  const stats = await prisma.playersRelativeDPSStats.findMany({
    take: 10,
    select: {
      Id: true,
      CharacterName: true,
      AccountName: true,
      Profession: true,
      FightName: true,
      TargetDps: true,
      TotalDps: true,
    },
    where: {
      FightName: {
        contains: "Cairn",
      },
      Profession: "Druid",
    },
  });

  console.log(stats);

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
})();
