import Link from 'next/link'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { FaTelegramPlane } from 'react-icons/fa'

export default function SocialLinks() {
  return (
    <nav className='flex items-center'>
      <Link href='/facebook'>
        <FiFacebook className='text-blue-500 text-2xl mr-2' />
      </Link>
      <Link href='/instagram'>
        <FiInstagram className='text-blue-500 text-2xl mr-2' />
      </Link>
      <Link href='/telegram'>
        <FaTelegramPlane className='text-blue-500 text-2xl' />
      </Link>
    </nav>
  )
}
