import { Router } from "express";

import vitals from "../controllers/vitals";
import courier from "../controllers/courier";

const apiRouter = Router();

apiRouter.get("/vitals", vitals.read);

apiRouter.post("/text", courier.text);

export { apiRouter };
