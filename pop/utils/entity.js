import math from './math'
import Rect from '../Rect'

export function addDebug(e) {
  e.children = e.children || []
  const bb = new Rect(e.w, e.h, { fill: 'hsla(0, 50%, 50%, 0.3)'})
  e.children.push(bb)
  if (e.hitBox) {
    const { x, y, w, h } = e.hitBox
    const hb = new Rect(w, h, { fill: 'hsla(0, 50%, 50%, 0.5)'})
    hb.pos.x = x
    hb.pos.y = y
    e.children.push(hb)
  }
  return e
}

export function center(entity) {
  const { pos, w, h } = entity
  return {
    x: pos.x + w / 2,
    y: pos.y + h / 2
  }
}

export function distance(a, b) {
  return math.distance(center(a), center(b))
}

export default {
  addDebug,
  center,
  distance
}