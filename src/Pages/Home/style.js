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
  grid-template-rows: 105px 80px auto 65px;

`

export const Brand = styled.div`
  grid-area: brand;
  
  display: flex;
  justify-content:center;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  border-bottom:1px solid ${({theme}) => theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.COLORS.ORANGE};
`
export const Menu =styled.nav`
  grid-area: menu;  
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  
  ul{
    display: grid;
    gap: 20px;
    text-align: center;

    margin-top: 32px;
  }
`
export const NewNote = styled.button`
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