import LoginForm from '@/app/components/login/login-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login page',
  description: 'Login page',
}

const LoginPage = () => {
  return <LoginForm />
}

export default LoginPage
