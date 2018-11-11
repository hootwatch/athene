import { Router } from "express";

import vitals from "../controllers/vitals";
import vital from "../controllers/vital";
import courier from "../controllers/courier";

const apiRouter = Router();

apiRouter.get("/vitals", vitals.read);
apiRouter.post("/vitals", vitals.create);

apiRouter.get("/vital", vital.read);
apiRouter.post("/vital", vital.create);

apiRouter.post("/text", courier.text);

export { apiRouter };
