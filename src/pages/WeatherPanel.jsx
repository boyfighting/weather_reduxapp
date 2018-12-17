import React, { Component } from 'react';

class WeatherPanel extends Component {

  state = {
    temperature: 'NA'
  }

  getTemperature = () => {
    const mockTemperature = Math.random() * 100;
    this.setState({
      temperature: mockTemperature
    })
  }

  render() {
    const { location } = this.props;
    return (
      <div className="weather-panel">
        <div>{location}的温度是: {this.state.temperature}</div>
        <button onClick={this.getTemperature}>Get Temperature</button>
      </div>
    );
  }
}

export default WeatherPanel;