import { Inter } from '@next/font/google'
import { Button, HTag, Tag } from '@/components'
import { PTag } from '@/components/PTag/PTag'
import { useState } from 'react'
import { Rating } from '@/components/Rating/Rating'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [rating, setRating] = useState<number>(4)
  return (
    <>
      <Rating rating={rating} isEditable setRating={setRating}/>
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
    </>
  )
}
