
interface ButtonProps {
  color?: 'green' | 'blue' | 'gray'
  className?: string;
  children: any
  onClick?: () => void
}

function Button({ children, color,  className, onClick }: ButtonProps) {
  const gradientColor = color ?? 'gray'
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-${gradientColor}-500 to-${gradientColor}-600 text-white px-4 py-2 rounded-md ${className}`}
    >
      {children}
    </button>
  )
}

export { Button }