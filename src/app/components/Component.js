import React from 'react';
import { Container } from 'react-bootstrap';
import './Comp.css';

const Component = () => {

    return (
        <Container>
            <div className="titleOne">
                <h2>Welcome to weather app</h2>
            </div>
            <div className="titleTwo">
                <h4>How our app works :</h4>
            </div>
            <div className="list">
            <ol>
                <li>access web sample or download the app</li>
                <li>enter the city and country</li>
                <li>press get weather</li>
                <li>you will get temperature, humidity and wind</li>
            </ol>
            </div>
        </Container>
    )
}

export default Component;