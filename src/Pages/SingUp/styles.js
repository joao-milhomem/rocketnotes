import styled from "styled-components";
import BackgroundIMG from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: stretch; 
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  place-content: center;
  
  padding: 0 136px;

  >h1{
    font-size: 48px;
    color:${({theme}) => theme.COLORS.ORANGE};
  }

  h2{
    font-size: 24px;
    margin-top: 84px;
    margin-bottom: 24px;
    text-align: center;
  }

  p{
    font-size: 14px;
    color:${({theme}) => theme.COLORS.GRAY_100};
  }

  >button:last-child{
    margin-top: 84px;
    color:${({theme}) => theme.COLORS.ORANGE};   
  }

  a{
  align-self: center;
  margin-top: 80px;
  text-decoration: none;
  color: ${({theme}) => theme.COLORS.ORANGE};
 }
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: url(${BackgroundIMG}) no-repeat center center;
  background-size: cover;
  filter: opacity(.5);
`