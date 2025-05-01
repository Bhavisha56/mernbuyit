import express from "express";
// maincardControllers
import verifytoken from "../middlewares/verificationMiddleware.js";
import maincardControllers from "../controllers/maincardControllers.js";
const router=express.Router();


router.route("/mainproduct").post(verifytoken,maincardControllers.mainCardProduct);
router.route("/mainproduct/all").get(verifytoken,maincardControllers.mainCardProductFetch);
router.route("/mainproduct/:id").get(verifytoken,maincardControllers.mainCardProductFetchSingle);



export default router