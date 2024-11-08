import './Aside.scss';
import Button from '@/components/atoms/Button/Button'
import { IoClose } from 'react-icons/io5'

interface IAsideProps{
    functionProps?: ()=> void
}

const Aside: React.FC<IAsideProps> = ({functionProps}) => {
  return (
    <aside className='aside'>
        <button className='close-aside' onClick={functionProps}><IoClose /></button>
        <ul className='list-aside'>
            <li><a href="">Servicios</a></li>
            <li><a href="">Citas</a></li>
            <li><a href="">Clientes</a></li>
            <li><a href="">Empleados</a></li>
            <li><Button>Cerrar sesión</Button></li>
        </ul>
    </aside>
  )
}

export default Aside