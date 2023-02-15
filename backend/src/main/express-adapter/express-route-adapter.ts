import { Request, Response } from "express"
import { Controller } from "../../presentation/protocols/controller"
import { HttpRequest, HttpResponse } from "../../presentation/protocols/http"

export const expressRouteAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params
    }
    const httpResponse: HttpResponse = await controller.execute(httpRequest)

    return res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
