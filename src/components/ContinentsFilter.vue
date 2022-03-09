<template>
  <h3>Filtrar por continentes</h3>
  <div class="btn-group" role="group" aria-label="Basic example">
    <c-button :class="[(activeItem === btn.region)?'btn-primary':'btn-dark']"
      v-for="btn in buttons"
      :key="btn.name"
      :textButton="btn.name" 
       @click="filterEmit(btn.region)"
    ></c-button>
  </div>
</template>

<script>
import { ref } from 'vue';
import CButton from '@/components/CButton.vue';
export default {
  props:['activeItem'],
  emits: ['updateFilter'],
  components: {
    CButton,
  },
  setup(props, context) {
    const filterEmit = (region) => {
      context.emit('updateFilter',region);
    }

    const buttons = ref([
      { name:'ALL', region: ''},
      { name:'AM', region: 'Americas'},
      { name:'EU', region: 'Europe'},
      { name:'AS', region: 'Asia'},
      { name:'OC', region: 'Oceania'},
      { name:'AF', region: 'Africa'},
      ])


    return {
      filterEmit,
      buttons
    }
  }
}
</script>