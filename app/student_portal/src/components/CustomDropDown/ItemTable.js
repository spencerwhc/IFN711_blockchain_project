import { ButtonGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomTable from '../CustomTable';
import styles from '../../styles/Home.module.css';
import Checkbox from '@mui/material/Checkbox';

export default function ItemTable(props) {
    const [tableData, setTableData] = useState([]);
    const [clicked1, setClicked1] = useState(true);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);
    const columnDefs = [
        {
            headerName: 'Criteria',
            field: 'id',
        },
        {
            headerName: 'Achievement',
            field: 'achievement',
        },
    ];
    const rowData = [
        {
            id: 'Introduction (10%)',
            achievement:
                'Background of the Industry/partner and the problem/ opportunity proposed to be addressed is described precisely with comprehensive but succinct content; The anticipated results and outcomes are clearly stated, illustrating how they will impact diverse stakeholders.',
        },
        {
            id: 'Project Management Activities & Team Contracts (25%)',
            achievement:
                'An appropriate PM approach is adopted clearly along with some justification and alignment for the given scope and deliverables; Most of the key stakeholders for the project are identified and their involvement in the project is clearly defined; A clear and appropriate communication plan is provided with most detail included and sound justification included; Most potential risks and ethical issues have been acknowledged and addressed; A team contract is included with all team members’ Skills Lists & Signatures; Completed Industry partner engagement document and a team contract is included simple operating guidelines for all team members level member’s Skills, planned contributions but no signatures',
        },
        {
            id: 'Scope,Deliverables,Solution,Delivery & Implmentation Assignment (50%)',
            achievement:
                'Background of the Industry/partner and the problem/ opportunity proposed to be addressed is described precisely with comprehensive but succinct content; The anticipated results and outcomes are clearly stated, illustrating how they will impact diverse stakeholders.',
        },
    ];
    const rowData1 = [
        {
            id: 'Introduction (20%)',
            achievement:
                'Background of the Industry/partner and the problem/ opportunity proposed to be addressed is described precisely with comprehensive but succinct content; The anticipated results and outcomes are clearly stated, illustrating how they will impact diverse stakeholders.',
        },
        {
            id: 'Project Management (10%)',
            achievement:
                'Background of the Industry/partner and the problem/ opportunity proposed to be addressed is described precisely with comprehensive but succinct content; The anticipated results and outcomes are clearly stated, illustrating how they will impact diverse stakeholders.',
        },
        {
            id: 'Final Assignment (10%)',
            achievement:
                'Background of the Industry/partner and the problem/ opportunity proposed to be addressed is described precisely with comprehensive but succinct content; The anticipated results and outcomes are clearly stated, illustrating how they will impact diverse stakeholders.',
        },
    ];
    const rowData2 = [
        {
            id: 'Introduction (30%)',
            achievement:
                'Background of the Industry/partner and the problem/ opportunity proposed to be addressed is described precisely with comprehensive but succinct content; The anticipated results and outcomes are clearly stated, illustrating how they will impact diverse stakeholders.',
        },
        {
            id: 'Project Management Activities & Team Contracts (25%)',
            achievement:
                'Background of the Industry/partner and the problem/ opportunity proposed to be addressed is described precisely with comprehensive but succinct content; The anticipated results and outcomes are clearly stated, illustrating how they will impact diverse stakeholders.',
        },
        {
            id: 'Scope,Deliverables,Solution,Delivery & Implmentation Assignment (50%)',
            achievement:
                'An appropriate PM approach is adopted clearly along with some justification and alignment for the given scope and deliverables; Most of the key stakeholders for the project are identified and their involvement in the project is clearly defined; A clear and appropriate communication plan is provided with most detail included and sound justification included; Most potential risks and ethical issues have been acknowledged and addressed; A team contract is included with all team members’ Skills Lists & Signatures; Completed Industry partner engagement document and a team contract is included simple operating guidelines for all team members level member’s Skills, planned contributions but no signatures',
        },
    ];
    useEffect(() => {
        setTableData(rowData);
    }, []);
    return (
        <div style={props.style} className={props.className}>
            <ButtonGroup style={{ width: '100%' }}>
                <div
                    className={
                        clicked1
                            ? styles.btnItemTableContainerBlue
                            : styles.btnItemTableContainerWhite
                    }
                >
                    <button
                        style={{ color: clicked1 ? 'White' : 'Black' }}
                        className={styles.btnItemTable}
                        onClick={() => {
                            setClicked1(true);
                            setClicked2(false);
                            setClicked3(false);
                            setTableData(rowData);
                        }}
                    >
                        Project Plan
                    </button>
                    <Checkbox
                        style={{ color: clicked1 ? 'White' : 'Black' }}
                        onChange={(e) => {
                            if (e.target.checked) {
                                props.counter(1);
                            } else {
                                props.counter(-1);
                            }
                        }}
                    />
                </div>
                <div
                    className={
                        clicked2
                            ? styles.btnItemTableContainerBlue
                            : styles.btnItemTableContainerWhite
                    }
                >
                    <button
                        style={{ color: clicked2 ? 'White' : 'Black' }}
                        className={styles.btnItemTable}
                        onClick={() => {
                            setClicked1(false);
                            setClicked2(true);
                            setClicked3(false);
                            setTableData(rowData1);
                        }}
                    >
                        Reflection Assessment
                    </button>
                    <Checkbox
                        style={{ color: clicked2 ? 'White' : 'Black' }}
                        onChange={(e) => {
                            if (e.target.checked) {
                                props.counter(1);
                            } else {
                                props.counter(-1);
                            }
                        }}
                    />
                </div>
                <div
                    className={
                        clicked3
                            ? styles.btnItemTableContainerBlue
                            : styles.btnItemTableContainerWhite
                    }
                >
                    <button
                        style={{ color: clicked3 ? 'White' : 'Black' }}
                        className={styles.btnItemTable}
                        onClick={() => {
                            setClicked1(false);
                            setClicked2(false);
                            setClicked3(true);
                            setTableData(rowData2);
                        }}
                    >
                        Project Report
                    </button>
                    <Checkbox
                        style={{ color: clicked3 ? 'White' : 'Black' }}
                        onChange={(e) => {
                            if (e.target.checked) {
                                props.counter(1);
                            } else {
                                props.counter(-1);
                            }
                        }}
                    />
                </div>
            </ButtonGroup>
            <CustomTable rowFormat={'generate'} col={columnDefs} row={tableData}></CustomTable>
        </div>
    );
}
