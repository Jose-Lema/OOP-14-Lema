function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

Player.prototype.gainXP = function (xp) {
    this.points += xp;

    if (xp >= 10) {
        this.lvl++;
        this.xp -= 10
    }
}

Player.prototype.describe = function () {
    return `${this.name} is level ${this.lvl} with ${this.xp} experience points`;
}