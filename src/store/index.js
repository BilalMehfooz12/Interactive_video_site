import { proxy } from "valtio";

const state = proxy({
  introVideoEnd: false,
  timelineId: null,
  womensData: [],
  selectedWomensData: [],
  selectedWomen: null,
  state: false,
  videoOn: false,
});

export default state;
