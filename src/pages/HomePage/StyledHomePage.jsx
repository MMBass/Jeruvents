import { styled } from '@mui/material/styles';
import HomePage from './HomePage';

const StyledHomePage = styled(HomePage)`
  padding: 16px;

  .home-top-cover{
    text-align: center;
    align-content: center;
    height: 65vh;
    padding: 20px;

    @media (max-width: 600px) {
      font-family: system-ui;
      padding-bottom: 0;
    }

    /* background: rgb(0,146,171);
    background: linear-gradient(180deg, rgb(0 146 171 / 35%) 30%, rgba(255, 255, 255, 1) 90%); */

    h1, h2 {
      font-size: 90px;
      line-height: 1;
      @media (max-width: 600px) {
        font-size: 45px;
      }
    }
    
    .h1-2, .h1-4{
      margin-top: -40px;
      font-size: 120px;
      color: #397ff3;
      @media (max-width: 600px) {
        font-size: 80px;
        letter-spacing: -5px;
        margin-top: -15px;
      }
    }
    .h1-1{
      margin-bottom: -27px;
      color: #3980f335;
      @media (max-width: 600px) {
        margin-bottom: 0px;
        letter-spacing: -3px;
        font-size: 53px;
      }
    }
    .h1-3{
      margin-top: -40px;
      @media (max-width: 600px) {
        font-size: 55px;
        letter-spacing: -1px;
        margin-top: -10px;
      }
    }
  }
  
  .card-event{
    @media (min-width: 600px) {
      max-height: 165px;
    }

    @media (max-width: 600px) {
      padding: 10px;
    }

    box-shadow: rgb(255, 255, 255) 0px 2px 0px inset, rgba(232, 234, 238, 0.3) 0px -2px 0px inset, rgba(223, 226, 231, 0.5) 0px 1px 2px 0px;

    color: rgb(26, 30, 35);
    border-radius: 12px;
    border: 1px solid rgb(232, 234, 238);
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    background: linear-gradient(to right bottom, rgba(235, 245, 255, 0.3) 25%, rgba(246, 247, 248, 0.2) 100%);

    a{
      span{
        margin-inline-start: 8px;
        margin-inline-end: 5px;
      }
  
      background-color: #3980f320;
      font-weight: 700;
    }

    img{
      height: fit-content;
      max-width: 200px;
      max-height: 160px;
      aspect-ratio: 116 / 80;
      opacity: 0.6;
      border-radius: 12px;
      border: 1px solid #3980f368;
      background-color: rgb(235, 245, 255);
      box-shadow: rgba(0, 115, 230, 0.1) 0px 0px 0px 2px, rgba(234, 237, 241, 0.3) 0px 2px 12px 0px inset;
    }
  }
`;

export default StyledHomePage;