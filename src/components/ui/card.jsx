import React from 'react'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn('rounded-2xl border border-pink-200 bg-white text-pink-900 shadow-sm', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  )
}

export default Card
