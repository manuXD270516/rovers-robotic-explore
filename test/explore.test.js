const { Stage } = require('../models/stage');
const { RoverRobotic } = require('../models/robotic-rover');
const { ExplorationRovers } = require('../core/exploration.business');

const { Guid } = require('js-guid');

test('Rovers Robotic Exploring', () => {
  let stage = new Stage({ x: 5, y: 5 });
  let rovers = [
    new RoverRobotic(`Rover Rob ${Guid.newGuid()}`, { x: 1, y: 2 }, 'N', 'LMLMLMLMM'),
    new RoverRobotic(`Rover Rob ${Guid.newGuid()}`, { x: 3, y: 3 }, 'E', 'MMRMMRMRRM'),
  ];
  let exploration = new ExplorationRovers(stage, rovers);

  exploration.moverRovers();

  expect(exploration.roversRobotic[0].point.x).toEqual(1);
  expect(exploration.roversRobotic[0].point.y).toEqual(3);
  expect(exploration.roversRobotic[0].direction).toEqual('N');

  expect(exploration.roversRobotic[1].point.x).toEqual(5);
  expect(exploration.roversRobotic[1].point.y).toEqual(1);
  expect(exploration.roversRobotic[1].direction).toEqual('E');
});


