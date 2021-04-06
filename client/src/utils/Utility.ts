/**
 * @param createdAt A timestamp of when the object was created
 * @returns A human readable format of the relative time the object was created
 */
export const getRelativeTime = (createdAt: number): string => {
    //TODO: Optimise this method so it can return more specific time formats like 1hour 30minutes ago and handle singular/plurals i.e display 1 minute ago instead of 1 minutes ago without any libaries
    const currentDate = new Date().getTime();
    const timeDifference = currentDate - createdAt;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Define readableFormat and units
    let readableFormat, units;

    // If there are years
    if (timeDifference > day * 365) {
        readableFormat = timeDifference / (day * 365);
        units = 'years';
    }

    // If there are months
    else if (timeDifference > day * 30) {
        readableFormat = timeDifference / (day * 30);
        units = 'months';
    }

    // If there are weeks
    else if (timeDifference > day * 7) {
        readableFormat = timeDifference / (day * 7);
        units = 'weeks';
    }

    // If there are days
    else if (timeDifference > day) {
        readableFormat = timeDifference / day;
        units = 'days';
    }

    // If there are hours
    else if (timeDifference > hour) {
        readableFormat = timeDifference / hour;
        units = 'hours';
    }

    // If there are minutes
    else if (timeDifference > minute) {
        readableFormat = timeDifference / minute;
        units = 'minutes';
    }

    // Otherwise, use seconds
    else {
        readableFormat = timeDifference / second;
        units = 'seconds';
    }

    return `${Math.round(readableFormat)} ${units} ago`;
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
