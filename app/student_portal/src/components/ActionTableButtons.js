import { ButtonGroup } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import { EyeFill, ShareFill, CloudArrowDownFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Close from '@mui/icons-material/Close';

export default function ActionTableButton() {
    const [view, setView] = useState(false);
    const [download, setDownload] = useState(false);
    const [share, setShare] = useState(false);
    const [shareConfirm, setShareConfirm] = useState(false);
    // you can change the fucntion here if you need to do multiple fucntions
    const openView = () => setView(true);
    const closeView = () => setView(false);
    const openDownload = () => setDownload(true);
    const closeDownload = () => setDownload(false);
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
            <button onClick={openDownload} className={styles.btnLogo}>
                <CloudArrowDownFill />
            </button>
            Download
            <Modal open={download} disableBackdropClick>
                <Box className={styles.customModal}>
                    <Close className={styles.customCloseIcon} onClick={closeDownload} />
                    <h1>Download Report</h1>
                    <p>Do you want to Download this report?</p>
                    <button className={styles.customModalButtonBlue} onClick={closeDownload}>
                        OK
                    </button>
                    <button className={styles.customModalButtonWhite} onClick={closeDownload}>
                        Cancel
                    </button>
                </Box>
            </Modal>
            <button onClick={openShare} className={styles.btnLogo}>
                <ShareFill />
            </button>
            Share
            <Modal open={share} disableBackdropClick>
                <Box className={styles.customModal}>
                    <Close className={styles.customCloseIcon} onClick={closeShare} />
                    <h1>Share Report</h1>
                    <p>
                        Enter the email address(es) of the people you want to share the document
                        with.
                    </p>
                    <TextField
                        className={styles.customModalTextField}
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                    />
                    <Row></Row>
                    <button className={styles.customModalButtonBlue} onClick={openShareConfirm}>
                        Share
                    </button>
                </Box>
            </Modal>
            <Modal open={shareConfirm} disableBackdropClick>
                <Box className={styles.customModal}>
                    <Close className={styles.customCloseIcon} onClick={closeShareConfirm} />
                    <h1>Share Report</h1>
                    <p>
                        Report successfully shared! A confirmation email has been sent to your
                        email.
                    </p>
                    <button onClick={closeShareConfirm}>OK</button>
                </Box>
            </Modal>
        </ButtonGroup>
    );
}
