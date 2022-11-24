import { Container, Brand, Menu, NewNote } from "./style";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import {FiPlus} from 'react-icons/fi'
export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header/>

      <Menu>
        <ul>
          <li><ButtonText title='Nodejs'/></li>
          <li><ButtonText title='React' active/></li>
          <li><ButtonText title='Vite'/></li>
          <li><ButtonText title='Promises'/></li>
        </ul>
      </Menu>

      <NewNote>
        <FiPlus/> 
        <span>Nova nota</span>
      </NewNote>

    </Container>
  )
}