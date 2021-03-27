const darkTheme = {
    purple: '#000',
    blue: '#6f6ffa',
    grey: '#333',
    notification: '#090',
    userColor: '#58a6ff',
    navbar: {
        bgcolor: '#10101a',
        color: '#fff',
        linkColor: '#fff'
    },
    form: {
        purpleBtn: '#00f',
        headerText: '#aaa'
    },
    home: {
        navcolor: '#101013',
        navlink: '#aaa',
        searchbarBorder: '#777',
        grey: '#aaa',
        searchicon: '#aaa',
        themeToggler: '#777'
    },
    bgcolor: '#101013',
    bgtext: '#fff'
};

const lightTheme = {
    purple: '#37173d',
    blue: '#00f',
    grey: '#aaa',
    notification: '#ccc',
    userColor: 'blue',
    navbar: {
        bgcolor: '#fff',
        color: '#000',
        linkColor: '#37173d'
    },
    form: {
        purpleBtn: '#37173d',
        headerText: '#444'
    },
    home: {
        navcolor: '#37173d',
        navlink: '#fff',
        searchbarBorder: '#37173d',
        grey: '#333',
        searchicon: '#37173d',
        themeToggler: '#f5eb42'
    },
    bgcolor: '#fff',
    bgtext: '#000'
};

const getTheme = (theme: string) => {
    return theme === 'dark' ? darkTheme : lightTheme;
};

export default getTheme;
