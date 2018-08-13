import pop from '../pop'
import Cheese from './entities/Cheese'
import Mouse from './entities/Mouse'

const { Game, KeyControls, math } = pop

const game = new Game(640, 320)
const { scene, w, h } = game

const a = scene.add(new Mouse(new KeyControls()))
const b = scene.add(new Cheese())

const relocate = e => {
  const { pos } = e
  pos.x = math.rand(w)
  pos.y = math.rand(h)
}

relocate(a)
relocate(b)

game.run(() => {
  // Bounding box detection
  if (
    a.pos.x + a.w >= b.pos.x && // Mouse right edge overlaps cheese left edge
    a.pos.x < b.pos.x + b.w && // Mouse left edge overlaps cheese right edge
    a.pos.y + a.h >= b.pos.y && // Mouse bottom edge overlaps cheese top edge
    a.pos.y < b.pos.y + b.h // Mouse top edge overlaps cheese bottom edge
  ) {
    // Hit!
    relocate(b)
  }
})