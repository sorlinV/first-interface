interface Fighter {
    att(f:Fighter);
    heal(f:Fighter);
    setLife(n:number);
}

class Ninja {
    private hpMax:number;
    private hp:number;
    private dmg:number;
    constructor (hp:number, dmg:number) {
        this.hpMax = hp;
        this.hp = hp;
        this.dmg = dmg;
    }

    att(f:Fighter){
        f.setLife(-this.dmg);
    }
    heal(f:Fighter){
        f.setLife(this.dmg);
    }
    setLife(life:number){
        this.hp += life;
        if (this.hp < 0) {
            this.hp = 0;
        } else if (this.hp > this.hpMax) {
            this.hp = this.hpMax;
        }
    }
}

class Spartiate {
    private hpMax:number;
    private hp:number;
    private dmg:number;
    constructor (hp:number, dmg:number) {
        this.hpMax = hp;
        this.hp = hp;
        this.dmg = dmg;
    }

    att(f:Fighter){
        f.setLife(-this.dmg);
    }
    heal(f:Fighter){
        f.setLife(this.dmg);
    }
    setLife(life:number){
        this.hp += life;
        if (this.hp < 0) {
            this.hp = 0;
        } else if (this.hp > this.hpMax) {
            this.hp = this.hpMax;
        }
    }
}
class Personne {
    eat() {
        console.log("miam miam je mange !!!");
    }
}

let n = new Ninja(12, 6);
let sp = new Spartiate(42, 2);
let p = new Personne();
let fighter:Fighter[] = [n, sp];

