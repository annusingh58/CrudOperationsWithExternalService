import express from  "express";
import { register } from "../Controllers/UserControllers.js";
import { checksregister } from "../middleware/authmiddleware.js";

const router=express.Router();

router.post ('/register',checksregister,register);
router.post('/checksregister'/checksregister)


export default router;