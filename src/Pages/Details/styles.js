import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";
  
  width: 100%;
  height: 100vh;

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  padding: 32px 0;
  display: flex;
  flex-direction: column;

  >button:first-child{
    text-align: end;
  }

  >h1{
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  p{
    text-align: justify;
    font-size: 16px;
    margin-top: 36px;

  }
`