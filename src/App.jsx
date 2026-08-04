import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import logo from './assets/logo.png';
import { FaCloudSun, FaMountain } from 'react-icons/fa';
import { GiEarthCrack } from 'react-icons/gi';
import { MdThunderstorm } from 'react-icons/md';

class App extends React.Component {
  state = {
    destination: '',
    conditions: null,
    errorMessage: '',
    isLoading: false
  };

  handleDestinationChange = (event) => {
    this.setState({ destination: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const destination = this.state.destination.trim();

    if (!destination) {
      this.setState({
        conditions: null,
        errorMessage: 'Please enter an Oregon destination.'
      });
      return;
    }

    this.setState({
      conditions: null,
      errorMessage: '',
      isLoading: true
    });

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/conditions`,
        { params: { destination } }
      );

      this.setState({ conditions: response.data });
    } catch (error) {
      this.setState({
        errorMessage: error.response?.data?.error || 'Unable to retrieve weather conditions.'
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { destination, conditions, errorMessage, isLoading } = this.state;

    return (
      <Container as="main" className="trip-ready-page">
      <header className="page-header">
  <img
    src={logo}
    alt="Oregon Trip Ready logo"
    className="app-logo"
  />

  <h1>Oregon Trip Ready</h1>
  <p>Check Oregon weather, air quality, and road conditions before you travel.</p>
</header>  

 <section
  className="weather-search-section"
  aria-labelledby="weather-search-heading"
>
  <div className="primary-section-layout">
    <div className="primary-section-icon weather-section-icon">
      <FaCloudSun aria-hidden="true" />
    </div>

    <div className="primary-section-content">
      <h2 id="weather-search-heading">Search Oregon Weather</h2>

      <Form className="weather-search-form" onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="destination">
          <Form.Label>Oregon destination</Form.Label>

          <Form.Control
            type="text"
            value={destination}
            onChange={this.handleDestinationChange}
            placeholder="Enter a city or destination"
          />
        </Form.Group>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search Weather'}
        </Button>
      </Form>

      <p className="visually-hidden" role="status" aria-live="polite">
        {isLoading ? 'Weather information is loading.' : ''}
      </p>

      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

      {conditions && (
        <Card
          className="weather-card"
          role="region"
          aria-labelledby="weather-result-heading"
        >
          <Card.Body>
            <Card.Title as="h3" id="weather-result-heading">
              {conditions.destination}, {conditions.state}
            </Card.Title>

            <Card.Text as="div">
              <dl className="weather-details-grid">
                <dt>Temperature</dt>
                <dd>{Math.round(conditions.weather.temperature)}°F</dd>

                <dt>Feels like</dt>
                <dd>{Math.round(conditions.weather.feelsLike)}°F</dd>

                <dt>Humidity</dt>
                <dd>{conditions.weather.humidity}%</dd>

                <dt>Condition</dt>
                <dd>{conditions.weather.condition}</dd>

                <dt>Description</dt>
                <dd>{conditions.weather.description}</dd>

                <dt>Wind speed</dt>
                <dd>{Math.round(conditions.weather.windSpeed)} mph</dd>
              </dl>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  </div>
</section>

        <section
          className="information-section tripcheck-section"
          aria-labelledby="road-conditions-heading"
        >
          <h2 id="road-conditions-heading">Oregon Road Conditions</h2>
          <p>Check current road closures, incidents, weather conditions, and traffic cameras.</p>
          <Button
            href="https://tripcheck.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Road Conditions on TripCheck
          </Button>
          <p className="external-link-note">The official TripCheck map opens in a new tab.</p>
        </section>

        <section
          className="information-section airnow-section"
          aria-labelledby="air-quality-heading"
        >
          <h2 id="air-quality-heading">Air Quality and Wildfire Smoke</h2>
          <p>View current air-quality and wildfire-smoke conditions for your destination.</p>
          <Button
            href="https://fire.airnow.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Air Quality on AirNow
          </Button>
          <p className="external-link-note">Opens the official AirNow map in a new tab.</p>
        </section>

        <nav
  className="resource-links"
  aria-label="Additional Oregon safety resources"
>
  <a
    className="resource-icon-link avalanche-link"
    href="https://nwac.us/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open avalanche information in a new tab"
  >
    <FaMountain aria-hidden="true" />
    <span className="resource-tooltip">
      Avalanche info
    </span>
  </a>

  <a
    className="resource-icon-link nws-link"
    href="https://www.weather.gov/alerts"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open National Weather Service alerts in a new tab"
  >
    <MdThunderstorm aria-hidden="true" />
    <span className="resource-tooltip">
      NWS Alerts
    </span>
  </a>

  <a
    className="resource-icon-link earthquake-link"
    href="https://earthquake.usgs.gov/earthquakes/map/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open recent earthquake information in a new tab"
  >
    <GiEarthCrack aria-hidden="true" />
    <span className="resource-tooltip">
      Earthquakes
    </span>
  </a>
</nav>
<footer className="site-footer">
  <a href="/about" className="footer-link">
    About
  </a>

  <span className="footer-divider">|</span>

  <span>
    Powered by: OpenWeather • AirNow • ODOT TripCheck
  </span>

  <span className="footer-divider">|</span>

  <span className="footer-brand">
    AGiv Lab
  </span>

  <span className="footer-divider">|</span>

  <span className="footer-copyright">
    © 2026 Oregon Trip Ready
  </span>
</footer>

      </Container>
    );
  }
}

export default App;
