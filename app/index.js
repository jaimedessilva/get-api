/**
 * Projeto Get API
 * Author: Jaime Dev
 * Repo: https://github.com/jaimedessilva/get-api
 */
const portifolio = 'https://jaimedessilva.github.io' 
let cards = document.querySelector('.cards')
let listLinks = []
let html = ''

//Links
const getLinks = () => {
    
    listLinks.push({url: "./pages/superhero.html", title: "S.Hero", img: "../img/superhero.jpg"})
    listLinks.push({url: "./pages/marvel.html",title: "Marvel Comics Herois", img: "../img/marvelcomics.jpg"})
    listLinks.push({url: "./pages/pokemon.html",title: "Pokemon", img: "../img/poke_api.jpg"})
    listLinks.push({url: "./pages/movies.html",title: "Filmes Api", img: "../img/ssj_filmes.png"})
    /* listLinks.push({url: "https://jaimedessilva.github.io/",title: "Portifolio", img: "../img/portifolio.jpg"}) */
    
    return listLinks
}

//Card API
const render = (() => { 
    
    listLinks = getLinks()
    
    for (link of listLinks){
        html += `<div class="card">
                    <div class="card-img">
                    <div class="card-text">
                        <img src="${link.img}" alt="${link.title}" class="img-size">
                    </div>
                    <h3>${link.title}</h3>
                  <p><a href="${link.url}">Acessar</p>
                  <p><a href="${portifolio}">Portifolio</a></p>
                </div>
            </div>`
    }
    cards.innerHTML = html
  
})()