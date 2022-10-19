interface Attacker {
    attack: () => void;
}


export class Weapon implements Attacker {
    //type
    damage
    range

    constructor(/*type: string,*/ damage: number, range: number) {
        //this.type = type
        this.damage = damage
        this.range = range
    }

    // нарушение принципа open closed
    /* attack() {
         if (this.type === 'sword') {
             console.log(`Удар мечом с уроном ${this.damage}`)
         }
         if (this.type === 'crossbow') {
             console.log(`Выстрел из арбалета с уроном ${this.damage}`)
         }
     }*/

    attack() {

    }
}

export class Sword extends Weapon {
    attack() {
        console.log(`Удар мечом с уроном ${this.damage}`)
    }
}

export class Crossbow extends Weapon {
    attack() {
        console.log(`Выстрел из арбалета с уроном ${this.damage}`)
    }
}

export class Character {
    name
    weapon

    constructor(name: string, weapon: Weapon,) {
        this.name = name
        this.weapon = weapon
    }

    changeWeapon(newWeapon: Weapon) {
        this.weapon = newWeapon
    }

    attack() {
        this.weapon.attack();
    }
}