const { Stage } = require('./models/stage');
const { RoverRobotic } = require('./models/robotic-rover');
const { ExplorationRovers } = require('./core/exploration.business');

const {Guid} = require('js-guid')

let run = () => {
  let stage = new Stage({ x: 5, y: 5 });
  let rovers = [
    new RoverRobotic(`Rover Rob ${Guid.newGuid()}`, { x: 1, y: 2 }, 'N', 'LMLMLMLMM'),
    new RoverRobotic(`Rover Rob ${Guid.newGuid()}`, { x: 3, y: 3 }, 'E', 'MMRMMRMRRM'),
  ];
  let exploration = new ExplorationRovers(stage, rovers);

  exploration.moverRovers();
};

run();
