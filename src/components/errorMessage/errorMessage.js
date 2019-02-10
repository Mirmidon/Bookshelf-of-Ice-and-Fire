import React from 'react';
import './errorMessage.css';
// import img from './error'

const ErrorMessage = () => {
    return (
        <>
            <img src={process.env.PUBLIC_URL + '/img/error2.jpg'} alt="error"></img>
            <span>Случилась ошибка</span>
        </>
    )
}

export default ErrorMessage;