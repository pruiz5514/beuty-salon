import './Button.scss'

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: ()=> void;
    type?: "submit"
  }  

const Button: React.FC<ButtonProps>  = ({children, className, onClick, type}) => {
  return (
    <button onClick={onClick} className={`button ${className}`} type={type}>
        {children}
    </button>
  )
}

export default Button