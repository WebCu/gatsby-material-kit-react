import React, { Component } from "react"
import { Fetch } from "react-request"

export default class Weather extends Component {
  render() {
    return (
      <Fetch
        url="http://api.openweathermap.org/data/2.5/weather?q=Shanghai&appid=e042a2d981bfc457eff58508588d2f5b"
        method="GET"
      >
        {({ fetching, failed, data }) => {
          if (fetching) {
            return <div>Loading data...</div>
          }
          if (failed) {
            return <div>CLOUD</div>
          }
          if (data) {
            return (
              <div>
                {Math.floor(data.main.temp_min - 273)}
                {"℃~"}
                {Math.floor(data.main.temp_max - 273)}
                {"℃"}
              </div>
            )
          }

          return null
        }}
      </Fetch>
    )
  }
}
