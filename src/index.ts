import * as dotenv from "dotenv";
import app from "./server";

dotenv.config();

import config from "./config";

app.listen(config.port, () => {
  console.log("tomek--- is listening at 3001");
});
