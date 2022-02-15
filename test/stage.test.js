const { Stage } = require('../models/stage');

test('Validate Stage', () => {
    let stage = new Stage({ x: 4, y: 3 });
    expect(stage.point.x).toEqual(4)
    expect(stage.point.y).toEqual(3)
});
