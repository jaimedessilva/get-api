/**
 * Projeto Get API
 * Author: Jaime Dev
 * Repo: https://github.com/jaimedessilva/get-api
 */

//Api
let token = new TokenApi()
let op = token.options()
let url = token.superHeroUrl('https://superheroapi.com/api.php/')
let poke = 'https://pokeapi.co/api/v2/pokemon'
let msg = 'Ops..., ñ foi possivel processar a sua requisição'
let range = document.querySelector('.qtd')


//Search
let search = document.querySelector('.inputsearch')
let search1 = document.querySelector('.inputsearch')
let ul = document.querySelector('.gallery')
//let bt = document.querySelector('button')
let open = document.querySelector('.gallery__title')
let closePopup = document.querySelector('.close_button')
let popup = document.querySelector('.content-popup')
let detail = document.querySelector('.content__detail')
let param = ''


//Eventos
search.addEventListener('keyup', (e) => {
    e.preventDefault()
        //console.log(range)
    if (e.keyCode === 13 && search.value !== '') {
        param = search.value
        heroByName(param)
    } else if (search.value === '') {
        alert('Voce deve digitar um valor')
    }
})
range.addEventListener('change', (e) => {
    e.preventDefault()
    let num = Number(range.value)
    heroById(num)
})

//Top    
const toTopPage = () =>{
    ul.scrollIntoView(true)
} 
//Botton
const toDownPage = () =>{
   ul.scrollIntoView(false)
} 
//view
const toViewpage = () =>{
    ul.scrollIntoView()
}
closePopup.addEventListener('click', () => popup.style.display = 'none')

//Render View List Obj
const renderView = (obj, type) => {

    let html = ''

    html += `<li class="gallery__card">`
    html += `<img class="gallery__thumb" src="${obj.img}" >`
    html += `<a class="gallery__title" onclick="renderDetail(${obj.id})">${obj.name}`
    html += `<br>(${obj.publisher})</a></li>`
    
    if (type === 'id') return ul.innerHTML += html
    else if (type === 'name')  return ul.innerHTML = html
}
const renderDetail = (obj_id) => {

    popup.style.display = 'flex'
    popup.style.top = ul.scrollIntoView()
    
    
    fetch(`${url}/${obj_id}`)
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            obj = new Obj(data)
            
            //console.log(obj)
            detail.innerHTML = ''

            let html = ''

            html += `<img src="${obj.img}" />`
            html += `<li>#${obj.id}</li>`
            html += `<li>Name: ${obj.name}</li>`
            html += `<li>Raça: ${obj.race}</li>`
            html += `<li>Poder: ${obj.power}</li>`
            html += `<li>Editora: ${obj.publisher}</li>`
            html += `<li>Trabalho: ${obj.ocupation}</li>`
            html += `<li>Ocupação: ${obj.work}</li>`
            html += '<ul>'

            detail.innerHTML += html
        })
}

//Endpoint API By ID
const heroById = (range) => {
    let type = 'id'
    if (range === 0 || range === undefined) range = 10

    //console.log(range)
    for (let i = 1; i < range; i++) {

        fetch(`${url}/${i}`)
            .then(res => res.json())
            .then(data => {
                
                let obj = new Obj(data)
                return renderView(obj,type)
            
            }).catch(error => console.error(msg, error))
    }
}; heroById()

//Endpoint Search Name
const heroByName = (nome) => {
    
    let type = 'name'
    
    fetch(`${url}/search/${nome}`)
        .then(res => res.json())
        .then(data => {
            for (let obj of data.results) {
                hero = new Obj(obj)
                return renderView(hero,type)
            }
        }).catch(error => {
            console.error('Falha na requisição', error)
            alert('Personagem ñ encontrado')
        })
    search.value = ''
}