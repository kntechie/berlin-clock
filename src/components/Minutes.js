import React from 'react';
import constants from '../utils/constants';
import { modulo5, divide5, getOnOffLamps } from '../utils/clockUtils';

class Minutes extends React.Component {

    bottomMinutes() {
        return getOnOffLamps(constants.TOTAL_SINGLE_MINUTES_LAMP, modulo5(this.props.minutes));
    }

    topMinutes() {
        return getOnOffLamps(constants.TOTAL_FIVE_MINUTES_LAMP, Math.floor(divide5(this.props.minutes))).replace(/YYY/g, 'YYR');
    }

    formMinutesRow(row){
        if(row){
            let lamps = row.split("");
            const rows = lamps.map((lamp, index) => {
                return <div key={index} className={"light " + (lamp === constants.YELLOW_LAMP || lamp === constants.RED_LAMP ? constants.LAMP_ON_CLASS : constants.LAMP_OFF_CLASS)}></div>;
            });
            return rows;
        } 
    }

    render() {
        return (
            <React.Fragment>
                <div id="fiveMinuteRow">{this.formMinutesRow(this.topMinutes())}</div>
                <div id="oneMinuteRow">{this.formMinutesRow(this.bottomMinutes())}</div>
            </React.Fragment>
        );
    }

}

export default Minutes;