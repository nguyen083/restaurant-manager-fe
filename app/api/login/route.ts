import { client } from '@/api'
import { ErrorCustom, ErrorResponse } from '@/types/error'
import { z } from 'zod'

const LoginFormSchema = z.object({
  email: z.email({ message: 'Email không hợp lệ' }),
  password: z.string().min(8, { message: 'Mật khẩu phải có ít nhất 8 ký tự' }),
})

export async function POST(request: Request) {
  try {
    const res = await request.json()
    
    // Validate request body với Zod
    const body = LoginFormSchema.parse(res)

    const { data, error } = await client.POST('/auth/login', {
      body,
      doNotShowLoading: true,
    })

    if (error) {
      if(error satisfies ErrorResponse) {
        throw new ErrorCustom(error)
      }
      // throw new ErrorCustom(error)
    }

    const expiresDate = new Date(data?.data?.expiresAt || '').toUTCString()
    
    const cookieOptions = [
      `sessionToken=${data?.data?.token}`,
      'HttpOnly',
      'Path=/',
      `expires=${expiresDate}`,
      process.env.NODE_ENV === 'production' ? 'Secure' : '',
      'SameSite=Lax',
    ].filter(Boolean).join('; ')

    return Response.json({ ...data }, {
      status: 200,
      headers: {
        'Set-Cookie': cookieOptions,
      },
    })

  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return Response.json({ 
        message: 'Dữ liệu không hợp lệ', 
        statusCode: 400,
      } satisfies ErrorResponse, {
        status: 400,
      })
    }
    
    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return Response.json({ 
        message: 'Request body không phải là JSON hợp lệ', 
        statusCode: 400,
      } satisfies ErrorResponse, {
        status: 400,
      })
    }

    if (error instanceof ErrorCustom) {
      return Response.json({ 
        ...error,
      } satisfies ErrorResponse, {
        status: error.statusCode,
      })
    }
    
    // Handle other errors
    return Response.json({ 
      message: 'Lỗi server nội bộ', 
      statusCode: 500,
    } satisfies ErrorResponse, {
      status: 500,
    })
  }
}