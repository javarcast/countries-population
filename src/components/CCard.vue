<template>
  <div class="card my-4">
    <div class="card-body text-center " style="height:180px;">
      <h5 class="card-title">{{country.name.common}}</h5>
      <p class="text-center">

        <img class="img-fluid w-50" style="height:100px;" v-if="(typeof(country.flags))=== 'string'" :src="country.flags" :alt="country.name.common">
        <img class="img-fluid w-50" style="height:100px;" v-else :src="country.flags[0]" :alt="country.name.common">
      </p>
    </div>
    <ul class="list-group list-group-flush text-center">
      <li class="list-group-item d-flex justify-content-center">
        Region:
        <span class="badge badge-dark d-block mb-1 mx-1">
          {{country.region}}
        </span>
      </li>
      <li class="list-group-item d-flex justify-content-center">
        Capital:
        <span
          v-for="(capital, index) in country.capital"
          :key="index"
          class="badge badge-success d-block mb-1 mx-1"
          >
          {{capital}}
        </span>
      </li>
      <li class="list-group-item d-flex justify-content-center">
        Población:
        <span class="badge badge-warning d-block mb-1 mx-1">
          {{numberFormat(country.population)}}
        </span>
      </li>
      <li class="list-group-item d-flex justify-content-center">
        Currencies:
        <span
          v-for="(currency, index) in country.currencies"
          :key="index"
          class="badge badge-success d-block mb-1 mx-1"
          >
          {{currency.name}}
        </span>
      </li>
      <li class="list-group-item d-flex flex-wrap justify-content-center">
        Languages:
         <span
          v-for="(lang, index) in country.languages"
          :key="index"
          class="badge badge-info d-block mb-1 mx-1"
          >
          {{lang}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['country'],
  setup(props) {
    const numberFormat = (numb) => {
      return new Intl.NumberFormat("de-DE").format(numb);
    }


    return {
      numberFormat,
    };
  }

}
</script>

<style>

</style>