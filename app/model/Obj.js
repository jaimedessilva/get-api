class Obj {
    constructor(obj) {
        this.id = obj.id
        this.name = obj.name
        this.fullName = obj.name
        this.img = obj.image.url
        this.publisher = obj.biography.publisher
        this.race = obj.appearance.race
        this.power = obj.powerstats.power
        this.ocupation = obj.work.ocupation
        this.work = obj.work.base

    }
    toThis() {
        console.log(this)
    }
}