import {Inter} from '@next/font/google'
import {Button, Htag} from '@/components';


const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary">Some btn</Button>
      <Button appearance="ghost">Some btn</Button>
    </>
  )
}
