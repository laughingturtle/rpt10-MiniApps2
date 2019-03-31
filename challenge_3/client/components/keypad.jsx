import React from 'react';


class Keypad extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }

  }

render(){
    return (
      <div>
        <div className="keypad">
          <div className="keypadRow">
            <div id="s1" className="sq">1</div>
            <div id="s2" className="sq">2</div>
            <div id="s3" className="sq">3</div>
          </div>
          <div className="keypadRow">
            <div id="s4" className="sq">4</div>
            <div id="s5" className="sq">5</div>
            <div id="s6" className="sq">6</div>
          </div>
          <div className="keypadRow">
            <div id="s7" className="sq">7</div>
            <div id="s8" className="sq">8</div>
            <div id="s9" className="sq">9</div>
          </div>
          <div className="keypadRow">
            <div id="s11" className="non"></div>
            <div id="s10" className="sq">10</div>
            <div id="s12" className="non"></div>
            </div>
        </div>
      </div>
    )
  }
}

export default Keypad;