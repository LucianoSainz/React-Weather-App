import React from 'react';

const weatherInfo = props => {
    return (
        <div className="card card-body">
            <p>
                Location: {props.city}, {props.country}
            </p>
            <p>
                Temperature: {props.temperature} ºC, {props.description}
            </p>
            <p>
                Humidity: {props.humidity} %
            </p>
            <p>
                Wind Speed: {props.wind_speed}
            </p>
        </div>
    )
}

export default weatherInfo;