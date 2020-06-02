import React from 'react';
import { Container } from 'react-bootstrap';


const Component = () => {

    return (
        <Container>
            <h2>Welcome to weather app</h2>
            <h4>how our app works</h4>
            <ol>
                <li>access web sample or download the app</li>
                <li>enter the city and country</li>
                <li>press get weather</li>
                <li>you will get temperature, humidity and wind</li>
            </ol>
        </Container>
    )
}

export default Component;