import { ModeToggle } from '@/app/components/mode-toggle';
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href="/register">Đăng ký</Link>
        </li>
        <li>
          <Link href="/login">Đăng nhập</Link>
        </li>
      </ul>
      <ModeToggle/>
    </header>
  );
};