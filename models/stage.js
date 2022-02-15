//const LOWER_LIMIT_POINT = { x: 0, y: 0 };
const UPPER_LIMIT_POINT = { x: 20, y: 20 };

class Stage {
  constructor(point) {
    if (UPPER_LIMIT_POINT.x >= point.x && UPPER_LIMIT_POINT.y >= point.y) {
        this.point = point;
    } else {
      console.log('Limits points out range');
    }
  }
}

module.exports = {
    Stage
};

