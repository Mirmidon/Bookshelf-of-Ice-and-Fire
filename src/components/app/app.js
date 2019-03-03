import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {StartPage, CharacterPage, HousesPage, BooksPage, BooksItem} from '../pages/';
import gotService from '../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {

    gotService = new gotService();

    state = {
        error: false,
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <Router>
                <div className="app">
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <RandomChar/>
                        <Route path='/' exact component={StartPage} />
                        <Route path='/characters/' component={CharacterPage} />
                        <Route path='/houses/' component={HousesPage} />
                        <Route path='/books/' exact component={BooksPage} />
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params;
                                return <BooksItem bookId={id} />
                            }
                        } />

                    </Container>
                </div>
            </Router>
        );
    }
};