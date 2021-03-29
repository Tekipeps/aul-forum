interface Theme {
    purple: string;
    blue: string;
    grey: string;
    user_color: string;
    notification_bgcolor: string;
    form_purple_btn: string;
    body: {
        bgcolor: string;
        color: string;
    };
    navbar: {
        bgcolor: string;
        route_color: string;
    };
    home: {
        postnav_bgcolor: string;
        nav_link_color: string;
        searchbar_border: string;
        grey: string;
        searchicon_color: string;
        theme_toggler_border: string;
    };
}

const darkTheme: Theme = {
    purple: '#000',
    blue: '#6f6ffa',
    grey: '#333',
    notification_bgcolor: '#090',
    user_color: '#58a6ff',
    body: {
        bgcolor: '#101013',
        color: '#fff'
    },
    navbar: {
        bgcolor: '#10101a',
        route_color: '#fff'
    },
    form_purple_btn: '#00f',
    home: {
        postnav_bgcolor: '#101013',
        nav_link_color: '#aaa',
        searchbar_border: '#777',
        grey: '#aaa',
        searchicon_color: '#aaa',
        theme_toggler_border: '#777'
    }
};

const lightTheme: Theme = {
    purple: '#37173d',
    blue: '#00f',
    grey: '#aaa',
    notification_bgcolor: '#ccc',
    user_color: 'blue',
    body: {
        bgcolor: '#fff',
        color: '#000'
    },
    navbar: {
        bgcolor: '#fff',
        route_color: '#37173d'
    },
    form_purple_btn: '#37173d',
    home: {
        postnav_bgcolor: '#37173d',
        nav_link_color: '#fff',
        searchbar_border: '#37173d',
        grey: '#333',
        searchicon_color: '#37173d',
        theme_toggler_border: '#f5eb42'
    }
};

const getTheme = (theme: string) => {
    return theme === 'dark' ? darkTheme : lightTheme;
};

export default getTheme;
