import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import RefreshIcon from "@mui/icons-material/Refresh";
import ActionTableButton from "../components/ActionTableButtons";

export default function CustomTable(props) {
    const [rotate, setRotate] = useState("");
    if (props.rowFormat === "generate") {
        return (
            <div className={styles.customTableBox}>
                <div className={styles.customTableHeader}>
                    <Row>
                        {props.col.map((c) => {
                            return (
                                <Col>
                                    <p className={styles.customTableHeaderP}>
                                        {c.headerName}
                                    </p>
                                </Col>
                            );
                        })}
                    </Row>
                    <hr className={styles.customHR}></hr>
                </div>
                <div className={styles.customTable}>
                    <TableContainer
                        sx={{
                            height: 310,
                        }}
                    >
                        <Table
                            sx={{
                                height: "max-content",
                            }}
                        >
                            <TableBody>
                                {props.row.map((r) => {
                                    return (
                                        <TableRow style={{ height: "172px" }}>
                                            <TableCell>{r.id}</TableCell>
                                            <TableCell>
                                                {r.achievement}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        );
    } else if (props.rowFormat === "view") {
        return (
            <div>
                <div className={styles.customTableHeader}>
                    <div style={{ display: "flex" }}>
                        {props.col.map((c) => {
                            return (
                                <div style={{ flex: "1" }}>
                                    <p className={styles.customTableHeaderP}>
                                        {c.headerName}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div style={{ display: "flex", marginLeft: "35px" }}>
                    <div style={{ display: "inline-block", width: "96%" }}>
                        <hr className={styles.customHR} />
                    </div>
                    <div>
                        <RefreshIcon
                            onClick={() => {
                                setRotate("spin 2s linear infinite");
                                setTimeout(() => {
                                    setRotate("");
                                }, 3000);
                            }}
                            sx={{
                                animation: rotate,
                                "@keyframes spin": {
                                    "0%": {
                                        transform: "rotate(360deg)",
                                    },
                                    "100%": {
                                        transform: "rotate(0deg)",
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
                <div className={styles.customTableView}>
                    <TableContainer
                        sx={{
                            height: 310,
                        }}
                    >
                        <Table
                            sx={{
                                height: "max-content",
                            }}
                        >
                            <TableBody>
                                {props.row.map((r) => {
                                    return (
                                        <TableRow style={{ height: "172px" }}>
                                            <TableCell>{r.id}</TableCell>
                                            <TableCell>{r.status}</TableCell>
                                            <TableCell>{r.date}</TableCell>
                                            <TableCell width="25%">
                                                <ActionTableButton
                                                    reportID={r.id}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        );
    } else {
        return "";
    }
}
