interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    placeholder ?: string;
    type?: string; 
    name?: string;
    error?: string;
}

const Input = ({
    placeholder,
    type ="text",
    name,
    error,
    ...props
}: InputProps) => {
  return (
    <div>
        <input 
            type={type}
            name= {name}
            placeholder={placeholder}
            {...props}
        />
        {error && <p>{error}</p>}
    </div>
  )
}

export default Input