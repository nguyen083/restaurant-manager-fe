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
import { useLogin } from '@/hooks/use-login'
import { toast } from 'sonner'
import { LoginRequestBody } from '@/types/login'
import { ErrorCustom } from '@/types/error'

export const LoginFormSchema = z.object({
  email: z.email({ message: 'Email không hợp lệ' }),
  password: z.string().min(8, { message: 'Mật khẩu phải có ít nhất 8 ký tự' }),
})

export default function LoginForm() {
  const { mutate: login, isPending } = useLogin()

  const form = useForm<LoginRequestBody>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  function onSubmit(values: LoginRequestBody) {
    login(values, {
      onSuccess: () => {
        toast.success('Đăng nhập thành công')
      },
      onError: (error) => {
        if (error instanceof ErrorCustom) {
          error.errors?.forEach((error) => {
            form.setError(error.field as keyof LoginRequestBody, { message: error.message })
          })
        }
      },
    })
  }
  
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Đăng nhập</CardTitle>
        <CardDescription>
          Nhập email bên dưới để đăng nhập vào tài khoản của bạn
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" noValidate>
          <CardContent className="space-y-4">
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
          </CardContent>
          <CardFooter>
            <Button disabled={isPending} type="submit">
              {isPending ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}