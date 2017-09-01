class Scene extends _Scene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup() {
        this.score = 0
        var game = this.game
        game.setup()

        this.numberOfEnemies = 15
        this.bg = new GameImage(game, 'sky')
        this.bomb = new Bomb(game)
        this.player = new Player(game)

        this.addElement(this.bg)
        this.addElement(this.bomb)
        this.addElement(this.player)

        this.addEnemies()
    }

    addEnemies() {
        var es = []
        for (var i = 0; i < this.numberOfEnemies; i++) {
            var e = new Enemy(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemies = es
    }

    setupInputs() {
        var g = this.game
        var s = this

        g.registerAction(37, function () {
            s.player.moveLeft()
        })
        g.registerAction(39, function () {
            s.player.moveRight()
        })
        g.registerAction(38, function () {
            s.player.moveUp()
        })
        g.registerAction(40, function () {
            s.player.moveDown()
        })

        // 导弹发射
        g.registerAction(32, function () {
            s.bomb.fire()
        })

        // 手机端拖动事件
        var enableDrag = false
        g.canvas.addEventListener('touchstart', function () {
            enableDrag = true
        })
        g.canvas.addEventListener('touchmove', function (event) {
            var x = event.changedTouches[0].clientX
            var y = event.changedTouches[0].clientY
            if (enableDrag) {
                if (-5 < x && x < 355 - s.player.w) {
                    s.player.x = x
                }
                if (-5 < y && y < 605 - s.player.h) {
                    s.player.y = y
                }
            }
        })

        g.canvas.addEventListener('click', function (event) {
            var x = event.offsetX
            var y = event.offsetY
            if (s.bomb.hasPoint(x, y)) {
                s.bomb.fire()
            }
        })
    }

    draw() {
        super.draw()
        this.game.context.fillText('X ' + this.bomb.count, 40, 585);
        this.game.context.fillText("分数: " + this.score, 5, 15);
        this.game.context.fillText("难度: " + this.game.difficulty, 305, 15);
    }

    update() {
        if (this.game.pause) {
            return
        }
        super.update()
    }
}
