import merge from "lodash/merge";
import { env } from "process";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const stage = process.env.STAGE || "local";
let envConfig;

if (stage === "production") {
  envConfig = require("./production").config;
} else if (stage === "testing") {
  envConfig = require("./testing").config;
} else {
  envConfig = require("./local").config;
}

export default merge(
  envConfig,
  {
    stage,
    env: process.env.NODE_ENV,
    port: 3001,
    secrets: {
      jwt: process.env.JWT_SECRET,
      dbUrl: process.env.DB_URL,
    },
  },
  envConfig
);
