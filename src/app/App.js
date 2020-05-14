import React, { Component } from 'react';
import weatherInfo from './components/WeatherInfo';

class App extends Component {
    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6">
                       <weatherInfo/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;