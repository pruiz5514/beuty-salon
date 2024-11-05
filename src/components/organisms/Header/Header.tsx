import './Header.scss'

interface IHeaderProps{
    children:  React.ReactNode;
}

const Header: React.FC<IHeaderProps> = ({children}) => {
  
  return (
    <header>
        <nav>
            <ul className='nav-ul'>
                {children}
            </ul>
        </nav>
    </header>
  )
}

export default Header