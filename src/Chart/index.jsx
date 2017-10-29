import React, { Component } from 'react';

import { Bar } from 'react-chartjs-2';

class BarChart extends Component{
  constructor(props) {
    super(props);
    this.state = {
      barData:{
        labels: ['Tokyo', 'Kanagawa', 'Osaka', 'Kyoto', 'Fukuoka'],
        datasets: [
          {
            label:'Population',
            data:[
              13636222,
              9145572,
              8837812,
              2605731,
              5106707
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
            ]
          }
        ]
      }
    }
  }
  render() {
    return (
      <div className="chart">
        <div>
          <Bar
            data={this.state.barData}
            options={{
              maintainAspectRatio: false
            }}
            width={800}
            height={300}
          />
        </div>
      </div>
    )
  }
}

export default BarChart;
