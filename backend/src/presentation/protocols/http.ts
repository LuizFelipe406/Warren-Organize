export interface HttpRequest {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any,
  params?: object
}

export interface HttpResponse {
  body: unknown,
  statusCode: number
}
