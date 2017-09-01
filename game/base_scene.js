class _Scene {
    constructor(game) {
        this.game = game
        this.element = []
    }

    addElement(image) {
        image.scene = this
        this.element.push(image)
    }

    draw() {
        for (var i = 0; i < this.element.length; i++) {
            var e = this.element[i]
            e.draw()
        }
    }

    update() {
        for (var i = 0; i < this.element.length; i++) {
            var e = this.element[i]
            e.update()
        }
    }
}