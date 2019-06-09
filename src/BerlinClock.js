import React from 'react';
import moment from 'moment';
import constants from './utils/constants';
import Seconds from './components/Seconds';
import Minutes from './components/Minutes';
import Hours from './components/Hours';

class BerlinClock extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          hours: 0,
          minutes: 0,
          seconds: 0
      }
      this.seconds = React.createRef();
      this.minutes = React.createRef();
      this.hours = React.createRef();
  }

  setTime(hours, minutes, seconds) {
    this.setState({
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }

  convertDigitalToBerlinTime(){
    console.log(this.seconds.current.seconds());
    console.log(this.minutes.current.topMinutes());
    console.log(this.minutes.current.bottomMinutes());
    console.log(this.hours.current.topHours());
    console.log(this.hours.current.bottomHours());
  }

  updateClock(time){
    const [hours, minutes, seconds] = time ? time.split(':') : moment().format('H:m:s').split(':');
    this.setTime(hours, minutes, seconds);
    this.convertDigitalToBerlinTime();
  }

  componentDidMount() {
      this.intervalId = setInterval(() => this.updateClock(), constants.ONE_SECOND);
  }

  componentWillUnmount() {
      clearInterval(this.intervalId);
  }

  render() {
      return (
        <div id="berlinClock">
            <Seconds ref={this.seconds} seconds = {this.state.seconds}/>
            <Hours ref={this.hours} hours = {this.state.hours}/>
            <Minutes ref={this.minutes} minutes = {this.state.minutes}/>
        </div>
      );
  }

}

export default BerlinClock;
