var palm = /** @class */ (function () {
    function palm(size) {
        this.size = size;
    }
    palm.prototype.render = function () {
        console.log("🌴 size = " + this.size);
    };
    return palm;
}());
var spruce = /** @class */ (function () {
    function spruce(size) {
        this.size = size;
    }
    spruce.prototype.render = function () {
        console.log("🌲 size = " + this.size);
    };
    return spruce;
}());
var noel = /** @class */ (function () {
    function noel(size) {
        this.size = size;
    }
    noel.prototype.render = function () {
        console.log("🎄 size = " + this.size);
    };
    return noel;
}());
var oak = /** @class */ (function () {
    function oak(size) {
        this.size = size;
    }
    oak.prototype.render = function () {
        console.log("🌳 size = " + this.size);
    };
    return oak;
}());
var trees = [];
trees.push(new noel(10));
trees.push(new oak(2));
trees.push(new spruce(5));
trees.push(new palm(7));
for (var i = 0; i < trees.length; i++) {
    trees[i].render();
}
//# sourceMappingURL=tree.js.map