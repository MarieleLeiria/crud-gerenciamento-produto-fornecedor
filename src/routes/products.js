import express from "express";
import {
  postProduct,
  putProduct,
  deleteProduct,
} from "../controllers/product-controller.js";
const router = express.Router();

router.post("/", postProduct);
router.put("/:id", putProduct);
router.delete("/:id", deleteProduct);

export default router;
