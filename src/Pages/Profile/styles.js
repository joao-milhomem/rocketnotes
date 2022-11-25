import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  header{
    width: 100%;
    height: 144px;

    display: flex;
    align-items: center;

    padding: 0 124px;
    background-color: ${(props) => props.theme.COLORS.BACKGROUND_900};

    svg{
      color: ${(props) => props.theme.COLORS.GRAY_100};
      font-size: 24px;
    }
  }
`
export const Form = styled.form`
  display: grid;

  max-width: 340px;
  margin: -80px auto 0;

  >div:nth-last-child(3){
    margin-top: 24px;
  }
`
export const Avatar = styled.div`

  width: 150px;
  margin: 0 auto 24px;

  display: flex;
  align-items: flex-end;
  

  img{
    width: 100%;
    border-radius: 50%;

  }

  label{

    display: flex;
    align-items: center;
    margin-left: -35px;
    margin-bottom: 7px;

    background-color: ${({theme}) => theme.COLORS.ORANGE};
    padding: 7px;
    border-radius: 50%;

    svg{
      cursor: pointer;
      font-size: 20px;

      color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    }

    input{
      display: none;
    }
  }
`