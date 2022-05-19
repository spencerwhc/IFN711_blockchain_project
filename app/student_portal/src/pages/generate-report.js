import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import CustomDropdownList from '../components/CustomDropdownList';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Close from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

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
  return (
    <>
      <Layout>
        <Row>
          <Col md lg={2}></Col>
          <Col md lg={8}>
            <p className={styles.generatePageTitle}>
              to be included in the report
            </p>
            <p className={styles.generatePageTitle}>
              The results of your CRA of each assessment will be included
            </p>
          </Col>
          <Col md lg={1}>
            <button
              onClick={counter <= 0 ? openGenerateError : openGenerate}
              className={styles.btnGenerateReport}
            >
              View Report &nbsp;
              <Badge badgeContent={counter}>
                <ShoppingCartIcon color='white' />
              </Badge>
            </button>
          </Col>
        </Row>
        <Modal open={generate} disableBackdropClick>
          <Box className={styles.customModal}>
            <Close className={styles.customCloseIcon} onClick={closeGenerate} />
            <Row>
              <p>
                Are you sure you would like to proceed? This action cannot be
                undone.
              </p>
            </Row>
            <Link to='/view-report'>
              <button className={styles.customModalButtonBlue}>Yes</button>
            </Link>
            <button
              className={styles.customModalButtonWhite}
              onClick={closeGenerate}
            >
              No
            </button>
          </Box>
        </Modal>
        <Modal open={generateCancel} disableBackdropClick>
          <Box className={styles.customModal}>
            <Close
              className={styles.customCloseIcon}
              onClick={closeGenerateError}
            />
            <Row>
              <h1>No Report Generated</h1>
              <p>
                No assessments have been selected. Please select at least one to
                generate a report.
              </p>
            </Row>
            <button
              className={styles.customModalButtonBlue}
              onClick={closeGenerateError}
            >
              Ok
            </button>
          </Box>
        </Modal>
        <Row>
          <CustomDropdownList
            counter={(n) => likeDislikeMutate(n)}
            title='Semester 1, 2022'
          />
          <CustomDropdownList
            counter={(n) => likeDislikeMutate(n)}
            title='Semester 2, 2022'
          />
          <CustomDropdownList
            counter={(n) => likeDislikeMutate(n)}
            title='Semester 1, 2022'
          />
        </Row>
      </Layout>
    </>
  );
}
