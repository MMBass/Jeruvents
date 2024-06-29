import { styled } from '@mui/material/styles';
import { theme } from '@/theme';
import Header from './Header';

const StyledHeader = styled(Header)`
  background-color: rgba(255, 255, 255, 0.8);
  color: #397ff3;
  border-style: solid;
  border-color: rgb(232, 234, 238);
  border-width: 0px 0px thin;
  box-shadow: unset;

  h2{
    margin-inline-start: 16px;
    font-weight: 700;
    
    @media (max-width: 600px) {
      margin-inline-start: 8px;
    }
  }

  button{
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0px;
    margin: 0px 0px 0px 1px;
    margin-inline-start: 16px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    text-align: center;
    flex: 0 0 auto;
    font-size: 1rem;
    padding: 8px;
    overflow: visible;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    height: 34px;
    width: 34px;
    border: 1px solid rgb(217, 222, 226);
    border-radius: 12px;
    color: rgb(0, 115, 230);
    background-color: rgba(232, 235, 237, 0.1);
    box-shadow: rgba(246, 247, 248, 0.4) 0px 2px 0px inset, rgba(232, 234, 238, 0.5) 0px -1.5px 0px inset, rgba(223, 226, 231, 0.5) 0px 1px 2px 0px;

    @media (max-width: 600px) {
      margin-inline-start: 8px;
    }
    
    svg{
      color: #397ff3;
      font-size: large;
    }
  }

  .MuiBox-root{
    justify-content: flex-end;
  }

`;

export default StyledHeader;