import { useEffect, useContext, useState } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { DrawerContext } from '@context/DrawerContext';
import { LoadersContext } from '@context/LoadersContext';
import { BannersContext } from '@context/BannersContext';

import { default as Header } from '@components/Header/StyledHeader';
import { default as Layout } from '@components/Layout/StyledLayout';
import { default as Footer } from '@components/Footer/StyledFooter';
import { default as Drawer } from '@components/Drawer/StyledDrawer';
import { default as Dialog } from '@components/Dialog/StyledDialog';

import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import LinearProgress from '@mui/material/LinearProgress'
import CircularProgress from '@mui/material/CircularProgress'
import Snackbar from '@mui/material/Snackbar'

import HomePage from '@pages/HomePage/StyledHomePage';
import NoMatchPage from '@pages/NoMatchPage/StyledNoMatchPage';

function App({ className }) {
  const drawerContext = useContext(DrawerContext);
  const loadersContext = useContext(LoadersContext);
  const bannersContext = useContext(BannersContext);

  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseSnackbar = (name) => {
    bannersContext.toggleBanner(name);
  }

  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  }

  return (
    <div className={className}>
      <Router>
        <Header className="header" handleOpenDialog={handleOpenDialog}></Header>
        {(bannersContext.main.open) &&
          <Alert severity="warning">
            <AlertTitle>{bannersContext.main.title}</AlertTitle>
            {bannersContext.main.message}
          </Alert>
          // Use in specific components, or remove
        }
        <Layout>
          <Routes>
            <Route path={"/"} element={<HomePage className={'page'} />} />
            <Route path="*" element={<NoMatchPage className={'page'} />} />
          </Routes>
        </Layout>

        {/*Dynamic global elements*/}
        {(drawerContext.open && drawerContext.child) &&
          <Drawer className="drawer"></Drawer>
        }
        {(loadersContext.main.open) &&
          <LinearProgress color={loadersContext.main.color || "primary"} />
        }
        {(loadersContext.circular.open) &&
          <CircularProgress color={loadersContext.main.color || "primary"} />
          // Use in specific component, or remove
        }
        {(bannersContext.snackbar.open) &&
          <Snackbar open={bannersContext.snackbar.open} autoHideDuration={6000} onClose={() => { }}>
            <Alert onClose={() => { handleCloseSnackbar('snackbar') }} severity={bannersContext.snackbar.severity} sx={{ width: '100%' }}>
              {bannersContext.snackbar.message}
            </Alert>
          </Snackbar>
        }
        <Dialog openDialog={openDialog} handleOpenDialog={handleOpenDialog}></Dialog>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;