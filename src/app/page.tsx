import Image from 'next/image'
import { Button } from '@/components'
import { Edit } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex justify-center gap-8 ">
      <div className="bg-gray2 h-[300px] w-full max-w-xs rounded-lg"></div>
      <div className="flex h-screen w-full max-w-[832px] flex-col gap-8 ">
        <div className="bg-gray2 h-[600px] w-full rounded-lg"></div>
        <div className="bg-gray2 h-[600px] w-full rounded-lg"></div>
      </div>
    </div>
  )
}
