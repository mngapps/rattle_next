import { cn } from 'tailwind-merge'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'ghost'
}

export default function Button({ className, variant = 'default', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded',
        variant === 'default' && 'bg-blue-500 text-white',
        variant === 'ghost' && 'bg-transparent hover:bg-gray-100',
        className
      )}
      {...props}
    />
  )
}
