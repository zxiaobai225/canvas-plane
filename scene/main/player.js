class Player extends GameImage {
    constructor(game) {
        super(game, 'player')
        this.setup()
    }

    setup() {
        this.speed = 5
        this.x = 150
        this.y = 500
        this.cooldown = 0
        this.firepower = 1
        this.firepowers = 5
    }

    update() {
        if (this.cooldown > 0) {
            this.cooldown--
        }
        var p = this
        p.fire()
        var enemies = this.scene.enemies
        for (var e of enemies) {
            if (e.collide(p)) {
                var end = new SceneEnd(p.game)
                p.game.replaceScene(end)
            }
        }
    }

    fire() {
        if (this.cooldown === 0) {
            this.cooldown = 10
            this.fired(this.firepower)
        }
    }

    fired(firepower) {
        if (firepower === 2) {
            this.fire2()
        } else if (firepower === 3) {
            this.fire3()
        } else if (firepower === 4) {
            this.fire4()
        } else if (firepower === 5) {
            this.fire5()
        } else {
            this.fire1()
        }
    }

    fire1() {
        let x = this.x + this.w / 2 - 5
        let y = this.y
        let b = new Bullet(this.game)
        b.x = x
        b.y = y
        this.scene.addElement(b)
    }

    // 懒得封装了
    fire2() {
        let x1 = this.x + this.w / 2 - 10
        let x2 = this.x + this.w / 2
        let y = this.y
        let b1 = new Bullet(this.game)
        let b2 = new Bullet(this.game)
        b1.x = x1
        b2.x = x2
        b1.y = b2.y = y
        this.scene.addElement(b1)
        this.scene.addElement(b2)
    }

    fire3() {
        this.fire2()
        let x1 = this.x + this.w / 2 - 18
        let x2 = this.x + this.w / 2 + 8
        let y = this.y
        let b1 = new Bullet(this.game)
        let b2 = new Bullet(this.game)
        b1.x = x1
        b2.x = x2
        b1.y = b2.y = y
        this.scene.addElement(b1)
        this.scene.addElement(b2)
    }

    fire4() {
        this.fire3()
        let x1 = this.x + this.w / 2 - 26
        let x2 = this.x + this.w / 2 + 16
        let y = this.y + 5
        let b1 = new Bullet(this.game)
        let b2 = new Bullet(this.game)
        b1.x = x1
        b2.x = x2
        b1.speedX = -0.5
        b2.speedX = 0.5
        b1.y = b2.y = y
        this.scene.addElement(b1)
        this.scene.addElement(b2)
    }

    fire5() {
        this.fire4()
        let x1 = this.x + this.w / 2 - 34
        let x2 = this.x + this.w / 2 + 24
        let y = this.y + 8
        let b1 = new Bullet(this.game)
        let b2 = new Bullet(this.game)
        b1.x = x1
        b2.x = x2
        b1.speedX = -0.5
        b2.speedX = 0.5
        b1.y = b2.y = y
        this.scene.addElement(b1)
        this.scene.addElement(b2)
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

    moveLeft() {
        if (this.x > 0) {
            this.x -= this.speed
        }
    }

    moveRight() {
        if (this.x < 400 - this.w) {
            this.x += this.speed
        }
    }

    moveUp() {
        if (this.y > 0) {
            this.y -= this.speed
        }
    }

    moveDown() {
        if (this.y < 600 - this.h) {
            this.y += this.speed
        }
    }
}
