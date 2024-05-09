'use client' // Error components must be Client Components
 
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='container flex h-screen w-screen items-center justify-center py-4 text-center'>
    <Card className='p-8'>
      <h1>Page not found</h1>
      <p className='pb-2'>
        Unfortunately, the page that you're looking for does not exist.
      </p>
      <Button asChild>
        <Link href='/' replace>
          Back to Home
        </Link>
      </Button>
    </Card>
  </div>
  )
}