import React from 'react';
import constants from '../utils/constants';
import { getOnOffLamps } from '../utils/clockUtils';

class Hours extends React.Component {

    bottomHours() {
        return getOnOffLamps(4, this.props.hours % 5, constants.RED_LAMP);
    }

    topHours() {
        return getOnOffLamps(4, Math.floor(this.props.hours / 5), constants.RED_LAMP);
    }

    formHoursRow(row) {
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
                <div id="fiveHourRow">{this.formHoursRow(this.topHours())}</div>
                <div id="oneHourRow">{this.formHoursRow(this.bottomHours())}</div>
            </React.Fragment>
        );
    }

}

export default Hours;