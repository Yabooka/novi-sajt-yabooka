import Link from 'next/link'
import Navigation from './nav'
import SocialLinks from './social'

export default function Header() {
  return (
    <header className='sticky inset shadow py-4'>
      <div className='flex items-center justify-between max-w-screen-lg mx-auto'>
        <Link href='/'>Logo</Link>
        <Navigation />
        <SocialLinks />
      </div>
    </header>
  )
}
