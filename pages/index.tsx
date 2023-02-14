import { Inter } from '@next/font/google'
import { Button, HTag, Tag } from '@/components'
import { PTag } from '@/components/PTag/PTag'
import { useState } from 'react'
import { Rating } from '@/components/Rating/Rating'
import { withLayout } from '@/Layout/Layout'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { MenuItem } from '@/interfaces/menu.interface'

const inter = Inter({ subsets: ['latin'] })

function Home({ menu }: HomeProps) {
  const [rating, setRating] = useState<number>(4)
  return (
    <>
      <Rating rating={rating} isEditable setRating={setRating} />
      <HTag tag='h1'>Text</HTag>
      <Button appearance='primary' arrow='right'>
        Some btn
      </Button>
      <Button appearance='ghost' arrow='down'>
        Some btn
      </Button>
      <PTag size={'small'}>small</PTag>
      <PTag size={'medium'}>medium</PTag>
      <PTag size={'large'}>large</PTag>
      <Tag href='#' size={'small'} color={'gray'}>
        Small Link
      </Tag>
      <Tag color={'red'} size={'medium'}>
        Medium
      </Tag>
      <Tag color={'green'} size={'medium'}>
        Medium
      </Tag>
      <ul>
        {menu.map(m => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory
    }
  )
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
