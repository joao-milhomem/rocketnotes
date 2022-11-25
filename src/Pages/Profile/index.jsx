import { Container, Form, Avatar} from "./styles";
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'
import {Button} from '../../components/Button'
import {Input} from '../../components/Input'

export function Profile(){
  return(
    <Container>
      <header>
        <a href="/"><FiArrowLeft/></a>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/joaomilhomem.png" alt="Foto de perfil do usuário" />

          <label htmlFor="file">
            <FiCamera />
            <input type="file" id="file" />
          </label>
        </Avatar>

        <Input icon={FiUser} placeholder = 'Nome' />
        <Input icon={FiMail} placeholder = 'Email'/>
        <Input icon={FiLock} placeholder = 'Senha atual'/>
        <Input icon={FiLock} placeholder = 'Nova senha'/>
        
        <Button title='Salvar ' />
      </Form>
    </Container>
  )
}