'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useRegister } from '@/hooks/use-register'
import { toast } from 'sonner'
import { RegisterRequestBody } from '@/types/register'
import { ErrorCustom } from '@/types/error'

const schema = z.object({
  name: z.string().min(2, { message: 'Tên tài khoản phải có ít nhất 2 ký tự' }).max(50, { message: 'Tên tài khoản không được vượt quá 50 ký tự' }),
  email: z.email({ message: 'Email không hợp lệ' }),
  password: z.string().min(8, { message: 'Mật khẩu phải có ít nhất 8 ký tự' }),
  confirmPassword: z.string().min(8, { message: 'Mật khẩu phải có ít nhất 8 ký tự' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Mật khẩu và xác nhận mật khẩu không khớp',
  path: ['confirmPassword'],
})

export default function RegisterForm() {
  const { mutate: register, isPending } = useRegister()

  const form = useForm<RegisterRequestBody>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  function onSubmit(values: RegisterRequestBody) {
    register(values, {
      onSuccess: () => {
        toast.success('Đăng ký thành công')
      },
      onError: (error) => {
        if (error instanceof ErrorCustom) {
          if (error.errors) {
            error.errors.forEach((err) => {
              form.setError(err.field as keyof RegisterRequestBody, {
                message: err.message,
                type: 'server',
              })
            })
          }
        }
      },
    })
  }
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="">Đăng ký tài khoản</CardTitle>
        <CardDescription>
          Nhập thông tin để đăng ký tài khoản
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" noValidate>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên tài khoản</FormLabel>
                  <FormControl>
                    <Input placeholder="Tên tài khoản" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mật khẩu</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Mật khẩu" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Xác nhận mật khẩu</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Xác nhận mật khẩu" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button disabled={isPending} type="submit">
              {isPending ? 'Đang đăng ký...' : 'Đăng ký'}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}