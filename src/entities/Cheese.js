import pop from '../../pop/'
const { Sprite, Texture } = pop

const texture = new Texture('res/img/cheese.png')

class Cheese extends Sprite {
  constructor() {
    super(texture)
    this.w = 74
    this.h = 50,
    this.hitBox = {
      x: 2,
      y: 5,
      w: 70,
      h: 45
    }
  }
}

export default Cheese