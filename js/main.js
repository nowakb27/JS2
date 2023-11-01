const app = Vue.createApp(App);

app.component('search-bar', Searchbar);
app.component('country-list', Searchbar);

app.mount('#app');
