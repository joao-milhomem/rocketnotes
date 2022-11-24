import { Container, Brand, Menu, NewNote, Search, Content} from "./style";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import {FiPlus, FiSearch} from 'react-icons/fi'
import { Note } from "../../components/Note";
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

      <Search>
        <Input icon={FiSearch} placeholder='Pesquise por uma nota'/>
      </Search>

      <Content>
        <Section title='Minhas notas'>

      <main>
        <Note data={{title: "Introdução ao react",
            tags: [{
              id:'1',
              name:'react'
            }, 
            {
              id:'2',
              name:'props'
            }]}}/>

        <Note data={{title: "Callback e promisses JS",
            tags: [{
              id:'1',
              name:'react'
          }]}}/>
      
        <Note data={{title: "Introdução ao react",
            tags: [{
              id:'1',
              name:'react'
            }, 
            {
              id:'2',
              name:'props'
          }]}}/>

        <Note data={{title: "Callback e promisses JS",
            tags: [{
              id:1,
              name:'react'
          }]}}/>
      </main>
          
        </Section>
      </Content>

      <NewNote>
        <FiPlus/> 
        <span>Nova nota</span>
      </NewNote>

    </Container>
  )
}