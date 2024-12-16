import { bootstrap } from "@1punch/node";

bootstrap({
  dev: process.env.NODE_ENV === "development",
  stream: true,
});
