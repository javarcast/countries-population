<template>
  <div class="container">
    <h1 class="text-center">Paises API</h1>
    <card-list></card-list>
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue';

export default {
  name: 'App',
  components: {
    CardList,
  }
}
</script>
