import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutUs.css';


const AboutUs = () => {

    return (
        <Container>
            <h1>About company</h1>
            <p>Weather data should be open to anyone. Not many types of data can affect business decisions and personal everyday plans on the same scale as weather does. There is no need to mention billions of dollars business and governments lose due to the extreme weather conditions which are beyond our control. However, most applications of accurate forecast and history for businesses are more humble yet more practical for daily analysis and decision making. To name a few, they include analysis of impact of weather on the customers’ demand for retailers, planning of secure routes for transport companies; accurate evaluation of customers’ cases for insurers, sensitive planning of energy consumption for householders, timely watering crops for farmers.
            Modern technologies make accurate forecast and history not only available to anyone but nearly free. What seemed impossible just a few years ago, now you can do with a lightning speed. Machine learning, neural networks, big data, cloud spaces - all of that is easily accessible to calculate hugely sophisticated forecasting models such as Numerical Weather Prediction (NWP) or short-term forecasts which update rapidly.
            In all that concerns computing and valuation of complex hydro-meteorological models we rely on global forecasters like NOAA, ECMWF. But we can enhance their models with our knowledge of data science and ML, given that most of the mathematics behind forecasting are well-known. For example, algorithms for its extreme form, nowcast, are in use since 1950th; radar data is open and even free for some territories. Additionally, there are lots of specialised instruments for developers such as Python libraries for the STEP (Short-term Ensemble Prediction System) computation.
            Fortunately, global meteorological companies such as NOAA, MetOffice, Environment Canada, ECMWF, etc. share our belief that weather data should be open. They supply us with enormous data feeds including data from radars, weather satellites and weather stations. They also provide a lot of more specialised products such as road alerts, road risks and marine weather.
            Before weather data can find its way to businesses, it has to pass through the hands of developers, and they have to come to us. Our weather products are based on open data and open technologies. With our convolutional neural networks and ML technologies, we significantly enhance fundamental global forecast models with radar-based nowcasts, weather satellite data and the vast network of weather stations (82,000), rain gauges, and other weather sensors. Developers access these vast amounts of data via our light-speed, elegant APIs.
            With our APIs, you get data for any location on the globe: minute forecast (currently the US), hourly forecast, current weather, history, with vast range of meteorological parameters. All these remarkable products are available for free with up to 1,000,000 calls per month. For those who are looking for bigger service we provide several paid subscriptions and a range of historical products.
Such powerful technologies as our ML can significantly advance both accuracy and computing speed of global assemble forecasting models, practice which was impossible only a few years ago. That makes the entire calculation fast and cost-effective, providing millions of your customers with accurate forecasts promptly.</p>
        </Container>
    )
}

export default AboutUs;