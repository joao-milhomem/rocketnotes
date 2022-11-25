import { Container,Form } from "./styles";
import {Header} from '../../components/Header'
import {ButtonText} from '../../components/ButtonText'
import {Input} from '../../components/Input'

export function New() {
  return (
    <Container>
      <Header /> 

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title='voltar' />
          </header>

          <Input placeholder='Título' />

          <textarea placeholder="Observações">

          </textarea>
        </Form>
      </main>
    </Container>
  )
}