import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from '../../components/Button'
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import {ButtonText } from '../../components/ButtonText'
export function Details() {
  return (
    <Container>
      <Header/>
      
      <main>
        <Content>
          <ButtonText title='Exluir nota'/>
          
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque architecto modi obcaecati ratione consequatur animi, quidem et recusandae illo voluptatem assumenda incidunt! Atque fugiat nihil facere veniam adipisci reiciendis alias.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, quia. Sequi minus labore distinctio maxime corrupti quos nostrum necessitatibus, nisi similique illum! Excepturi voluptatum blanditiis inventore consectetur cumque tempora harum.
          </p>
          <Section title='Links úteis'>
            <ul>
              <li>
                <a href='https://www.linkedin.com/in/in-younsey'>Linkedin</a>
              </li>

              <li>
                <a href='https://www.linkedin.com/in/in-younsey'>Instagram</a>
              </li>
            </ul>
          </Section>

          <Section title='Marcadores'>
            <Tag title='node' />
            <Tag title='react' />
            <Tag title= 'express'/>
          </Section>
          
          <Button title='Salvar' loading />
        </Content>
      </main>
    </Container>
  )
}