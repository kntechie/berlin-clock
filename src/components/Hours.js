import React from 'react';
import constants from '../utils/constants';
import { getOnOffLamps, modulo5, divide5 } from '../utils/clockUtils';

class Hours extends React.Component {

    bottomHours() {
        return getOnOffLamps(constants.TOTAL_SINGLE_HOURS_LAMP, modulo5(this.props.hours));
    }

    topHours() {
        return getOnOffLamps(constants.TOTAL_FIVE_HOURS_LAMP, Math.floor(divide5(this.props.hours)));
    }

    formHoursRow(row) {
        if(row){
            let lamps = row.split("");
            const rows = lamps.map((lamp, index) => {
                return <div key={index} className={"light " + (lamp === constants.RED_LAMP ? constants.LAMP_ON_CLASS : constants.LAMP_OFF_CLASS)}></div>;
            });
            return rows;
        } 
    }

    render() {
        return (
            <React.Fragment>
                <div id="fiveHourRow">{this.formHoursRow(this.topHours())}</div>
                <div id="oneHourRow">{this.formHoursRow(this.bottomHours())}</div>
            </React.Fragment>
        );
    }

}

export default Hours;