scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    tiles.placeOnTile(null, tiles.getTileLocation(0, 0))
})
info.onScore(1, function () {
    Lvl_2 = 0
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles29, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
let Lvl_2 = 0
music.play(music.stringPlayable("C5 G G C5 G F E D ", 338), music.PlaybackMode.LoopingInBackground)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 5 5 5 . . . . . 
    . . . . . . . 5 5 5 5 . . . . . 
    . . . . . . 5 5 5 5 5 5 . . . . 
    . . . . . . 5 5 5 5 5 5 . . . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
info.startCountdown(50)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
