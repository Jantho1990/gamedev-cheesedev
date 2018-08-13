import pop from '../../pop/'
const { Sprite, Texture } = pop

const texture = new Texture('res/img/cheese.png')

class Cheese extends Sprite {
  constructor() {
    super(texture)
    this.w = 74
    this.h = 50
  }
}

export default Cheese