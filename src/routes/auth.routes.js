import { Router } from "express";
import validatorSchema from "../middlewares/validator.middleware.js";
import { registerSchema, exitSchema} from "../schemas/auth.schemas.js";
import { register, exit } from "../controllers/auth.controller.js";

const router = Router();

router.post('/register', validatorSchema(registerSchema), register);
router.post('/exit',validatorSchema(exitSchema), exit );


export default router;