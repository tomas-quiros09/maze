scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    tiles.placeOnTile(null, tiles.getTileLocation(0, 0))
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles29, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    Lvl_2 = true
})
let Lvl_2 = false
music.play(music.stringPlayable("C5 - G G G F E D ", 380), music.PlaybackMode.LoopingInBackground)
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
game.onUpdate(function () {
	
})
