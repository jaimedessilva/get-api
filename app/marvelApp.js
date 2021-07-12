/**
 * Projeto Get API
 * Author: Jaime Dev
 * Repo: https://github.com/jaimedessilva
 */

const getApi = (() => {

    let endpoint = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=`
    let url = new TokenApi().marvelUrl(endpoint)
    let op = new TokenApi().options

    fetch(url, op)
        .then(res => res.json())
        .then(data => {

            let card = ''
            let lista = data.data.results
            for (let value of lista) {

                let img = `${value.thumbnail.path}.${value.thumbnail.extension}`

                card += `<li class="gallery__card">`
                card += `<img src="${img}" class="gallery__thumb">`
                card += `<a href=""><h2 class="gallery__title">${value.name}</h2>`
                card += `</li>`

            }
            document.querySelector('.gallery').innerHTML = card

        }).catch(error => {
            console.log(error)
        })
})()