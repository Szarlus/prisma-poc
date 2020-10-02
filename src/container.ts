import * as awilix from "awilix";
import { AwilixContainer } from "awilix";
import { loadEnvs } from "./config/env";

loadEnvs();

export const createContainer = async (): Promise<AwilixContainer> => {
  const container: AwilixContainer = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
  });

  return container;
};
