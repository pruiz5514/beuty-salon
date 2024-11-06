import H1 from '@/components/atoms/H1/H1'
import './LoginTemplate.scss'
import { LoginForm } from '@/components/organisms'

const LoginTemplate = () => {
  return (
    <div className='login_template-container'>
      <div className='auth_form-container'>
        <H1>Inicia sesión en tu cuenta</H1>
        <LoginForm/>
      </div>
      
    </div>
  )
}

export default LoginTemplate