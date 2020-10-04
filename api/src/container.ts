import * as awilix from "awilix";
import { AwilixContainer } from "awilix";
import { loadEnvs } from "../config/env";
import { createApp } from "./container/create-app";

loadEnvs();

export const createContainer = async (): Promise<AwilixContainer> => {
  const container: AwilixContainer = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
  });

  const env = process.env;

  const app = createApp(env);

  container.register({
    app: awilix.asValue(app),
  });

  return container;
};
