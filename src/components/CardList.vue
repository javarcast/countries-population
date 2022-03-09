<template>
  <div class="row">
    <div class="col-12 text-center">
      <continents-filter :activeItem ="filterValue" @updateFilter="handleFilter"></continents-filter>
    </div>
    <div class="col-12 d-flex justify-content-center mt-4">
      <search-filter v-model:q="queryText"></search-filter>
    </div>
    
    <div v-for="(country, index) in countries"
      :key="index"
      class="col-12 col-md-4">
      <c-card :country="country"></c-card>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import CCard from '@/components/CCard.vue';
import ContinentsFilter from '@/components/ContinentsFilter.vue';
import SearchFilter from '@/components/SearchFilter.vue';

export default {
  components: {
    CCard,
    ContinentsFilter,
    SearchFilter,
  },
  setup() {
    const filterValue = ref('');
    const queryText = ref('');
    const store = useStore();

    store.dispatch('GET_COUNTRIES');
    
    const handleFilter = (ev) => {
      filterValue.value = ev;
    }

    const countries = computed(() => {
        return store.getters.filterCountries(
          {region: filterValue.value, text: queryText.value}
        );
      })
    
    const handleInput = () => {
      console.log('enter');
    }

    return {
      countries,
      handleFilter,
      queryText,
      filterValue,
    }
  }
}
</script>

<style>

</style>