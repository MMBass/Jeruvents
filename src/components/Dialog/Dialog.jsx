import { useState, useEffect } from 'react';

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import T from './DialogI18N.js';

function MyDialog({ className, openDialog, handleOpenDialog }) {
  const [open, setOpen] = useState(openDialog);

  useEffect(() => {
    setOpen(openDialog);
  }, [openDialog]);

  const handleClose = () => {
    handleOpenDialog();
  };

  return (
    <Dialog id="main-modal-root" className={className}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ zIndex: 1500 }}
    >

      <DialogTitle id="alert-dialog-title"  color={'#3980f335'} fontWeight={700}>
        {"JERUVENTS"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" dir='rtl'>
          {T.INFO_P1}
          <br></br>
          <br></br>
          {T.INFO_P2}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{T.CLOSE}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default MyDialog;
