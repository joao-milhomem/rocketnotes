import { Background, Container, Form } from "./styles";
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {ButtonText} from '../../components/ButtonText'
import {FiMail, FiLock, FiUser} from 'react-icons/fi'
import { Link } from "react-router-dom";

export function SingUp() {
  return(
    <Container>
      <Background />
      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar suas notas e links</p>

        <h2>Crie sua conta</h2>
        <Input placeholder = 'Nome' icon={FiUser} />
        <Input placeholder = 'Email' icon={FiMail} />
        <Input placeholder = 'Senha' icon={FiLock} />
        <Button title='Cadastrar'/>       
        
        <Link to='/'>
          Voltar para login
        </Link>
      </Form>
    </Container>
  )
}