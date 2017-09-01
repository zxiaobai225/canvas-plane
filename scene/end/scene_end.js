class SceneEnd extends _Scene {
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
                    let scene = new SceneTitle(game)
                    game.replaceScene(scene)
                    t.click = false
                }
            }
        })
    }

    setup() {
        this.click = true
        this.score = new GameImage(this.game, 'score')

        this.end = new GameImage(this.game, 'restart')
        this.end.x = 120
        this.end.y = 240
    }

    draw() {
        let game = this.game
        game.drawImage(this.score)
        game.drawImage(this.end)

        // 历史最高
        // game.context.fillText('100000', 140, 210)
        // 最终得分
        // game.context.fillText('100000', 140, 440)
    }

    hasPoint(x, y) {
        var o = this.end
        var xIn = x >= o.x && x <= o.x + o.w
        var yIn = y >= o.y && y <= o.y + o.h
        return xIn && yIn
    }
}