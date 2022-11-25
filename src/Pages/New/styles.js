import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header" 
  "content";

`
export const Form = styled.form`
  max-width: 550px;
  margin: 0 auto;

  >header{
    display: flex;
    justify-content: space-between;
    margin-block: 32px;
  }

  >textarea{
    width: 100%;
    resize: none;
    height:156px;
    
    padding: 16px;
    margin-bottom: 8px;

    border: none;
    border-radius: 10px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_100};

    ::placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_300};
  }
}
`