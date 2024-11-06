import H1 from '@/components/atoms/H1/H1'
import './FeatureTemplate.scss'
import HeaderFeature from '@/components/molecules/HeaderFeature/HeaderFeature'

interface IFeatureTemplateProps{
  children: React.ReactNode;
}

const FeatureTemplate: React.FC<IFeatureTemplateProps> = ({children}) => {
  return (
    <section className='feature_template-section'>
        <H1>Servicios</H1>
        <HeaderFeature/>
        {children}

    </section>
  )
}

export default FeatureTemplate