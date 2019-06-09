import constants from './constants';

export const getOnOffLamps = (totalLamps, lampsOn) => {
    let row = "";
    let lampsOff = totalLamps - lampsOn;

    for (let i = 0; i < lampsOn; i++) {
      row += constants.YELLOW_LAMP;
    }

    for (let i = 0; i < lampsOff; i++) {
      row += constants.LAMP_OFF;
    }
    
    return row;
}

export const modulo5 = (number) => {
    return number % constants.FIVE;
}

export const divide5 = (number) => {
    return number / constants.FIVE;
}

export const isEven = (number) => {
    return number % constants.TWO;
}