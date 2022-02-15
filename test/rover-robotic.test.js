const { RoverRobotic } = require('../models/robotic-rover');

test('Movement M', () => {
  let roverRobotic = new RoverRobotic('Rover Test', { x: 1, y: 3 }, 'N', 'M');
  roverRobotic.explore();
  expect(roverRobotic.direction).toEqual('N');
  expect(roverRobotic.point.x).toEqual(1);
  expect(roverRobotic.point.y).toEqual(4);
});

test('Movement MLM', () => {
  let roverRobotic = new RoverRobotic('Rover Test', { x: 1, y: 3 }, 'N', 'MLM');
  roverRobotic.explore();
  expect(roverRobotic.direction).toEqual('W');
  expect(roverRobotic.point.x).toEqual(0);
  expect(roverRobotic.point.y).toEqual(4);
});

test('Movement LR', () => {
  let roverRobotic = new RoverRobotic('Rover Test', { x: 1, y: 3 }, 'N', 'MLM');
  roverRobotic.explore();
  expect(roverRobotic.direction).toEqual('W');
  expect(roverRobotic.point.x).toEqual(0);
  expect(roverRobotic.point.y).toEqual(4);
});
