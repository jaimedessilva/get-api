class TokenApi {
    constructor(url) {
        this.url = url
    }
    marvelUrl(url) {
        //let ts = new Date().getTime()
        const prikey = 'b60d5d7f0eea3ac804b61d68a579a7fc1886e994'
        const pkey = 'd56cdf9c9a47754595aa79b26fbc4a27'
        const hash = md5(1 + prikey + pkey)

        return `${url}${pkey}&hash=${hash}`
    }

    superHeroUrl(url) {
        let token = '4104558029567560'
        return `${url}${token}`
    }

    moviePopularUrl(url, numPage) {
        numPage === undefined ? numPage = 1 : numPage
        let token = '?api_key=892b6a5ffce82f15f4c01016ec167d24'
        return `${url}upcoming/${token}&page=${numPage}`
    }
    redTub(){
    return this.url = `https://api.redtube.com/?data=redtube.Videos.searchVideos&output=json&search=hard&tags[]=Teen&thumbsize=medium`
    }

    headers() {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Basic');
        headers.append('Origin', 'http://http://127.0.0.1:5502');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS');
        headers.append('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

        return headers
    }
    options() {
        return {
            mode: 'cors',
            method: 'GET',
            redirect: 'follow',
            catch: 'default',
            headers: this.headers()
        }
    }
}