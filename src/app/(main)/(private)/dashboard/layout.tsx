
import React from 'react'
import AuthGuard from './guard/AuthGuard'

export default function PrivateLayout(
    { children }: { children: React.ReactNode}
) {
  return (
    <AuthGuard>{children}</AuthGuard>
  )
}