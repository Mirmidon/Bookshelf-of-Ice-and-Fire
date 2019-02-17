import React, {Component} from 'react';
import gotService from '../../services/gotService';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import ItemDetails, {Field} from '../itemDetails';
import RowBlock from '../rowBlock';

export default class BooksPage extends Component {
    gotService = new gotService();

    state = {
        selectedBook: 1,
        error: false
    }

    componentDidCatch(){
        this.setState({
            error: true
        })
    }
    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected} 
                getData={this.gotService.getAllBooks}
                renderItem={({name, numberOfPages}) => `${name} (${numberOfPages})`}
            />
        )

        const itemDetails = (
            <ItemDetails
                charId = {this.state.selectedBook}
                getData = {this.gotService.getBook}
            >
                {/* <Field field='numberOfPages' label='NumberOfPages' /> */}
                {/* <Field field='publisher' label='Publisher' /> */}
                {/* <Field field='released' label='Released' /> */}
            </ItemDetails>
        )

        return (
            <RowBlock left = {itemList} right = {itemDetails} />
        )
    }
}