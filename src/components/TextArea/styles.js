import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;
  resize: none;

  padding: 16px;
  margin-bottom: 8px;
  
  border-radius: 10px;
  border: none;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.GRAY_100};

  ::placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
`