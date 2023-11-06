const app = Vue.createApp(App);

app.component('search-bar', Searchbar);
app.component('flag-cards', Flagcards);

app.mount('#app');
