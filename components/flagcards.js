const Flagcards = {
    props: ['countries'],
    template: `
    <div class="flag-cards">
      <div v-for="country in countries" :key="country.id" class="card">
        <img :src="country.image" :alt="country.title" />
        <div>{{ country.title }}</div>
      </div>
    </div>
  `
};
