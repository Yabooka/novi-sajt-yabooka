import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className='space-x-4'>
      <Link href='/usluge'>Usluge</Link>
      <Link href='/blog'>Blog</Link>
      <Link href='/cesta-pitanja'>Cesta pitanja</Link>
      <Link href='/kontakt'>Kontakt</Link>
    </nav>
  )
}
