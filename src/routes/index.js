import { Router } from "express";

import user from "../controllers/user";
import vital from "../controllers/vital";
import courier from "../controllers/courier";

const apiRouter = Router();

/* ------ User ---- */
apiRouter.get("/auth", user.auth);
apiRouter.get("/user", user.read);

/* ------ Vital ---- */
apiRouter.post("/vital", vital.create);

/* ------ Courier ---- */
apiRouter.post("/text", courier.text);

export { apiRouter };
