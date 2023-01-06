import {
    defineNuxtModule,
    addPlugin,
    createResolver,
    addTemplate,
} from '@nuxt/kit';
import defaultModuleConfiguration from './config/defaultModuleConfiguration';

export declare interface ModuleOptions {
    /** Show the cookie consent as soon as possible (otherwise you need to manually call the .show() method) [boolean] */
    autorun: boolean;
    /** Number of milliseconds before showing the consent-modal [number] */
    delay: number;
    /**
     * @defaultvalue 'opt-in'
     * @description
     * - opt-in: scripts will not run unless consent is given (gdpr compliant)
     * - opt-out: scripts — that have categories set as enabled by default — will run without consent, until an explicit choice is made [string] */
    mode: 'opt-in' | 'opt-out';
    /** Number of days before the cookie expires (182 days = 6 months) [number] */
    cookie_expiration: number;
    /** Specify if you want to set a different number of days - before the cookie expires - when the user accepts only the necessary categories [number] */
    cookie_necessary_only_expiration: number;
    /** Path where the cookie will be set */
    cookie_path: string;
    /** Specify your domain (will be grabbed by default) or a subdomain */
    cookie_domain: string;
    /** SameSite attribute */
    cookie_same_site: string;
    /** Enable if you want the value of the cookie to be rfc compliant */
    use_rfc_cookie: boolean;
    /** Enable if you want to block page navigation until user action (check faq for a proper implementation) */
    force_consent: boolean;
    /** Specify this option to enable revisions. Check below for a proper usage */
    revision: number;
    /** Specify one of the languages you have defined (can also be dynamic): 'en', 'de' ... */
    current_lang: string;
    /** Language auto-detection strategy. Null to disable (default), "browser" to get user's browser language or "document" to read value from <html lang="..."> of current page. If language is not defined => use specified current_lang */
    auto_language: string;
    /** Enable if you want to automatically delete cookies when user opts-out of a specific category inside cookie settings */
    autoclear_cookies: boolean;
    /** Enable if you want to easily manage existing <script> tags. Check manage third party scripts */
    page_scripts: boolean;
    /** Enable if you want to remove the html cookie tables (but still want to make use of autoclear_cookies) */
    remove_cookie_tables: boolean;
    /** Enable if you don't want the plugin to run when a bot/crawler/webdriver is detected */
    hide_from_bots: boolean;
    /** Customization option which allows to choose layout, position and transition. Check layout options & customization */
    gui_options: {
        consent_modal: {
            layout: string;
            transition: string;
            position: string;
        };
    };
    /** Method run on:
    1. the moment the cookie consent is accepted
    2. after each page load (if cookie consent has already been accepted) */
    onAccept: Function;
    /** Method run whenever preferences are modified (and only if cookie consent has already been accepted) */
    onChange: Function;
    /** Method run only once when the user makes the initial choice (accept/reject) */
    onFirstAction: Function;
    /** Languages is an object which basically holds all of the text/html of your cookie modals in different languages. In here you can define cookie categories, cookie tables, opt-in/out toggle for each category and more. For each language, a consent_modal object and a settings_modal object must be configured. */
    languages: object;
    /** Style the Cookie Consent */
    styles: {
        bg?: string;
        text?: string;
        btnPrimaryBg?: string;
        btnPrimaryText?: string;
        btnPrimaryHoverBg?: string;
        btnSecondaryBg?: string;
        btnSecondaryText?: string;
        btnSecondaryHoverBg?: string;
        dark?: {
            enabledByDefault: true;
            bg: string;
            text: string;
            btnPrimaryBg: string;
            btnPrimaryText: string;
        };
    };
}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: 'nuxtjs-cookieconsent',
        configKey: 'cookieconsent',
    },
    defaults: defaultModuleConfiguration as ModuleOptions,
    setup(options, nuxt) {
        // Export Module Options to be able to use it in plugin
        const mockTemplate = addTemplate({
            filename: 'nuxtjs-cookieconsent-options.mjs',
            getContents() {
                return `export default ${JSON.stringify(options)}`;
            },
        });
        nuxt.options.alias['#nuxtjs-cookieconsent/options'] = mockTemplate.dst;

        const { resolve } = createResolver(import.meta.url);
        addPlugin(resolve('./runtime/plugin'));
        nuxt.options.css.push('vanilla-cookieconsent/dist/cookieconsent.css');
    },
});
