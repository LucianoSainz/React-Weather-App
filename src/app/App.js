import React, { Component } from 'react';
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';

class App extends Component {

    getWeather = e => {
        console.log("submit");
        e.preventDefault();
    } 

    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                       <WeatherForm getWeather={this.getWeather}/>
                       <WeatherInfo/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;