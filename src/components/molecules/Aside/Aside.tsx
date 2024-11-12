'use client'
import './Aside.scss';
import Button from '@/components/atoms/Button/Button'
import { IoClose } from 'react-icons/io5'
import { signOut } from "next-auth/react"

interface IAsideProps{
    functionProps?: ()=> void
}

const Aside: React.FC<IAsideProps> = ({functionProps}) => {
  return (
    <aside className='aside'>
        <button className='close-aside' onClick={functionProps}><IoClose /></button>
        <ul className='list-aside'>
            <li><a href="/dashboard/services">Servicios</a></li>
            <li><a href="/dashboard/appointments">Citas</a></li>
            <li><a href="/dashboard/clients">Clientes</a></li>
            <li><a href="/dashboard/employees">Empleados</a></li>
            <li><Button onClick={()=> signOut()}>Cerrar sesión</Button></li>
        </ul>
    </aside>
  )
}

export default Aside