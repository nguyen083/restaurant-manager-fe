import { Metadata } from 'next'
import RegisterForm from '@/app/components/register/register-form'

export const metadata: Metadata = {
  title: 'Register page',
  description: 'Register page',
}

export default function RegisterPage() {
  return (
    <RegisterForm />
  )
}