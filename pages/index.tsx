import {Inter} from '@next/font/google'
import {Button, HTag} from '@/components';


const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <>
      <HTag tag="h1">Text</HTag>
      <Button appearance="primary" arrow='right'>Some btn</Button>
      <Button appearance="ghost" arrow='down'>Some btn</Button>
    </>
  )
}
