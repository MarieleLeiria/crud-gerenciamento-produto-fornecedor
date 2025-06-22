import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import express from "express";
const router = express.Router();

// router.get("/:id", async (req, res, next) => {
//   const id = req.params.id;
//   const allProducts = await prisma.products.findFirst({
//     where: {
//       id: id,
//     },
//   });
//   res.status(200).json(allProducts);
// });

router.get("/", async (req, res, next) => {
  const allProducts = await prisma.products.findMany();
  res.status(200).json(allProducts);
});

router.get("/providers", async (req, res, next) => {
  const allProviders = await prisma.provider.findMany();
  res.status(200).json(allProviders);
});

export default router;
