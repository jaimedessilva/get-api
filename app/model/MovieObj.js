class MovieObj {
    constructor(data) {
        if (data !== undefined) {
            this.id = data.id
            this.imdbId = data.imdb_id
            this.poster = data.poster_path
            this.img = `https://image.tmdb.org/t/p/w300/${this.poster}`
            this.backdrop = data.backdrop_path
            this.genres = data.genres
            this.original = data.original_title
            this.title = data.title
            this.sinopse = data.overview
            this.imdb = data.vote_average
            this.list = []
        }
    }
    addList(obj) {
        this.list.push(obj)
    }
    getAll() {
        return this.list
    }
    toThis() {
        console.log(this)
    }
}