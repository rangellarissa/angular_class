class Spacecraft {
    constructor (public propulsor: string){}

    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

var ship = new Spacecraft('hiperdrive')
ship.jumpIntoHyperspace()

class MillenniumFalcon extends Spacecraft implements Containership {

    cargoContainers:number

    constructor(){
        super('hyperdrive')
        this.cargoContainers = 4
    }

    jumpIntoHyperspace(){
        if (Math.random() >= 0.5){
            super.jumpIntoHyperspace()
        }else{
            console.log('Failed to jump into hyperspace')
        }
    }
}

var falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

interface Containership {

    cargoContainers: number
}

var goodForTheJob = ( ship: Containership ) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob ( falcon ) ? 'yes': 'no'}`)
