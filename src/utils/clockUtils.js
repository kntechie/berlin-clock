import constants from './constants';
import React from 'react';

export const getOnOffLamps = (totalLamps, lampsOn) => {
    let row = "";
    let lampsOff = totalLamps - lampsOn;

    for (let i = 0; i < lampsOn; i++) {
      row += constants.YELLOW_LAMP;
    }

    for (let j = 0; j < lampsOff; j++) {
      row += constants.LAMP_OFF;
    }
    
    return row;
}

export const formClockRow = (onStatus, onSign) => {
    if(onStatus){
        var lamps = onStatus.split("");
        lamps.map(function(section, index){
            return <div key={index} className={"light " + (section === onSign ? constants.LAMP_ON_CLASS : constants.LAMP_OFF_CLASS)}></div>
        });
    } 
}

export const modulo5 = (number) => {
    if(number){
        return number % constants.FIVE;
    } 
}

export const divide5 = (number) => {
    if(number){
        return number / constants.FIVE;
    } 
}

export const isEven = (number) => {
    if(number){
        return number % constants.TWO;
    } 
}