import { Bicycle } from "./Bicycle"
import { Frame } from "./frame";
import { Wheel } from "./wheel";
import { AluminumFrame } from "./AluminumFrame";
import { RoadWheel } from "./RoadWheel";

export class MyBike implements Bicycle {
  public frame: Frame;
  public wheel: Wheel;

  constructor() {
    this.frame = new AluminumFrame();
    this.wheel = new RoadWheel();
  }
}
