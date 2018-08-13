import pop from '../pop'
import Cheese from './entities/Cheese'
import Mouse from './entities/Mouse'

const { Game, KeyControls, entity, math } = pop

const game = new Game(640, 320)
const { scene, w, h } = game

const mouse = scene.add(new Mouse(new KeyControls()))
const cheese = scene.add(new Cheese())

const relocate = e => {
  const { pos } = e
  pos.x = math.rand(w)
  pos.y = math.rand(h)
}

relocate(mouse)
relocate(cheese)

entity.addDebug(mouse)
entity.addDebug(cheese)

game.run(() => {
  const { hitBox: aHit, pos: aPos } = mouse
  const a = {
    x: aHit.x + aPos.x,
    y: aHit.y + aPos.y,
    w: aHit.w,
    h: aHit.h
  }

  const { hitBox: bHit, pos: bPos } = cheese
  const b = {
    x: bHit.x + bPos.x,
    y: bHit.y + bPos.y,
    w: bHit.w,
    h: bHit.h
  }

  // Bounding box detection
  if (
    a.x + a.w >= b.x && // Mouse right edge overlaps cheese left edge
    a.x < b.x + b.w && // Mouse left edge overlaps cheese right edge
    a.y + a.h >= b.y && // Mouse bottom edge overlaps cheese top edge
    a.y < b.y + b.h // Mouse top edge overlaps cheese bottom edge
  ) {
    // Hit!
    relocate(cheese)
  }
})