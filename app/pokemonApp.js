/**
 * Projeto Get API
 * Author: Jaime Dev
 * Repo: https://github.com/jaimedessilva
 */

const url = 'https://pokeapi.co/api/v2/pokemon/'
const url_image = 'https://pokeres.bastionbot.org/images/pokemon'
const options = {
        method: 'GET',
        mode: 'cors',
        redirect: 'follow',
        catch: 'default'
    }
    
let card = document.querySelector('.pokemon')
let listGlobal = []

const renderObj = (obj, image) =>{

        html = ''
        html += `<li class="pokemon__card">`
        html += `<a data-name="${obj.name}">`
        html += `<img class="pokemon__thumb" src="${url_image}/${[image]}.png"/>`
        html += `<h2 class="pokemon__title" onclick="alert('${obj.name}')">${obj.name}</h2>`
        html += `</a></li>`;
        
        return  card.innerHTML += html
}
const getList = () => {
    return listGlobal
}
const getApi = (() => {
   
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        //console.log(data)
            
        let size = data.results.length
        
        for (let i = 1; i < size; i++) {
                pokemon = data.results[i]
                renderObj(pokemon, i) 
                listGlobal.push(pokemon)
            } 
            getList(listGlobal)
        
        }).catch(err => console.error(err))
        
})()
