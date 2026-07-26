import React from 'react';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  render() {
    return (
      <Container className="py-5 text-center">
        <h1>Oregon Trip Ready</h1>
        <p>Check Oregon weather, air quality, and road conditions before you travel.</p>
      </Container>
    );
  }
}

export default App;
