
import React from 'react'
import AuthGuard from './guard/AuthGuard'
import Header from '@/components/organisms/Header/Header'

export default function PrivateLayout(
    { children }: { children: React.ReactNode}
) {
  return (
    <AuthGuard>
      {children}
    </AuthGuard>
  )
}