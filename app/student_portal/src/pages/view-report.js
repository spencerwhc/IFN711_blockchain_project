import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import CustomTable from '../components/CustomTable';
import ActionTableButton from '../components/ActionTableButtons';

export default function View() {
  const columnDefs = [
    {
      headerName: 'Report ID',
      field: 'id'
    },
    {
      headerName: 'Status',
      field: 'status'
    },
    {
      headerName: 'Create Date',
      field: 'date'
    },
    {
      headerName: 'Action',
      field: 'action'
    }
  ];
  const rowData = [
    {
      id: 'R000006',
      status: 'Pending',
      date: '05/05/2022',
      action: <ActionTableButton />
    },
    {
      id: 'R000005',
      status: 'Approved',
      date: '02/05/2022',
      action: <ActionTableButton />
    },
    {
      id: 'R000004',
      status: 'Approved',
      date: '02/05/2022',
      action: <ActionTableButton />
    },
    {
      id: 'R000003',
      status: 'Approved',
      date: '02/05/2022',
      action: <ActionTableButton />
    },
    {
      id: 'R000002',
      status: 'Approved',
      date: '02/05/2022',
      action: <ActionTableButton />
    },
    {
      id: 'R000001',
      status: 'Approved',
      date: '02/05/2022',
      action: <ActionTableButton />
    }
  ];
  return (
    <Layout>
      <p className={styles.viewReportTitle}>
        Table of reports that have been generated
      </p>
      <CustomTable rowFormat={'view'} col={columnDefs} row={rowData} />
    </Layout>
  );
}
