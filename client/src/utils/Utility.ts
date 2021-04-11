/**
 * @param timeStamp A timestamp of when the object was created
 * @returns A human readable format of the relative time the object was created
 */
export const getRelativeTime = (timeStamp: number): string => {
    const currentDate = new Date().getTime();
    const timeDifference = currentDate - timeStamp;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Define createdAt and unit
    let createdAt, unit;

    if (timeDifference > day * 365) {
        createdAt = timeDifference / (day * 365);
        unit = 'year';
    } else if (timeDifference > day * 30) {
        createdAt = timeDifference / (day * 30);
        unit = 'month';
    } else if (timeDifference > day * 7) {
        createdAt = timeDifference / (day * 7);
        unit = 'week';
    } else if (timeDifference > day) {
        createdAt = timeDifference / day;
        unit = 'day';
    } else if (timeDifference > hour) {
        createdAt = timeDifference / hour;
        unit = 'hour';
    } else if (timeDifference > minute) {
        createdAt = timeDifference / minute;
        unit = 'minute';
    } else {
        createdAt = timeDifference / second;
        unit = 'second';
    }

    createdAt = Math.round(createdAt);
    if (createdAt > 1) unit = `${unit}s`;

    return `${createdAt} ${unit} ago`;
};

/**
 * @param element A DOM element
 * @returns the sum of the elements left and width in relation to the browser window
 */
export const getDOMElementRelativeWidth = (element: HTMLElement): number => {
    const { left, width } = element.getBoundingClientRect();
    return left + width;
};

/**
 * @param str A non empty string
 * @returns A string with a capitalized first letter
 */

export const capFirstLetter = (str: string) => {
    if (!str.length) throw new Error('input string cannot be empty');
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};
