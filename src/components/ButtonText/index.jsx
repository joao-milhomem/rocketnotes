import { Container } from "./styles";

export function ButtonText({title, active, ...rest}) {
  return(
    <Container type="button" active = {active} {...rest}>
      {title}
    </Container>
  )
}