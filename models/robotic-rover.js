const CARDINAL_POINTS = ['N', 'E', 'S', 'W'];
const MOVEMENTS = ['M', 'L', 'R'];

class RoverRobotic {
  constructor(name, point, direction, movements) {
    this.name = name;
    this.point = point;
    if (CARDINAL_POINTS.includes(direction)) {
      this.direction = direction;
    } else {
      console.error('Error Direction');
    }
    if (this.validateMovements(movements)) {
      this.movements = movements;
    } else {
      console.error('Error Moves');
    }
  }

  validateMovements(movements) {
    return movements.split('').every((currentMov) => MOVEMENTS.includes(currentMov));
  }

  changeDirection(movement) {
    let increment = movement === 'R' ? 1 : -1;
    let currentIndex = CARDINAL_POINTS.indexOf(this.direction);
    let finalIndex =
      currentIndex == 0 && increment == -1 ? CARDINAL_POINTS.length-1 : currentIndex + increment;
    this.direction = CARDINAL_POINTS[finalIndex % CARDINAL_POINTS.length];
  }

  explore() {
    this.movements.split('').forEach((movement) => {
      switch (movement) {
        case 'M':
          this.move();
          break;
        default:
          // right or left
          this.changeDirection(movement);
          break;
      }
    });
  }

  move() {
    switch (this.direction) {
      case 'N':
        this.point.y++;
        break;
      case 'E':
        this.point.x++;
        break;
      case 'W':
        this.point.x--;
        break;
      case 'S':
        this.point.y--;
        break;
      default:
        break;
    }
  }

  show() {
    console.log(
      `[Rover Robotic: Name: ${this.name}, Point (x,y) => (${this.point.x},${this.point.y}),  Direction: ${this.direction}]`
    );
  }
}

module.exports = {
  RoverRobotic,
};
