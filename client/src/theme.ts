const darkTheme = {
    purple: '#111',
    blue: '#6f6ffa',
    grey: '#333',
    notification: '#090',
    navbar: {
        bgcolor: '#111',
        color: '#fff',
        linkColor: '#fff'
    },
    form: {
        purpleBtn: '#00f',
        headerText: '#aaa'
    },
    home: {
        navcolor: '#000',
        navlink: '#aaa',
        searchbarBorder: '#fff',
        grey: '#aaa',
        searchicon: '#aaa',
        themeToggler: 'grey'
    },
    bgcolor: '#000',
    bgtext: '#fff'
};

const lightTheme = {
    purple: '#37173d',
    blue: '#00f',
    grey: '#aaa',
    notification: '#b19cd9',
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
