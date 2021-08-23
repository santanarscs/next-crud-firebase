interface InputProps {
  type?: 'text' | 'number',
  label: string
  value: any
  readOnly?: boolean;
  className?: string;
  onChange?: (value: any) => void
}

function Input({label, type, value, readOnly, className, onChange}: InputProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-2" htmlFor={value}>{label}</label>
      <input
        type={type ?? 'text'}
        value={value}
        readOnly={readOnly}
        onChange={e => onChange(e.target.value)}
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none
          bg-gray-50 px-4 py-2
          ${!readOnly && 'focus:bg-white'}
          `}
      />
    </div>
  ) 
}

export { Input }