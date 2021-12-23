export const WINE_API_ENDPOINT = 'https://api.sampleapis.com/wines/';
export const BEER_API_ENDPOINT = 'https://api.sampleapis.com/beers/';

export const MEDIA_QUERY_END_POINT = {
    MOBILE: '640px',
    TABLET: '1280px',
    DESKTOP: '1920px',
    LARGE: '2560px'
}

export const ROUTES = {
    BEER: {
        MAIN: {
            ID: 0,
            PATH: '/beers',
            LABEL: '맥주',
            ORDER: 0
        },
        SUBS: [
            {
                ID: 0,
                PATH: '/ale',
                LABEL: '에일',
                ORDER: 0,
            },
            {
                ID: 1,
                PATH: '/stouts',
                LABEL: '스타우트',
                ORDER: 1
            }

        ]
    },
    WINES: {
        MAIN: {
            ID: 0,
            PATH: '/wines',
            LABEL: '와인',
            ORDER: 0
        },
        SUBS: [
            {
                ID: 0,
                PATH: '/ale',
                LABEL: '레드 와인',
                ORDER: 0,
            },
            {
                ID: 1,
                PATH: '/stouts',
                LABEL: '로즈 와인',
                ORDER: 1
            },
            {
                ID: 0,
                PATH: '/ale',
                LABEL: '스파클링 와인',
                ORDER: 0,
            },
            {
                ID: 1,
                PATH: '/stouts',
                LABEL: '화이트 와인',
                ORDER: 1
            },
            {
                ID: 0,
                PATH: '/ale',
                LABEL: '디저트 와인',
                ORDER: 0,
            },
            {
                ID: 1,
                PATH: '/stouts',
                LABEL: '포트 와인',
                ORDER: 1
            }

        ]
    }
}