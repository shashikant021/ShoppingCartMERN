import { Button } from '@/components/ui/button'
import React from 'react'

function NotFound() {
  return (
    <>
    <div className='text-center pt-10'>
      Page doesn't exist {' '}
      <Button className='bg-slate-600'> <a href="/shop/home"> Home Page</a></Button>
    </div>
    </>
  )
}

export default NotFound
