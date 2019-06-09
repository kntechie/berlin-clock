import React from 'react';
import constants from '../utils/constants';
import { isEven } from '../utils/clockUtils';

class Seconds extends React.Component {

    seconds() {
        return isEven(this.props.seconds) ? constants.YELLOW_LAMP : constants.LAMP_OFF;
    }

    render() {
        return (
            <div id="secondsLamp">
                <div className={"light " + (this.seconds() === constants.YELLOW_LAMP ? constants.LAMP_ON_CLASS : constants.LAMP_OFF_CLASS)}></div>
            </div>
        );
    }

}

export default Seconds;