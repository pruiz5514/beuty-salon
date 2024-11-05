import './H1.scss';

interface H1Props {
    children: React.ReactNode;
    classname?: string;
}

const H1: React.FC<H1Props> = ({children, classname}) => {
  return (
    <h1 className={`h1 ${classname}`}>{children}</h1>
  )
}

export default H1