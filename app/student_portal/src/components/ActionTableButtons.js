import { ButtonGroup } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import { EyeFill, ShareFill, CloudArrowDownFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Close from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default function ActionTableButton() {
  const [view, setView] = useState(false);
  const [share, setShare] = useState(false);
  const [shareConfirm, setShareConfirm] = useState(false);
  // you can change the function here if you need to do multiple fucntions
  const openView = () => setView(true);
  const openShare = () => setShare(true);
  const closeShare = () => setShare(false);
  const openShareConfirm = () => {
    setShare(false);
    setShareConfirm(true);
  };
  const closeShareConfirm = () => setShareConfirm(false);
  return (
    <>
      <ButtonGroup>
        <button onClick={openView} className={styles.btnLogo}>
          <EyeFill /> &nbsp; View
        </button>
        &nbsp; &nbsp;
        <button onClick={openShare} className={styles.btnLogo}>
          <ShareFill />
          &nbsp; Share
        </button>
      </ButtonGroup>

      {/* Share confirmation modal */}
      <Dialog
        open={shareConfirm}
        onClose={closeShareConfirm}
        maxWidth='md'
        fullWidth={true}
      >
        <Box sx={{ height: '57px', backgroundColor: '#363636' }}>
          <Close
            className={styles.customCloseIcon}
            onClick={closeShareConfirm}
          />
        </Box>
        <DialogTitle sx={{ fontWeight: '600', textAlign: 'center' }}>
          Report Shared
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          <DialogContentText id='alert-dialog-description'>
            Report successfully shared! A confirmation email has been sent to
            your email.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', marginBottom: '20px' }}>
          <Button
            onClick={closeShareConfirm}
            variant='contained'
            sx={{ width: '100px' }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      {/* Share Modal */}
      <Dialog open={share} onClose={closeShare} maxWidth='md' fullWidth={true}>
        <Box sx={{ height: '57px', backgroundColor: '#363636' }}>
          <Close className={styles.customCloseIcon} onClick={closeShare} />
        </Box>
        <DialogTitle sx={{ fontWeight: '600' }}>Share Report</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the email address(es) of the people you want to share the
            document with.
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Email Address'
            type='email'
            fullWidth
            variant='standard'
          />
        </DialogContent>
        <DialogActions className={styles.MuiDialogActions}>
          <Button onClick={openShareConfirm} variant='contained'>
            Share
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
