import express from "express";
const router = express.Router();
import {
  deleteProvider,
  postProvider,
  putProvider,
} from "../controllers/provider-controller.js";

router.post("/", postProvider);
router.put("/:id", putProvider);
router.delete("/:id", deleteProvider);

export default router;
