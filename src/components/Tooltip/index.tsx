
import { Container } from './styles';

interface ITooltipProps {
  title:string;
  className?:string;
}

const Tooltip: React.FC<ITooltipProps> = ({title,className, children}) => {

  return (
    <Container className={className}>
      <span>{title}</span>
      {children}
    </Container>
  )
}

export { Tooltip };