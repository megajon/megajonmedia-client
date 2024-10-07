import { Inter } from '@next/font/google'
import Body from '../components/Body'
import ModalForm from '../components/ModalForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <ModalForm />
      <Body />
    </>
  )
}
