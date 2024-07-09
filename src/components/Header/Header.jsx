import { useContext } from 'react';

// import DragHandleIcon from '@mui/icons-material/DragHandle';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { default as LocationFilters } from '../LoactionFilters/StyledLoactionFilters';

import { DrawerContext } from '@context/DrawerContext';
import constants from '@/constants';

const Header = ({ className, handleOpenDialog }) => {
  const drawerContext = useContext(DrawerContext);

  const handleOpenFiltersMenu = () => {
    drawerContext.toggleDrawer(true, 'right', 'temporary', LocationFilters);
  };

  const handleOpenInfoDialog = () => {
    handleOpenDialog();
  };

  return (
    <AppBar position="sticky" className={className}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <IconButton
            size="large"
            aria-label="pages"
            aria-controls="filters"
            aria-haspopup="true"
            onClick={handleOpenFiltersMenu}
            color="inherit"
          >
            <FilterAltIcon />
          </IconButton>

          <IconButton
            size="large"
            aria-label="pages"
            aria-controls="info"
            aria-haspopup="true"
            onClick={handleOpenInfoDialog}
            color="inherit"
          >
            <InfoOutlinedIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="h2"
            color={'#3980f335'}
            sx={{ mr: 2, display: 'flex' }}
          >
            {constants.appTitle.toUpperCase()}
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;