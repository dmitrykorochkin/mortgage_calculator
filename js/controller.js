import * as Model from "./model.js";
import init from "./view/radioPrograms.js";

window.onload  = function() {
  const getData = Model.getData();
  init(getData);

};