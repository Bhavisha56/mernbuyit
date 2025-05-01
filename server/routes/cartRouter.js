import express from "express";
import cartControllers from "../controllers/cartControllers.js"
import verifytoken from "../middlewares/verificationMiddleware.js";
const router=express.Router();



router.route("/cart").post(verifytoken, cartControllers.cartData);
router.route("/cart/update/:id").put(verifytoken,cartControllers.updateCartQuantity);
router.route("/cart/:id").get(verifytoken,cartControllers.cartFetch);
router.route("/cart/delete/:id").delete(verifytoken,cartControllers.deleteitem)

export default router;