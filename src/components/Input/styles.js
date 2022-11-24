import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  gap:12px;

  padding-inline: 16px;
  margin-bottom: 8px;

  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.GRAY_100};

  >svg{
    font-size: 20px;
  }

  >input{
    width: 100%;
    height: 56px;

    background: none;
    border: none;
    color: ${({theme}) => theme.COLORS.GRAY_100};

    ::placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }
`