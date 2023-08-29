import { Inter } from '@next/font/google'
import EmailForm from '../components/EmailForm'
import MainContent from '../components/MainContent'
import SocialMedia from '../components/SocialMedia'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <main>
        <EmailForm />
        <MainContent />
        <SocialMedia />
      </main>
    </>
  )
}
