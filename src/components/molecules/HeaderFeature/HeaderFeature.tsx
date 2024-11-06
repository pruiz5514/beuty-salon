import './HeaderFeature.scss'
import Button from '@/components/atoms/Button/Button'

const HeaderFeature = () => {
  return (
    <div className='header_feature-container'>
        <div className='header_feature_button-container'>
            <Button>Agregar servicio</Button>
        </div>
        
    </div>
  )
}

export default HeaderFeature