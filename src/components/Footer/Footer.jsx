import {
  Grid,
  Typography,
  Divider
} from '@mui/material';

function Footer({ className }) {
  
  const serverUri = 'https://eventim-backend.vercel.app';
  // const serverUri = 'http://localhost:5000';
  const callScan = () => {
    fetch(`${serverUri}/scan`)
  }

  return (
    <div id="FOOTER" className={className}>
      <Grid container rowSpacing={6} columnSpacing={2}>

        <Grid item xs={12} sm={12}>
          <Divider variant='middle' onClick={() => callScan()}><Typography
            variant="h6"
            noWrap
            component="h2"
            fontWeight={700}
            color={'#3980f38d'}
            padding={'20px'}
          >
            JERUVENTS
          </Typography></Divider>

        </Grid>

      </Grid>
    </div>
  );
}

export default Footer;
