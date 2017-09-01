class Boom extends GameImage {
    constructor(game, enemy) {
        super(game, 'boom' + enemy.type)
        this.enemy = enemy
        this.setup()
    }

    setup() {
        this.alive = 10
        this.x = this.enemy.x
        this.y = this.enemy.y
    }

    update() {
        this.alive--
        if (this.alive < 0) {
            this.remove()
        }
    }

    remove() {
        var element = this.scene.element
        for (var i = 0; i < element.length; i++) {
            if (element[i] === this) {
                element.splice(i, 1)
                break
            }
        }
    }
}
