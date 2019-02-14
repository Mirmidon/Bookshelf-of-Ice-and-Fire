import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


class Example extends Component {
    render() {
        return this.props.children;
    }
}

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Example>
    <h1>Hello</h1>
    [1,2,3]
    `{{tttt: "1", a: 'a'}}`
</Example>, document.getElementById('root'));