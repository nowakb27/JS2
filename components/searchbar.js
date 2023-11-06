const Searchbar = {
    data() {
        return {
            searchQuery: ''
        };
    },
    methods: {
        searchCountries() {
            this.$emit('search', this.searchQuery);
        }
    },
    template: `
    <div class="search-bar" style="text-align: center;">
      <input
        type="text"
        v-model="searchQuery"
        @input="searchCountries"
        placeholder="Search for a country"
      />
    </div>
  `
};






