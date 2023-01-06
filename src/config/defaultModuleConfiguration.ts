export default {
    autorun: true,
    autoclear_cookies: true,
    force_consent: false,
    languages: {
        en: {
            consent_modal: {
                title: 'I use cookies',
                description:
                    'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only upon approval. <a aria-label="Cookie policy" class="cc-link" href="#">Read more</a>',
                primary_btn: {
                    text: 'Accept',
                    role: 'accept_all',
                },
                secondary_btn: {
                    text: 'Settings',
                    role: 'settings',
                },
            },
            settings_modal: {
                title: 'Cookie preferences',
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                cookie_table_headers: [
                    { col1: 'Name' },
                    { col2: 'Domain' },
                    { col3: 'Expiration' },
                    { col4: 'Description' },
                    { col5: 'Type' },
                ],
                blocks: [
                    {
                        title: 'Cookie usage',
                        description:
                            'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want.',
                    },
                    {
                        title: 'Strictly necessary cookies',
                        description:
                            'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true,
                        },
                    },
                    {
                        title: 'Analytics cookies',
                        description:
                            'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you.',
                        toggle: {
                            value: 'analytics',
                            enabled: false,
                            readonly: false,
                        },
                        cookie_table: [
                            {
                                col1: '^_ga',
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'description ...',
                                col5: 'Permanent cookie',
                                is_regex: true,
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 day',
                                col4: 'description ...',
                                col5: 'Permanent cookie',
                            },
                        ],
                    },
                    {
                        title: 'More information',
                        description:
                            'For any queries in relation to my policy on cookies and your choices, please <a class="cc-link" href="https://raphaelbernhart.at">contact me</a>.',
                    },
                ],
            },
        },
    },
    gui_options: {
        consent_modal: {
            layout: 'cloud',
            transition: 'slide',
            position: 'bottom left',
        },
    },
    styles: {
        dark: {
            enabledByDefault: true,
            bg: 'black',
            text: 'white',
            btnPrimaryBg: 'white',
            btnPrimaryText: 'black',
        },
        bg: 'orange',
        text: 'black',
        btnPrimaryBg: 'white',
        btnPrimaryText: 'black',
        btnPrimaryHoverBg: 'lightgray',
        btnSecondaryBg: 'lightgray',
        btnSecondaryText: 'black',
    },
};
