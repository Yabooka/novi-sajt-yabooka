import FooterNav from './footernav'

export default function Footer() {
  return (
    <footer className=''>
      <div className='flex items-center justify-between max-w-screen-lg max-w h-5 mx-auto text-xs border-t border-[#d2d2d7] py-4'>
        <div className='text-[#6e6e73]'>
          © {new Date().getFullYear()} Yabooka. Sva prava zadrzana.
        </div>
        <FooterNav />
      </div>
    </footer>
  )
}
