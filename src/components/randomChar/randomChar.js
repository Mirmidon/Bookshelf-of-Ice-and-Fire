import React, {Component} from 'react';
// import './randomChar.css';
import gotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import ItemDetails, {Field} from '../itemDetails';
import RowBlock from '../rowBlock';


export default class RandomChar extends Component {

    gotService = new gotService();
    state = {
        ramdomId: 140,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * 140 + 25);
        this.setState({
            ramdomId: id
        })
    }    


    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        const style = {
            fontWeight: 'bold'
        }
        const itemDetails = (
            <ItemDetails 
                itemId={this.state.ramdomId}
                getData={this.gotService.getCharacter}
                randomChar={true}
            >
                <Field styleLabel={style} field='gender' label='Gender' />
                <Field styleLabel={style} field='born' label='Born' />
                <Field styleLabel={style} field='died' label='Died' />
                <Field styleLabel={style} field='culture' label='Culture' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemDetails} />
        )
    }
}