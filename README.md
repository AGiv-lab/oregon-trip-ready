# Oregon Trip Ready

<p align="center">
  <img
    src="docs/images/logo.png"
    alt="Oregon Trip Ready Logo"
    width="220"
  >
</p>

> Check current weather and quickly access official Oregon travel resources before you leave.

---

## About

Oregon Trip Ready is a responsive web application for Oregon residents and visitors. Users can search an Oregon destination for current weather and quickly access official road, air-quality, weather-alert, coast, avalanche, camera, and earthquake resources. The application was built with accessibility, responsive design, and clear visual navigation in mind.

---

## Problem Domain

Planning travel in Oregon often requires checking several separate weather, road, air-quality, and hazard websites. Oregon Trip Ready provides one starting point for current weather and direct links to trusted official resources.

---
## User Stories

As an Oregon resident or visitor, I want to:

- **Search Oregon destinations** so that I can quickly check conditions for the area I am traveling to.
- **View current weather** for my destination so that I can prepare appropriately before leaving.
- **Access TripCheck road conditions** so that I can check closures, incidents, weather impacts, and road cameras before traveling.
- **Access air-quality and wildfire information** so that I can check smoke, fires, and air conditions before traveling.
- **Access National Weather Service alerts** so that I can check for potentially hazardous weather conditions.
- **View Oregon road cameras** so that I can visually check current road and traffic conditions.
- **Check Oregon coast conditions** so that I can review weather and marine conditions before visiting the coast.
- **Access avalanche information** so that I can check current mountain hazards before traveling or recreating in affected areas.
- **View recent USGS earthquake information** so that I can check seismic activity that could affect my plans.

Additional accessibility and application-information user stories:

- **As a user who navigates with a keyboard or assistive technology**, I want clearly labeled and keyboard-accessible controls so that I can use Oregon Trip Ready without relying on a mouse.
- **As a user**, I want to understand what Oregon Trip Ready does and where its information comes from so that I can understand the purpose and limitations of the application.

---

## Features

- Oregon destination weather search
- Current temperature, feels-like temperature, humidity, weather condition, description, and wind speed
- Responsive mobile-first layout
- Accessible form controls and keyboard navigation
- TripCheck road conditions
- AirNow air quality and wildfire smoke
- National Weather Service alerts
- Road cameras
- Coast conditions
- Avalanche information
- USGS earthquake information
- Accessible About modal

---

## Accessibility

Accessibility was a primary design goal for Oregon Trip Ready.

- Lighthouse Accessibility Score: **100**
- Semantic HTML
- Accessible form labels
- Keyboard-accessible controls
- Visible focus indicators
- Responsive text and layouts
- Accessible names for icon links
- Reduced-motion support

![Lighthouse Accessibility Results](docs/images/lighthouse.png)

---

## Built With

- React
- Vite
- JavaScript
- CSS
- React Bootstrap
- React Icons
- Axios
- Node.js
- Express
- OpenWeather API

---

## Official Data Sources

- OpenWeather
- AirNow
- Oregon TripCheck
- National Weather Service
- Oregon road-camera resources
- Oregon coast-condition resources
- Avalanche information
- USGS Earthquakes

Only current weather is retrieved through the Oregon Trip Ready backend. The other resources currently open official external websites.

---

## Stretch Goals

### Completed

- Responsive mobile layout
- Accessible More Resources icon navigation
- About modal
- Lighthouse Accessibility score of 100
- Clear loading, validation, and error states
- Improved visual design and responsive header

### Future Improvements

- Dark mode
- Live TripCheck API integration
- Live AirNow API integration
- Route and road-condition APIs when stable public access is available
- Embedded road cameras
- Current-location support
- Saved or favorite destinations, Auth0
- Additional Oregon and Pacific Northwest travel resources

---

## License

This project is licensed under the MIT License.

See the [LICENSE](LICENSE) file for details.
