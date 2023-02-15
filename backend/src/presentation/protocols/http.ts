export interface HttpRequest {
  body?: unknown,
  params?: string
}

export interface HttpResponse {
  body: unknown,
  statusCode: number
}
