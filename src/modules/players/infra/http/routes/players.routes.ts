import { Router } from "express";
import PlayersController from "../controllers/PlayersControllers";

const playersRouter = Router();
const playersController = new PlayersController();

playersRouter.post("/add", playersController.store);

export default playersRouter;
