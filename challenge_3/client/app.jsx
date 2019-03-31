import React from 'react'
import reactDOM from 'react-dom'
import Keypad from './components/keypad.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }

  }

componentDidMount(){

}

render(){
    return (
      <div>
         <h1>Bowl Me Over!</h1>
        <Keypad />
      </div>
    )
  }
}







reactDOM.render(<App/>, document.getElementById('app'));