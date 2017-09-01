class SceneTitle extends _Scene {
    constructor(game) {
        super(game)
        this.game = game
        this.setup()
        let t = this

        game.canvas.addEventListener('click', function (event) {
            var x = event.offsetX
            var y = event.offsetY
            if (t.click) {
                if (t.hasPoint(x, y)) {
                    let scene = new Scene(game)
                    game.replaceScene(scene)
                    t.click = false
                }
            }
        })
    }

    setup() {
        this.click = true
        this.bg = new GameImage(this.game, 'sky')

        this.title = new GameImage(this.game, 'title')
        this.title.x = 60
        this.title.y = 150

        this.start = new GameImage(this.game, 'start')
        this.start.x = 180
        this.start.y = 300
    }

    draw() {
        let game = this.game
        game.drawImage(this.bg)
        game.drawImage(this.title)
        game.drawImage(this.start)
    }

    hasPoint(x, y) {
        var o = this.start
        var xIn = x >= o.x && x <= o.x + o.w
        var yIn = y >= o.y && y <= o.y + o.h
        return xIn && yIn
    }
}