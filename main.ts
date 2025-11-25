scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    tiles.placeOnTile(null, tiles.getTileLocation(0, 0))
})
info.onScore(1, function () {
    Lvl_1 = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
	
})
let mySprite: Sprite = null
let Lvl_1 = 0
if (Lvl_1) {
    music.play(music.stringPlayable("C5 G G C5 G F E D ", 338), music.PlaybackMode.LoopingInBackground)
    mySprite = sprites.create(img`
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
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
    scene.cameraFollowSprite(mySprite)
    info.startCountdown(50)
}
