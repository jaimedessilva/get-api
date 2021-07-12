/**
 * Projeto Get API
 * Author: Jaime Dev
 * Repo: https://github.com/jaimedessilva/get-api
 */

//let endpoint = new Url({ url: `https://api.themoviedb.org/3/movie/` })
let list = []
let obj = {}

const getMovieId = (() => {

    let range = 200;
    let card = ''
    for (let i = 1; i < range; i++) {
        let url = `${endpoint.urlBase}${i}${endpoint.token}`
        fetch(url, endpoint.options)
            .then((response) => {
                if (response.ok) return response.json()
            })
            .then((data) => {

                if (data !== undefined) {

                    let obj = new Obj(data)
                    let img = ''
                    if (obj.img !== null) {
                        img = obj.img
                    } else {
                        img = './img/movies.jpg'
                    }
                    console.log(img)
                    card += `<li class="gallery__card">`
                    card += `<img class="gallery__thumb" src="${obj.img}"/>`
                    card += `<a href="${url}"><h2 class="gallery__title">${obj.title}</h2></a></li>`
                    document.querySelector('.gallery').innerHTML = card
                }
            }).catch(error => {
                console.error(`Filme não encontrado: ${error}`)
            })
    }
})

const getMoviePopular = () => {

    let endpoint = new TokenApi()
    let url = endpoint.moviePopularUrl(`https://api.themoviedb.org/3/movie/`)
    let op = endpoint.options()

    obj = new MovieObj()
    //console.log(url, 2)


    fetch(url)
        .then(response => {
            return response.json()
        }).then(data => {
            let card = ''
            obj = data.results
            for (filme of data.results) {
                obj = new MovieObj(filme)

                card += `<li class="gallery__card">`
                card += `<img class="gallery__thumb" src="${obj.img}"/>`
                card += `<a href="${url}"><h2 class="gallery__title">${obj.original}</h2></a></li>`
            }
            document.querySelector('.gallery').innerHTML = card
        })
}
getMoviePopular();