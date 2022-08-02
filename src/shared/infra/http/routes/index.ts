import { Router } from "express";
import playersRouter from "../../../../modules/players/infra/http/routes/players.routes";

const routes = Router();

routes.use("/player", playersRouter);
export default routes;
