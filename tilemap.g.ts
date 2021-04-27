// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010202020206090909090909090909020102020202050909090909090909090202020202020509090909090909040902020202020205090909090909090909020202020102080909090909090909030102020101020509090909090909040901010202010205090909090909090909010102020102050909090909090909090202020202020509090909090909040902010202020205090909090909090909020a0102020205090909090909090409020a010102020509090909090909090902020202020205090909090909090909020102010202050909090909090909090202020201020509090909090909090902020202020207090909090909090909`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.stairLarge,sprites.dungeon.darkGroundCenter,sprites.castle.tileGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
