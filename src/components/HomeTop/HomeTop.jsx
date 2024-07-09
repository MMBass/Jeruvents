
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import constants from '@/constants';
import T from "./HomeTopI18n";

function HomeTop({ className }) {
  return (
    <Grid className={className} container spacing={1}>
      <Grid item xs={12} md={12} className='home-top-text'>
        <Typography className='h1-1' component="h1" variant="h3" fontWeight={700}>{constants.appTitle.toUpperCase()}</Typography>
        <Typography className='h1-2' component="h1" variant="h3" fontWeight={700}>{T.H1_P1}</Typography>
        <Typography className='h1-3' component="h1" variant="h3" color="#dfe2e7" fontWeight={700}>{T.H1_P2}</Typography>
        <Typography className='h1-4' component="h1" variant="h3" fontWeight={700}>{T.H1_P3}<KeyboardDoubleArrowDownIcon sx={{
          fontSize: '65px',
          color: '#dfe2e7'
        }}></KeyboardDoubleArrowDownIcon></Typography>
      </Grid>

    </Grid>
  );
}

export default HomeTop;