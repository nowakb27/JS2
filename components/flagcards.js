const Flagcards = {
    props: ['countries'],
    template: `
    <div class="flag-cards">
      <div v-for="country in countries" :key="country.id" class="card" @click="showModal(country)">
        <img :src="country.image" :alt="country.title" />
        <div>{{ country.title }}</div>
      </div>
    </div>
  `,
    methods: {
        showModal(country) {
            this.$emit('show-modal', country);
        }
    }
};