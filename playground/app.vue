<template>
    <div>
        <div>Nuxt module playground!</div>
        <button @click="deleteAllCookies()">Clear Cookies</button>
        <button @click="app.$cookieconsent.show()">Show Consent</button>
    </div>
</template>

<!-- eslint-disable no-console -->
<script setup>
import { useNuxtApp } from '#app';

const app = useNuxtApp();

function deleteAllCookies() {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
}

onMounted(() => {
    app.$cookieconsent.hooks.hook('cc:accepted', (data) => {
        console.debug('Accept All');
        console.debug(data);
    });
    app.$cookieconsent.hooks.hook('cc:change', (data) => {
        console.debug('Change');
        console.debug(data);
    });
    app.$cookieconsent.hooks.hook('cc:firstAction', (data) => {
        console.debug('First Action');
        console.debug(data);
    });
});
</script>
