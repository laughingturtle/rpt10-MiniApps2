import React from 'react'
import { Line } from 'react-chartjs-2'

class Chart extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log('ma props in chart.js: ', this.props);
    //let data = this.props.chartData.datasets[0].data;
    return(
      <div className="chart">
        <Line
          data={this.props.chartData}
          options={{
            title: {
              display: true,
              text: 'Bitcoin Closing Price in USD - December 2017',
              fontSize: 18,
              responsive: true
            },
            legend:{
              display: true,
              position: 'center'
            }
          }}
        />
      </div>
    )
  }
}


export default Chart;