import { ButtonGroup } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import { EyeFill, ShareFill, CloudArrowDownFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
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
  const closeView = () => setView(false);
  const openShare = () => setShare(true);
  const closeShare = () => setShare(false);
  const openShareConfirm = () => {
    setShare(false);
    setShareConfirm(true);
  };
  const closeShareConfirm = () => setShareConfirm(false);
  return (
    <ButtonGroup>
      <button onClick={openView} className={styles.btnLogo}>
        <EyeFill />
      </button>
      View
      <Modal open={view} disableBackdropClick>
        <Box className={styles.customModal}>
          <Close className={styles.customCloseIcon} onClick={closeView} />
          <p>Insert PDF data here</p>
        </Box>
      </Modal>
      <button className={styles.btnLogo}>
        <CloudArrowDownFill />
      </button>
      Download
      <button onClick={openShare} className={styles.btnLogo}>
        <ShareFill />
      </button>
      Share
      <Dialog open={shareConfirm} onClose={closeShare}>
        <Box sx={{ height: '57px', backgroundColor: '#363636' }}>
          <Close className={styles.customCloseIcon} onClick={closeShare} />
        </Box>
        <DialogTitle sx={{ fontWeight: '600', textAlign: 'center' }}>
          Share Report
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          <DialogContentText id='alert-dialog-description'>
            Report successfully shared! A confirmation email has been sent to
            your email.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button
            onClick={closeShareConfirm}
            variant='contained'
            sx={{ width: '100px' }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={share} onClose={closeShare}>
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
    </ButtonGroup>
  );
}
