import React, {Component} from 'react';
import gotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import RowBlock from '../rowBlock';
import './housesPage.css';

export default class HousesPage extends Component {
    gotService = new gotService();

    state = {
        selectedItem: 1,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected} 
                getData={this.gotService.getAllHouses}
                renderItem={({name, region}) => `${name} (${region})`}
            />
        )

        const itemDetails = (
            <ItemDetails 
                itemId={this.state.selectedItem}
                getData={this.gotService.getHouse}
            >
                <Field field='overlord' label='Overlord' />
                <Field field='region' label='Region' />
                <Field field='worlds' label='Worlds' />
                <Field styleClass="coat" field='coatOfArms' label='CoatOfArms' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    }
}