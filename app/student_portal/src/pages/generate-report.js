import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { useState } from 'react';
import CustomDropdownList from '../components/CustomDropDown/CustomDropdownList';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import Close from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default function Generate() {
  const [counter, setCounter] = useState(0);
  const likeDislikeMutate = (n) => {
    setCounter((oldCount) => oldCount + n);
  };
  const [generate, setgenerate] = useState(false);
  const [generateCancel, setGenerateCancel] = useState(false);
  const openGenerate = () => setgenerate(true);
  const closeGenerate = () => setgenerate(false);
  const openGenerateError = () => {
    setgenerate(false);
    setGenerateCancel(true);
  };
  const closeGenerateError = () => setGenerateCancel(false);

  console.log('inside generate');
  return (
    <Layout>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '4' }}></div>
        <div style={{ flex: '10' }}>
          <p className={styles.generatePageTitle}>
            Select the assessments to be included in the report
            <p className={styles.generatePageSubtitle}>
              The results of your CRA of each assessment will be included
            </p>
          </p>
        </div>
        <div style={{ flex: '1' }}>
          <Badge
            sx={{
              '& .MuiBadge-badge': {
                right: -20,
                top: 50,
                color: 'White',
                backgroundColor: '#1C5F9A',
                fontSize: 20,
                width: 35,
                height: 35,
                opacity: 1
              }
            }}
            badgeContent={counter}
          ></Badge>
        </div>
        <div style={{ flex: '1' }}>
          <button
            onClick={counter <= 0 ? openGenerateError : openGenerate}
            className={styles.btnGenerateReport}
          >
            Generate Report
          </button>
        </div>
      </div>

      <Modal open={generate} disableBackdropClick>
        <Box className={styles.customModal}>
          <Box sx={{ height: '57px', backgroundColor: '#363636' }}>
            <Close className={styles.customCloseIcon} onClick={closeGenerate} />
          </Box>
          <Box sx={{ my: '50px' }}>
            <p>Are you sure you would like to proceed?</p>
            <p>This action cannot be undone</p>
          </Box>

          <Box
            sx={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              maxWidth: '400px',
              ml: '234px'
            }}
          >
            <Link to='/'>
              <button className={styles.customModalButtonBlue}>Yes</button>
            </Link>
            <button
              className={styles.customModalButtonWhite}
              onClick={closeGenerate}
            >
              No
            </button>
          </Box>
        </Box>
      </Modal>
      <Dialog open={generateCancel} maxWidth='md' fullWidth={true}>
        <Box sx={{ height: '57px', backgroundColor: '#363636' }}>
          <Close
            className={styles.customCloseIcon}
            onClick={closeGenerateError}
          />
        </Box>
        <DialogTitle sx={{ fontWeight: '600', textAlign: 'center' }}>
          No Assessment Selected
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          <DialogContentText id='alert-dialog-description'>
            Please select at least one assessment to generate a report
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', marginBottom: '20px' }}>
          <Button
            onClick={closeGenerateError}
            variant='contained'
            sx={{ width: '100px' }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <Row>
        <CustomDropdownList
          counter={(n) => likeDislikeMutate(n)}
          title='Semester 1, 2022'
        />
        <CustomDropdownList
          counter={(n) => likeDislikeMutate(n)}
          title='Semester 2, 2022'
        />
      </Row>
    </Layout>
  );
}
