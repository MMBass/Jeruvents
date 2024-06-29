import { styled } from '@mui/material/styles';
import Drawer from './Drawer';

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: rgba(255, 255, 255);
    color: #397ff3;
    border-radius: 10px 0px 0px 10px;
    border: 1px solid rgb(232, 234, 238);
  }

  svg{
    color: #397ff3;
  }

  a{
    color: #397ff3;
    text-decoration: none;
  }
`;

export default StyledDrawer;