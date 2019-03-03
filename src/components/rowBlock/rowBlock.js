import React from 'react';
import {Col, Row} from 'reactstrap';

const RowBlock = ({left, right}) => {
    if (right) {
        return (
            <Row>
                <Col md='6'>
                    {left}
                </Col>
                <Col md='6'>
                    {right}
                </Col>
            </Row>
        )
    } else {
        return (
            <Row>
                <Col lg={{size: 5, offset: 0}}>
                    {left}
                </Col>
            </Row>
        )
    }
}

export default RowBlock;