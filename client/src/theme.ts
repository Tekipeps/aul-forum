export interface ThemeType {
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
        post_content_color: string;
    };
}

const darkTheme: ThemeType = {
    purple: '#222',
    blue: '#6f6ffa',
    grey: '#444',
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
        searchbar_border: '1px solid #777',
        grey: '#aaa',
        searchicon_color: '#aaa',
        theme_toggler_border: '#777',
        post_content_color: '#ddd'
    }
};

const lightTheme: ThemeType = {
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
        searchbar_border: 'none',
        grey: '#333',
        searchicon_color: '#37173d',
        theme_toggler_border: '#f5eb42',
        post_content_color: '#222'
    }
};

const getThemeType = (ThemeType: string) => (ThemeType === 'dark' ? darkTheme : lightTheme);

export default getThemeType;
