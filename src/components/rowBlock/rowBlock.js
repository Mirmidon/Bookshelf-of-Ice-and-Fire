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
        const btnStyle = {
            padding: '5px',
            borderRadius: '8px'
        }
        return (
            <Row>
                <Col lg={{size: 5, offset: 0}}>
                    <button onClick={() => this.toggleRandomChar()} style={btnStyle}>click me!</button>
                    {left}
                </Col>
            </Row>
        )
    }
}

export default RowBlock;