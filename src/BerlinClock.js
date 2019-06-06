import React from 'react';
import './BerlinClock.css';

class BerlinClock extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      }
  }

  setTime(time) {
    this.setState({
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds()
    });
  }

  bottomMinutes() {
    return this.getOnOffStatus(4, this.state.minutes % 5);
  }

  getOnOffStatus(lamps, lightsOn){
    var status = "", i = 0;
    for (i = 0; i < (lamps - lightsOn); i++) {
      status += "O";
    }
    return status;
  }

  render() {

    return (
     <div id="berlinClock">
         
     </div>
    );

  }

}

export default BerlinClock;
