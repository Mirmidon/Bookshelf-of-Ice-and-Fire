import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import ErrorMessage from '../errorMessage';
import {StartPage, CharacterPage, RandomCharPage, HousesPage, BooksPage, BooksItem, Default404} from '../pages/';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


export default class App extends Component {

    state = {
        error: false,
    };

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
                        <Switch>
                            <Route path='/' exact component={StartPage} />
                            <Route path='/characters/' component = {() =>
                                <>
                                    <RandomCharPage />
                                    <CharacterPage />
                                </>
                            } />
                            <Route path='/houses/' component={HousesPage} />
                            <Route path='/books/' exact component={BooksPage} />
                            <Route path='/books/:id' render={
                                ({match}) => {
                                    const {id} = match.params;
                                    return <BooksItem bookId={id} />
                                }
                            } />
                            <Route component={Default404} />
                        </Switch>
                    </Container>
                </div>
            </Router>
        );
    }
};