import { paths } from '@/api/openapi'

export type RegisterRequest = paths['/auth/register']['post']['requestBody']['content']['application/json'];