import './Input.scss'

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
    <div className='input-container'>
        <input 
            type={type}
            name= {name}
            placeholder={placeholder}
            {...props}
            className='input'
        />
        {error && <p className='input-error'>{error}</p>}
    </div>
  )
}

export default Input