import { useContext } from 'react';
import { DrawerContext } from '@context/DrawerContext';

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

function MyDrawer({ className }) {
  const drawerContext = useContext(DrawerContext);

  return (
    <Drawer
      className={className}
      anchor={drawerContext.anchor}
      open={drawerContext.open}
      variant={drawerContext.permanent}
      onClose={()=>{drawerContext.toggleDrawer(false)}}
    >
      <Box
        className='drawer-layout'
        sx={{ width: drawerContext.anchor === 'top' || drawerContext.anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={()=>{drawerContext.toggleDrawer(false)}}
      >
        <drawerContext.child>
        </drawerContext.child>
      </Box>
    </Drawer>
  );
}

export default MyDrawer;
