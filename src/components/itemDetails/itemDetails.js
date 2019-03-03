import React, {Component} from 'react';
import './itemDetails.css';


const Field = ({item, field, label, styleLabel, styleValue}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span style={styleLabel} className="term">{label}</span>
            <span style={styleValue}>{item[field]}</span>
        </li>
    )
}

export {
    Field
}


export default class ItemDetails extends Component {

    state = {
        item: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {getData, itemId} = this.props;
        if (!itemId)
            return;

        getData(itemId)
        .then((item) => {
                this.setState({item})
            })
    }

    render() {
        if (!this.state.item) {
            return <span className='select-error' >Please, select a character</span>
        }

        const {item} = this.state;
        const {name} = item;

        return (
            <>
            <div className={this.props.className}><i></i></div>
            <div className="item-details rounded">
                <h4>{this.props.randomChar ? 'Random Character: ': ''}{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
            </>
        );
    }
}