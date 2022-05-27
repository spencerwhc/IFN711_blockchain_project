import { ButtonGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomTable from "../CustomTable";
import styles from "../../styles/Home.module.css";
import Checkbox from "@mui/material/Checkbox";

export default function ItemTable(props) {
    const [tableData, setTableData] = useState([]);
    const [clicked1, setClicked1] = useState(true);
    const [clicked2, setClicked2] = useState(false);

    const { unit } = props;

    const columnDefs = [
        {
            headerName: "Criteria",
            field: "id",
        },
        {
            headerName: "Achievement",
            field: "achievement",
        },
    ];

    const mapCriteria = (index) => {
        let datas = [];
        for (let i = 0; i < unit.assessments[index].Criteria.length; i++) {
            const data = {
                id: unit.assessments[index].Criteria[i],
                achievement: unit.assessments[index].Achievement[i],
            };
            datas.push(data);
        }
        return datas;
    };

    const rowData = mapCriteria(0);
    const rowData1 = mapCriteria(1);

    useEffect(() => {
        setTableData(rowData);
    }, [rowData]);
    return (
        <div style={props.style} className={props.className}>
            <ButtonGroup style={{ width: "100%" }}>
                <div
                    className={
                        clicked1
                            ? styles.btnItemTableContainerBlue
                            : styles.btnItemTableContainerWhite
                    }
                >
                    <button
                        style={{ color: clicked1 ? "White" : "Black" }}
                        className={styles.btnItemTable}
                        onClick={() => {
                            setClicked1(true);
                            setClicked2(false);
                            setTableData(rowData);
                        }}
                    >
                        {unit.assessments[0].AssessmentName}
                    </button>
                    <Checkbox
                        style={{ color: clicked1 ? "White" : "Black" }}
                        onChange={(e) => {
                            if (e.target.checked) {
                                props.counter(1);
                                props.assList(unit.assessments[0].ID, "add");
                            } else {
                                props.counter(-1);
                                props.assList(unit.assessments[0].ID, "remove");
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
                        style={{ color: clicked2 ? "White" : "Black" }}
                        className={styles.btnItemTable}
                        onClick={() => {
                            setClicked1(false);
                            setClicked2(true);
                            setTableData(rowData1);
                        }}
                    >
                        {unit.assessments[1].AssessmentName}
                    </button>
                    <Checkbox
                        style={{ color: clicked2 ? "White" : "Black" }}
                        onChange={(e) => {
                            if (e.target.checked) {
                                props.counter(1);
                                props.assList(unit.assessments[1].ID, "add");
                            } else {
                                props.counter(-1);
                                props.assList(unit.assessments[1].ID, "remove");
                            }
                        }}
                    />
                </div>
            </ButtonGroup>
            <CustomTable
                rowFormat={"generate"}
                col={columnDefs}
                row={tableData}
            ></CustomTable>
        </div>
    );
}
