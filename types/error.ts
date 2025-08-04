import { components } from '@/api/openapi'

export type ErrorResponse = components['schemas']['ErrorResponse']

type ErrorsProps = {
  field?: string
  message?: string
}

export class ErrorCustom extends Error {
  message: string
  statusCode: number
  errors?: ErrorsProps[]
  constructor(error: ErrorResponse) {
    super(error.message)
    this.message = error.message
    this.statusCode = error.statusCode
    this.errors = error.errors
  }
}
