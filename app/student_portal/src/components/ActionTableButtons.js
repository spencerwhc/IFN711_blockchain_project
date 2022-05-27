import { ButtonGroup } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { EyeFill, ShareFill } from "react-bootstrap-icons";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Close from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";

import { Link } from "react-router-dom";
import { shareReport } from "../service/api";

export default function ActionTableButton({ reportID }) {
    const [share, setShare] = useState(false);
    const [shareConfirm, setShareConfirm] = useState(false);
    const [receiver, setReceiver] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState();

    const openShare = () => setShare(true);
    const closeShare = () => setShare(false);
    const openShareConfirm = () => {
        setShare(false);
        setShareConfirm(true);
    };

    const onShare = async () => {
        try {
            setLoading(true);
            const result = await shareReport({ email: receiver });
            const { data } = result;

            console.log(data);
        } catch (error) {
            setMessage("Sorry, failed to share report. Please try again later");
            console.log(error);
        } finally {
            setLoading(false);
            openShareConfirm();
        }
    };
    const closeShareConfirm = () => setShareConfirm(false);
    return (
        <>
            <ButtonGroup className={styles.btnLogo}>
                <Link to={`/report/${reportID}`} target="_blank">
                    <button className={styles.btnLogo}>
                        <EyeFill /> &nbsp; View
                    </button>
                </Link>
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
                maxWidth="md"
                fullWidth={true}
            >
                <Box sx={{ height: "57px", backgroundColor: "#363636" }}>
                    <Close
                        className={styles.customCloseIcon}
                        onClick={closeShareConfirm}
                    />
                </Box>
                <DialogTitle sx={{ fontWeight: "600", textAlign: "center" }}>
                    {!!message
                        ? "Failed to share"
                        : "Successfully shared the report"}
                </DialogTitle>
                <DialogContent sx={{ textAlign: "center" }}>
                    <DialogContentText id="alert-dialog-description">
                        {!!message
                            ? message
                            : "Report successfully shared! A confirmation email has been sent to your email"}
                    </DialogContentText>
                </DialogContent>
                <DialogActions
                    sx={{ justifyContent: "center", marginBottom: "20px" }}
                >
                    <Button
                        onClick={closeShareConfirm}
                        variant="contained"
                        sx={{ width: "100px" }}
                    >
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
            {/* Share Modal */}
            <Dialog
                open={share}
                onClose={closeShare}
                maxWidth="md"
                fullWidth={true}
            >
                <Box sx={{ height: "57px", backgroundColor: "#363636" }}>
                    <Close
                        className={styles.customCloseIcon}
                        onClick={closeShare}
                    />
                </Box>
                <DialogTitle sx={{ fontWeight: "600" }}>
                    Share Report
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter the email address(es) of the people you want to
                        share the document with.
                    </DialogContentText>
                    <TextField
                        required
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setReceiver(e.target.value)}
                    />
                </DialogContent>
                <DialogActions className={styles.MuiDialogActions}>
                    <Button onClick={onShare} variant="contained">
                        {loading ? (
                            <CircularProgress color="inherit" size={18} />
                        ) : (
                            "Share"
                        )}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
