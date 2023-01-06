# Nuxt Cookieconsent ([orestbida](https://github.com/orestbida/cookieconsent))

!! This module is just a nuxt module wrapper for the awesome cookieconsent library from orestbida !!

## Installation

1. Install the plugin -> `yarn install nuxt-cookieconsent`
2. Add the plugin to the nuxt config

    ```
    export default defineNuxtConfig({
        modules: ['nuxt-cookieconsent'],
    })
    ```

3. Configure the module - see below

## Configuration

Configure the plugin in the `nuxt.config.js`.

All the options are just a reference of the library config (please see the [library docs](https://github.com/orestbida/cookieconsent#all-configuration-options) for more information).

To help a bit with the styling a style option was added with which you can style the cookieconsent more easily (See [below](https://github.com/raphaelbernhart/nuxt-cookieconsent#consent-styling)).

## Consent Styling

There is a option called `styles` in the config you can use for styling your consent. The naming of the properties is the same as in the library [css file](https://github.com/orestbida/cookieconsent/blob/master/src/cookieconsent.css) just without the prepending `--cc-`. F.e if you want to change the main button background color you don't need to change the css file variable `--cc-btn-primary-bg` but just configure it in the `nuxt.config.js` under `cookieconsent -> styles -> btnPrimaryBg`.

## Nuxt Version Support

This plugin currently just supports Nuxt v3. If you need it to also support Nuxt v2 please take part of this [poll](https://github.com/raphaelbernhart/nuxt-cookieconsent/discussions/4https://)
