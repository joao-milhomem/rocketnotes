import { Background, Container, Form } from "./styles";
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {ButtonText} from '../../components/ButtonText'
import {FiMail, FiLock} from 'react-icons/fi'

export function SingIn() {
  return(
    <Container>
      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar suas notas e links</p>

        <h2>Faça seu login</h2>
        <Input placeholder = 'Email' icon={FiMail} />
        <Input placeholder = 'Senha' icon={FiLock} />
        <Button title='Entrar'/>       
        
        <ButtonText title='Criar conta'/>  
      </Form>
      <Background />
    </Container>
  )
}