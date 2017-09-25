var Ninja = /** @class */ (function () {
    function Ninja(hp, dmg) {
        this.hpMax = hp;
        this.hp = hp;
        this.dmg = dmg;
    }
    Ninja.prototype.att = function (f) {
        f.setLife(-this.dmg);
    };
    Ninja.prototype.heal = function (f) {
        f.setLife(this.dmg);
    };
    Ninja.prototype.setLife = function (life) {
        this.hp += life;
        if (this.hp < 0) {
            this.hp = 0;
        }
        else if (this.hp > this.hpMax) {
            this.hp = this.hpMax;
        }
    };
    return Ninja;
}());
var Spartiate = /** @class */ (function () {
    function Spartiate(hp, dmg) {
        this.hpMax = hp;
        this.hp = hp;
        this.dmg = dmg;
    }
    Spartiate.prototype.att = function (f) {
        f.setLife(-this.dmg);
    };
    Spartiate.prototype.heal = function (f) {
        f.setLife(this.dmg);
    };
    Spartiate.prototype.setLife = function (life) {
        this.hp += life;
        if (this.hp < 0) {
            this.hp = 0;
        }
        else if (this.hp > this.hpMax) {
            this.hp = this.hpMax;
        }
    };
    return Spartiate;
}());
var Personne = /** @class */ (function () {
    function Personne() {
    }
    Personne.prototype.eat = function () {
        console.log("miam miam je mange !!!");
    };
    return Personne;
}());
var n = new Ninja(12, 6);
var sp = new Spartiate(42, 2);
var p = new Personne();
var fighter = [n, sp];
//# sourceMappingURL=index.js.map