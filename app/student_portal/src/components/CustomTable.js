import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Row, Col } from 'react-bootstrap';
import styles from '../styles/Home.module.css';

export default function CustomTable(props) {
    return (
        <Box
            sx={{
                '& .MuiDataGrid-columnHeaders': { display: 'none' },
                '& .MuiDataGrid-virtualScroller': { marginTop: '0!important' },
                overflow: 'hidden',
                height: '400px',
            }}
        >
            <div className={styles.customTableHeader}>
                <Row>
                    {props.col.map((c) => {
                        return (
                            <Col>
                                <p className={styles.customTableHeaderP}>{c.headerName}</p>
                            </Col>
                        );
                    })}
                </Row>
                <hr className={styles.customHR}></hr>
            </div>
            <DataGrid
                className={styles.customTable}
                rows={props.row}
                columns={props.col}
                hideFooter={true}
                rowsPerPageOptions={[]}
                rowHeight={172}
                disableColumnMenu
                disableColumnFilter
                disableColumnSelector
            />
        </Box>
    );
}
