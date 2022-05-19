import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import CustomTable from '../components/CustomTable';
import ActionTableButton from '../components/ActionTableButtons';

export default function View() {
  const columnDefs = [
    {
      headerName: 'Report ID',
      field: 'id',
      headerAlign: 'center',
      flex: 1,
      sortable: false,
    },
    {
      headerName: 'Status',
      field: 'status',
      headerAlign: 'center',
      flex: 1,
      sortable: false,
    },
    {
      headerName: 'Create Date',
      field: 'date',
      headerAlign: 'center',
      flex: 1,
      sortable: false,
    },
    {
      headerName: 'Action',
      field: 'action',
      headerAlign: 'center',
      renderCell: (cellValues) => {
        return <ActionTableButton />;
      },
      flex: 1,
      sortable: false,
    },
  ];
  const rowData = [
    { id: 'R000006', status: 'Pending', date: '05/05/2022' },
    { id: 'R000005', status: 'Approved', date: '02/05/2022' },
    { id: 'R000004', status: 'Approved', date: '02/05/2022' },
    { id: 'R000003', status: 'Approved', date: '02/05/2022' },
    { id: 'R000002', status: 'Approved', date: '02/05/2022' },
    { id: 'R000001', status: 'Approved', date: '02/05/2022' },
  ];
  return (
    <Layout>
      <p className={styles.viewReportTitle}>
        Table of reports that have been generated
      </p>
      <CustomTable
        style={styles.customTableViewPage}
        col={columnDefs}
        row={rowData}
      />
    </Layout>
  );
}
