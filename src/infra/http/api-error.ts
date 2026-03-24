type ApiErrorDetail = {
  issue: string
  field: string
}
export interface ApiErrorResponse {
  error: {
    message: string
    code: string
    details?: ApiErrorDetail[]
  }
}
export class ApiError extends Error implements ApiErrorResponse {
  error: {
    message: string
    code: string
    details?: ApiErrorDetail[]
  }
  status: number

  constructor(
    message: string,
    code: string,
    status: number,
    details?: ApiErrorDetail[],
  ) {
    super(message)
    this.error = { message, code, details }
    this.status = status
  }
}
