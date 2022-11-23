import { Container, Profile, Logout } from "./styles";
import {FiPower} from 'react-icons/fi'

export function Header() {
  return(
    <Container>

      <Profile>
        <img src="https://github.com/joaomilhomem.png" alt="Foto de perfil do usuário" />
        <div>
          <span>Bem-vindo</span>
          <strong>João Milhomem</strong>
        </div>
      </Profile>

      <Logout>
      <FiPower/>
      </Logout>
    </Container>
  )
}