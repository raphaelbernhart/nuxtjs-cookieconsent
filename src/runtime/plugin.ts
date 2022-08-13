/* eslint-disable import/order */
import { defineNuxtPlugin } from '#app';
import options from '#nuxt-cookieconsent/options';
import 'vanilla-cookieconsent/dist/cookieconsent.js';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import { createHooks } from 'hookable';
import cssHelper from './cssHelper';

export type HookTypes = {
    'cc:accepted': (value: string | Record<string, any>) => void;
    'cc:change': (value: string | Record<string, any>) => void;
    'cc:firstAction': (value: string | Record<string, any>) => void;
};

export default defineNuxtPlugin((nuxtApp) => {
    try {
        if (process.server) return;

        // Initialization Variables
        const cookieconsent = (window as any).initCookieConsent();
        const hooks = createHooks<HookTypes>();

        if (!options.languages || Object.values(options.languages).length === 0)
            throw new Error(
                '[Nuxt Cookieconsent] You have to define the languages property',
            );

        // Enable/Disable darkmode
        if (options.styles?.dark?.enabledByDefault)
            document.body.classList.add('c_darkmode');
        else if (!options.styke?.dark?.enabledByDefault)
            document.body.classList.remove('c_darkmode');

        const ccOptions: Record<string, any> = {};
        const optionsArray = Object.entries(options);

        for (let i = 0; i < optionsArray.length; i++) {
            const key = optionsArray[i][0];
            const value = optionsArray[i][1];
            ccOptions[key] = value;
        }

        // Style CC
        cssHelper(options.styles);

        // CC Functions
        ccOptions.toggleDarkMode = () => {
            document.body.classList.toggle('c_darkmode');
        };

        // CC Hooks
        ccOptions.onAccept = (data) => {
            hooks.callHook('cc:accepted', data);
        };
        ccOptions.onChange = (data) => {
            hooks.callHook('cc:change', data);
        };
        ccOptions.onFirstAction = (data) => {
            hooks.callHook('cc:firstAction', data);
        };

        cookieconsent.hooks = hooks;

        // Run CC
        cookieconsent.run(ccOptions);

        return {
            provide: {
                cookieconsent,
            },
        };
    } catch (err) {
        console.error(err);
    }
});
