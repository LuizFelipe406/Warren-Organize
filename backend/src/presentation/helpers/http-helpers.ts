import { HttpResponse } from "../protocols/http";

export const conflict = (message: string): HttpResponse => ({
  body: { message },
  statusCode: 409
})

export const created = (body: unknown): HttpResponse => ({
  body,
  statusCode: 201
})

export const badRequest = (error: Error): HttpResponse => ({
  body: { message: error.message },
  statusCode: 400
})

export const goodRequest = (body: unknown): HttpResponse => ({
  body,
  statusCode: 200
})

export const unauthorized = (message: string): HttpResponse => ({
  body: { message },
  statusCode: 401
})