import ISector from '@client/components/interfaces/ISector'
import {SSectorIcon, SSectorWrapper} from './styles/Sector.styled'

export default function Sector({title, count, src}:ISector) {
  return (
    <SSectorWrapper>
      <div>
        <h1>{count}</h1>
        <h4>{title}</h4>
      </div>
      <div>
        <SSectorIcon src={src} alt="" />
      </div>
    </SSectorWrapper>
  )
}
