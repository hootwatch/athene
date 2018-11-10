import { Router } from "express";

import vitals from "../controllers/vitals";

const apiRouter = Router();

apiRouter.get("/vitals", vitals.read);

export { apiRouter };
