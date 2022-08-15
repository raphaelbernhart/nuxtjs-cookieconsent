import { Hookable } from 'hookable';

export interface CookieConsent {
    accept: (
        acceptedCategories: Array<string> | string,
        rejectedCategories: Array<string> | string,
    ) => void;
    /**
     * @see https://github.com/orestbida/cookieconsent#api-methods
     */
    allowedCategory: (string) => void;
    eraseCookies: (
        cookieNames: Array<string>,
        path?: string,
        domains?: Array<string>,
    ) => void;
    get: (type: string) => unknown;
    getConfig: (type: string) => unknown;
    getUserPreferences: (
        acceptType: 'all' | 'necessary' | 'custom',
        acceptedCategories: Array<string>,
        rejectedCategories: Array<string>,
    ) => unknown;
    hide: () => void;
    hideSettings: () => void;
    hooks: Hookable;
    loadScript: (
        path: string,
        callback: Function,
        customAttributes: Record<string, string>,
    ) => void;
    // run: (string) => void;
    /**
     * @example
     * // Set cookie's "data" field to whatever the value of the `value` prop. is
     * cookieconsent.set('data', {value: {id: 21, country: "italy"}});
     */
    set: (string, value: Record<string, any>) => void;
    show: (optionalDelay: any, createModal: any) => void;
    showSettings: (optionalDelay: any) => void;
    updateLanguage: (language: string, forceUpdate: boolean) => void;
    updateScripts: () => void;
    /**
     * @description If cookie exists and has non empty ('') value => return true, otherwise false.
     * @example
     * // Example: check if '_gid' cookie is set
     * if (!cookieconsent.validCookie('_gid')) {
     *     // yoo, _gid cookie is not set, do something ...
     * };
     */
    validCookie: (cookieName: string) => void;
}
