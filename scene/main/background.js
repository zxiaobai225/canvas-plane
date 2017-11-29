class BackGround extends GameImage {
    constructor(game) {
        super(game, 'sky')
        this.setup()
    }

    setup() {
        this.skipCount = 0
    }

    update() {
        this.offset = 1
        this.skipCount += 1
        if (this.skipCount == 600){
            this.skipCount = 0
            this.offset = -600
        }
        this.y += this.offset        
    }
}
