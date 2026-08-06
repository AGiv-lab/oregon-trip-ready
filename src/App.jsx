import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import logo from './assets/logo.png';
import { FaCamera, FaCloudSun, FaFire, FaMountain, FaRoad, FaWater } from 'react-icons/fa';
import { GiEarthCrack } from 'react-icons/gi';
import { MdThunderstorm } from 'react-icons/md';

class App extends React.Component {
  state = {
    destination: '',
    conditions: null,
    errorMessage: '',
    isLoading: false,
    showAboutModal: false
  };

  handleDestinationChange = (event) => {
    this.setState({ destination: event.target.value });
  };

  handleShowAboutModal = () => {
    this.setState({ showAboutModal: true });
  };

  handleCloseAboutModal = () => {
    this.setState({ showAboutModal: false });
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
    const { destination, conditions, errorMessage, isLoading, showAboutModal } = this.state;

    return (
      <Container as="main" className="trip-ready-page">
      <header className="page-header">
  <div className="page-header-logo">
    <img
      src={logo}
      alt="Oregon Trip Ready logo"
      className="app-logo"
    />
  </div>

  <div className="page-header-content">
    <h1>Oregon Trip Ready</h1>
    <p>One search. Oregon conditions.</p>
  </div>

  <div className="page-header-search">
    <Form className="weather-search-form" onSubmit={this.handleSubmit}>
      <Button className="search-button" type="submit" disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Search'}
      </Button>

      <Form.Group className="mb-3" controlId="destination">
        <Form.Label className="visually-hidden">Oregon destination</Form.Label>

        <Form.Control
          type="text"
          value={destination}
          onChange={this.handleDestinationChange}
          placeholder="Enter an Oregon city or destination"
        />
      </Form.Group>
    </Form>
  </div>
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
      <h2 id="weather-search-heading">Weather Conditions</h2>

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
              <div className="weather-temperature">
                <span className="visually-hidden">Temperature: </span>
                {Math.round(conditions.weather.temperature)}°F
              </div>
              <p className="weather-condition">{conditions.weather.condition}</p>

              <dl className="weather-details-grid">
                <div>
                  <dt>Feels Like</dt>
                  <dd>{Math.round(conditions.weather.feelsLike)}°F</dd>
                </div>
                <div>
                  <dt>Humidity</dt>
                  <dd>{conditions.weather.humidity}%</dd>
                </div>
                <div>
                  <dt>Wind</dt>
                  <dd>{Math.round(conditions.weather.windSpeed)} mph</dd>
                </div>
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
          <div className="primary-section-layout">
            <div className="primary-section-icon road-section-icon">
              <FaRoad aria-hidden="true" />
            </div>

            <div className="primary-section-content">
              <h2 id="road-conditions-heading">Road Conditions</h2>
              <p>Road closures, incidents, weather impacts, and cameras.</p>
              <Button
                className="road-button"
                href="https://tripcheck.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open TripCheck
              </Button>
            </div>
          </div>
        </section>

        <section
          className="information-section airnow-section"
          aria-labelledby="air-quality-heading"
        >
          <div className="primary-section-layout">
            <div className="primary-section-icon air-section-icon">
              <FaFire aria-hidden="true" />
            </div>

            <div className="primary-section-content">
              <h2 id="air-quality-heading">Air Quality</h2>
              <p>Air quality, wildfire smoke, and AQI information.</p>
              <Button
                className="air-button"
                href="https://fire.airnow.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open AirNow
              </Button>
            </div>
          </div>
        </section>

        <section
          className="information-section resources-section"
          aria-labelledby="more-resources-heading"
        >
          <h2 id="more-resources-heading">More Resources</h2>

          <nav
            className="resource-links"
            aria-label="Additional Oregon safety resources"
          >
            <a
              className="resource-icon-link nws-link"
              href="https://www.weather.gov/alerts"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open NWS alerts in a new tab"
            >
              <MdThunderstorm aria-hidden="true" />
              <span className="resource-tooltip">NWS Alerts</span>
            </a>

            <a
              className="resource-icon-link camera-link"
              href="https://tripcheck.com/DynamicReports/Report/Cameras"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Oregon road cameras in a new tab"
            >
              <FaCamera aria-hidden="true" />
              <span className="resource-tooltip">Road Cameras</span>
            </a>

            <a
              className="resource-icon-link coast-link"
              href="https://www.weather.gov/marine/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open coast conditions in a new tab"
            >
              <FaWater aria-hidden="true" />
              <span className="resource-tooltip">Coast Conditions</span>
            </a>

            <a
              className="resource-icon-link avalanche-link"
              href="https://nwac.us/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open avalanche information in a new tab"
            >
              <FaMountain aria-hidden="true" />
              <span className="resource-tooltip">Avalanche</span>
            </a>

            <a
              className="resource-icon-link earthquake-link"
              href="https://earthquake.usgs.gov/earthquakes/map/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open recent earthquake information in a new tab"
            >
              <GiEarthCrack aria-hidden="true" />
              <span className="resource-tooltip">Earthquakes</span>
            </a>
          </nav>
        </section>

<footer className="site-footer">
  <button
    type="button"
    className="footer-about-button"
    onClick={this.handleShowAboutModal}
  >
    About
  </button>

  <span className="footer-copyright">2026 AGiv Lab</span>
</footer>

        <Modal
          className="about-modal"
          show={showAboutModal}
          onHide={this.handleCloseAboutModal}
          centered
          restoreFocus
          aria-labelledby="about-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="about-modal-title">About Oregon Trip Ready</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h3 className="about-modal-brand">Oregon Trip Ready</h3>
            <p className="about-modal-tagline">One search. Better decisions.</p>
            <p>
              Oregon Trip Ready brings together current weather, road conditions, and air quality
              from trusted public data sources—helping residents and visitors make informed
              decisions before heading out.
            </p>
            <h4>Official Data Sources</h4>
            <p className="about-modal-sources">OpenWeather • AirNow • TripCheck</p>
          </Modal.Body>

          <Modal.Footer>
            <Button className="about-modal-close" onClick={this.handleCloseAboutModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </Container>
    );
  }
}

export default App;
