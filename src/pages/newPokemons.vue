<template>
  <div class="text-h1">
    Novos Pokemons
  </div>
</template>
<script>
// import {api} from "../boot/axios"
import { mapActions, mapState } from "vuex";

export default {
  name: "NewPokemonsPage",
  data () { return {} },
  methods: {
    ...mapActions("pokemons", ["ActionsGetPokemons"]),
    getPokemons() {
      console.log("getPokemons");
    }
  },
  created() {
    this.ActionsGetPokemons("maracujá")
    // api.get('pokemon/1').then(resp => {
    //   console.log(resp.data.name);
    // }).catch()
  }
}
</script>