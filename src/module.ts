import {
    defineNuxtModule,
    addPlugin,
    createResolver,
    addTemplate,
    AddPluginOptions,
} from '@nuxt/kit';

// TODO - finish Module Options (https://github.com/orestbida/cookieconsent#key-features)
export declare interface ModuleOptions {
    /** Show the cookie consent as soon as possible (otherwise you need to manually call the .show() method) [boolean] */
    autorun: boolean;
    /** Number of milliseconds before showing the consent-modal [number] */
    delay: number;
    /** Accepted values:
    - opt-in: scripts will not run unless consent is given (gdpr compliant)
    - opt-out: scripts — that have categories set as enabled by default — will run without consent, until an explicit choice is made [string] */
    mode: string;
    /** Number of days before the cookie expires (182 days = 6 months) [number] */
    cookie_expiration: number;
    /** Specify if you want to set a different number of days - before the cookie expires - when the user accepts only the necessary categories [number] */
    cookie_necessary_only_expiration: number;
    /** Specify if you want to set a different number of days - before the cookie expires - when the user accepts only the necessary categories [number] */
    cookie_path: string;
    /** Specify if you want to set a different number of days - before the cookie expires - when the user accepts only the necessary categories [number] */
    cookie_domain: string;
    /** Specify if you want to set a different number of days - before the cookie expires - when the user accepts only the necessary categories [number] */
    cookie_same_site: string;
    /** Specify if you want to set a different number of days - before the cookie expires - when the user accepts only the necessary categories [number] */
    use_rfc_cookie: boolean;
    /** Specify if you want to set a different number of days - before the cookie expires - when the user accepts only the necessary categories [number] */
    force_consent: boolean;
    /** Specify if you want to set a different number of days - before the cookie expires - when the user accepts only the necessary categories [number] */
    revision: number;
    /** Specify if you want to set a different number of days - before the cookie expires - when the user accepts only the necessary categories [number] */
    current_lang: string;
    /** Specify if you want to set a different number of days - before the cookie expires - when the user accepts only the necessary categories [number] */
    auto_language: string;
    /** Specify if you want to set a different number of days - before the cookie expires - when the user accepts only the necessary categories [number] */
    autoclear_cookies: boolean;
    /** Specify if you want to set a different number of days - before the cookie expires - when the user accepts only the necessary categories [number] */
    page_scripts: boolean;
    /** Specify if you want to set a different number of days - before the cookie expires - when the user accepts only the necessary categories [number] */
    remove_cookie_tables: boolean;
    /** Specify if you want to set a different number of days - before the cookie expires - when the user accepts only the necessary categories [number] */
    hide_from_bots: boolean;
    /** Specify if you want to set a different number of days - before the cookie expires - when the user accepts only the necessary categories [number] */
    gui_options: object;
    /** Specify if you want to set a different number of days - before the cookie expires - when the user accepts only the necessary categories [number] */
    onAccept: Function;
    /** Specify if you want to set a different number of days - before the cookie expires - when the user accepts only the necessary categories [number] */
    onChange: Function;
    /** Specify if you want to set a different number of days - before the cookie expires - when the user accepts only the necessary categories [number] */
    onFirstAction: Function;
    /** Specify if you want to set a different number of days - before the cookie expires - when the user accepts only the necessary categories [number] */
    languages: object;
    /** Style the Cookie Consent */
    styles: {
        background: string;
        text: string;
        buttons: {
            main: {
                background: string;
                text: string;
                hover: string;
            };
            secondary: {
                background: string;
                text: string;
                hover: string;
            };
        };
        dark: {
            background: string;
            text: string;
            buttons: {
                main: {
                    background: string;
                    text: string;
                    hover: string;
                };
                secondary: {
                    background: string;
                    text: string;
                    hover: string;
                };
            };
        };
    };
}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: 'nuxt-cookieconsent',
        configKey: 'cookieconsent',
    },
    // defaults: {},
    setup(options, nuxt) {
        // Export Module Options
        const mockTemplate = addTemplate({
            filename: 'nuxt-cookieconsent-options.mjs',
            getContents() {
                return `export default ${JSON.stringify(options)}`;
            },
        });
        nuxt.options.alias['#nuxt-cookieconsent/options'] = mockTemplate.dst;

        const { resolve } = createResolver(import.meta.url);
        addPlugin(resolve('./runtime/plugin'), options as AddPluginOptions);
    },
});
