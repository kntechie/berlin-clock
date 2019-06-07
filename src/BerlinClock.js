import React from 'react';
import './BerlinClock.css';

const MINUTES_LIGHT_ON = "Y";
const LIGHT_OFF = "O";

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
    return this.getOnOffStatus(4, this.state.minutes % 5, MINUTES_LIGHT_ON);
  }

  topMinutes() {
    return this.getOnOffStatus(11, Math.floor(this.state.minutes / 5), MINUTES_LIGHT_ON).replace(/YYY/g, 'YYR');
  }

  getOnOffStatus(lamps, lightsOn, onSign){
    var status = "", i = 0;
    for (i = 0; i < lightsOn; i++) {
      status += onSign;
    }
    for (i = 0; i < (lamps - lightsOn); i++) {
      status += LIGHT_OFF;
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
