import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import ItemTable from './ItemTable';
import { ChevronCompactDown, ChevronCompactUp } from 'react-bootstrap-icons';
import Checkbox from '@mui/material/Checkbox';

export default function CustomDropdownItem(props) {
    const [show1, setShow1] = useState(false);
    const [checked, setChecked] = useState(true);
    return (
        <Row
            className={
                !props.showTable
                    ? styles.hideCustomDropDownItem
                    : props.show
                    ? styles.showCustomDropDownItem
                    : show1
                    ? styles.showCustomDropDownItem
                    : styles.hideCustomDropDownItem
            }
        >
            <Col style={{ display: props.show ? 'block' : 'none' }}>
                <button
                    className={styles.customDropdownItembtn}
                    onClick={() => {
                        if (show1) {
                            setShow1(false);
                        } else {
                            setShow1(true);
                        }
                    }}
                >
                    {props.title}
                </button>
            </Col>
            <Col style={{ display: props.show ? 'block' : 'none', marginTop: '10px' }}>
                <Checkbox
                    onChange={() => {
                        if (checked) {
                            props.counter(1);
                            setChecked(false);
                        } else {
                            props.counter(-1);
                            setChecked(true);
                        }
                    }}
                />
                {show1 ? (
                    <ChevronCompactDown color="black" size={22} />
                ) : (
                    <ChevronCompactUp color="black" size={22} />
                )}
            </Col>
            <ItemTable
                className={
                    props.showTable && show1
                        ? styles.customDropdownTable
                        : styles.hideCustomDropdownTable
                }
            />
        </Row>
    );
}
