class Enemy extends GameImage {
    constructor(game) {
        var type = randomBetween(0, 2)
        var name = 'enemy' + type
        super(game, name)
        this.type = type
        this.setup()
    }

    setup() {
        this.speed = randomBetween(this.game.difficulty + 1, this.game.difficulty + 2)
        this.x = randomBetween(0, 370)
        this.y = -randomBetween(100, 200)
        this.cooldown = randomBetween(50, 100)
        this.hp = this.type * 3
        this.getScore = (this.type + 1) * 100
        this.scoretoup = 20000
    }

    update() {
        if (this.scene.score - this.game.score >= this.scoretoup) {
            this.game.score += this.scoretoup
            this.game.difficulty = 1 + (this.game.score / this.scoretoup)
        }
        this.y += this.speed
        if (this.y > 600) {
            this.setup()
        } else {
            if (this.cooldown > 0) {
                this.cooldown--
            } else {
                // if (this.game.difficulty > 2) {
                //     this.fire()
                // }
            }
        }
    }

    fire() {
        if (this.cooldown === 0) {
            this.cooldown = randomBetween(500, 1000)
            let x = this.x + this.w / 2 - 3
            let y = -this.y
            let b = new EnemyBullet(this.game)
            b.x = x
            b.y = y
            this.scene.addElement(b)
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
        var e = this
        var enemies = e.scene.enemies
        var element = e.scene.element
        for (var i = 0; i < element.length; i++) {
            if (element[i] === e) {
                element.splice(i, 1)
                e.scene.addElement(new Boom(e.game, e))
                if (randomBetween(0, 1000) > 990) {
                    var bulletUp = new BulletUp(e.game)
                    e.scene.addElement(bulletUp)
                }
                if (randomBetween(0, 1000) > 990) {
                    var bombUp = new BombUp(e.game)
                    e.scene.addElement(bombUp)
                }
            }
        }
        for (var j = 0; j < enemies.length; j++) {
            if (enemies[j] === e) {
                enemies.splice(j, 1)
                var enemy = new Enemy(e.game)
                enemies.push(enemy)
                e.scene.addElement(enemy)
                e.scene.score += e.getScore
                return true
            }
        }
        return false
    }
}
