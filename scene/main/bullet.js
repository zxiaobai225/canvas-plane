class Bullet extends GameImage {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }

    setup() {
        this.speedX = 0
        this.speedY = 10
    }

    update() {
        if (this.y < -10) {
            this.remove()
            return
        }
        this.x += this.speedX
        this.y -= this.speedY
        this.kill()
    }

    kill() {
        var b = this
        var enemies = this.scene.enemies

        for (var e of enemies) {
            if (e.collide(b)) {
                if (e.hp > 0) {
                    e.hp--
                    b.remove()
                } else {
                    if (e.remove()) {
                        b.remove()
                    }
                }
            }
        }
    }

    remove() {
        var b = this
        var element = this.scene.element
        for (var i = 0; i < element.length; i++) {
            if (element[i] === b) {
                element.splice(i, 1)
                break
            }
        }
    }
}
