import Page from '@/components/page'
import Info from '@/components/info'

export default function Home() {
  return (
    <Page
      title='Yabooka | Home'
      desription='Apple servis Yabooka Niš - servis apple uređaja, servis android uređaja.'
    >
      <div className='max-w-screen-lg mx-auto pt-10 pb-20'>
        <Info />
        <h1 className='font-inter font-extrabold tracking-tight leading-[6rem] text-7xl text-center mb-10'>
          Kompletan servis svih Apple i Android mobilnih uredjaja
        </h1>
        <p className='text-center'>
          <u>Specijalizovani smo pre svega za servis Apple uređaja</u> -
          mobilnih telefona, tableta, laptopova i desktop računara, ali uspešno
          rešavamo i probleme na Android uređajima, kao i na svim ostalim kućnim
          aparatima (TV, gaming konzole, monitori, PC računari...).
        </p>
      </div>
    </Page>
  )
}
