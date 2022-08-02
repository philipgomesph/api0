import { Request, Response } from "express";
// import { container } from "tsyringe";

export default class PlayersController {
  public async store(request: Request, response: Response): Promise<Response> {
    const HelloWorld = "Hellow World";

    return response.status(200).json({ HelloWorld });
  }
}
