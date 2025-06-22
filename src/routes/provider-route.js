import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import express from "express";
const router = express.Router();

router.get("/providers", async (req, res, next) => {
  const allProviders = await prisma.provider.findMany();
  res.status(200).json(allProviders);
});

// router.get("/:id", async (req, res, next) => {
//   const id = req.params.id;
//   const allProviders = await prisma.provider.findFirst({
//     where: {
//       id: id,
//     },
//   });
//   res.status(200).json(allProviders);
// });

export default router;
