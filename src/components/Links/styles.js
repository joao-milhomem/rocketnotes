import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 56px;
  margin-bottom: 8px;
  padding-inline:12px;
  display: flex;
  
  border-radius: 10px;
  background-color: ${({theme,newLink}) => newLink ? 'transparent' : theme.COLORS.BACKGROUND_900};
  border: ${({theme,newLink}) => newLink ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  >input{
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    color: ${({theme}) =>theme.COLORS.WHITE}};

    ::placeholder{
      color: ${({theme}) =>theme.COLORS.GRAY_300};
    }
  

  button{
    background: none;
    border-radius: 10px;
    border: none;

    svg{
      color: ${({theme,newLink}) => newLink ? theme.COLORS.ORANGE : theme.COLORS.RED};
      font-size:24px;
    }
  }

  
`