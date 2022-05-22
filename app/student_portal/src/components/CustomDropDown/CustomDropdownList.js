import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from '../../styles/Home.module.css';
import CustomDropdownItem from './CustomDropdownItem';
import { ChevronCompactDown, ChevronCompactUp } from 'react-bootstrap-icons';

export default function CustomDropdownList(props) {
    const [show, setShow] = useState(false);
    const [showAll, setShowAll] = useState(false);
    return (
        <div>
            <Row className={styles.customDropdown}>
                <button
                    className={styles.btnCustomDropdown}
                    onClick={() => {
                        if (show) {
                            setShow(false);
                            setShowAll(false);
                        } else {
                            setShow(true);
                            setShowAll(true);
                        }
                    }}
                >
                    <Row>
                        <Col md lg={11}>
                            {props.title}
                        </Col>
                        <Col md lg={1}>
                            {show ? (
                                <ChevronCompactDown color="white" size={22} />
                            ) : (
                                <ChevronCompactUp color="white" size={22} />
                            )}
                        </Col>
                    </Row>
                </button>
            </Row>
            <CustomDropdownItem
                title="IFN711: IT Industry Project"
                show={show}
                showTable={showAll}
                counter={props.counter}
            />
            <CustomDropdownItem
                title="IFN650: Business Process Analytics"
                show={show}
                showTable={showAll}
                counter={props.counter}
            />
            <CustomDropdownItem
                title="IFN662: Enterprise Systems and Applications"
                show={show}
                showTable={showAll}
                counter={props.counter}
            />
        </div>
    );
}
