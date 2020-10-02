import dotenv from "dotenv-safe";

export const loadEnvs = (): void => {
  dotenv.config({
    example: ".env.dist",
  });
};
