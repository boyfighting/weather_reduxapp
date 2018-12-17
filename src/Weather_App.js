import React, { Component } from 'react'
import WeatherPanel from './pages/WeatherPanel'

class WeatherApp extends Component {

  state = {
    location: '北京'
  }

  render() {
    return (
      <div className="weather-app">
        <WeatherPanel location={this.state.location} />
      </div>
    )
  }
}

export default WeatherApp