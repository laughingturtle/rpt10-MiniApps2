import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Chart from './components/chart.jsx';
import parseJson from './utils/parsejson.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['12/01/17', '12/02/17', '12/03/17', '12/04/17', '12/05/17', '12/06/17', '12/07/17', '12/08/17', '12/09/17', '12/10/17',
        '12/11/17', '12/12/17', '12/13/17', '12/14/17', '12/15/17', '12/16/17', '12/17/17', '12/18/17', '12/19/17', '12/20/17',
        '12/21/17', '12/22/17', '12/23/17', '12/24/17', '12/25/17', '12/26/17', '12/27/17', '12/28/17', '12/29/17', '12/30/17', '12/31/17' ],
        datasets: [
          {
            label: 'Bitcoin Daily Closing Price in Dollar',
            fill: false,
            data: [],
            pointBackgroundColor:[
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb'
              ]
          }
        ]
      }
    }
    this.getDataApi = this.getDataApi.bind(this);
  }

  componentDidMount(){
   // console.log('chartData:', this.state.data)
    this.getDataApi();
  }

  getDataApi(){
    let that = this;
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.js?currency=USD&start=2017-12-01&end=2017-12-31')
    .then(function (response) {
     // console.log('api response: ', response);
      let parsedData = parseJson(response);
      parsedData = parsedData.map(function(each_element){
      return Number(each_element.toFixed(2));
      });
      console.log('my parsed data', parsedData);
      that.setState({
        chartData: {
          labels: ['12/01/17', '12/02/17', '12/03/17', '12/04/17', '12/05/17', '12/06/17', '12/07/17', '12/08/17', '12/09/17', '12/10/17',
          '12/11/17', '12/12/17', '12/13/17', '12/14/17', '12/15/17', '12/16/17', '12/17/17', '12/18/17', '12/19/17', '12/20/17',
          '12/21/17', '12/22/17', '12/23/17', '12/24/17', '12/25/17', '12/26/17', '12/27/17', '12/28/17', '12/29/17', '12/30/17', '12/31/17' ],
          fill: false,
          datasets: [
            {
              label: 'Bitcoin Daily Closing Price in Dollar',
              data: parsedData,
              pointBackgroundColor:[
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb',
              '#2d4b78',
              '#50abdb'
              ],
              pointRadius: 5,
              pointHoverRadius: 7
            }
          ]
        }
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  static defaultProps = {
    displayTitle: true,
    displayPosition: true
  }

  render(){
    console.log('data in state', this.state.chartData);
    // if(this.state.chartData.datasets.data !== 0 ){
    //   console.log('data in state', this.state.chartData.datasets.data)
    // }
    return (
      <div>
         {/* This is your react app. */}
         <Chart chartData={this.state.chartData} />
         <h6><i>Powered by CoinDesk</i></h6>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));