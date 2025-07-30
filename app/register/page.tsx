import { Metadata } from 'next'
import RegisterForm from '@/components/features/register/register-form'

export const metadata: Metadata = {
  title: 'Register page',
  description: 'Register page',
}

export default function RegisterPage() {
  return (
    <RegisterForm />
  )
}