import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        tooltip: {
            enabled: false,
            offsetX: 0
          },
          
          title: {
            text: undefined,
            rotate: -90,
            offsetY: 0,
            offsetX: 0,
            style: {
              color: undefined,
              fontSize: '11px',
              fontFamily: undefined,
              cssClass: 'apexcharts-yaxis-title'
            }
          },
          chart: {
            animations: {
              enabled: true,
              easing: 'linear', // linear, easeout, easein, easeinout, swing, bounce, elastic
              speed: 800,
              animateGradually: {
                delay: 150,
                enabled: true
              },
              dynamicAnimation: {
                enabled: true,
                speed: 350
              }
            }
        }
      },
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

export default Donut;