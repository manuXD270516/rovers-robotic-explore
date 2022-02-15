class ExplorationRovers {
  constructor(stage, roversRobotic) {
    this.stage = stage;
    this.roversRobotic = roversRobotic;
  }

  moverRovers() {
    this.roversRobotic.forEach((rover) => {
      rover.explore();
      if (this.stage.point.x >= rover.point.x && this.stage.point.y >= rover.point.y) {
        rover.show();
      } else {
        console.error('Current Rover out range points');
        //break;
      }
    });
  }
}

module.exports = {
  ExplorationRovers,
};
