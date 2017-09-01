class BulletUp extends GameImage {
    constructor(game) {
        super(game, 'bulletUp')
        this.setup()
    }

    setup() {
        this.speedX = 3
        this.speedY = 2
        this.x = randomBetween(0, 360)
        this.y = randomBetween(0, 1)
    }

    update() {
        if (this.x < 0 || this.x > 350 - this.w) {
            this.speedX *= -1
        }
        if (this.y < 0 || this.y > 600 - this.h) {
            this.remove()
        }
        this.x += this.speedX
        this.y += this.speedY
        if (this.collide(this.scene.player)) {
            if (this.scene.player.firepower < this.scene.player.firepowers) {
                this.scene.player.firepower += 1
            }
            this.remove()
        }
    }

    collide(other) {
        var a = this
        var b = other

        if (a.y + a.h < b.y || a.x > b.x + b.w || a.y > b.y + b.h || a.x + a.w < b.x) {
            return false
        } else {
            return true
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
