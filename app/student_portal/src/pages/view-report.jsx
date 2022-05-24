import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import CustomTable from "../components/CustomTable";
import ActionTableButton from "../components/ActionTableButtons";

// Import Services
import { getStudentReports } from "../service/api";

export default function View() {
    const [reportData, setReportData] = useState();

    useEffect(() => {
        const getreport = async () => {
            try {
                const result = await getStudentReports("n10864989");
                const { data } = result;

                setReportData(data);
            } catch (error) {
                console.log(error);
            }
        };
        getreport();
    }, [setReportData]);
    const columnDefs = [
        {
            headerName: "Report ID",
            field: "id",
        },
        {
            headerName: "Status",
            field: "status",
        },
        {
            headerName: "Create Date",
            field: "date",
        },
        {
            headerName: "Action",
            field: "action",
        },
    ];

    if (!reportData) return null;

    const rowDatas = reportData.map((report) => {
        return {
            key: report.ID,
            id: report.ID,
            status: report.Status,
            date: report.createdDate,
        };
    });

    return (
        <Layout>
            <p className={styles.viewReportTitle}>
                Table of reports that have been generated
            </p>
            <CustomTable rowFormat={"view"} col={columnDefs} row={rowDatas} />
        </Layout>
    );
}
