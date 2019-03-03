import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './assets/css/default-404-page.css';

export default class Default404 extends Component {

    render() {
        return (
            <div className='default-404-page'>
                <h1 className='default-404-page__title'>There is no such page, but there is winter, which is comming.</h1>
                <Link to='/' className='default-404-page__link'>
                    Return to Start Page
                </Link>
            </div>
        )
    }
}