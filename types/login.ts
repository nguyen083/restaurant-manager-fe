import { paths } from '@/api/openapi'

export type LoginRequestBody = paths['/auth/login']['post']['requestBody']['content']['application/json'];