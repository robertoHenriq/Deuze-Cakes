import React from 'react'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Button = React.forwardRef(({ className, children, variant = 'default', ...props }, ref) => {
  const variants = {
    default: 'bg-pink-600 text-white hover:bg-pink-700 focus:ring-pink-300',
    secondary: 'bg-pink-100 text-pink-900 hover:bg-pink-200 focus:ring-pink-300'
  }

  return (
    <button
      ref={ref}
      className={cn('inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2', variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export { Button }
export default Button
