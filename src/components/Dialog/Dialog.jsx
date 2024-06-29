import { useState, useEffect } from 'react';

import {
  Button,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';

function Dialog({ className, openDialog, handleOpenDialog }) {
  const [open, setOpen] = useState(openDialog);

  useEffect(() => {
    setOpen(openDialog);
  }, [openDialog]);

  const handleClose = () => {
    handleOpenDialog();
  };

  return (
    <MuiDialog id="main-modal-root" className={className}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ zIndex: 1500 }}
    >
      {/* <iframe src="https://www.facebook.com/events/1602208953655431/" width="90%" height="500px"></iframe> */}

      <DialogTitle id="alert-dialog-title"  color={'#3980f335'} fontWeight={700}>
        {"JERUVENTS"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" dir='rtl'>
          אתר זה סורק אטומטית אירועים המופיעים בדפי פייסבוק ציבוריים, ומציג אותם באופן נוח ומרוכז לנוחות הציבור, על כן אין אחריותנו על שום אירוע או מידע המופיע באתר זה, ועל כל אירוע מומלץ להיכנס לדף הרשמי ולקרוא את הפרטים
          <br></br>
          <br></br>
          חשוב לדעת - רבים מהאירועים המופיעים הינם חינמיים/בכניסה חופשית, אך אין לנו גישה למידע זה בכדי להציג אותו באתר, על כן מומלץ להיכנס לדף האירוע למידע על מחירים ולפרטים נוספים
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>סגור</Button>
      </DialogActions>
    </MuiDialog>
  );
}

export default Dialog;
