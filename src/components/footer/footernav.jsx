import Link from 'next/link'

import { footernav } from './data'

export default function FooterNav() {
  return (
    <nav>
      <ul className='flex items-center space-x-2 text=[#424245]'>
        {footernav.map((navItem) => {
          const { id, url, text } = navItem
          return (
            <li
              key={id}
              className='border-r border-[#6e6e73] pr-2 last:pr-0 hover:underline last:border-r-0 text-[#424245]'
            >
              <Link href={url}>{text}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
