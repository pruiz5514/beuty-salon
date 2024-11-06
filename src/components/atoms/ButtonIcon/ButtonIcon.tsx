import './ButtonIcon.scss'

interface IButtonIconProps {
    children: React.ReactNode;
    className?: string;
    onClick?: ()=> void;
    type?: "submit"
  }  

const ButtonIcon: React.FC<IButtonIconProps>  = ({children, className, onClick, type}) => {
  return (
    <button onClick={onClick} className={`button-icon ${className}`} type={type}>
        {children}
    </button>
  )
}

export default ButtonIcon