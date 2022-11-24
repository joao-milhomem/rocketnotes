import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 24px;
  margin-top: 16px;
  
  text-align: left;
  color: ${({theme})=>theme.COLORS.WHITE};

  border: none;
  border-radius: 10px;
  background-color: ${({theme})=>theme.COLORS.BACKGROUND_700};

  h1{
    margin-bottom: 18px;
    font-size: 20px;
  }

  
`