class EnemyBullet extends GameImage {
    constructor(game) {
        super(game, 'bullet1')
        this.setup()
    }

    setup() {
        this.speed = 3
    }

    update() {
        if (this.y > 610) {
            this.remove()
            return
        }
        this.y += this.speed
        this.kill()
    }

    kill() {
        var b = this
        var p = b.scene.player
        if (p.collide(b)) {
            var end = new SceneEnd(p.game)
            p.game.replaceScene(end)
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
