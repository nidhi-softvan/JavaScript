import express from "express";
const router = express.Router();

import { signup, signin,getUsers} from "../controllers/user.js";

router.post("/Signin", signin);
router.post("/Signup", signup);




router.get("/all", getUsers);
export default router;