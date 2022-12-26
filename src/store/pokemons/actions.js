import {POKEAPI} from "../../http/connetion";

export const ActionsGetPokemons = ({dispatch, commit}, payload) => {
    console.log(payload)
    return new Promise((resolve, reject) => {
        POKEAPI.get('pokemon/1')
        .then(response => {
            console.log(response.data);
            resolve(response.data)
        })
        .catch(error => {
            reject(error)
        })
    })
}
