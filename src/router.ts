import { Router } from "express";
import { body } from "express-validator";
import { createProduct, getProducts, updateProduct } from "./handlers/product";
const router = Router();

/**
 * Product
 */
router.get("/product", getProducts);
router.get("/product/:id", (req, res) => {});
router.put("/product/:id", body("name").exists().isAlphanumeric(), updateProduct);
router.post("/product", createProduct);
router.delete("/product/:id", (req, res) => {});

/**
 * Update
 */

router.get("/update", (req, res) => {});
router.get("/update/:id", (req, res) => {});
router.put("/update/:id", (req, res) => {});
router.post("/update/:id", (req, res) => {});
router.delete("/update/:id", (req, res) => {});

/**
 * Update Point
 */

router.get("/updatePoint", (req, res) => {});
router.get("/updatePoint/:id", (req, res) => {});
router.put("/updatePoint/:id", (req, res) => {});
router.post("/updatePoint/:id", (req, res) => {});
router.delete("/updatePoint/:id", (req, res) => {});

export default router;
