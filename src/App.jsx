import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  render() {
    return (
      <Container className="py-5 text-center">
        <h1>Oregon Trip Ready</h1>
        <p>Check Oregon weather, air quality, and road conditions before you travel.</p>
        <section>
          <h2>Air Quality and Wildfire Smoke</h2>
          <p>View current air-quality and wildfire-smoke conditions for your destination.</p>
          <Button
            href="https://fire.airnow.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Air Quality on AirNow
          </Button>
          <p>Opens the official AirNow map in a new tab.</p>
        </section>
      </Container>
    );
  }
}

export default App;
