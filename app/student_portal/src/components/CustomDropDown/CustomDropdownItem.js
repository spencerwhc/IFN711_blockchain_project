import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from '../../styles/Home.module.css';
import ItemTable from './ItemTable';
import { ChevronCompactDown, ChevronCompactUp } from 'react-bootstrap-icons';

export default function CustomDropdownItem(props) {
    const [show1, setShow1] = useState(false);
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
            <Col style={{ display: props.show ? 'block' : 'none' }} md lg={11}>
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
            <Col style={{ display: props.show ? 'block' : 'none', marginTop: '20px' }} md lg={1}>
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
                counter={props.counter}
            />
        </Row>
    );
}
