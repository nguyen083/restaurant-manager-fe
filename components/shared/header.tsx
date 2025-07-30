import { ModeToggle } from '@/components/shared/mode-toggle'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex justify-end items-center p-2 gap-4">
      <Link href="/register">Đăng ký</Link>
      <Link href="/login">Đăng nhập</Link>
      <ModeToggle/>
    </header>
  )
}