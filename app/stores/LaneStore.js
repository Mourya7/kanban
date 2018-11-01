import LaneActions from '../LaneActions.js';

export default class LaneStore {
  constructor() {
    this.lanes = [];
  }
  create(lane) {
    // if empty notes then default it to an empty array
    lane.notes = lane.notes || [];
    this.setState ({
      lanes : this.lanes.concat(lane);
    });
  }
}
