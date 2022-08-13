import { defineNuxtPlugin } from "#app";
import options from "#nuxt-cookieconsent/options";
import "vanilla-cookieconsent/dist/cookieconsent.js";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { createHooks } from "hookable";
import cssHelper from "./cssHelper.mjs";
export default defineNuxtPlugin((nuxtApp) => {
  try {
    if (process.server)
      return;
    const cookieconsent = window.initCookieConsent();
    const hooks = createHooks();
    if (!options.languages || Object.values(options.languages).length === 0)
      throw new Error(
        "[Nuxt Cookieconsent] You have to define the languages property"
      );
    if (options.styles?.dark?.enabledByDefault)
      document.body.classList.add("c_darkmode");
    else if (!options.styke?.dark?.enabledByDefault)
      document.body.classList.remove("c_darkmode");
    const ccOptions = {};
    const optionsArray = Object.entries(options);
    for (let i = 0; i < optionsArray.length; i++) {
      const key = optionsArray[i][0];
      const value = optionsArray[i][1];
      ccOptions[key] = value;
    }
    cssHelper(options.styles);
    ccOptions.toggleDarkMode = () => {
      document.body.classList.toggle("c_darkmode");
    };
    ccOptions.onAccept = (data) => {
      hooks.callHook("cc:accepted", data);
    };
    ccOptions.onChange = (data) => {
      hooks.callHook("cc:change", data);
    };
    ccOptions.onFirstAction = (data) => {
      hooks.callHook("cc:firstAction", data);
    };
    cookieconsent.hooks = hooks;
    cookieconsent.run(ccOptions);
    return {
      provide: {
        cookieconsent
      }
    };
  } catch (err) {
    console.error(err);
  }
});
