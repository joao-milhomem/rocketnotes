import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
  "brand header"
  "menu search"
  "menu content"
  "newNote content";
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 100px auto 64px;

`

export const Brand = styled.div`
  grid-area: brand;
  
  display: flex;
  justify-content:center;
  align-items: center;

  color: ${({theme}) => theme.COLORS.ORANGE};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  border-bottom:1px solid ${({theme}) => theme.COLORS.BACKGROUND_800};

  >h1{
    font-size: 24px;
  }
`

export const Menu =styled.nav`

  grid-area: menu;  
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  
  ul{
    display: grid;
    gap: 24px;
    text-align: center;

    padding-top: 64px;
  }
`
export const Search = styled.div`
  grid-area: search;
  padding: 32px 64px ;
  margin-bottom: 8px;
`
export const Content = styled.main`
  grid-area: content;
  padding: 0 64px ;
  overflow-y: auto;
`
export const NewNote = styled(Link)`
  grid-area: newNote;

  border: none;
  background-color: ${({theme}) => theme.COLORS.ORANGE};
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-size: 18px;

  >svg{
    font-size: 20px;
  }
`

