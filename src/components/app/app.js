import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


const HideButton = () => {

    function fun() {
        let el = document.querySelector('.random-block.rounded');
        // if (el.style.visibility !== 'hidden') {
        if (el.style.display !== 'none') {
            // el.style.visibility = 'hidden';
            el.style.display = 'none';
            document.querySelector('#hideBtn').innerHTML = 'Показать блок';
        } else {
            // el.style.visibility = 'visible';
            el.style.display = 'block';
            document.querySelector('#hideBtn').innerHTML = 'Спрятать блок';
        }
    }

    const btnStyle = {
        padding: '5px',
        borderRadius: '8px'
    }

    return <button id="hideBtn" onClick={fun} style={btnStyle}>Спрятать блок</button>
}

const App = () => {

    return (
        <> 
            <Container>
                <Header />
                <HideButton />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <RandomChar/>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;