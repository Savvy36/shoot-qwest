namespace SpriteKind {
    export const Projectile2 = SpriteKind.create()
    export const mysprite = SpriteKind.create()
    export const REWARD = SpriteKind.create()
    export const LAVA = SpriteKind.create()
    export const mySprite5 = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile.destroy()
    mySprite.destroy()
    projectile2.destroy(effects.halo, 5000)
    mySprite2 = sprites.create(img`
        ...............ff.......
        .............ff2ffff....
        ............ff2feeeeff..
        ...........ff22feeeeeff.
        ...........feeeeffeeeef.
        ..........fe2222eefffff.
        ..........f2effff222efff
        ..........fffeeeffffffff
        ..........fee44fbe44efef
        ...........feddfb4d4eef.
        ..........c.eeddd4eeef..
        ....ccccccceddee2222f...
        .....dddddcedd44e444f...
        ......ccccc.eeeefffff...
        ..........c...ffffffff..
        ...............ff..fff..
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Player)
    projectile3 = sprites.createProjectileFromSprite(assets.image`SWORD 2`, mySprite2, -60, 0)
    projectile3.setPosition(139, 61)
    mySprite2.setPosition(139, 61)
    controller.moveSprite(mySprite2)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        .............c..........
        ............cccccccc....
        ..........ccccddddddc...
        ............cccccccc....
        .............c..........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, mySprite, 60, 0)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    music.powerUp.play()
    game.over(true, effects.confetti)
    music.playMelody("C5 G B A F A C5 B ", 120)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.REWARD, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 1000)
    mySprite5 = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.Food)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile2, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.fire, 5000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    game.over(false)
})
let mySprite5: Sprite = null
let projectile3: Sprite = null
let mySprite2: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`knight`, SpriteKind.Player)
mySprite.setPosition(10, 53)
controller.moveSprite(mySprite)
info.setLife(1)
info.setScore(0)
let mySprite4 = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.REWARD)
mySprite4.setPosition(139, 61)
music.spooky.play()
let myEnemy = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ....7.fd11111111df......
    ...7..fd11111111df......
    ...7..fd11111111df......
    ...7..fddd1111dddff.....
    ...77.fbdbfddfbdbfcf....
    ...777fcdcf11fcdcfbf....
    ....77fffbdb1bdffcf.....
    ....fcb1bcffffff........
    ....f1c1c1ffffff........
    ....fdfdfdfffff.........
    .....f.f.f..............
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
myEnemy.setVelocity(0, 0)
myEnemy.setPosition(143, 55)
myEnemy.startEffect(effects.coolRadial, 5000)
myEnemy.setFlag(SpriteFlag.AutoDestroy, true)
game.onUpdateInterval(1000, function () {
    projectile2 = sprites.create(assets.image`EVILLLL`, SpriteKind.Enemy)
    projectile2.setPosition(88, 5)
    projectile2.setVelocity(0, 24)
    projectile2.setFlag(SpriteFlag.AutoDestroy, true)
})
forever(function () {
	
})
