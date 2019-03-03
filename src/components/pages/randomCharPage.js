import React, {Component} from 'react';
import gotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import ItemDetails, {Field} from '../itemDetails';
import RowBlock from '../rowBlock';


export default class RandomChar extends Component {

    gotService = new gotService();
    state = {
        showRandomChar: true,
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

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
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

        const randomChar = this.state.showRandomChar ? <RowBlock left={itemDetails} /> : null;

        const btnStyle = {
            padding: '5px',
            borderRadius: '8px'
        }
        return (
            <>
                <button onClick={() => this.toggleRandomChar()} style={btnStyle}>click me!</button>
                {randomChar}
            </>
        )
    }
}