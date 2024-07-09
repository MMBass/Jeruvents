
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import constants from '@/constants';

function Footer({ className }) {

  const callScan = () => {
    fetch(`${constants.prodServerUri}/scan`)
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
            {constants.appTitle.toUpperCase()}
          </Typography></Divider>

        </Grid>

      </Grid>
    </div>
  );
}

export default Footer;
