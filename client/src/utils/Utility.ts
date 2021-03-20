/**
 * A wrapper class containing all the utility methods used in /client
 */

class Utility {
    /**
     *
     * @param {string} url - A string of the full url path. e.g home/most-recent
     * @returns {string} baseUrl - A string of the base url. i.e home
     */
    static getBaseURL = (url: string): string => {
        const slashIndex: number = url.indexOf('/');
        const end: number = slashIndex === -1 ? url.length : slashIndex;
        return url.charAt(0).toUpperCase() + url.slice(1, end);
    };
}

export default Utility;
