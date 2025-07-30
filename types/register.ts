import { paths } from '@/api/openapi'

export type RegisterRequestBody = paths['/auth/register']['post']['requestBody']['content']['application/json'];