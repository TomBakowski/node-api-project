import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

export const createNewUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password),
    },
  });

  const token = await createJWT(user);
  res.status(201).json({ token });
};

export const signIn = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  console.log("tomek--- user", user);
  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401).json({ message: "Invalid credentials" });
    return;
  }

  const token = createJWT(user);
  res.json({ token });
};
