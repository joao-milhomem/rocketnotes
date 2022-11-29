import { Container,Form } from "./styles";

import {Header} from '../../components/Header'
import {ButtonText} from '../../components/ButtonText'
import {Input} from '../../components/Input'
import {TextArea} from '../../components/TextArea'
import {Links} from '../../components/Links'
import {Section} from '../../components/Section'
import {Button} from '../../components/Button'
import { Link } from "react-router-dom";

export function New() {
  return (
    <Container>

      <Header /> 

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>

            <Link to ='/'>
              voltar
            </Link>
          </header>

          <Input placeholder='Título' />

          <TextArea placeholder = 'Descreva aqui'/>

          <Section title='Links úteis'>
            <Links value='facebook.com.br' />
            <Links placeholder = 'Novo link' newLink  />
          </Section>

          <Section title='Marcadores'>
            <div className="tags">
              <Links value='react'   />
              <Links placeholder='Nova tag' newLink  />
            </div>
          </Section>
          <Button title='Salvar' />
        </Form>
      </main>
    </Container>
  )
}