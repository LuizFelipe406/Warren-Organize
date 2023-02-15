import { HttpResponse } from "../protocols/http";

export const created = (body: unknown): HttpResponse => ({
  body,
  statusCode: 201
})


export const badRequest = (error: Error): HttpResponse => ({
  body: { message: error.message },
  statusCode: 400
})