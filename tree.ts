//🌲🌳🎄🌴
interface Renderer {
    render();
}

class palm {
    size:number;
    constructor (size:number) {
        this.size = size
    }
    render() {
        console.log("🌴 size = " + this.size);
    }
}

class spruce {
    size:number;
    constructor (size:number) {
        this.size = size
    }
    render() {
        console.log("🌲 size = " + this.size);
    }
}


class noel {
    size:number;
    constructor (size:number) {
        this.size = size
    }
    render() {
        console.log("🎄 size = " + this.size);
    }
}

class oak {
    size:number;
    constructor (size:number) {
        this.size = size
    }
    render() {
        console.log("🌳 size = " + this.size);
    }
}

let trees:Renderer[] = [];
trees.push(new noel(10));
trees.push(new oak(2));
trees.push(new spruce(5));
trees.push(new palm(7));

for(let i = 0; i < trees.length; i++) {
    trees[i].render();
}