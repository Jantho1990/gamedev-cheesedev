import pop from '../pop'
import Cheese from './entities/Cheese'
import Mouse from './entities/Mouse'
import Container from '../pop/Container';

const { Game, KeyControls, entity, math } = pop

const game = new Game(640, 320)
const { scene, w, h } = game

const relocate = e => {
  const { pos } = e
  pos.x = math.rand(w)
  pos.y = math.rand(h)
}

const mouse = scene.add(new Mouse(new KeyControls()))
relocate(mouse)
entity.addDebug(mouse)

const cheeses = scene.add(new Container())
for (let i = 0; i < 10; i++) {
  const cheese = cheeses.add(new Cheese())
  relocate(cheese)
  entity.addDebug(cheese)
}

game.run(() => {
  cheeses.map(cheese => {
    // Check for collisions with cheese
    if (entity.hit(mouse, cheese)) {
      relocate(cheese)
    }
  })
})