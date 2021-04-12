export interface ThemeType {
    purple: string;
    blue: string;
    grey: string;
    user_color: string;
    notification_bgcolor: string;
    form_purple_btn: string;
    body: {
        bgcolor: string;
        lighter_bgcolor: string;
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
    notification_bgcolor: 'linear-gradient(#118, #11a,#11d,#11a, #118)',
    user_color: '#58a6ff',
    form_purple_btn: '#00f',
    body: {
        bgcolor: '#101013',
        lighter_bgcolor: '#101019',
        color: '#fff'
    },
    navbar: {
        bgcolor: '#10101a',
        route_color: '#fff'
    },
    home: {
        postnav_bgcolor: '#101013',
        nav_link_color: '#aaa',
        searchbar_border: '1px solid #777',
        grey: '#aaa',
        searchicon_color: '#aaa',
        theme_toggler_border: '#777',
        post_content_color: '#bbb'
    }
};

const lightTheme: ThemeType = {
    purple: '#37173d',
    blue: '#00f',
    grey: '#aaa',
    notification_bgcolor: 'linear-gradient(#181, #191,#1a1,#191, #181)',
    user_color: 'blue',
    form_purple_btn: '#37173d',
    body: {
        bgcolor: '#fff',
        lighter_bgcolor: '#f7f7f7',
        color: '#000'
    },
    navbar: {
        bgcolor: '#fff',
        route_color: '#37173d'
    },
    home: {
        postnav_bgcolor: '#37173d',
        nav_link_color: '#fff',
        searchbar_border: '1px solid transparent',
        grey: '#333',
        searchicon_color: '#37173d',
        theme_toggler_border: '#f5eb42',
        post_content_color: '#333'
    }
};

const getThemeType = (ThemeType: string) => (ThemeType === 'dark' ? darkTheme : lightTheme);

export default getThemeType;
