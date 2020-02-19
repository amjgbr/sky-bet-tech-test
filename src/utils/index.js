import {
    DECIMAL,
    FRACTION
} from '../constants';

// Accepts the array and key
export const groupBy = (array, key, lowerCaseGroup) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        if (lowerCaseGroup) {
            (result[(currentValue[key] || 'Miscellaneous').toLowerCase()] = result[(currentValue[key] || 'Miscellaneous').toLowerCase()] || []).push(
                currentValue
            );
        } else {
            (result[currentValue[key] || 'Miscellaneous'] = result[currentValue[key] || 'Miscellaneous'] || []).push(
                currentValue
            );
        }
        // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
        return result;
    }, {}); // empty object is the initial value for result object
};

export const lookUpSport = (data, eventId) => {
    const sport = Object.keys(data).filter(sport => {
        if (data[sport] && data[sport].find(event => event.eventId === eventId)) {
            return sport
        }
        return null;
    })[0];
    return sport
}

export const formatDate = (string) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
}


export const setPriceDisplay = (format, price) => {
    if (price) {
        switch(format) {
            case FRACTION:
                return `${price.den}/${price.num}`;
            case DECIMAL:
                return parseFloat(price?.decimal, 10).toFixed(2);
            default: 
                return 'No format provided'
        }
    } else {
        return "No price data"
    }
}