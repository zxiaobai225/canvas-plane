class Bomb extends GameImage {
    constructor(game) {
        super(game, 'bomb')
        this.setup()
    }

    setup() {
        this.x = 5
        this.y = 565
        this.count = 3
        this.cd = 0
    }

    update() {
        if (this.cd > 0) {
            this.cd--
        }
    }

    fire() {
        if (this.count > 0 && this.cd === 0) {
            var enemies = this.scene.enemies

            // slice拷贝一个新的数组,防止同时操作数组
            var es = enemies.slice()
            for (var e of es) {
                e.remove()
            }
            this.cd = 50
            this.count--
        }
    }

    hasPoint(x, y) {
        var o = this
        var xIn = x >= o.x && x <= o.x + o.w
        var yIn = y >= o.y && y <= o.y + o.h
        return xIn && yIn
    }
}
