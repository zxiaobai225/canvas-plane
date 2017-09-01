class Game {
    constructor(images, runCallback) {
        this.images = images
        this.runCallback = runCallback
        window.fps = 60
        this.actions = {}
        this.keydowns = {}
        this.scene = null

        window.addEventListener('keydown', event => {
            this.keydowns[event.keyCode] = true
        })

        window.addEventListener('keyup', event => {
            this.keydowns[event.keyCode] = false
        })

        this.setup()
        this.init()
    }

    // 单例模式
    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }

    setup(){
        this.difficulty = 1
        this.score = 0
        this.pause = false
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')
    }

    drawImage(img) {
        this.context.drawImage(img.texture, img.x, img.y)
    }

    registerAction(key, callback) {
        this.actions[key] = callback
    }

    removeAction(key) {
        for (var k in this.actions) {
            if (k === key) {
                delete this.actions[key]
            }
        }
    }

    update() {
        this.scene.update()
    }

    draw() {
        this.scene.draw()
    }

    runloop() {
        var g = this
        let actions = Object.keys(g.actions)
        for (let i = 0; i < actions.length; i++) {
            let key = actions[i]
            if (g.keydowns[key]) {
                g.actions[key]()
            }
        }
        g.update()
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        g.draw()
        setTimeout(function () {
            g.runloop()
        }, 1000 / window.fps)
    }

    textureByName(name) {
        var g = this
        var img = g.images[name]
        return img
    }

    runWithScene(scene) {
        var g = this
        g.scene = scene
        // 开始运行程序
        setTimeout(function () {
            g.runloop()
        }, 1000 / window.fps)
    }

    replaceScene(scene) {
        this.scene = scene
    }

    __start(scene) {
        this.runCallback(this)
    }

    init() {
        var g = this
        var loads = []
        var names = Object.keys(g.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function () {
                g.images[name] = img
                loads.push(1)
                if (loads.length === names.length) {
                    g.__start()
                }
            }
        }
    }
}
