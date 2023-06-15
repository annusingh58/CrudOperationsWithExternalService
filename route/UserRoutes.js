import express from  "express";
import { register } from "../Controllers/UserControllers.js";
import { checksregister } from "../middleware/authmiddleware.js";
import { addproduct } from "../Controllers/ProductControllers.js";

const router=express.Router();

router.post ('/register',register);
router.post('/checksregister'/checksregister);
router.post('/addproduct',addproduct)


export default router;