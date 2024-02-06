import cors from "cors";
import express from "express";
import morgan from "morgan";
import { createNewUser, signIn } from "./handlers/user";
import { protect } from "./modules/auth";
import router from "./router";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.shhhh = "youhuhuhuh tomek";
  next();
});

app.get("/", (req, res) => {
  console.log("tomek--- hello");
  res.status(200);
  res.json({ message: "Hello" });
});

app.use("/api", protect, router);

app.post("/user", createNewUser);
app.post("/login", signIn);
export default app;
