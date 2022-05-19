import { ButtonGroup } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomTable from './CustomTable';

export default function ItemTable(props) {
    const columnDefs = [
        {
            headerName: 'Criteria',
            field: 'id',
            flex: 1,
            sortable: false,
        },
        {
            headerName: 'Achievement',
            field: 'achievement',
            flex: 2,
            sortable: false,
        },
    ];
    const rowData = [
        {
            id: 'Introduction (10%)',
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
    return (
        <div style={props.style} className={props.className}>
            <ButtonGroup>
                <button className={styles.btnItemTable}>
                    <div>Project Plan</div>
                </button>
                <button className={styles.btnItemTable}>
                    <div>Reflection Assessment</div>
                </button>
                <button className={styles.btnItemTable}>
                    <div>Project Report</div>
                </button>
            </ButtonGroup>
            <CustomTable
                style={styles.customTableGeneratePage}
                col={columnDefs}
                row={rowData}
            ></CustomTable>
        </div>
    );
}
