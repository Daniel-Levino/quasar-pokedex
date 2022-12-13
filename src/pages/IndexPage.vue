<template>
  <q-card class="bg-dark" flat>
    <img style="max-width: 800px;" src="../assets/images/pokemons.png" alt=""/>
    <q-card-section class="text-center text-h1 text-weight-bolder text-yellow">
      quasar pokedex
    </q-card-section>
    <q-card-actions align="around">
      <q-btn to="/novos-pokemons" label="Novos Pokemos" size="xl" class="bg-white" color="white" text-color="red"/>
      <q-btn label="Minha Pokedex" size="xl" class="bg-white" color="white" text-color="red" @click="irPara"/>
    </q-card-actions>
  </q-card>
</template>

<script>

export default {
  name: 'IndexPage',
  data () {
    return {

    }
  },
  methods: {
    irPara() {
      this.$router.push('/minha-pokedex')
    }
  }
}
</script>
