import { Container } from "./styles";
import {FiPlus, FiX} from 'react-icons/fi'

export function Links({value,newLink, ...rest}) {
  return(
    <Container newLink = {newLink}>
    <input type="text" value={value} readOnly = {!newLink} {...rest}/>

    <button type="button" >
      {newLink ? <FiPlus /> : <FiX />}
    </button>
    </Container>
  )
}