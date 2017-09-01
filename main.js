var main = function () {
    var images = {
        player: 'images/player.png',
        player1: 'images/player1.png',
        sky: 'images/sky.png',
        enemy0: 'images/enemy0.png',
        enemy1: 'images/enemy1.png',
        enemy2: 'images/enemy2.png',
        bullet: 'images/bullet.png',
        bullet1: 'images/bullet1.png',
        bulletUp: 'images/bullet_up.png',
        boom0: 'images/boom0.png',
        boom1: 'images/boom1.png',
        boom2: 'images/boom2.png',
        bomb: 'images/bomb.png',
        bombUp: 'images/bomb_up.png',
        restart: 'images/restart.png',
        start: 'images/start.png',
        title: 'images/title.png',
        score: 'images/score.png',
    }

    var game = Game.instance(images, function (g) {
        var s = new SceneTitle(g)
        g.runWithScene(s)
    })

    window.addEventListener('keydown', function (event) {
    var key = event.key
    if (key === 'p') {
        game.pause = !game.pause
    }
})
}

main()